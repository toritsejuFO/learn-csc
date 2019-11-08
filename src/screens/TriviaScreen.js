import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Modal,
} from 'react-native';
import {
  Container,
  Text,
  Card,
  CardItem,
  Body,
  Button,
  H3,
  Spinner,
  Right
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';

import MyHeader from '../components/MyHeader';
import colors from '../colors';

const correct = require('../../assets/animations/correct.json');
const wrong = require('../../assets/animations/wrong.json');
const oops = require('../../assets/animations/oops.json');

export default class TriviaScreen extends Component {
  state = {
    modalVisible: false,
    success: false,
    fetching: true,
    question: '',
    options: [],
    answer: 0,
    difficulty: '',
    failedToLoad: false,
    error: '',
    color: '',
  }

  componentDidMount = async () => {
    this.fetchQuestion()
  }

  handleAnswerQuestion = (optionIndex) => {
    const {options, answer} = this.state
    if (options[optionIndex] == answer) {
      this.setState({success: true, modalVisible: true});
      this.fetchQuestion();
    }
    else {
      this.setState({success: false, modalVisible: true})
    }
  }

  shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  fetchWithTimeout = (url, timeout) => {
    return new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        reject(new Error('Request timed out. Try again.'))
      }, timeout)

      fetch(url)
      .then(res => resolve(res))
      .catch(error => reject(error))
      .finally(() => clearTimeout(timer))
    })
  }

  escapeHTML = (str) => {
    return str.replace(/(&amp|&lt|&gt|&#039|&quot);/g,
      tag => ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#039;': "'",
        '&quot;': '"'
      }[tag] || tag)
    );
  }

  fetchQuestion = () => {
    let API_URL = 'https://opentdb.com/api.php?amount=1&category=18';
    let TIMEOUT = 10000

    this.setState({fetching: true, failedToLoad: false, error: ''})
    let {question, options, answer, difficulty} = this.state;

    this.fetchWithTimeout(API_URL, TIMEOUT)
    .then(resp => { if (resp.status == 200 && resp.ok == true) return resp.json() })
    .then(resp => {
      let res = resp.results[0]
      res.incorrect_answers.push(res.correct_answer);
      question = this.escapeHTML(res.question);
      options = res.incorrect_answers.map(option => this.escapeHTML(option));
      answer = this.escapeHTML(res.correct_answer);
      difficulty = res.difficulty;
      this.shuffle(options)
      this.setState({
        question,
        options,
        answer,
        fetching: false,
        difficulty,
        color: difficulty == 'easy' ? 'green' : difficulty == 'medium' ? 'blue' : 'red'
      })
      // console.warn(JSON.stringify(res, null, 2))
    })
    .catch(error => this.setState({error, failedToLoad: true, fetching: false}))
  }

  render () {
    const username = this.props.navigation.getParam('username');
    const tags = ['A', 'B', 'C', 'D'];
    const {fetching, failedToLoad, error, difficulty, question, options, color, success, modalVisible} = this.state;

    return (
      <Container>
        <MyHeader iconName='arrow-back' username={username} title='Trivia' goBack={true} {...this.props} />

        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}>
          <View style={styles.modalView}>
            { success
              ? <>
                  <LottieView  source={correct} autoPlay loop/>
                  <Text style={{color: 'white', marginBottom: 60, fontSize: 24, padding: 10}}>
                    Correct
                  </Text>
                  <Button
                    large
                    style={{marginTop: 300}}
                    onPress={() => this.setState({modalVisible: false})}>
                    <Text>Next</Text>
                  </Button>
                </>
              : <>
                  <LottieView  source={wrong} autoPlay loop/>
                  <Button
                    large
                    style={{marginTop: 250}}
                    onPress={() => this.setState({modalVisible: false})}>
                    <Text>Failed</Text>
                  </Button>
                </>
            }
          </View>
        </Modal>

        {fetching ? <LoadingView/>
          : failedToLoad && error ?
            <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: colors.themeColorWhite}}>
              <LottieView  source={oops} autoPlay loop autoSize={true}/>
              <Text style={{color: 'red', fontSize: 18, padding: 10}}>
                {error.message}
              </Text>
              <Text style={{color: colors.themeColorDark, fontSize: 12, padding: 10}}>
                Check that your data is on and you have good network
              </Text>
              <Button
                large
                onPress={() => this.fetchQuestion()}>
                <Text>Try Again</Text>
              </Button>
            </View>
          : <View style={{flex: 1, backgroundColor: colors.themeColorWhite, padding: 20}}>
            <Card style={styles.card}>
              <CardItem header bordered style={styles.cardItem}>
                <H3 style={styles.questionText}>Question</H3>
                <Right><Text style={{color: color, marginRight: -20}}>{difficulty.toUpperCase()}</Text></Right>
              </CardItem>

              <CardItem style={styles.cardItem}>
                <Body>
                  <Text style={styles.questionText}>{question}</Text>
                </Body>
              </CardItem>
            </Card>

            <ScrollView contentContainerStyle={{justifyContent: 'space-evenly'}}>
              {options.map((option, optionIndex) => 
                <Button 
                  block
                  key={optionIndex}
                  style={styles.answerButton}
                  onPress={() => this.handleAnswerQuestion(optionIndex)}>
                  <Text>{tags[optionIndex]}.</Text>
                  <Text style={styles.answerText}>{option}</Text>
                </Button>
              )}
            </ScrollView>
          </View>}
      </Container>
    )
  }
}

const LoadingView = () => {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.themeColorWhite}}>
    <Spinner color={colors.themeColorDark} />
    <Text style={{fontSize: 18, color: colors.themeColorLight }}>Fetching Question ...</Text>
  </View>
}

const styles = StyleSheet.create({
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
