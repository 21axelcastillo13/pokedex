import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Pokemon, PokemonAbility } from '../types/pokemonTypes';

const PokemonDetailScreen = ({ route }: { route: any }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.pokemon}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${pokemon.url.split('/').slice(-2)[0]}.png` }}
        style={styles.image}
      />
      <Text style={styles.texto}>ID: {pokemon.url.split('/').slice(-2)[0]}</Text>
      <Text style={styles.texto}>Nombre: {pokemon.name}</Text>
      <Text style={styles.texto}>Habilidades:</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#3c5aa6',
  },
  image: {
    width: 300,
    height: 300,
  },
  pokemon:{
    backgroundColor:'#ffcb05',
    display:'flex',
    alignItems:'center',
    borderRadius:20,
    height:400,
  },
  texto:{
    color:'#000',
    fontSize:22,
  }
});

export default PokemonDetailScreen;
