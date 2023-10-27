import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from'react-native';
import AppHeader from '../components/AppHeader';


export default class NewsScreen extends React.Component{
  goToHomeScreen=()=>{
    this.props.navigation.navigate("HomeScreen");
  }

  goToNews=()=>{
    this.props.navigation.navigate(window.open("https://www.pinterest.com.au/pin/562175965995122489/"))
  }
  render(){
    return(
      <View>
        <AppHeader />    
        <TouchableOpacity style={styles.button}
                          onPress={this.goToNews}>
           <Text style={styles.buttonText}> Jokes </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={this.goToHomeScreen}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>    
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