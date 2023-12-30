import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function index() {
  return (
    <View style={styles.container}> 
      <TouchableOpacity style={styles.menu} >
        <Image
          source={require('../../../assets/icons/menu.png')}
          style={{width: 35 , height: 35}}
        />
    </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252D38', // Set your desired background color
  },
  menu: { 
    top: 40,
    left: 15,
    padding: 10,
},
});