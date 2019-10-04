import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  ScrollView,
  Alert,
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
  Left,
  H3,
  Row,
} from 'native-base';

import MyHeader from '../components/MyHeader';
import importedStyles from '../styles';
import colors from '../colors';

const HomeBackgroundImage = require('../../assets/images/pq_dark.jpeg');

export default class QuizScreen extends Component {
  componentDidMount = () => {
    // Alert.alert('hi');
  }
  render () {
    const username = this.props.navigation.getParam('username');
    const topic = JSON.parse(this.props.navigation.getParam('topic'));
    const alpha = ['A', 'B', 'C', 'D'];

    return (
      <Container>
        <MyHeader iconName='arrow-back' username={username} title={topic.shortname} goBack={true} {...this.props} />
        <Tabs renderTabBar={() => <ScrollableTab/>} last={{marginBottom: 30}}>
          {topic.questions.map((question, i) => 
            <Tab heading={'Q'+question.number} key={question.number} tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle}>
              <ImageBackground
                source={HomeBackgroundImage}
                style={importedStyles.HomeBackgroundImage}
                resizeMode='cover'
              >
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 20}}>
                  <Card style={styles.card}>
                    <CardItem header bordered style={styles.cardItem}>
                      <H3 style={styles.questionText}>Question {question.number}</H3>
                    </CardItem>

                    <CardItem bordered style={styles.cardItem}>
                      <Body>
                        <Text style={styles.questionText}>{question.question}</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <ScrollView contentContainerStyle={{justifyContent: 'space-evenly'}}>
                    {question.options.map((option, i) => 
                      <Button key={i} style={styles.answerButton} block>
                        <Text style={{}}>{alpha[i]}.</Text>
                        <Text style={styles.answerText}>{option}</Text>
                      </Button>
                    )}
                  </ScrollView>
                </View>
              </ImageBackground>
            </Tab>
          )}
        </Tabs>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    // backgroundColor: '#fff',
  },
  activeTabStyle: {
    backgroundColor: colors.themeColorDark,
  },

  card: {
    marginBottom: 30,
  },
  cardItem: {
    backgroundColor: colors.themeColor,
  },
  questionText: {
    color: colors.gray,
  },

  answerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 'auto',
    marginBottom: 30,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: '#fff',
  },
  answerText: {
    textTransform: 'lowercase',
    fontSize: 16,
    color: colors.gray,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 60,
  }
})
