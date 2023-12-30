import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import SignUp from './Signup';
import {useNavigation} from '@react-navigation/native'

export default function Login() {
    const Stack = useNavigation();
    function signupClick(){
        console.log('inside login')
         Stack.push('Signup')
    }
  return (
    <View className="bg-white h-full w-full">
        <StatusBar style='light'/>
        <Image className='w-full h-full absolute' source={require('../assets/images/bglogin.png')} />
         
      {/* <Text>Login</Text> */}
      <View className="flex justify-around w-full h-full pt-40 pb-10 ">
        {/* title */}
        <View className="flex  items-center">
            <Text className='text-white font-bold tracking-wider text-5xl'>Login</Text> 
        </View>

        {/* form */}
        <View className='flex items-center mx-4 space-y-4'>
            <View className='bg-black/80 p-5 rounded-2xl w-full'>
                <TextInput placeholder='Email' placeholderTextColor={'#FFFFFF66'} style={{color: 'white'}}></TextInput>
            </View>
            <View className='bg-black/80 p-5 rounded-2xl w-full mb-3'>
                <TextInput placeholder='Password' placeholderTextColor={'#FFFFFF66'} secureTextEntry style={{color: 'white'}} ></TextInput>
            </View>
            <View className='w-full'>
                <TouchableOpacity className='w-full bg-black p-3 rounded-2xl mb-3 '>
                    <Text className='text-xl text-white text-center font-bold'>Login</Text>
                </TouchableOpacity>
            </View>

            <View className='flex-row justify-around'>
                <Text className='text-white/80'>Don't have an account?</Text>
                <TouchableOpacity onPress={signupClick}>
                    <Text className='text-blue-900 font-bold'>Create account</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
    
  )
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: { 
      color: 'white', // Set the text color here
       
      
    },
  });