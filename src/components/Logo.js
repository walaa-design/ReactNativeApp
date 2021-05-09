import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Image style={{width:350, height:300}}
            source={require('../images/Logo.png')}/>
            <Text style={styles.logoText}>Bienvenue</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoText : {
        marginVertical: 5,
        fontSize:18,
        color:'rgba(0, 0, 0, 1)'
    }
  });