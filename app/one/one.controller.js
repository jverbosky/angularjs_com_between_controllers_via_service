'use strict';

myModule.controller(
  'ControllerOne',
  ['$scope', 'routeMessage', ControllerOne]  // dependencies in array for minification
);

function ControllerOne($scope, routeMessage) {
  $scope.$on('handleBroadcast', function() {
    $scope.message = 'ONE: ' + routeMessage.message;
  });        
}