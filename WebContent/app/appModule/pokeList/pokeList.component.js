angular.module('appModule')
.component('pokeList', {
	templateUrl : 'app/appModule/pokeList/pokeList.component.html',
  controller : function(pokemonService) {
	  
	  
    var vm = this;
    // 1
    vm.pokemons = [];
    
    vm.selected = null;
    
    vm.selectedType = 'all';
    
    vm.types = [
    	  'all',
    	  'normal',
    	  'poison',
    	  'water',
    	  'fighting',
    	  'fire',
    	  'bug',
    	  'flying',
    	  'electric',
    	  'ground',
    	  'rock',
    	  'psychic',
    	  'ghost',
    	  'dragon'
    	];
    
    var generateId = function() {
        return vm.todos[vm.pokemons.length-1].id + 1;
    }
         
         pokemonService.index()
     		.then(function(response){
     			console.log(response);
     			console.log(response.data);
     			vm.pokemons = response.data;
     			console.log(vm.pokemons);
     		})
     		
     		vm.newPokemon = function(poke){
        	 pokemonService.create(poke)
        	 	.then(function(response){
        	 		console.log(respnse)
        	 	})
         }

//    // 2
//    $http({
//      method : 'GET',
//      url : 'http://52.25.225.137:8080/pokemon/data/poke?sorted=true'
//    })
//    // 3
//    .then(function(response) {
//    	console.log(response)
//      vm.pokemons = response.data;
//    })
//    .catch(console.error);
  },
  controllerAs : 'vm'
});