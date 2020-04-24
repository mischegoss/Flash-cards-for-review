import * as React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { saveQuizResultToStorage } from '../utils/api';
import {
  timeToString,
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';

export default class Result extends React.Component {
  componentDidMount() {
    const { deckName, score } = this.props;
    const dateCompleted = timeToString();

    saveQuizResultToStorage({ deckName, score, dateCompleted });
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { deckName, score, deckId } = this.props;
    const isScore = score === 0 ? true : false;

    return (

      <Container>
      <Header />
      <Content padder>
        <Card transparent>
        <CardItem header>
              <Text>{deckName}</Text>
            </CardItem>
          <CardItem>
            <Body>
              { !isScore ? 
              <Text>
              Your score is {score}%.
              </Text>  :

<Text>
No score yet
</Text>  

              } 

            </Body>
          </CardItem>

          <CardItem button bordered
          style={{backgroundColor: 'orange'}}
          onPress={() => this.props.handleStartQuiz(deckId)}>             
         
              <Body>
                <Text>
                  Start Quiz
                </Text>
              </Body>
            </CardItem>
        </Card>
      </Content>
    </Container> 
    );
  }
}

