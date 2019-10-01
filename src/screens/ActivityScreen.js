import React, { Component } from 'react';
import { ImageBackground, View, Dimensions, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Spinner } from 'native-base'

import colors from '../colors';
const homeBackgroundImage = require('../../assets/home.jpg');

export default class ActivityScreen extends Component {
  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('didFocus', async () => {
      try {
        const username = await AsyncStorage.getItem('@learncsc:username') || '';
        const screen = this.props.navigation.getParam('screen', 'Home');
        this.props.navigation.navigate(screen, {username});
      }
      catch {
        this.props.navigation.navigate('home', {username: ''});
      }
    })
  }

  render () {
    return  (
      <Container style={{ backgroundColor: 'transparent' }}>
        <ImageBackground
          source={homeBackgroundImage}
          style={{ justifyContent: 'center', alignItems: 'center', ...styles.backgroundImage}}
          resizeMode='cover'
        >
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10000 }}>
            <Spinner color={colors.gray} />
          </View>
        </ImageBackground>
      </Container>
    )
  }
}

deviceWidth = Dimensions.get('window').width
deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight/1.035,
  },
})
