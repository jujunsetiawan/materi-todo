import React from "react"
import {Home, Profile} from "../containers/members";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const navTab = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator> 
    )
}
export default navTab