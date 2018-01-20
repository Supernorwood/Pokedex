angular.module('appModule')
.factory('productService', function() {
  var service = {};

  // private
  var products = [
      {
          id : 1,
          task : 'Go round mums',
          description : '',
          completed : true
        },
        {
          id : 2,
          task : 'Get Liz back',
          description : '',
          completed : false
        },
        {
          id : 3,
          task : 'Sort life out',
          description : '',
          completed :  false
        }
  ];

  // public
  service.index = function() {
    return products;
  };

  service.create = function(product) {
    products.push(product);
  };

  return service;
})


angular.module('appModule')
  .component('productComponent', {
  templateUrl : 'app/appModule/product.service.html',

  // 1
  controller : function(productService) {
    var vm = this;

    // 2
    vm.products = [];

    // 3
    vm.products = productService.index();

    // 4
    vm.addProduct = function(poke) {
      // vm.pokemons.push(poke);
      productService.create(poke);
      vm.products = pService.index();
    };
  },
  controllerAs : 'vm'
})