import * as React from 'react';
import { connect } from 'react-redux';
import { addDeckQuestion} from '../actions';
import { formatQuestion, saveCardToStorage} from '../utils/api';
import { Container, Button, Content, Header, Item, Input, Text } from 'native-base';

class AddCard extends React.Component {
  state = {
    questionText: '',
    answerText: '',
    

  };

  handleSubmit = () => {
    const { deckId } = this.props.route.params;

 
    const { dispatch, navigation } = this.props;
    const formattedQuestion = formatQuestion({ ...this.state, deckId });
    
  
  

    if (this.state.questionText === '' || this.state.answerText === '') {
      alert('Fields cannot be empty');
      return;
    }

    dispatch(addDeckQuestion(formattedQuestion));
    saveCardToStorage(formattedQuestion);

  
    navigation.goBack();
   
  };

  render() {
    

    return (

      <Container>
      <Header />
      <Content>
        <Item rounded>
          <Input placeholder='Question'
          value={this.state.questionText}
          onChangeText={(text) => this.setState({ questionText: text })}
        />
        </Item>

        <Item rounded>
          <Input placeholder='Answer'
          value={this.state.answerText}
          onChangeText={(text) => this.setState({ answerText: text })}
        />
        </Item>

        <Button onPress={this.handleSubmit} >
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>






      
    );
  }
}



export default connect()(AddCard);
