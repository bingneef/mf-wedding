import React, { Component } from 'react'
import { View, Text, Image, Button } from 'react-native'
import RNCalendarEvents from 'react-native-calendar-events'
import styles from '../../styles/Onboarding'
import firebase from 'react-native-firebase'
import { Sentry } from 'react-native-sentry'
import Toast from 'react-native-toast-native'

const calendarData = {
  title: 'Bruiloft Maaike & Flo',
  options: {
    location: 'TBA',
    notes: 'Meer informatie volgt',
    description: 'Meer informatie volgt',
    startDate: '2018-09-07T00:00:00.000Z',
    endDate: '2018-09-07T23:59:59.000Z',
    allDay: true,
  }
}

export default class SaveTheDate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAddToCalendar: false,
    }
  }

  async componentDidMount() {
    let showAddToCalendar = true
    try {
      const { options, title } = calendarData
      const eventsThatDay = await RNCalendarEvents.fetchAllEvents(options.startDate, options.endDate)
      for (let event of eventsThatDay) {
        if (event.title === title) {
          showAddToCalendar = false
          break
        }
      }

      this.setState({showAddToCalendar})
    } catch (e) {
      console.log(e)
    }
  }

  async addToCalendar () {
    try {
      const { options, title } = calendarData
      const status = await RNCalendarEvents.authorizeEventStore()
      if (status !== 'authorized') {
        // Toast.show('Geen permissie..')
        return
      }

      const eventsThatDay = await RNCalendarEvents.fetchAllEvents(options.startDate, options.endDate)
      for (let event of eventsThatDay) {
        if (event.name === title) {
          // Toast.show('Al eerder toegevoegd!')
          // set to config
          return
        }
      }

      const eventId = await RNCalendarEvents.saveEvent(title, options)

      if (eventId) {
        // Toast.show('Toegevoegd aan de kalender!')
        // Set to config
        firebase.analytics().logEvent('add_to_calendar', true)
      } else {
        // Toast.show('Toevoegen mislukt..')
      }
    } catch (e) {
      // Toast.show('Oeps, er is iets foutgegaan')
      Sentry.captureException(e)
    }
  }

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

            { this.state.showAddToCalendar && (
              <Button onPress={() => this.addToCalendar()} title="Toevoegen aan kalender" />
            )}

          </View>
        </View>
      </View>
    )
  }
}
