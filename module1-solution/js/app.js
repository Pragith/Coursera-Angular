// (function(){
//   angular.module('LunchCheck', [])
//   .controller('LunchCheckController', LunchCheckControllerFn)
//
//   LunchCheckControllerFn.$inject = ['$scope','$filter'];
//   function LunchCheckControllerFn($scope, $filter){
//     $scope.lunchText = '';
//     $scope.replyMsg = '';
//
//     $scope.validateLunchText = function(){
//       itemCount = $scope.lunchText.split(',').length;
//       if ($scope.lunchText != ''){
//         if (itemCount <= 3){
//           $scope.replyMsg = 'Enjoy!'
//         }
//         else if (itemCount > 3){
//           $scope.replyMsg = 'Too much!'
//         }
//       }
//       else{
//         $scope.replyMsg = 'Please enter data first!'
//       }
//     }
//   }
// })();
!function(){function a(a,b){a.lunchText="",a.replyMsg="",a.validateLunchText=function(){itemCount=a.lunchText.split(",").length,""!=a.lunchText?itemCount<=3?a.replyMsg="Enjoy!":itemCount>3&&(a.replyMsg="Too much!"):a.replyMsg="Please enter data first!"}}angular.module("LunchCheck",[]).controller("LunchCheckController",a),a.$inject=["$scope","$filter"]}();
