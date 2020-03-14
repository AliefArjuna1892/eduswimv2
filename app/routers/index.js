import { SwitchNavigator } from 'react-navigation';
import { MenuStack, SplashScreenStack, UserAuthStack, SessionScreenStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    App: Drawer,
    Menu: MenuStack,
    SplashScreen: SplashScreenStack,
    SessionScreen: SessionScreenStack,
    SignIn: UserAuthStack,
    SignUp: UserAuthStack,
    AboutUs: MenuStack,
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
