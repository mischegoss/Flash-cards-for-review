import React from 'react';
import {
  SafeAreaView,
  
  FlatList,
 
} from 'react-native';

import {Button, Text, Right, Container, ListItem} from 'native-base'

import { connect } from 'react-redux';


const Item = (props) => {
  const { item, handleNav } = props;
  const {questions} = props;

  return (

    <Button
    style={{borderWidth:  3,  borderColor:  'red'}}
    full success onPress={() => handleNav(item.id)}>
      <Text> {item.deckName}
        </Text>
        <Right>
        <Text> Count
        </Text>
        </Right>

    </Button>



    
  );
};

class DeckStack extends React.Component {
  handleNavigateDeck = (deckId) => {
    this.props.navigation.navigate('Deck', { deckId });
  };

  render() {
    
    return (
      <SafeAreaView >
        {this.props.data.length !== 0 ? (
          <FlatList
            data={this.props.data}
            renderItem={({ item }) => {
              return (
                <Item
                  item={item}
                  handleNav={(id) => this.handleNavigateDeck(id)}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text
            
            
          >
            Nothing Here
          </Text>
        )}
      </SafeAreaView>
    );
  }
}



function mapStateToProps({ decks, questions }, { route }){

  const decksArray = [];
  const deckQuestions = [];

  for (const key of Object.keys(decks)) {
    decksArray.push(decks[key]);
  }

  for (const key of Object.keys(questions)) {
    deckQuestions.push(questions[key])
  }

  return {
    data: decksArray,
    questions: deckQuestions,
  };
}

export default connect(mapStateToProps)(DeckStack);