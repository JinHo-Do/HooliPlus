angular.module('fabSpeedDialDemoBasicUsage', ['ngMaterial'])
    .controller('LoginCtrl', function($scope, $rootScope) {
      $scope.isOpen = false;
      $scope.selectedMode = 'md-fling';
      $scope.selectedDirection = 'down';
    });
