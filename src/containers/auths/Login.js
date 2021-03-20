import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Touchable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    login = () => {
        const { email, password } = this.state
        var dataToSend = { email: email, password: password };
        //making data to send on server
        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        //POST request 
        fetch('http://restful-api-laravel-7.herokuapp.com/api/login', {
            method: "POST",//Request Type 
            body: formBody,//post body 
            headers: {//Header Defination 
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.token)
                let data = {
                    role: 1,
                    token : responseJson.token
                }
                
                if(data.role == 1){
                    const jsonValue = JSON.stringify(data)
                    AsyncStorage.setItem('token', jsonValue)
                    this.props.navigation.replace('NavMember')
                }else if(data.role == 2){
                    const jsonValue = JSON.stringify(data)
                    AsyncStorage.setItem('token', jsonValue)
                    this.props.navigation.replace('NavAdmin')
                }else{
                    alert('Email atau Password Salah')
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder='email'
                    style={{ width: '90%' }}
                    onChangeText={(email) => this.setState({ email: email })}
                />
                <TextInput
                    placeholder='password'
                    style={{ width: '90%' }}
                    onChangeText={(password) => this.setState({ password: password })}
                />
                <Text>{this.state.email}</Text>
                <Text>{this.state.password}</Text>
                <TouchableOpacity onPress={() => this.login()}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Login;