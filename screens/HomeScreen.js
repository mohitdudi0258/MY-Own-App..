import * as React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state={
      likes: 0,
      dislikes: 0
    }
  }

  goToNewsScreen=()=>{
    this.props.navigation.navigate("NewsScreen");
  }

  goToWeatherScreen=()=>{
    this.props.navigation.navigate("WeatherScreen");
  }

  goToJokeScreen=()=>{
    this.props.navigation.navigate("JokeScreen");
  }

  goToHoroscopeScreen=()=>{
    this.props.navigation.navigate("HoroscopeScreen");
  }

  isLikePressed(){
    var likes=db.ref("sections/");
    likes.update({
      'likes': 1
    })
  }

  likeCount=()=>{
    this.setState({likes: this.state.likes + 1})
  }

  isDislikePressed(){
    var likes=db.ref("sections/");
    likes.update({
      'dislikes': 1
    })   
  }

  dislikeCount=()=>{
    this.setState({dislikes: this.state.dislikes + 1})
  }

  render(){
    return(
      <View>
        <AppHeader />
        <TouchableOpacity style={styles.button}
          onPress={this.goToNewsScreen}>
          <Text style={styles.buttonText}>Top News</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={this.goToWeatherScreen}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={this.goToJokeScreen}>
          <Text style={styles.buttonText}>Jokes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={this.goToHoroscopeScreen}>
          <Text style={styles.buttonText}>Horoscopes</Text>
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <Text style={styles.rateText}>Rate Us</Text>
          <Text style={{marginLeft: -120, marginBottom: 10}}>{this.state.likes}</Text>
          <Text style={{marginLeft: 120, marginBottom: 10, marginTop: -25}}>{this.state.dislikes}</Text>
          <TouchableOpacity onPress={this.likeCount}>
            <Image
              style={styles.thumbsUp}
              source={require('../assets/thumbsup.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.dislikeCount}>
            <Image 
              style={styles.thumbsDown} 
              source={require('../assets/thumbsdown.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: 40,
    width: 150,
    height: 50,
    backgroundColor: '#48C9B0'
  },

  buttonText:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },

  thumbsUp: {
    marginLeft: -90,
    width: 50,
    height: 50,
  },

  thumbsDown: {
    marginTop: -35,
    marginLeft: 120,
    width: 50,
    height: 50,
  },

  rateText:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
  ratingContainer:{
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }

})
