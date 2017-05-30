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
    "fisheye", "dashboard", "dom", "force", "circle"
  ];

  $scope.changeUrl = function(item) {
    console.log(item);
    switch(item) {
      case 'fisheye':
        return '#!/view1';
      case 'dashboard':
        return '#!/view2';
      case 'dom':
        return '#!/view3';
      case 'force':
        return '#!/view4';
      case 'circle':
        return '#!/view5';
      default:
        return '#!/view';
    }
  }
}]);