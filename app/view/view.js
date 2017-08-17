'use strict';

angular.module('myApp.view', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
})

.controller('ViewCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.d3charts = [
    "Fisheye", "Dashboard", "Dom", "Force", "Circle", "Cluster"
  ];

  $scope.changeUrl = function(item) {
    console.log(item);
    switch(item) {
      case 'Fisheye':
        $location.path('/view1');
        return;
      case 'Dashboard':
        $location.path('/view2');
        return;
      case 'Dom':
        $location.path('/view3');
        return;
      case 'Force':
        $location.path('/view4');
        return;
      case 'Circle':
        $location.path('/view5');
        return;
      case 'Cluster':
        $location.path('/view6');
        return;
      default:
        $location.path('/view');
        return;
    }
  };

  $scope.changeSrc = function(item) {
    switch(item) {
      case 'Fisheye':
        return '../img/fisheye-d3.png';
      case 'Dashboard':
        return '../img/dashboard-d3.png';
      case 'Dom':
        return '../img/dom-d3.png';
      case 'Force':
        return '../img/force-d3.png';
      case 'Circle':
        return '../img/circle-d3.png';
      case 'Circle':
        return '../img/cluster-d3.png';
      default:
        return '';
    }
  };
}]);