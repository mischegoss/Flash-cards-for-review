import * as React from 'react';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { formatDeck, saveDeckToStorage } from '../utils/api';

import { Container, Item, Header, Input, Title, Content, Card, CardItem, Text, Button } from 'native-base';





class AddDeck extends React.Component {
  state = {
    deckName: '',
  };



  handleSubmit = () => {
    const { deckName } = this.state;
    const { navigate } = this.props.navigation;
    const { dispatch} = this.props;
    const deck = formatDeck(deckName);

    if (!deckName) {
      alert('Oops! Looks like you need to add a Deck Name');
      return;
    }

    dispatch(addDeck(deck));
    saveDeckToStorage(deck);

    this.setState({ deckName: '' });
    navigate('Deck', { deckId: deck.id });
  
  };


  render() {
   
   
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
            <Title>Add a name for your new deck</Title>
             </CardItem>
             <CardItem>
             <Content>
          <Item rounded>
            <Input placeholder='Enter the name of your new deck here'
              value={this.state.deckName}
              onChangeText={(text) => this.setState({ deckName: text })}/>
          </Item>
        </Content>
             </CardItem>
             <CardItem>
             <Button warning  onPress={this.handleSubmit}
              
             ><Text> Submit </Text></Button>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}

  
export default connect(({ decks }) => ({ decks }))(AddDeck);
