import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './pantallas/WelcomeScreen';
import PokemonListScreen from './pantallas/PokemonListScreen';
import PokemonDetailScreen from './pantallas/PokemonDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Bienvenido' }} />
        <Stack.Screen name="PokemonList" component={PokemonListScreen} options={{ title: 'Lista Pokémon' }} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} options={{ title: 'Detalles Pokémon' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
