// http://davids-restaurant.herokuapp.com/categories.json
// http://davids-restaurant.herokuapp.com/menu_items.json
// http://davids-restaurant.herokuapp.com/menu_items.json?category=B

(function(){

  l = console.log

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)


  NarrowItDownController.$inject = ['MenuSearchService'];
  MenuSearchService.$inject = ['$http'];


  function FoundItemsDirective(){
    return {
      template: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    }
  }

  function NarrowItDownDirectiveController(){
    narrowd = this
    narrowd.items = narrowd.getResults()
  }


  function NarrowItDownController(MenuSearchService){
      narrow = this
      narrow.searchTerm = "rice"
      narrow.items = [];
      narrow.errorMsg = 'Nothing found!'

      narrow.getResults = function(){
        if (narrow.searchTerm == ''){
          narrow.items = []
          return;
        }
        found = MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
        found.then(function (result){
            narrow.items = result
        })
      }

      narrow.removeItem = function(index){
        return MenuSearchService.removeItem(index)
      }
  }


  function MenuSearchService($http){
    service = this
    items = []

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: 'GET',
        url: 'http://davids-restaurant.herokuapp.com/menu_items.json'
      })
      .then(function (result){
        data = result.data.menu_items
        if (searchTerm == ''){
          // No data entered!
        }
        else{
          for (i=0;i<data.length;i++){
            if (data[i].description.search(searchTerm) != -1){
              // process result and only keep items that match
                items.push(data[i])
            }
          }
          // return processed items
        }
        return items
      })
    }

    service.removeItem = function(index){
      return items.splice(index, 1)
    }
  }

})();
