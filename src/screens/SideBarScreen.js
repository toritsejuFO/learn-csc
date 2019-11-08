import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {
  Container,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Text,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import colors from '../colors';
import Quiz from '../../assets/js/Quiz';

const drawerCover = require('../../assets/images/pq_text_light.jpeg')

const items = [
  {
    name: 'Home',
    screen: 'Home',
    icon: 'home',
    type: 'FontAwesome',
  },
  {
    name: 'Quiz',
    screen: 'QuizList',
    icon: 'book',
    type: 'FontAwesome',
  },
  {
    name: 'Trivia',
    screen: 'Trivia',
    icon: 'question',
    type: 'FontAwesome',
    right: 'lock'
  },
  {
    name: 'User',
    screen: 'User',
    icon: 'person',
  },
  {
    name: 'Lock All Questions',
    icon: 'lock',
    type: 'FontAwesome',
  },
]

export default class SideBar extends Component {
  handleLockAllQuestions = () => {
    const questions = {};

    // Lock questions in each topic
    Quiz.topics.forEach(topic => {
      questions[topic.shortname] = [];
      topic.questions.forEach((question, i) => {
        i == 0 ? questions[topic.shortname].push(1) // Leave first question open
        : questions[topic.shortname].push(0); // Lock subsequent questions
      })
    });
    // console.warn(JSON.stringify(questions, null, 2));
    AsyncStorage.setItem('@learncsc:questionLock', JSON.stringify(questions));
  }

  render () {
    return (
      <Container style={{flex: 1, backgroundColor: colors.themeColorDark}}>
        <Image source={drawerCover} style={styles.drawerCover}/>
        <List
          dataArray={items}
          keyExtractor={(item) => item.name}
          renderRow={(item) => (
            <ListItem
              button
              noBorder
              onPress={() => {
                if (item.name == 'Trivia') {
                  ToastAndroid.show('Unavailable', ToastAndroid.BOTTOM);
                }
                else if (item.name == 'Lock All Questions') {
                  this.handleLockAllQuestions();
                  ToastAndroid.show('All questions have been Locked', ToastAndroid.BOTTOM);
                }
                else {
                  this.props.navigation.navigate('Activity', {screen: item.screen})
                }
              }}
            >
              <Left>
                <Icon
                  active
                  name={item.icon}
                  type={item.type && item.type}
                  style={{fontSize: 28, width: 30, color: colors.gray}}
                />
                <Text style={styles.text}>{item.name}</Text>
              </Left>
              {item.right &&
                <Right>
                  <Icon
                    name={item.right}
                    style={{color: 'darkred', fontSize: 26}}
                  />
                </Right>
              }
            </ListItem>
          )}
        />
      </Container>
    )
  }
}

deviceHeight = Dimensions.get('window').height;
deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 18,
    color: colors.gray,
    marginLeft: 20,
  },
  drawerCover: {
    alignSelf: 'stretch',
    height: deviceHeight / 3.5,
    width: null,
    marginBottom: 20,
  }
})