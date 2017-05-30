'use strict';

angular.module('myApp.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', ['$scope', function($scope) {
  $scope.d3charts = [
    "Fisheye", "Dashboard", "Dom", "Force", "Circle"
  ];

  $scope.changeUrl = function(item) {
    switch(item) {
      case 'Fisheye':
        return '#!/view1';
      case 'Dashboard':
        return '#!/view2';
      case 'Dom':
        return '#!/view3';
      case 'force':
        return '#!/view4';
      case 'Circle':
        return '#!/view5';
      default:
        return '#!/view';
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
      default:
        return '';
    }
  };
}]);