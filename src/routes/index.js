import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from '../containers/auths/Splashscreen'
import NavAuth from './navAuth'
import NavAdmin from './navAdmin'
import NavMember from './navMember'

const Stack = createStackNavigator();

const navRoot = () => {
    return(
        <Stack.Navigator headerMode={true}>
            <Stack.Screen name='Splashscreen' component={Splashscreen} />
            <Stack.Screen name='NavAuth' component={NavAuth} />
            <Stack.Screen name='NavAdmin' component={NavAdmin} />
            <Stack.Screen name='NavMember' component={NavMember} />
        </Stack.Navigator> 
    )
}
export default navRoot