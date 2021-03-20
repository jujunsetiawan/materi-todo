import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            token : ''
        };
    }

   componentDidMount(){
        // try {
        //     const value = AsyncStorage.getItem('token')
        //     if(value !== null) {
        //         const VALUE = JSON.parse(value)
        //         console.log(VALUE)
        //         this.setState({token:token})
           
        //     }
        //   } catch(e) {
        //     Alert('Token Tidak Ada')
        //     AsyncStorage.clear()
        //     this.props.navigation.replace('NavAuth')
        //   }

        //   setTimeout(() => {
            this.getData()
        // }, 6000);
    }


    getData = () => {
        alert()
        console.log('this.state.token')
        // fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/',{
        //     method: 'GET', //Request Type
        //     headers: {
        //       //Header Defination
        //       Authorization: 'Bearer ',
        //       'Content-Type': 'application/json',
        //     }
        // })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Text style={{ fontSize: 20 }} onPress={() => {
                    AsyncStorage.clear()
                    this.props.navigation.replace('NavAuth')
                }}>Logout</Text>
            </View>
        );
    }
}

export default Home;