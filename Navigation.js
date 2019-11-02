import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Root } from 'native-base';

import SideBar from './src/screens/SideBarScreen';
import HomeScreen from './src/screens/HomeScreen';
import QuizListScreen from './src/screens/QuizListScreen';
import QuizScreen from './src/screens/QuizScreen';
import UserScreen from './src/screens/UserScreen';
import ActivityScreen from './src/screens/ActivityScreen';

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    QuizList: { screen: QuizListScreen },
    User: { screen: UserScreen },
    Activity: { screen: ActivityScreen },
  },
  {
    initialRouteName: 'Home',
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    contentComponent: (props) => <SideBar {...props}/>
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Quiz: { screen: QuizScreen },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator)

export default () => 
  <Root>
    <AppContainer/>
  </Root>
