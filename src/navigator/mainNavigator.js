import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile191295Navigator from '../features/UserProfile191295/navigator';
import Settings191294Navigator from '../features/Settings191294/navigator';
import Settings191292Navigator from '../features/Settings191292/navigator';
import SignIn2191290Navigator from '../features/SignIn2191290/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile191295: { screen: UserProfile191295Navigator },
Settings191294: { screen: Settings191294Navigator },
Settings191292: { screen: Settings191292Navigator },
SignIn2191290: { screen: SignIn2191290Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
