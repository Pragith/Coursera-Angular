(function(){

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingControllerFn)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingControllerFn)


  ToBuyShoppingControllerFn.$inject = ['$scope'];
  AlreadyBoughtShoppingControllerFn.$inject = ['$scope','$filter'];


  function ToBuyShoppingControllerFn($scope){
      $scope.buy_items = [
        { name: 'Cookies', quantity: '10' },
        { name: 'Chocolates', quantity: '7' },
        { name: 'Milk', quantity: '5' },
        { name: 'Bread', quantity: '3' },
        { name: 'Chips', quantity: '15' }
      ]

      $scope.addToBoughtList = function(item_index){

        console.log($scope.buy_items[item_index].name)

        // Remove from to-buy list
        $scope.buy_items.splice(item_index, 1)

        // Show this message if to-buy list is empty
        if ($scope.buy_items.length == 0){
          $scope.emptyMessage = 'Everything is bought!'
        }
      }
  }

  function AlreadyBoughtShoppingControllerFn($scope, $filter){
      $scope.bought_items = []
  }


})();
