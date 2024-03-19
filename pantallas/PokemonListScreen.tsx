import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import { RootStackParamList } from '../types/navigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Pokemon } from '../types/pokemonTypes';
import { ScrollView } from 'react-native-gesture-handler';

type PokemonListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PokemonList'>;

interface Props {
  navigation: PokemonListScreenNavigationProp;
}

const PokemonListScreen: React.FC<Props> = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error('Error en traer pokemon:', error);
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
    <SafeAreaView>
    <View style={styles.container}>
      <FlatList 
        data={pokemonList}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.name}
        numColumns={3}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    width:'100%',

  },
  item: {
    width:135,
    height:200,
    alignItems: 'center',
    justifyContent:'center',
    padding: 10,
    borderWidth:1,
    gap:10,

  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  details: {
    display:'flex',
    flexDirection:'column',
  },
});

export default PokemonListScreen;
