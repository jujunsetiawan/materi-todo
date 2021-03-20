import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Touchable } from 'react-native'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email: '',
            password: '',
            password_confirmation : ''
        };
    }

    Register = () => {
        const { name, email, password, password_confirmation } = this.state
        var dataToSend = { name : name, email: email, password: password, password_confirmation: password_confirmation };
        //making data to send on server
        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        //POST request 
        fetch('http://restful-api-laravel-7.herokuapp.com/api/register', {
            method: "POST",//Request Type 
            body: formBody,//post body 
            headers: {//Header Defination 
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert('sukses register')
                this.props.navigation.goBack()
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder='Nama Lengkap'
                    style={{ width: '90%' }}
                    onChangeText={(name) => this.setState({ name: name })}
                />
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
                <TextInput
                    placeholder='ulangi password'
                    style={{ width: '90%' }}
                    onChangeText={(password_confirmation) => this.setState({ password_confirmation: password_confirmation })}
                />
                <Text>{this.state.email}</Text>
                <Text>{this.state.password}</Text>
                <TouchableOpacity onPress={() => this.Register()}>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Kembali</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Register;