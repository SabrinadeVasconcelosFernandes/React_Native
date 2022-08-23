import React,{Component} from 'react';
import type {Node} from 'react';
import {Plataform, StyleSheet, Text, View} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Button from './src/components/Button';




export default class App extends Component{
 
  render(){
    return(
      <View style={styles.container}>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

});
