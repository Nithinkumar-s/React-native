import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router' 
import { TouchableOpacity } from 'react-native-gesture-handler'  
import customColors from '../../../assets/styles/colors'

 

export default function index() {
  return (
    <View style={styles.container}>  
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.secondary.toString(), // Set your desired background color
  }, 
  Menuicons:{ 
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 30,
    paddingTop: 55

  }
});