import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button,Input,Text} from 'react-native-elements';
import{auth} from "../firebase"

const RegisterScreen = ({navigation}) => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[imageUrl,setImageUrl]=useState("")
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Back To Login"
        })
        
    }, [navigation])
    const register=()=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser=>{
            authUser.user.updateProfile({
                displayName:name,
                photoURL:imageUrl|| "https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png"
            })
        })
        .catch(error=>alert(error.message))
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar status="light"/>
            <Text h3 style={{marginBottom:50}}>Create an Account</Text>
            <View style={styles.inputContainer}>
                <Input type="text" placeholder="Full Name" autoFocus value={name} onChangeText={text=>setName(text)}/>
                <Input type="email" placeholder="Email"  value={email} onChangeText={text=>setEmail(text)}/>
                <Input type="password" secureTextEntry placeholder="Password"  value={password} onChangeText={text=>setPassword(text)}/>
                <Input type="text" placeholder="Profile Pic URL(optional)"  value={imageUrl} onChangeText={text=>setImageUrl(text)}
                onSubmitEditing={register}
                />
            </View>
            <Button title="Register" onPress={register} raised containerStyle={styles.button}/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white"
    },
    button:{
        width:200,
        marginTop:10
    },
    inputContainer:{
        width:300
            },
})
