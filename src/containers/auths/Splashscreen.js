import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


class Splashscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role : 0
        };
    }
    // role 1 untuk member
    // role 2 untuk admin

    async componentDidMount() {

        try {
            const value = await AsyncStorage.getItem('token')
            if(value !== null) {
                const VALUE = JSON.parse(value)
                // console.log(VALUE)
                if(VALUE.role == 1){
                    this.props.navigation.replace('NavMember')
                }else if(VALUE.role == 2){
                    this.props.navigation.replace('NavAdmin')
                }else{
                    this.props.navigation.replace('NavAuth')
                }
            }else{
                this.props.navigation.replace('NavAuth')
            }
          } catch(e) {
            this.props.navigation.replace('NavAuth')
          }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' color='red' />
                <Text>Splashscreen</Text>
            </View>
        );
    }
}

export default Splashscreen;