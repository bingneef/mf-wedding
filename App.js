import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from 'react-native-firebase'
import PropTypes from 'prop-types'

import './config/ReactotronConfig'

import Onboarding from './screens/Onboarding'
import Main from './screens/Main'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // firebase things?
    }
  }

  componentDidMount() {
    // firebase things?
    firebase.messaging().requestPermissions()
  }

  render() {
    return <Onboarding />
    return <Main />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
