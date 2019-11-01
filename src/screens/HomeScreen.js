import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {
  Container,
  Button,
  Icon,
  Text,
} from 'native-base';

import MyHeader from '../components/MyHeader';
import colors from '../colors';

const homeBackgroundImage = require('../../assets/images/pq_text_light.jpeg');

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <MyHeader iconName='menu' title='Home' {...this.props} />
        <Image
          source={homeBackgroundImage}
          style={{width: deviceWidth, height: 150}}/>
        <View style={{backgroundColor: colors.themeColorWhite, justifyContent: 'space-evenly', flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Learn about different fields and aspects of Computer Science by answering questions in form of quizzes.
            </Text>
          </View>

          <View style={styles.iconContainer}>
            <Icon name='person' style={{fontSize: 30, color: colors.themeColorDark, alignSelf: 'center'}}/>
            <Icon name='plus' type='FontAwesome' style={{fontSize: 15, color: colors.themeColorDark, alignSelf: 'center'}}/>
            <Icon name='book' type='FontAwesome' style={{fontSize: 30, color: colors.themeColorDark, alignSelf: 'center'}}/>
            <Icon name='pause' style={{ transform: [{rotate: '90deg'}], fontSize: 15, color: colors.themeColorDark, alignSelf: 'center' }}/>
            <Icon name='lightbulb-on' type='MaterialCommunityIcons' style={{fontSize: 30, color: colors.themeColorDark, alignSelf: 'center'}}/>
          </View>

          <Button style={styles.button} backgroundColor={colors.themeColor} large onPress={() => navigate('Activity', {screen: 'QuizList'})}>
            <Text style={{ flex: 1, color: colors.gray, fontSize: 20, textAlign: 'center' }}>Take A Quiz</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

deviceWidth = Dimensions.get('window').width
deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: colors.themeColorDark,
    // width: deviceWidth/1.5,
    marginTop: -100,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: colors.themeColorWhite,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth/2,
    alignSelf: 'center',
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
  }
})
