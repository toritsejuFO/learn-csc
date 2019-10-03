import React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import SideBar from './src/screens/SideBarScreen';
import HomeScreen from './src/screens/HomeScreen';
import QuizListScreen from './src/screens/QuizListScreen';
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
    initialRouteName: 'Activity',
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    contentComponent: (props) => <SideBar {...props}/>
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;