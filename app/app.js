'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.version',
  'ngMaterial'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view'});
}])

.controller('TitleController', ['$scope', '$location', function($scope, $location) {
  $scope.total_pages = [
    "Home", "Fisheye", "Dashboard", "Dom", "Force", "Circle"
  ];
  $scope.currentNavItem = 'page1';
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
}]);