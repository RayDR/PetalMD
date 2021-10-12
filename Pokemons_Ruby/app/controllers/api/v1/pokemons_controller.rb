module Api
   module V1
      class PokemonsController < ApplicationController
         skip_before_action :verify_authenticity_token
         #before_action :authenticate, except: [ :index, :show ]         

         # Pokedex
         def index
            pokemons = Pokemon.order('id')
            render json: {
               status:  'success',
               message: 'Pokedex ready',
               data:    pokemons
            }, status: :ok
         end

         # Get Pokemon from ID
         def show
            pokemon = Pokemon.find(params[:id])
            render json: {
               status:  'success',
               message: 'Founded Pokemon',
               data:    pokemon
            }, status: :ok
         end

         # Insert Pokemon to Pokedex
         def create
            pokemon = Pokemon.new(pokemonData);
            if ( pokemon.save )
               render json: {
                  status:  'success',
                  message: 'New Pokemon registered',
                  data:    pokemon
               }, status: :ok
            else
               render json: {
                  status:  'failed',
                  message: 'Pokemon registration failed',
                  data:    pokemon.errors
               }, status: :unprocessable_entity
            end
         end

         # Update existing Pokemon
         def update
            pokemon = Pokemon.find(params[:id])
            if pokemon.update(pokemonData)
               render json: {
                  status:  'success',
                  message: 'Pokemon updated',
                  data:    pokemon
               }, status: :ok
            else
               render json: {
                  status:  'failed',
                  message: 'Pokemon update failed',
                  data:    pokemon.errors
               }, status: :unprocessable_entity
            end
         end

         # Delete Pokemon from Pokedex
         def destroy
            pokemon = Pokemon.find_by_id(params[:id])
            if ( pokemon.destroy )
               render json: {
                  status:  'success',
                  message: 'Pokemon removed from Pokedex',
                  data:    pokemon
               }, status: :ok
            else
               render json: {
                  status:  'failed',
                  message: 'Pokemon elimination failed',
                  data:    pokemon.errors
               }, status: :unprocessable_entity
            end
         end

         private 
         def pokemonData
            params.permit(:name, :type1, :type2, :total, :hp, :attack, :defense, :spatk, :spdef, :speed, :generation, :legendary)
         end

         # For authentication - not provided
         def authenticate
            authenticate_or_request_with_http_token do |token, options|
               User.find_by_id(token: token)
            end
         end

      end
   end
end