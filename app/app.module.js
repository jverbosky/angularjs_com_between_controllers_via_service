// AngularJS - Communication Between Controllers

// This is an example of how to use a custom service
// to facilitate communication between multiple controllers
// using $rootscope as an event bus.

'use strict';

var myModule = angular.module('myModule', ['messageService']);

//---------------------------------------
// Inline code for service and controllers below
// - original version, rewritten as modular components
//---------------------------------------

// myModule.factory('mySharedService', function($rootScope) {
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

// myModule.controller(
//   'ControllerZero',
//   ['$scope', 'mySharedService', ControllerZero]  // dependencies in array for minification
// );

// function ControllerZero($scope, sharedService) {
//   $scope.handleClick = function(msg) {
//     sharedService.prepForBroadcast(msg);
//   };
      
//   $scope.$on('handleBroadcast', function() {
//     $scope.message = sharedService.message;
//   });        
// }

// myModule.controller(
//   'ControllerOne',
//   ['$scope', 'mySharedService', ControllerOne]  // dependencies in array for minification
// );

// function ControllerOne($scope, sharedService) {
//   $scope.$on('handleBroadcast', function() {
//     $scope.message = 'ONE: ' + sharedService.message;
//   });        
// }

// myModule.controller(
//   'ControllerTwo',
//   ['$scope', 'mySharedService', ControllerTwo]  // dependencies in array for minification
// );

// function ControllerTwo($scope, sharedService) {
//   $scope.$on('handleBroadcast', function() {
//     $scope.message = 'TWO: ' + sharedService.message;
//   });
// }

//---------------------------------------
// Original version - used angular-1.0.0rc9.js:
// per: https://stackoverflow.com/questions/29467339/how-to-call-a-function-from-another-controller-in-angularjs
// per: http://jsfiddle.net/simpulton/XqDxG/
//---------------------------------------

// var myModule = angular.module('myModule', []);

// myModule.factory('mySharedService', function($rootScope) {
//     var sharedService = {};
    
//     sharedService.message = '';

//     sharedService.prepForBroadcast = function(msg) {
//         this.message = msg;
//         this.broadcastItem();
//     };

//     sharedService.broadcastItem = function() {
//         $rootScope.$broadcast('handleBroadcast');
//     };

//     return sharedService;
// });

// function ControllerZero($scope, sharedService) {
//     $scope.handleClick = function(msg) {
//         sharedService.prepForBroadcast(msg);
//     };
        
//     $scope.$on('handleBroadcast', function() {
//         $scope.message = sharedService.message;
//     });        
// }

// function ControllerOne($scope, sharedService) {
//     $scope.$on('handleBroadcast', function() {
//         $scope.message = 'ONE: ' + sharedService.message;
//     });        
// }

// function ControllerTwo($scope, sharedService) {
//     $scope.$on('handleBroadcast', function() {
//         $scope.message = 'TWO: ' + sharedService.message;
//     });
// }

// ControllerZero.$inject = ['$scope', 'mySharedService'];

// ControllerOne.$inject = ['$scope', 'mySharedService'];

// ControllerTwo.$inject = ['$scope', 'mySharedService'];