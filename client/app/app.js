angular.module('HooliPlus', [
  'fabSpeedDialDemoBasicUsage',
  'HooliPlus.auth',
  'HooliPlus.main',
  'HooliPlus.services',
  'HooliPlus.content',
  'ngMaterial',
  'ngRoute',
  'ngMessages'
  ])

.config(function ($routeProvider, $httpProvider, $locationProvider) {
  $routeProvider

    // index.html 라우트
    .when('/', {
      templateUrl: 'app/index/index.html', // 기본 레이아웃
      controller: 'MainController'
    })
    .when('/', {
      templateUrl: 'app/content/content.html',
      controller: 'ContentController'
    })
    .otherwise({
      redirectTo: '/'
    })
    
  
    // 이후 다른 라우트 자리 들

  $locationProvider.hashPrefix('');
  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  // 이게 $httpInterceptor 입니다.
  // 보내지는 모든 요청을 멈추고 
  // 유저의 토큰이 로컬저장소에 있는지 확인합니다.
  // 이후 토큰을 요청 header에 포함시켜 서버에서 검사하도록 합니다.
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.shortly');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  // Angular, 서비스 및 컨트롤러가 방금 등록되었고 앱이 준비되어 
   // 실행 단계 안에 있습니다.
   // 그러나 사용자가 권한을 먼저 확인하려합니다.
   // Angular가 경로를 변경하기 전에 대기합니다.
   // 경로를 변경하면 localstorage에서 토큰을 찾습니다.
   // 그 토큰이 실제 사용자인지 또는 만료되지 않았는지 확인하기 위해 서버에 보냅니다.
   // 유효하지 않은 경우 signin / signup으로 다시 리디렉션합니다.
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});

