/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Dimensions } from 'react-native';
import { scale } from '../../../utils/scaling';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: '#5D8CEC'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  quizText: {
    fontSize: scale(30),
    textDecorationColor: '#FFFFFF'
  }
});

export default styles;
