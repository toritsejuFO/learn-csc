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
  Icon,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import MyHeader from '../components/MyHeader';
import colors from '../colors';
import importedStyles from '../styles';

const homeBackgroundImage = require('../../assets/images/pq_dark.jpeg');

export default class UserScreen extends Component {
  state = {
    username: '',
    permanentUsername: '',
  }

  componentDidMount = async () => {
    let username = await AsyncStorage.getItem('@learncsc:username') || '';
    this.setState({permanentUsername: username});

    // Attempt to restore previous username if user left editing halfway, without saving
    this.focusListener = this.props.navigation.addListener('didFocus', async () => {
      try {
        let username = await AsyncStorage.getItem('@learncsc:username') || '';
        this.setState({permanentUsername: username});
      }
      catch {
        this.setState({permanentUsername: ''})
      }
    })
  }

  handleUsernameChange = () => {
    let username = this.state.username
    if (username == '') {
      Alert.alert('You must provide a username')
      return;
    }
    this.setState({username: '', permanentUsername: username})
    AsyncStorage.setItem('@learncsc:username', this.state.username);
    Alert.alert(`Username saved as ${username}`);
  }

  render() {
    let { username, permanentUsername } = this.state;

    return (
      <Container>
        <MyHeader iconName='menu' title='Username' username={permanentUsername} {...this.props} />
        <View style={{ flex: 1, backgroundColor: colors.themeColorWhite, padding: 20, justifyContent: 'space-evenly' }}>
          <Form>
            <View style={{flexDirection: 'row'}}>
              <Label style={{ color:colors.themeColorDark, flex: 0.2, paddingTop: 10}}>
                <Icon
                  active
                  name='person'
                  style={{fontSize: 50, color: colors.themeColorDark}}/>
              </Label>
              <Item fixedLabel style={{marginBottom: 30, borderBottomWidth: 3, borderBottomColor: colors.themeColorDark, flex: 0.8}} last>
                <Input
                  style={{color: colors.themeColorDark, fontSize: 20}}
                  value={username}
                  placeholder='Update Username'
                  onChangeText={username => this.setState({username})}/>
              </Item>
            </View>
            <Button
              dark
              backgroundColor={colors.themeColor}
              large
              onPress={() => this.handleUsernameChange()}>
              <Text style={{ flex: 1, color: colors.gray, fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Save</Text>
            </Button>
          </Form>
        </View>
      </Container>
    );
  }
}
