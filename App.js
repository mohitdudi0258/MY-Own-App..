import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import WeatherScreen from './screens/WeatherScreen';
import JokeScreen from './screens/JokeScreen';
import HoroscopeScreen from './screens/HoroscopeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
       <AppContainer/>
      </View>
    );
  }
}

var AppNavigator =createSwitchNavigator({
  HomeScreen: HomeScreen,
  NewsScreen: NewsScreen,
  WeatherScreen: WeatherScreen,
  JokeScreen: JokeScreen,
  HoroscopeScreen: HoroscopeScreen
})

const AppContainer = createAppContainer(AppNavigator);

