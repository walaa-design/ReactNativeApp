import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import Login  from "../pages/Login";
import Signup  from "../pages/Signup";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
<AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login}/>
    <AuthStack.Screen name="Signup" component={Signup}/>
</AuthStack.Navigator>
);
export default () => (
    <NavigationContainer>
        <AuthStackScreen/>
    </NavigationContainer>
);