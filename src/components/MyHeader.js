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
    const { iconName, title, username, goBack } = this.props;

    return (
      <>
        <StatusBar barStyle='light-content'/>
        <Header
          style={{ backgroundColor: colors.themeColorDark }}
          androidStatusBarColor={colors.themeColorDark}
        >
          <Left>
            <Button transparent onPress={() => {
              if (goBack) this.props.navigation.goBack();
              else this.props.navigation.openDrawer();
            }}>
              <Icon name={iconName} style={{color: colors.gray}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: colors.gray}}>{title}</Title>
          </Body>
          {
            username && username != '' ? 
            <Right><Text style={{ color: colors.gray, fontSize: 18, fontWeight: 'bold' }}>{username}</Text></Right>
            : <Right/>
          }
        </Header>
      </>
    );
  }
}
