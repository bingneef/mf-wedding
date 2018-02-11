import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  image: {
    width: 240,
    height: 240,
  },
  topSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  middleSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  bottomSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, .9)',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 36,
    color: 'rgba(255, 255, 255, .9)',
    fontWeight: '300',
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  fatTitle: {
    fontSize: 36,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    paddingHorizontal: 16,
    textAlign: 'center',
    paddingBottom: 24,
  }
})
