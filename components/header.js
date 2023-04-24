import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style = {styles.header}>
      <Text style = {styles.header_text}>MemoryGame</Text>
  </View>
);
}

const styles = Style.Sheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 5,
    
