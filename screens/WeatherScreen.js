import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from'react-native';
import AppHeader from '../components/AppHeader';
import axios from 'axios';

export default class WeatherScreen extends React.Component{
  constructor(){
    super();
    this.state={
      weather: ''
    }
  }

  getWeather=async()=>{
    var response = await fetch("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139");
    var responseJSON = await response.json();
    this.setState({
      weather: responseJSON
    })
  }

  componentDidMount=()=>{
    this.getWeather();
  }
  goToHomeScreen=()=>{
    this.props.navigation.navigate("HomeScreen");
  }
  render(){
    if(this.state.weather === ''){
      return(
        <View>
          <AppHeader />   
          <View style={[styles.buttonText, {margin: 30}]}>
            <Text>Loading . . .</Text>
          </View> 
          <TouchableOpacity style={styles.button}
            onPress={this.goToHomeScreen}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>     
        </View>
      );  
    } else {
      return(
        <View>
          <AppHeader />   
          <View style={styles.buttonText}>
            <Text style={{marginTop: 20}}>Weather : {this.state.weather.weather[0].description}</Text>
            <Text style={{marginTop: 20}}>Wind Speed : {this.state.weather.wind.speed}</Text>
            <Text style={{marginTop: 20}}>Temperature : {this.state.weather.main.temp}</Text>
            <Text style={{marginTop: 20}}>Min Temperature : {this.state.weather.main.temp_min}</Text>
            <Text style={{marginTop: 20}}>Max Temperature : {this.state.weather.main.temp_max}</Text>
            <Text style={{marginTop: 20}}>Pressure : {this.state.weather.main.pressure}</Text>
            <Text style={{marginTop: 20}}>Humidity : {this.state.weather.main.humidity}</Text>
          </View> 
          <TouchableOpacity style={styles.button}
            onPress={this.goToHomeScreen}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>     
        </View>
      )
    }
  }
}

const styles=StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: 50,
    width: 150,
    height: 50,
    backgroundColor: '#48C9B0'
  },

  buttonText:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
})