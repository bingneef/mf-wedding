import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { slides } from '../data/onboardingSlides'
import styles from '../styles/Onboarding'
import { Default, SaveTheDate } from '../components/Onboarding'

export default class Onboarding extends Component {
  _renderItem (props) {
    switch (props.component) {
      case 'SaveTheDate':
        return <SaveTheDate data={props} />
      default:
        return <Default data={props} />
    }
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        doneLabel={null}
        nextLabel={"volgende"}
      />
    )
  }
}
