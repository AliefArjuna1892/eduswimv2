/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import IMAGES from '../../configs/images';
import { ENDPOINT } from '../../configs';
import { STORAGE_KEY } from '../../constants';
import storage from '../../utils/storage';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isHidden: true,
      isLoading: false
    };
    this._showPass = this._showPass.bind(this);
  }

  _showPass = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  _forgetPass = () => {
    const { navigation } = this.props;
    navigation.navigate('ForgetPassword');
  };

  _guestMode = () => {
    this.props.navigation.navigate('Menu');
  };

  _signUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  _signin = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      const result = await ENDPOINT.login(params);
      this.setState({ isLoading: true });
      const token = result.access_token;

      if (result.token_type === 'bearer') {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.access_token);
        this.props.navigation.navigate('SessionScreen');
        console.log(token);
      } else {
        ToastAndroid.show(`Failed to register, ${result.message}`, ToastAndroid.LONG);
      }
    } catch (err) {
      ToastAndroid.show(`Network Error: ${err}`, ToastAndroid.LONG);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, email, password, isHidden } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <View style={styles.row}>
          <View style={styles.inputText}>
            <Image source={IMAGES.avatar} resizeMode="contain" style={styles.inputLogo} />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={I18n.t('email')}
              editable
              autoCapitalize="none"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
        </View>
        <View style={styles.inputText1}>
          <Image source={IMAGES.lock} resizeMode="contain" style={styles.inputLogo1} />
          <TextInput
            style={styles.input1}
            underlineColorAndroid="transparent"
            secureTextEntry={isHidden}
            placeholder={I18n.t('password')}
            editable
            autoCapitalize="none"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity onPress={this._showPas} style={styles.showPassLogo}>
            <Image source={IMAGES.hide} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <Text onPress={this._forgetPass} style={styles.forgetPass}>
          {I18n.t('forgetPass')}
        </Text>
        <Button
          customText={styles.outlinedText1}
          customContainer={styles.outlined1}
          title={I18n.t('login')}
          onPress={this._signin}
        />
        <View style={styles.margin} />
        <View style={styles.signContainer}>
          <Text style={styles.signTitle}>{I18n.t('signUp')}</Text>
          <TouchableOpacity onPress={this._signUp}>
            <Text style={styles.signTitle2}>{I18n.t('signUp2')}</Text>
          </TouchableOpacity>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
