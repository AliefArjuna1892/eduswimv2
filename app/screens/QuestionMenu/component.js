import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Picker,
 
} from "react-native";
 
import Question from '../../components/elements/Question';
import Button from "react-native-button";
 
export default class Questions extends React.Component {
     
  goToHome = () => this.props.navigation.navigate('Menu');
 
  constructor(props) {
   
    super(props);
 
    this.state = {
      loading: false,
      questions: [],
      Nilai:'',
      current: 0,
      correctScore: 5,
      totalScore: 50,
 
      results: {
        score: 0,
        correctAnswers: 0
      },
      completed: false
    };
  }
 
  fetchQuestions = async () => {
    await this.setState({ loading: true });
    const response = await fetch(
      'http://ec2-3-86-96-130.compute-1.amazonaws.com/api/quiz1'
    );
    const questions = await response.json();
 
    const  results  = questions;
 
    results.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });
 
    await this.setState({ questions: results, loading: false });
  };
 
  reset = () => {
    this.setState(
      {
        questions: [],
        current: 0,
        results: {
          score: 0,
          correctAnswers: 0
        },
        completed: false
      },
      () => {
        this.fetchQuestions();
      }
    );
  };
  
  submitAnswer = (index, answer) => {
    const question = this.state.questions[index];
    const isCorrect = question.correct_answer === answer;
    const results = { ...this.state.results };
 
    results.score = isCorrect ? results.score + 4 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;
       
     
 
    this.setState({
      current: index + 1,
      results,
      completed: index === 24 ? true : false
    });
  };
 
  componentDidMount() {
    this.fetchQuestions();
  }
 
  render() {
   
    return (
      <View style={styles.container}>
        {!!this.state.loading && (
          <View style={styles.loadingQuestions}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Please wait while we are loading questions for you</Text>
          </View>
        )}
 
        {!!this.state.questions.length > 0 &&
          this.state.completed === false && (
            <Question
              onSelect={answer => {
                this.submitAnswer(this.state.current, answer);
              }}
              question={this.state.questions[this.state.current]}
              correctPosition={Math.floor(Math.random() * 3)}
              current={this.state.current}
            />
          )}
 
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.completed === true && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
              <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
              <Text>
                Incorrect Answers: {25 - this.state.results.correctAnswers}
              </Text>
              <Text>Total Score: {100}</Text>
              <Text>Obtained Score: {this.state.results.score}</Text>
              <Button
                   containerStyle={styles.loginContainer}
                   style={styles.loginText}
                   onPress={this.reset}
                 >
                   <Text style={{color:'#fff',fontFamily:'NunitoSans-Regular',fontSize:15,textAlign:'center'}}>Restart Quiz</Text>
                 </Button>
              <Button
                   containerStyle={styles.loginContainer}
             
                   onPress={this.goToHome}
                 >
                   <Text style={{color:'#fff',fontFamily:'NunitoSans-Regular',fontSize:15,textAlign:'center'}}>Exit Quiz</Text>
                 </Button>
            </View>
          )}
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%"
  },
  loginContainer: {
 
    backgroundColor: '#A665A9',
    alignSelf:'center',
    borderRadius:25,
    paddingVertical:20,
    width:200,
    marginTop: 30
  },
  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loginText: {
    color: '#fff',
    fontFamily:'NunitoSans-Regular'
  },
});