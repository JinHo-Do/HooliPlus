angular.module('HooliPlus.services', [])
.factory('Content', function ($http, $location, $window) {
  
  var getAllContent = function (data) {
    return $http({
      method: 'GET',
      url: '/api/posts',
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var postData = function (data) {
    return $http({
      method: 'POST',
      url: '/api/posts',
      data: data
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getAllContent: getAllContent,
    postData: postData
  };
})
.factory('Auth', function ($http, $location, $window) {
  // 이 Auth 서비스를 만지지 마시오 !!!
  // 사용자 인증을 담당합니다.
  // 사용자의 사용자 이름과 암호를 서버에서 JWT로 교환합니다.
  // JWT는 localStorage에 'com.shortly'로 저장됩니다.
  // Signing / Signup을 열고 devtools를 열고, resources를 클릭 한 다음,
  // localStorage를 순서대로 열면 서버에서 토큰을 볼 수 있습니다.
  
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.hooliplus');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.hooliplus');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
