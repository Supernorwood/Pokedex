angular.module('appModule')
.filter('pokeType', function(){
	return function(pokemons, sortType){
		  var results = [];
		  
		  if(sortType == 'all') return pokemons;
	
		  pokemons.forEach(function(pokemon, idx, array){
//		console.log(pokemon)
			  pokemon.types.forEach(function(type){
		if(type.name === sortType){
			results.push(pokemon);
		}
	  });
	});
	return results;
	}
})