import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Score () {
  return (
    <View  style = {styles.score_container}>
      <Text style = {styles.score}>{this.props.score}</Text>
     </View>
    );
  }
 
const styles = StyleSheet.create({
  score_container: {
  flex: 1,
  alignItems: 'center'
  padding: 10
},
score: {
  fontSize: 40,
  fontWeight: 'bold'
 }
});
