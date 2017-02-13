angular.module('HooliPlus.content', ['ngAnimate'])

.controller('ContentController', function ($scope, $interval, Content, $mdDialog) {
  $scope.data = {}
  $scope.user = {}

  $scope.addComment = function($event) {
    console.log('work!!');
  }

  var items = Content.getAllContent()
    .then(function(contents) {
      $scope.items = contents;
    })

  $scope.createPostButton = function(ev) {
    $mdDialog.show({
      // controller: ContentController,
      templateUrl: 'app/content/createNewPost.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };

  $scope.uploadPost = function(ev) {
    console.log($scope.user);
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

});

