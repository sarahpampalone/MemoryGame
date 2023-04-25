import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
##import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; Kate
import Header from './components/Header';
import Score from './components/Score';
import Card from './components/Card';
import helpers from './components/helpers';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.resetCards = this.resetCards.bind(this);
    let sources = {
      'fontawesome': fontAwesome,
      'entypo': Entypo,
      'ionicons': Ionicons
    };
    let cards = [
      src: 'fontawesome',
      name: 'heart',
      color: 'red',
      },
  {
      src: 'entypo',
      name: 'feather',
      color: '#7d4b12'
     },
     {
     src: 'entypo',
     name: 'flower',
     color: '#37b24d'
     },
     {
     src: 'entypo',
     name: 'moon',
     color: '#FF0000'
     },
     {
     src: 'entypo',
     name: 'youtube',
     color: '#FF0000'
     },
     {
     src: 'entypo',
     nanme: 'shop',
     color: '#5f5f5f'
     },
     {
     src: 'fontawesome',
     name: 'github',
     color: '#24292e'
     },
     {
     src: 'fontawesome',
     name: 'skype',
     color: '#1686D9'
     },
     {
     src: 'fontawesome',
     name: 'send',
     color: '#1c7cd6'
     },
     {
     src: 'ionicons',
     name: 'logo-facebook',
     color: '#3C5B9B'
     }
    ];
   }
  }
    
    
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
