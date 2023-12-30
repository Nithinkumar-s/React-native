import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert  } from 'react-native'
import React , { useState }from 'react'
import { StatusBar } from 'expo-status-bar' 
import {useNavigation} from '@react-navigation/native'

export default function SignUp() {
    const [inputValues, setInputValues] = useState({
        Email: '',
        password: '',
        cpassword: '',
        // Add more inputs as needed
      });

      const [validationError, setValidationError] = useState('');
      const [validationErrorpassword, setValidationErrorp] = useState('');
      const [validationErrorcpassword, setValidationErrorcp] = useState('');

      const handleInputChange = (inputName, text) => {
        setInputValues((prevValues) => ({
          ...prevValues,
          [inputName]: text,
        }));
      };

    const Stack = useNavigation();

    function signupClick(){
        console.log('inside signup')
        if (isValidEmail(inputValues.Email)) {
            // Valid email, perform your save logic
            console.log('Email is valid:', inputValues.Email);
            setValidationError('');
            if(isPasswordMatching(inputValues.password,inputValues.cpassword)){
                console.log('password matched')
                 //code for saving creds to local storage or cloud
                 Alert.alert(
                    'Account Created',
                    'Your account has been successfully created!',
                    [{ text: 'OK', onPress: () => Stack.push('Login') }]
                  );
            }
            else
                console.log('password didnt match')
        } else {
            // Invalid email, show an error message
            setValidationError('Please enter a valid email address.');
          }
       console.log(inputValues)
        

        //  Stack.push('Login')'
    }

    function isPasswordMatching(pass,cpass){    

        if(pass.length > 7 && cpass.length > 7){
            
            if(pass === cpass){
                setValidationErrorp(''); 
                setValidationErrorcp('');
                return true
            }
            else{
                setValidationErrorp('Passwords didn\'t match'); 
                setValidationErrorcp('Passwords didn\'t match'); 
            }
        }
        else{
            console.log(pass.length)
            if(pass.length > 7)
            { 
                setValidationErrorp('');
            }
            else{
                setValidationErrorp('Password must be atleat 8 characters'); 
                console.log(validationErrorpassword+'sss')
            }
             

            if(cpass.length > 7)
            {
                setValidationErrorcp('');
                 
            }
            else{
                setValidationErrorcp('Password must be atleat 8 characters'); 
                console.log(validationErrorpassword+'sss')  
            }
            
        return false
        }
    }

    const isValidEmail = (email) => {
        // Simple email validation using a regular expression
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };


  return (
    <View className="bg-white h-full w-full">
        <StatusBar style='light'/>
        <Image className='w-full h-full absolute' source={require('../assets/images/bglogin.png')} />
         
      {/* <Text>Login</Text> */}
      <View className="flex justify-around w-full h-full pt-40 pb-10 ">
        {/* title */}
        <View className="flex  items-center">
            <Text className='text-white font-bold tracking-wider text-5xl'>SignUp</Text> 
        </View>

        {/* form */}
        <View className='flex items-center mx-4 space-y-4'>
            <View className='bg-black/80 p-5 rounded-2xl w-full'>
                <TextInput placeholder='Email' placeholderTextColor={'#FFFFFF66'} style={{color: 'white'}} 
                onChangeText={(text) => handleInputChange('Email', text)}
                value={inputValues.Email}
                
                keyboardType="email-address">
                
                </TextInput>
                {validationError !== '' && <Text style={{ color: 'red', opacity:.4}} >{validationError}</Text>}
            </View>
            <View className='bg-black/80 p-5 rounded-2xl w-full mb-3'>
                <TextInput placeholder='Password' placeholderTextColor={'#FFFFFF66'} secureTextEntry style={{color: 'white'}}  
                    onChangeText={(text) => handleInputChange('password', text)}
                    value={inputValues.password}>
                </TextInput>
                {validationErrorpassword !== '' && <Text style={{ color: 'red', opacity:.4}} >{validationErrorpassword}</Text>}
            </View>
            <View className='bg-black/80 p-5 rounded-2xl w-full mb-3'>
                <TextInput placeholder='Confirm Password' placeholderTextColor={'#FFFFFF66'} secureTextEntry style={{color: 'white'}}  
                    onChangeText={(text) => handleInputChange('cpassword', text)}
                    value={inputValues.cpassword}>
                </TextInput>
                {validationErrorcpassword !== '' && <Text style={{ color: 'red', opacity:.4}} >{validationErrorcpassword}</Text>}
            </View>
            <View className='w-full'>
                <TouchableOpacity className='w-full bg-black p-3 rounded-2xl mb-3 ' onPress={signupClick}>
                    <Text className='text-xl text-white text-center font-bold'>SignUp</Text>
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