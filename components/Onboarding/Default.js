import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../styles/Onboarding'

export default class Default extends PureComponent {
  render () {
    const { data } = this.props

    const containerStyle = {
      backgroundColor: data.backgroundColor,
      paddingTop: data.topSpacer,
      paddingBottom: data.bottomSpacer,
    }

    return (
      <View style={[styles.mainContent, containerStyle]}>
        <View style={styles.content}>
          <View style={styles.topSection}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.fatTitle}>{data.fatTitle}</Text>
          </View>
          <View style={styles.middleSection}>
            <Image source={data.image} style={styles.image} />
          </View>
          <View style={styles.bottomSection}>
            <Text style={styles.text}>{data.text}</Text>
          </View>
        </View>
      </View>
    )
  }
}
