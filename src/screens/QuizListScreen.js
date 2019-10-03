import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  List,
  ListItem,
} from 'native-base';

import MyHeader from '../components/MyHeader';
import importedStyles from '../styles';
import colors from '../colors';

const HomeBackgroundImage = require('../../assets/images/pq_dark.jpeg');
import Quiz from '../../assets/js/Quiz';

export default class QuizListScreen extends Component {
  render () {
    const username = this.props.navigation.getParam('username');

    return (
      <Container>
        <MyHeader iconName='menu' title='Quizzes' username={username} {...this.props} />
        <ImageBackground
          source={HomeBackgroundImage}
          style={importedStyles.backgroundImage}
          resizeMode='cover'
        >
          <List
            style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 20}}
            dataArray={Quiz.topics}
            keyExtractor={(topic) => topic}
            renderRow={(topic) => (
              <ListItem noBorder>
                <Button backgroundColor={colors.themeColor} large block>
                  <Text style={styles.text}>{topic}</Text>
                </Button>
              </ListItem>
            )}
          />
        </ImageBackground>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 18,
    color: colors.gray,
    marginLeft: 20,
  },
})
