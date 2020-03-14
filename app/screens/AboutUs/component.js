/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable import/extensions */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/first */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import { View, Text, TouchableOpacity, Share, StatusBar, Image, ScrollView } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import styles from './styles';
// import { IMAGES } from '../../configs';
import Love from '../../../assets/svgs/Love';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import { COLOR_TRANSPARENT, COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import I18n from '../../i18n';
import { scale } from '../../utils/scaling';
import images from '../../configs/images';
import { IMAGES } from '../../configs';
// import arrays from '../../constants/arrays';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.titleContainer}>
            <View style={styles.backContainer}>
              <Header containerStyle={{ backgroundColor: '#5D8CEC' }} />
              <Text style={styles.title1Container}>{I18n.t('descAbout')}</Text>
              <Text style={styles.title2Container}>{I18n.t('descAbout1')}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title3Container}>{I18n.t('descAbout2')}</Text>
            <Text style={styles.title4Container}>{I18n.t('descAbout3')}</Text>
          </View>
          <View>
            <Image source={IMAGES.foto} resizeMode="contain" style={styles.logo} />
          </View>
          <View>
            <Text style={styles.title4Container}>{I18n.t('descAbout4')}</Text>
            <Text style={styles.title4Container}>{I18n.t('descAbout5')}</Text>
            <Text style={styles.title4Container}>{I18n.t('descAbout6')}</Text>
            <Text style={styles.title4Container}>{I18n.t('descAbout7')}</Text>
            <Text style={styles.title4Container}>{I18n.t('descAbout8')}</Text>
            <Text style={styles.title4Container}>{I18n.t('descAbout9')}</Text>
            <Text style={styles.title5Container}>{I18n.t('descAbout10')}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
