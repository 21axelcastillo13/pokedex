import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { RootStackParamList } from '../types/navigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Pokemon } from '../types/pokemonTypes';

type PokemonListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PokemonList'>;

interface Props {
  navigation: PokemonListScreenNavigationProp;
}

const PokemonListScreen: React.FC<Props> = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const renderPokemonItem = ({ item }: { item: Pokemon }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { pokemon: item })}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${item.url.split('/').slice(-2)[0]}.png` }}
        />
        <View style={styles.details}>
          <Text>ID: {item.url.split('/').slice(-2)[0]}</Text>
          <Text>Nombre: {item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor:'#fff',
    
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  details: {
    display:'flex',
    flexDirection:'column',
  },
});

export default PokemonListScreen;
