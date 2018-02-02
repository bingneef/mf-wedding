import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
})

const slides = [
  {
    key: 'somethun',
    title: 'Save the date!',
    text: 'Welkom bij de bruiloft van\nMaaike en Floris',
    image: require('../assets/onboarding/1.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: {uri: 'https://placehold.it/200x200'},
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: {uri: 'https://placehold.it/200x200'},
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
]

export default class Onboarding extends Component {
  _onDone = () => {
    // User finished the introduction. Show "real" app
  }
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
      />
    )
  }
}
