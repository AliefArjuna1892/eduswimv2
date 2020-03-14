import { StyleSheet } from 'react-native';

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

export default styles;
