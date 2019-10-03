import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  Container,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Text,
} from 'native-base';

import colors from '../colors';

const drawerCover = require('../../assets/images/pq_text_light.jpeg')

const items = [
  {
    name: 'Home',
    screen: 'Home',
    icon: 'home',
    type: 'FontAwesome',
  },
  {
    name: 'Quiz',
    screen: 'QuizList',
    icon: 'book',
    type: 'FontAwesome',
  },
  {
    name: 'Create',
    screen: 'Create',
    icon: 'plus',
    type: 'FontAwesome',
    right: 'lock'
  },
  {
    name: 'User',
    screen: 'User',
    icon: 'person',
  },
]

export default class SideBar extends Component {
  render () {
    return (
      <Container style={{flex: 1, backgroundColor: colors.themeColorDark}}>
        <Image source={drawerCover} style={styles.drawerCover}/>
        <List
          dataArray={items}
          keyExtractor={(item) => item.name}
          renderRow={(item) => (
            <ListItem
              button
              noBorder
              onPress={() => this.props.navigation.navigate('Activity', {screen: item.screen})}
            >
              <Left>
                <Icon
                  active
                  name={item.icon}
                  type={item.type && item.type}
                  style={{fontSize: 28, width: 30, color: colors.gray}}
                />
                <Text style={styles.text}>{item.name}</Text>
              </Left>
              {item.right &&
                <Right>
                  <Icon
                    name={item.right}
                    style={{color: 'darkred', fontSize: 26}}
                  />
                </Right>
              }
            </ListItem>
          )}
        />
      </Container>
    )
  }
}

deviceHeight = Dimensions.get('window').height;
deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 18,
    color: colors.gray,
    marginLeft: 20,
  },
  drawerCover: {
    alignSelf: 'stretch',
    height: deviceHeight / 3.5,
    width: null,
    marginBottom: 20,
  }
})