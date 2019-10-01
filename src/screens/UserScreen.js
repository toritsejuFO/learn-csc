import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {
  Container,
  Content,
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
const homeBackgroundImage = require('../../assets/home.jpg');

export default class UserScreen extends Component {
  state = {
    username: ''
  }

  componentDidMount = async () => {
    const username = await AsyncStorage.getItem('username') || '';
    this.setState({username});
  }

  handleUsernameChange = () => {
    AsyncStorage.setItem('@learncsc:username', this.state.username)
  }

  render() {
    let { username } = this.state;
    if (username == '') {
      username = this.props.navigation.getParam('username', '');
    }

    return (
      <Container>
        <MyHeader iconName='menu' title='Profile' username={username} {...this.props} />

        <Content style={{ display: 'flex' }}>
          <ImageBackground
            source={homeBackgroundImage}
            style={styles.backgroundImage}
            resizeMode='cover'
          >
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, justifyContent: 'space-evenly' }}>
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
    height: deviceHeight/1.139,
  },
})
