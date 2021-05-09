import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'
import navigation from '../config/navigation';


export default ({navigation}) => {
    render() ;{
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupTextCont : {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 20,
      flexDirection:'row'
    },
    signupText:{
        color:'#000000',
        fontSize: 14
    },
    signupButton: {
        color:'#000000',
        fontSize: 15,
        fontWeight:'600'
    }
  });