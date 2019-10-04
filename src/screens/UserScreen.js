import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Alert,
} from 'react-native';
import {
  Container,
  Button,
  Form,
  Item,
  Label,
  Input,
  Text,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import MyHeader from '../components/MyHeader';
import colors from '../colors';
import importedStyles from '../styles';

const homeBackgroundImage = require('../../assets/images/pq_dark.jpeg');

export default class UserScreen extends Component {
  state = {
    username: ''
  }

  componentDidMount = async () => {
    let username = await AsyncStorage.getItem('@learncsc:username') || '';
    this.setState({username});

    // Attempt to restore previous username if user left editing halfway, without saving
    this.focusListener = this.props.navigation.addListener('didFocus', async () => {
      try {
        let username = await AsyncStorage.getItem('@learncsc:username') || '';
        this.setState({username});
      }
      catch {
        this.setState({username: ''})
      }
    })
  }

  handleUsernameChange = () => {
    AsyncStorage.setItem('@learncsc:username', this.state.username);
    Alert.alert(`Username save as ${this.state.username}`);
  }

  render() {
    let { username } = this.state;

    return (
      <Container>
        <MyHeader iconName='menu' title='Profile' username={username} {...this.props} />
        <ImageBackground
          source={homeBackgroundImage}
          style={importedStyles.backgroundImage}
          resizeMode='cover'
        >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 20, justifyContent: 'space-evenly' }}>
          <Form>
            <Item fixedLabel style={{marginBottom: 30}} last>
              <Label style={{ color:colors.gray, fontSize: 20 }}>Username</Label>
              <Input
                style={{color: colors.gray, fontSize: 20}}
                value={username}
                onChangeText={username => this.setState({username})}
              />
            </Item>
            <Button
              dark
              backgroundColor={colors.themeColor}
              large
              onPress={() => this.handleUsernameChange()}
            >
              <Text style={{ flex: 1, color: colors.gray, fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Save</Text>
            </Button>
          </Form>
        </View>
        </ImageBackground>
      </Container>
    );
  }
}
