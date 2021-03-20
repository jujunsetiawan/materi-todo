import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {Login, Register, Splashscreen} from "../containers/auths/";
import NavAdmin from './navAdmin'
import NavMember from './navMember'

const Stack = createStackNavigator();

const navAuth = () => {
    return(
        <Stack.Navigator headerMode={true}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Splashscreen' component={Splashscreen} />
            <Stack.Screen name='NavAdmin' component={NavAdmin} />
            <Stack.Screen name='NavMember' component={NavMember} />
        </Stack.Navigator> 
    )
}
export default navAuth