'use strict';

messageService.factory(
  'routeMessage',
  routeMessage  // encapsulating in an array here causes an error
);

function routeMessage($rootScope) {

  var sharedService = {};
  
  sharedService.message = '';

  sharedService.prepForBroadcast = function(msg) {
    this.message = msg;
    this.broadcastItem();
  };

  sharedService.broadcastItem = function() {
    $rootScope.$broadcast('handleBroadcast');
  };

  return sharedService;
}

// --------------------------
// this variation works too
// --------------------------

// messageService.factory('routeMessage', function($rootScope) {
//   var sharedService = {};
  
//   sharedService.message = '';

//   sharedService.prepForBroadcast = function(msg) {
//     this.message = msg;
//     this.broadcastItem();
//   };

//   sharedService.broadcastItem = function() {
//     $rootScope.$broadcast('handleBroadcast');
//   };

//   return sharedService;
// });