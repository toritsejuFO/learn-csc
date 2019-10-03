import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Alert,
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
} from 'native-base';

import MyHeader from '../components/MyHeader';
import colors from '../colors';
import importedStyles from '../styles';

const homeBackgroundImage = require('../../assets/images/pq_dark.jpeg');

export default class HomeScreen extends Component {
  render() {
    const username = this.props.navigation.getParam('username', '');
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <MyHeader iconName='menu' title='Home' username={username} {...this.props} />

        <Content>
          <ImageBackground
            source={homeBackgroundImage}
            style={importedStyles.backgroundImage}
            resizeMode='cover'
          >
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 20, justifyContent: 'space-evenly' }}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Icon name='person' style={{fontSize: 60, color: colors.gray, alignSelf: 'center'}}/>
              <Icon name='plus' type='FontAwesome' style={{fontSize: 30, color: colors.gray, alignSelf: 'center'}}/>
              <Icon name='book' type='FontAwesome' style={{fontSize: 60, color: colors.gray, alignSelf: 'center'}}/>
              <Icon name='pause' style={{ transform: [{rotate: '90deg'}], fontSize: 30, color: colors.gray, alignSelf: 'center' }}/>
              <Icon name='lightbulb-on' type='MaterialCommunityIcons' style={{fontSize: 60, color: 'yellow', alignSelf: 'center'}}/>
            </View>

            <Text style={styles.text}>
              Learn about different fields and aspects of Computer Science by answering questions in form of quizzes.
            </Text>

            <Button backgroundColor={colors.themeColor} large onPress={() => navigate('QuizList')}>
              <Text style={{ flex: 1, color: colors.gray, fontSize: 20, textAlign: 'center' }}>Take A Quiz</Text>
            </Button>
          </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

deviceWidth = Dimensions.get('window').width
deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  text: {
    color: colors.gray,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
})
