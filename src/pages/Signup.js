import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'

export default class Signup extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Signup"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <Text style={styles.signupButton}> Sign in</Text>
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