import React, { Component } from 'react';
import {
  StatusBar,
} from 'react-native';
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

import colors from '../colors';

export default class MyHeader extends Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    const { iconName, title, username } = this.props;

    return (
      <>
        <StatusBar barStyle='light-content'/>
        <Header
          style={{ backgroundColor: colors.themeColor }}
          androidStatusBarColor={colors.themeColor}
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name={iconName} style={{color: colors.gray}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: colors.gray}}>{title}</Title>
          </Body>
          {
            username && username != '' ? 
            <Right><Text style={{ color: colors.gray, fontSize: 20 }}>{username}</Text></Right>
            : <Right/>
          }
        </Header>
      </>
    );
  }
}
