import React, { Component } from 'react';
import { YellowBox } from 'react-native';

import AppContainer from './Navigation';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount',
    'Warning: componentWillUpdate',
    'Warning: componentWillReceiveProps',
]);


export default class App extends Component {
  render () {
    return <AppContainer/>
  }
}