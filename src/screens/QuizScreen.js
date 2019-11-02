import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import {
  Container,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
  Card,
  CardItem,
  Body,
  Button,
  H3,
  Icon,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';

import MyHeader from '../components/MyHeader';
import colors from '../colors';

const correct = require('../../assets/animations/correct.json');
const wrong = require('../../assets/animations/wrong.json');

export default class QuizScreen extends Component {
  constructor (props) {
    super(props)
    const topic = JSON.parse(props.navigation.getParam('topic'))
    
    this.state = {
      questionLock: {},
      topic: topic,
      modalVisible: false,
      success: false,
      activeTab: 0,
      initialPage: 0,
    }
  }

  componentDidMount = async () => {
    // Check for locked questions
    const questionLock = await AsyncStorage.getItem('@learncsc:questionLock');
    this.setState({questionLock: JSON.parse(questionLock)})
  }

  handleAnswerQuestion = (questionIndex, optionIndex) => {
    const {activeTab, questionLock, topic} = this.state;
    const nextTab = activeTab + 1;

    if (optionIndex == topic.questions[questionIndex].answer) { // Correct
      // Unlock next question if locked
      if (questionLock[topic.shortname][nextTab] == 0) {
        questionLock[topic.shortname][nextTab] = 1;
      }
      AsyncStorage.setItem('@learncsc:questionLock', JSON.stringify(questionLock));
      this.setState({questionLock , success: true, modalVisible: true, initialPage: nextTab})
    }
    else { // Wrong
      this.setState({success: false, modalVisible: true,})
    }
  }

  handleCorrectlyAnswered = () => {
    const {activeTab} = this.state;
    this.setState({activeTab: activeTab + 1, modalVisible: false})
  }

  handleWronglyAnswered = () => {
    this.setState({modalVisible: false})
  }

  render () {
    const username = this.props.navigation.getParam('username');
    const options = ['A', 'B', 'C', 'D'];
    const {topic, questionLock, success, activeTab, modalVisible} = this.state;
    const thisQuestionLock = questionLock[topic.shortname]; // Get current particular quiz topic

    return (
      <Container>
        <MyHeader iconName='arrow-back' username={username} title={topic.shortname} goBack={true} {...this.props} />

        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}>
          <View style={styles.modalView}>
            { success
              ? <>
                  <LottieView  source={correct} autoPlay loop/>
                  <Text style={{color: 'white', marginBottom: 60, fontSize: 24}}>Next question Unlocked</Text>
                  <Button
                    large
                    style={{marginTop: 300}}
                    onPress={() => this.handleCorrectlyAnswered()}>
                    <Text>Next</Text>
                  </Button>
                </>
              : <>
                  <LottieView  source={wrong} autoPlay loop/>
                  <Button
                    large
                    style={{marginTop: 250}}
                    onPress={() => this.handleWronglyAnswered()}>
                    <Text>Try Again</Text>
                  </Button>
                </>
            }
          </View>
        </Modal>

        <Tabs renderTabBar={() => <ScrollableTab/>} last={{marginBottom: 30}} initialPage={activeTab} page={activeTab}>
          {topic.questions.map((question, questionIndex) => 
            <Tab 
              heading={'Q'+question.number}
              key={question.number}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}>
              {
                // Ensure questions index does not exceed actual question length before rendering appropraite view
                (thisQuestionLock && (questionIndex < thisQuestionLock.length) && thisQuestionLock[questionIndex] == 0)
                ? <LockedView/>
                : <View style={{flex: 1, backgroundColor: colors.themeColorWhite, padding: 20}}>
                    <Card style={styles.card}>
                      <CardItem header bordered style={styles.cardItem}>
                        <H3 style={styles.questionText}>Question {question.number}</H3>
                      </CardItem>

                      <CardItem style={styles.cardItem}>
                        <Body>
                          <Text style={styles.questionText}>{question.question}</Text>
                        </Body>
                      </CardItem>
                    </Card>

                    <ScrollView contentContainerStyle={{justifyContent: 'space-evenly'}}>
                      {question.options.map((option, optionIndex) => 
                        <Button 
                          block
                          key={optionIndex}
                          style={styles.answerButton}
                          onPress={() => this.handleAnswerQuestion(questionIndex, optionIndex)}>
                          <Text>{options[optionIndex]}.</Text>
                          <Text style={styles.answerText}>{option}</Text>
                        </Button>
                      )}
                    </ScrollView>
                  </View>
              }
            </Tab>
          )}
        </Tabs>
      </Container>
    )
  }
}

const LockedView = () => {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.themeColorWhite}}>
    <Icon
      active
      name='lock'
      type='FontAwesome'
      style={styles.locked}
    />
  </View>
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: colors.themeColorDark,
  },
  activeTabStyle: {
    backgroundColor: colors.themeColorDark,
  },

  card: {
    marginBottom: 35,
  },
  cardItem: {
    backgroundColor: 'white',
  },
  questionText: {
    color: colors.themeColorDark,
  },

  answerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 'auto',
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: colors.themeColorDark,
  },
  answerText: {
    textTransform: 'lowercase',
    fontSize: 16,
    color: colors.gray,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 60,
  },
  locked: {
    color: 'red',
    fontSize: 100,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalText: {
    color: colors.themeColorDark,
    marginTop: 50,
  },
})
