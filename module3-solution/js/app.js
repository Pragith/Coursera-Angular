// http://davids-restaurant.herokuapp.com/categories.json
// http://davids-restaurant.herokuapp.com/menu_items.json
// http://davids-restaurant.herokuapp.com/menu_items.json?category=B

(function(){

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)


  NarrowItDownController.$inject = ['MenuSearchService'];
  MenuSearchService.$inject = ['$http'];


  function FoundItemsDirective(){
    return {
      template: 'foundItemsTemplate.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'narrow',
      bindToController: true
    }
  }

  function NarrowItDownDirectiveController(){
    narrow.getResults = function(){
      found = MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
      found.then(function (result){
        if (narrow.searchTerm == '' || result.length == 0){
          narrow.errorMsg = 'Nothing found!'
        }
        else{
          narrow.foundItems = result
        }
      }).catch(function (error){
        console.log('error')
      })
    }
  }


  function NarrowItDownController(MenuSearchService){
      narrow = this

      narrow.removeItem = function(index){
        return MenuSearchService.removeItem(index)
      }
  }


  function MenuSearchService($http){
    service = this
    foundItems = []

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
                foundItems.push(data[i])
            }
          }
          // return processed items
        }
        return foundItems
      })
    }

    service.removeItem = function(index){
      return foundItems.splice(index, 1)
    }
  }

})();
