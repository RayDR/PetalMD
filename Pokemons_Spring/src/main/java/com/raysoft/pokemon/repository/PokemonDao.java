package com.raysoft.pokemon.repository;

import org.springframework.data.repository.CrudRepository;

import com.raysoft.pokemon.model.Pokemon;

public interface PokemonDao extends CrudRepository<Pokemon, Long>{

}
