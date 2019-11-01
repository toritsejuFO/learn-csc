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
    const options = ['A', 'B', 'C', 'D'];

    return (
      <Container>
        <MyHeader iconName='arrow-back' username={username} title={topic.shortname} goBack={true} {...this.props} />
        <Tabs renderTabBar={() => <ScrollableTab/>} last={{marginBottom: 30}}>
          {topic.questions.map((question, i) => 
            <Tab heading={'Q'+question.number} key={question.number} tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle}>
              <View style={{flex: 1, backgroundColor: colors.themeColorWhite, padding: 20}}>
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
                  {question.options.map((option, i) => 
                    <Button key={i} style={styles.answerButton} block>
                      <Text style={{}}>{options[i]}.</Text>
                      <Text style={styles.answerText}>{option}</Text>
                    </Button>
                  )}
                </ScrollView>
              </View>
            </Tab>
          )}
        </Tabs>
      </Container>
    )
  }
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
    // color: colors.gray,
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
  }
})
