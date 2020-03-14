/* eslint-disable no-unused-vars */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Account from '../../../../assets/svgs/Account';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('AboutUs');
  };

  render() {
    const { active } = this.props;
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <Account active={active} />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  active: PropTypes.bool
};

Component.defaultProps = {
  active: false
};

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
