import { RouteProp } from '@react-navigation/native';
import { Pokemon } from './pokemonTypes';

export type RootStackParamList = {
  Welcome: undefined;
  PokemonList: undefined;
  PokemonDetail: { pokemon:Pokemon};
};

export type PokemonDetailScreenRouteProp = RouteProp<RootStackParamList, 'PokemonDetail'>;
