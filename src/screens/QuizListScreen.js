import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Text,
  Button,
  List,
} from 'native-base';

import MyHeader from '../components/MyHeader';
import importedStyles from '../styles';
import colors from '../colors';

const HomeBackgroundImage = require('../../assets/images/pq_dark.jpeg');
import Quiz from '../../assets/js/Quiz';

export default class QuizListScreen extends Component {
  render () {
    const username = this.props.navigation.getParam('username');
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <MyHeader iconName='menu' title='Quizzes' username={username} {...this.props} />
        <View style={{flex: 1, backgroundColor: colors.themeColorWhite}}>
          <List
            contentContainerStyle={{ paddingBottom: 30}} // hack to style last item
            style={{ flex: 1, backgroundColor: colors.themeColorWhite, padding: 30 }}
            dataArray={Quiz.topics}
            keyExtractor={(topic) => topic.name}
            renderRow={(topic) => (
              <ImageBackground
                source={topic.imagePath}
                style={styles.image}
                imageStyle={{ borderRadius: 10 }}
                resizeMode='cover'
              >
                <Button
                  style={styles.button}
                  onPress={() => navigate('Quiz', {
                    username: username,
                    topic: JSON.stringify({
                      shortname: topic.shortname,
                      questions: topic.questions,
                    })
                  })}
                >
                  <Text style={styles.text}>{topic.name}</Text>
                </Button>
              </ImageBackground>
            )}
          />
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    marginBottom: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.gray,
    textTransform: 'uppercase',
  },
})
