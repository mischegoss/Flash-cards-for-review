
import * as React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import applyMiddleware from './middleware';
import HomeScreen from './components/HomeScreen'
import AddDeck from './components/AddDeck'

import { setLocalNotification } from './utils/helpers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





const Stack = createStackNavigator();


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <NavigationContainer>
      <Provider store={createStore(reducer, applyMiddleware)}>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddDeck" component={AddDeck} />
       
       
      </Stack.Navigator>
       
            
            </Provider>
            </NavigationContainer>
        
     
    );
  }
}




