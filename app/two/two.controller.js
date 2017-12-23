'use strict';

myModule.controller(
  'ControllerTwo',
  ['$scope', 'routeMessage', ControllerTwo]  // dependencies in array for minification
);

function ControllerTwo($scope, routeMessage) {
  $scope.$on('handleBroadcast', function() {
    $scope.message = 'TWO: ' + routeMessage.message;
  });
}