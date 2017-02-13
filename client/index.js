angular.module('HooliPlus.main', [])

.controller('MainController', function ($scope, $mdSidenav) {
	$scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');


    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
})
