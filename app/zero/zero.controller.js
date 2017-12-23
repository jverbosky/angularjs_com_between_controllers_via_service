'use strict';

myModule.controller(
  'ControllerZero',
  ['$scope', 'routeMessage', ControllerZero]  // dependencies in array for minification
);

function ControllerZero($scope, routeMessage) {

  $scope.handleClick = function(msg) {

    console.log("ControllerZero msg: ", msg);
    routeMessage.prepForBroadcast(msg);
  };
      
  $scope.$on('handleBroadcast', function() {
    $scope.message = routeMessage.message;
  });        
}