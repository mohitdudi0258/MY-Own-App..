import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.textContainer}>
        <Text style={styles.text}>Today's Update </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  textContainer: {
    backgroundColor: "deepskyblue",
    marginTop: 40
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#ffffff",
    textAlign: "center",
    padding: 20

  }
})

export default AppHeader;