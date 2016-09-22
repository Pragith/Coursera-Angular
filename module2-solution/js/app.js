(function(){

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingControllerFn)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingControllerFn)
  .service('ShoppingListService', ShoppingListService)


  ToBuyShoppingControllerFn.$inject = ['ShoppingListService'];
  AlreadyBoughtShoppingControllerFn.$inject = ['ShoppingListService'];


  function ToBuyShoppingControllerFn(ShoppingListService){
      shopping = this
      shopping.buy_items = ShoppingListService.viewItems()[0]
      shopping.addToBoughtList = function(item_index){
        ShoppingListService.buyItem(item_index)
        //shopping.item_count = (shopping.buy_items.length == 0 ? true : false)
      }
      shopping.item_count = shopping_service.shopping_counter
  }

  function AlreadyBoughtShoppingControllerFn(ShoppingListService){
      this.bought_items = ShoppingListService.viewItems()[1]
      this.item_count = !shopping_service.bought_counter
  }


  function ShoppingListService(){
    shopping_service = this

    shopping_items = [
        { name: 'Yaakov\'s Cookies', quantity: '10' },
        { name: 'Chocolates', quantity: '7' },
        { name: 'Milk', quantity: '5' },
        { name: 'Bread', quantity: '3' },
        { name: 'Chips', quantity: '15' }
    ]

    bought_items = []
    shopping_service.bought_counter = false

    shopping_service.buyItem = function(item_index){
      bought_items.push(shopping_items[item_index]) // Add to "Bought" list
      shopping_items.splice(item_index, 1) // Remove from "To Buy" list

      shopping_service.bought_counter = (bought_items.length == 1 ? false : true)
      shopping_service.shopping_counter = (shopping_items.length == 0 ? true : false)
      console.log('Bought length:', bought_items.length, shopping_service.bought_counter)
      console.log('Shopping length:', shopping_items.length, shopping_service.shopping_counter)
    }

    shopping_service.viewItems = function(){
      return [shopping_items,bought_items]
    }

  }

})();
