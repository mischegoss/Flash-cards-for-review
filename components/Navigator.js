import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DeckStack from './DeckStack';
import Deck from './Deck';
import AddCard from './AddCard';
import Quiz from './Quiz';
import Result from './Result';

const Stack = createStackNavigator();

function Navigator() {
  return (
  
    <Stack.Navigator>
      <Stack.Screen
        name='DeckList'
        component={DeckStack}
        options={{ title: 'Flash Cards' }}
      />
      <Stack.Screen name='Deck' component={Deck} options={{ title: 'Deck' }} />
      <Stack.Screen
        name='AddCard'
        component={AddCard}
        options={{ title: 'Add Card' }}
      />
      <Stack.Screen name='Quiz' component={Quiz} options={{ title: 'Quiz Yourself' }} />
      <Stack.Screen
        name='Result'
        component={Result}
        options={{ title: 'Result' }}
      />
    </Stack.Navigator>
   
  );
}

export default Navigator;