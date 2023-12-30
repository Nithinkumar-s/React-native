import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router' 
import { TouchableOpacity } from 'react-native-gesture-handler'

 

export default function index() {
  return (
    <View style={styles.container}> 
    <View style={styles.Menuicons}>
        {/* menuicon */}
      <TouchableOpacity style={styles.menu} >
      <Image
            source={require('../../assets/icons/menu.png')}
            style={{width: 40 , height: 40}}
          />
      </TouchableOpacity> 

      {/* expense add icon */}
      <TouchableOpacity style={styles.expense} >
      <Image
            source={require('../../assets/icons/wallet.png')}
            style={{width: 45 , height: 45}}
          />
      </TouchableOpacity> 

    </View>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252D38', // Set your desired background color
  },
  // menu: { 
  //   top: '100%',
  //   left: '5%',
  //   padding: 10,
  //   paddingTop: 5
  // },
  // expense: { 
  //   top: '10%',
  //   left: '80%',
  //   padding: 10,
  //   paddingTop: 0
  // },
  Menuicons:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 30,
    paddingTop: 55

  }
});