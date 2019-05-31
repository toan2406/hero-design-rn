import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Home';
import routes from './routes';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Hero Design RN Sandbox',
      },
    },
    ...routes,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
