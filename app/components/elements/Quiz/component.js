/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import AnimaButton from '../AnimaButton';
import I18n from '../../../i18n';
import { COLOR_TRANSPARENT } from '../../../styles';
import { ENDPOINT } from '../../../configs';

let quiz1 = [];
let qshuffle;

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;

    this.state = {
      question: '',
      options: [],
      correct_answer: '',
      pembahasan: '',
      countCheck: 0
    };
  }

  componentDidMount() {
    this._pushoption();

    this._loadQuiz();
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  next() {
    if (this.qno < quiz1.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: quiz1[this.qno].question,
        // options: quiz1[this.qno].options,
        correct_answer: quiz1[this.qno].correct_answer,
        incorrect_answers: quiz1[this.qno].incorrect_answers,
        pembahasan: quiz1[this.qno].pembahasan
      });
    } else {
      this.props.quizFinish((this.score * 100) / 25);
    }
  }

  _answer(status, ans) {
    if (status === true) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count });
      if (ans === this.state.correctoption) {
        this.score += 1;
      }
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count });
      if (this.state.countCheck < 1 || ans === this.state.correctoption) {
        this.score -= 1;
      }
    }
  }

  _loadQuiz = async () => {
    try {
      await this.setState({ isLoading: true });
      const result = await ENDPOINT.quiz();
      quiz1 = result;
      console.log(quiz1);

      this.setState({ question: quiz1[this.qno].question });
      // this.setState({options: quiz[this.qno].options});
      this.setState({ correct_answer: quiz1[this.qno].correct_answer });
      this.setState({ incorrect_answers: quiz1[this.qno].incorrect_answers });
      this.setState({ options: quiz1[this.qno].incorrect_answers });

      qshuffle = quiz1[this.qno].incorrect_answers;
      qshuffle.push(quiz1[this.qno].correct_answer);
      // this.state.options.push(quiz1[this.qno].correct_answer);
      console.log(this.state.options);
      console.log(this.state.correct_answer);
      qshuffle = this.shuffle(this.state.options);
      console.log(qshuffle);
      console.log(this.state.question);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  _pushoption = () => {
    console.log('ini push option');
    this.state.options.push(this.state.correct_answer);
    console.log(this.state.options);
  };

  render() {
    const _this = this;
    // const currentOptions = this.state.options;
    // const options = Object.keys(currentOptions).map(k => (
    //   <View key={k} style={{ margin: 15 }}>
    //     <AnimaButton
    //       countCheck={_this.state.countCheck}
    //       onColor="green"
    //       effect="tada"
    //       _onPress={status => _this._answer(status, k)}
    //       text={currentOptions[k]}
    //     />
    //   </View>
    // ));

    return (
      <ScrollView style={{ backgroundColor: COLOR_TRANSPARENT }}>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View style={styles.oval}>
              <Text style={styles.welcome}>{this.state.question}</Text>
            </View>
            {/* <View>{options}</View> */}
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.next()}>
                <View
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    paddingLeft: 20,
                    borderRadius: 10,
                    backgroundColor: '#35A97D'
                  }}
                >
                  <Icon name="md-arrow-round-forward" size={30} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
