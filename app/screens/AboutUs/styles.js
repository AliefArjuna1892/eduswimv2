/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_WHITE,
  COLOR_TRANSPARENT,
  FONT_OVERLINE_PRIMARY,
  FONT_HEADLINE6_PRIMARY,
  FONT_BODY2_PRIMARY,
  COLOR_GREY_LIGHT,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_HEADLINE2_PRIMARY,
  FONT_HEADLINE1_PRIMARY,
  FONT_HEADLINE2_SECONDARY,
  COLOR_GREY_DARK
} from '../../styles';

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  backContainer: {
    backgroundColor: '#5D8CEC',
    height: scale(200),
    borderBottomLeftRadius: scale(18),
    borderBottomRightRadius: scale(18)
  },
  titleContainer: {
    backgroundColor: COLOR_WHITE
  },
  title1Container: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(23),
    marginLeft: scale(24),
    marginRight: scale(24),
    color: COLOR_WHITE,
    marginTop: scale(30)
  },
  title2Container: {
    ...FONT_HEADLINE1_PRIMARY,
    fontSize: scale(15),
    marginLeft: scale(24),
    marginRight: scale(24),
    color: COLOR_WHITE
  },
  title3Container: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(23),
    marginLeft: scale(24),
    marginRight: scale(24),
    color: COLOR_GREY_DARK,
    marginTop: scale(10)
  },
  title4Container: {
    ...FONT_HEADLINE1_PRIMARY,
    fontSize: scale(15),
    marginLeft: scale(24),
    marginRight: scale(24),
    color: COLOR_GREY_DARK
  },
  title5Container: {
    ...FONT_HEADLINE1_PRIMARY,
    fontSize: scale(15),
    marginLeft: scale(24),
    marginRight: scale(24),
    marginBottom: scale(30),
    color: COLOR_GREY_DARK
  },
  logo: {
    width: scale(300),
    height: scale(200),
    marginHorizontal: scale(25)
  }
});

export default styles;
