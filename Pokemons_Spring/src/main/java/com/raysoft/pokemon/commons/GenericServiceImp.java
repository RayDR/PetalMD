package com.raysoft.pokemon.commons;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public abstract class GenericServiceImp<T, ID extends Serializable> implements GenericServiceAPI<T, ID> {

	@Override
	public T save(T entity) {
		return getRepository().save(entity);
	}

	@Override
	public void delete(ID id) {
		getRepository().deleteById(id);
	}

	@Override
	public T get(ID id) {
		Optional<T> pokedex = getRepository().findById(id);
		if ( pokedex.isPresent() )
			return pokedex.get();
		return null;
	}

	@Override
	public List<T> getAll() {
		List<T> pokedex = new ArrayList<>();
		getRepository().findAll().forEach(pokemon -> pokedex.add(pokemon));
		return pokedex;
	}
	
	public abstract CrudRepository<T, ID> getRepository();

}
