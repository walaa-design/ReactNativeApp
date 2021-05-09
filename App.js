import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Navigation from "./src/config/navigation"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
       backgroundColor="#ffffff"
       barStyle="light-content"
      />
     <Navigation/>
    </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
