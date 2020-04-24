import React, { Component } from 'react';
import { Container,Text, Button } from 'native-base';
import Navigator from './Navigator'


function HomeScreen({ navigation }) {
  return (
    <Container>
      
      <Navigator/>
      <Button large dark onPress={() => navigation.navigate('AddDeck')}>
            <Text>Add New Deck</Text>
          </Button>
      
     
      </Container>
  )}

  export default HomeScreen;