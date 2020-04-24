import * as React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { connect } from 'react-redux';


class Deck extends React.Component {
  handleAddCard = () => {
    const { deck } = this.props;

    this.props.navigation.navigate('AddCard', { deckId: deck.id });
  };

  handleStartQuiz = () => {
    const { deck } = this.props;

    this.props.navigation.navigate('Quiz', { deckId: deck.id });
  };

  render() {
    const { deckName, count } = this.props.deck;
    const activeButton = count === 0 ? true : false;

    return (

<Container>
      <Header />
      <Content padder>
        <Card transparent>
        <CardItem header>
              <Text style= {{alignContent: 'center'}}>{deckName}</Text>
            </CardItem>
          <CardItem button bordered
          
          style={{backgroundColor: 'orange'}}
          onPress={this.handleAddCard}>
              
              <Body>
                <Text>
                  Add a New Card
                </Text>
              </Body>
            </CardItem>

            <CardItem button bordered
          style={{backgroundColor: 'lightblue'}}
          disabled={activeButton}
          onPress={this.handleStartQuiz}>
              
         
              <Body>
                <Text>
                  Start Quiz
                </Text>
              </Body>
            </CardItem>


                
         
        </Card>
      </Content>
    </Container>



    )}}




      

function mapStateToProps({ decks, questions }, { route }) {
  const { deckId } = route.params;
  let count = 1;

  for (const key of Object.keys(questions)) {
    if (questions[key].deckId === deckId) count = count++;
  }

  return {
    deck: decks[deckId] ? { ...decks[deckId], count } : null,
  };
}

export default connect(mapStateToProps)(Deck);
