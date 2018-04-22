(function(){


var products = ['powder', 'milk', 'bread', 'cakes'];

var searchVal = "bread";
function letters(value){

  return value.indexOf(searchVal)!== -1;

};

var filteredProducts = products.filter(letters);
angular.module("Git", [])
.controller('gitController', gitController)

gitController.$injest=['$scope'];
function gitController($scope){
  $scope.checkingWatcher = function(){
    console.log("Nr of watchers: ", $scope.$$watchersCount);
  };
  $scope.count = 0;
  $scope.prodList = products;
  $scope.filteredProdList = filteredProducts;
  console.log(filteredProducts);
};

})();

//(function(){})()
