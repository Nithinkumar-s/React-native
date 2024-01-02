import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react' 
import { TouchableOpacity } from 'react-native-gesture-handler';
import customColors from '../../../assets/styles/colors';

export default function Settings() {
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
    menu: { 
        top: 40,
        left: 15,
        padding: 10,
    },
  });