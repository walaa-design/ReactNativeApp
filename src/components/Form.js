import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class Login extends Component {
    
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)'
                 placeholder="Email"
                 placeholderTextColor = "#040e16"
                 />
                 <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)'
                 placeholder="Mot de passe"
                 secureTextEntry={true}
                 placeholderTextColor = "#040e16"
                 />
                 <TouchableOpacity style={styles.button}>
                     <Text style={styles.buttonText}>{this.props.type}</Text>
                 </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
        width:300,
        backgroundColor:'rgb(212, 232, 247)',
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#000000',
        paddingVertical: 6,
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'rgba(0, 176, 255, 1)',
        borderRadius: 20,
        marginVertical: 20,
        paddingVertical: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight:'500',
        color:'#000000',
        textAlign:'center'
    }
  });