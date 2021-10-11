package com.raysoft.pokemon.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.raysoft.pokemon.commons.GenericServiceImp;
import com.raysoft.pokemon.model.Pokemon;
import com.raysoft.pokemon.repository.PokemonDao;
import com.raysoft.pokemon.service.PokemonService;

@Service
public class PokemonServiceImp extends GenericServiceImp<Pokemon, Long> implements PokemonService{

	@Autowired
	private PokemonDao pokemonDao;
	
	@Override
	public CrudRepository<Pokemon, Long> getRepository() {
		return pokemonDao;
	}
}
