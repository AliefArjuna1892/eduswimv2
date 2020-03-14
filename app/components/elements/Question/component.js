/* eslint-disable no-unused-expressions */
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert, Image } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Button from "react-native-button";
import Modal from 'react-native-modal';
import styles from '../Question/styles';

export default class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: null,
      pembahasan: '',
      correct_answer: '',
      isModalVisible: false
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  openModal = () => {
    console.log(this.state.correct_answer);
    this.setState({ answer: null });
    if (this.state.answer === null) {
      Alert.alert('Diisi dulu gan');
    } else if (this.state.answer === this.state.correct_answer) {
      this.props.onSelect(this.state.answer);
      this.setState({ answer: null });
    } else {
      this.setState({
        isModalVisible: true
      });
    }
  };
  closeModal = () => {
    this.setState({
      isModalVisible: false
    });
  };
  next = () => {
    this.setState({
      isModalVisible: false
    }),
      this.props.onSelect(this.state.answer);
  };
  renderOptions = question => {
    this.state.correct_answer = question.correct_answer;
    this.state.pembahasan = question.pembahasan;
    if (question.type === 'boolean') {
      console.log(question);
      return [
        <RadioButton value="True" key={1}>
          <Text style={styles.radioText}>True</Text>
        </RadioButton>,

        <RadioButton value="False" key={2}>
          <Text style={styles.radioText}>False</Text>
        </RadioButton>
      ];
    }

    const result = [];
    console.log(question);
    const incorrect = JSON.parse(question.incorrect_answers);

    incorrect.forEach((item, index) => {
      const key = `${question.id}-${index}`;

      if (index === this.props.correctPosition) {
        const key2 = `${question.id}-100`;
        result.push(
          <RadioButton
            value={question.correct_answer}
            key={key2}
            style={{ backgroundColor: '#5D8CEC', borderRadius: 10, marginTop: 15 }}
          >
            <Text style={styles.radioText}>{question.correct_answer}</Text>
          </RadioButton>
        );
      }

      result.push(
        <RadioButton
          value={item}
          key={key}
          style={{ backgroundColor: '#5D8CEC', borderRadius: 10, marginTop: 15 }}
        >
          <Text style={styles.radioText}>{item}</Text>
        </RadioButton>
      );
    });

    return result;
  };

  render() {
    return (
        <View style={{ flex: 1, padding: 12 }}>
          <Text
            style={{
              fontSize: 25,
              color: '#5D8CEC',
              textAlign: 'right',
              fontFamily: 'NunitoSans-Bold',
              textAlign: 'left',
              marginTop: '10%'
            }}
          >
            Question {this.props.current + 1} of 25
          </Text>

          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#585858', marginVertical: '8%' }}>
            {this.props.question.question}
          </Text>
          <RadioGroup
            onSelect={(index, answer) => this.setState({ answer })}
            selectedIndex={this.state.answer}
            alignSelf="flex-end"
            thickness={2}
            color="#FFFFFF"
            highlightColor="#5D8CEC"
          >
            {this.renderOptions(this.props.question)}
          </RadioGroup>

          <Button containerStyle={styles.loginContainer} style={styles.loginText} onPress={this.openModal}>
            <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Lanjut</Text>
          </Button>
          <Modal
            isVisible={this.state.isModalVisible}
            style={{ width: '100%', height: 20 }}
            onBackdropPress={() => this.setState({ isVisible: false })}
            onSwipeComplete={() => this.setState({ isVisible: false })}
            swipeDirection="left"
            onRequestClose={this.closeModal}
          >
            <View
              style={{
                backgroundColor: '#5D8CEC',
                justifyContent: 'center',
                flex: 1,
                position: 'absolute',
                width: 320,
                padding: 10
              }}
            >
              {/* <Image
                source={require('../../Home/pictures/emot.png')}
                style={{ width: 60, height: 60, bottom: '15%' }}
              /> */}
              <Text
                style={{ textAlign: 'center', bottom: '25%', fontFamily: 'NunitoSans-Regular', fontSize: 20 }}
              >
                Punten salah hehe..
              </Text>
              <Text style={{ fontFamily: 'NunitoSans-Regular', fontSize: 15 }}>{this.state.pembahasan}</Text>
              <Button containerStyle={styles.next} style={styles.radioText} onPress={this.next}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#000',
                    justifyContent: 'center',
                    fontFamily: 'NunitoSans-Regular'
                  }}
                >
                  Lanjut
                </Text>
              </Button>
            </View>
          </Modal>
        </View>
      // </ImageBackground>
    );
  }
}
