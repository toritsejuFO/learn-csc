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
const homeBackgroundImage = require('../../assets/home.jpg');

export default class HomeScreen extends Component {
  render() {
    let username = this.props.navigation.getParam('username', '');

    return (
      <Container>
        <MyHeader iconName='menu' title='Home' username={username} {...this.props} />

        <Content style={{ display: 'flex' }}>
          <ImageBackground
            source={homeBackgroundImage}
            style={styles.backgroundImage}
            resizeMode='cover'
          >
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, justifyContent: 'space-evenly' }}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Icon name='person' style={{fontSize: 60, color: colors.gray, alignSelf: 'center'}}/>
              <Icon name='plus' type='FontAwesome' style={{fontSize: 30, color: colors.gray, alignSelf: 'center'}}/>
              <Icon name='book' type='FontAwesome' style={{fontSize: 60, color: colors.gray, alignSelf: 'center'}}/>
              <Icon name='pause' style={{ transform: [{rotate: '90deg'}], fontSize: 30, color: colors.gray, alignSelf: 'center' }}/>
              <Icon name='bulb' style={{fontSize: 60, color: colors.gray, alignSelf: 'center'}}/>
            </View>

            <Text style={styles.text}>
              Learn about different fields and aspects of Computer Science by answering questions in form of quizzes.
            </Text>

            <Button backgroundColor={colors.themeColor} large onPress={() => Alert.alert(username)}>
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
  backgroundImage: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight/1.137,
  },
  text: {
    color: colors.gray,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
})
