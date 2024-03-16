import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Image source={require('../pokeapi_256.png')}></Image>
      <Text style={styles.texto}>Bienvenido a PokeDex!</Text>
      <Button title="Ver la lista de Pokemon" onPress={() => navigation.navigate('PokemonList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#3c5aa6'
  },
  texto:{
    color:'#fff',
    fontSize:22,
    padding:20,
  }
});

export default WelcomeScreen;
