import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SalgadosPage from './components/Salgados';
import BebidasPage from './components/Bebidas';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Button
        title="Salgados"
        onPress={() => navigation.navigate('Salgados')}
      />
      <View style={styles.spacer} />
      <Button
        title="Bebidas"
        onPress={() => navigation.navigate('Bebidas')}
      />
    </View>
  );
}

function SalgadosScreen() {
  return <SalgadosPage />;
}

function BebidasScreen() {
  return <BebidasPage />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Salgados" component={SalgadosScreen} options={{ title: 'Cardápio de Salgados' }} />
        <Stack.Screen name="Bebidas" component={BebidasScreen} options={{ title: 'Cardápio de Bebidas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  spacer: {
    height: 15,
  },
});
