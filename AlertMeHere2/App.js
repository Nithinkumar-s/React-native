import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import * as Location from 'expo-location';
import MapView,{Marker,Circle} from 'react-native-maps'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 

import Locate from './Locate';


const NavIcon = () => (
  <Image
    source={require('./assets/icons/distance.png')} // Adjust the path accordingly
    style={{ width: wp(8.5), height: hp(4) }} // Adjust the size as needed
  />
);

const LocationComponent = () => { 
  const [location, setLocation] = useState(null);
  const [latlng, setlatlng] = useState({latitude: 21.7679,longitude:  78.8718});
  const [showModal, setShowModal] = useState(false)
  const [destination, setdestination] = useState(null);



 const cordinates = '';

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          console.log('Location permission denied');
          return;
        }

        getCurrentLocation();
      } catch (error) {
        console.error('Error getting location permission:', error);
      }
    })();
  }, []);

  const getCurrentLocation = async () => { 
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      }); 
      setLocation(location.coords); 
      var latitude = location.coords.latitude
      var longitude = location.coords.longitude 
      setlatlng({latitude,longitude}) 
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  function renderModal() {
    return (
      <Modal visible={showModal} animationType='slide' transparent={true}>
        <View style={styles.Modalstyle}>
        <Locate getFromModal = {getFromModal} setShowModal = {setShowModal}/>
        </View>
        
      </Modal>
    )
  }
  function getFromModal(data) { 
    setShowModal(false) 
    if (data?.coordinates) {
      const result = data.coordinates; 
      setdestination({ latitude: parseFloat(result.latitude), longitude: parseFloat(result.longitude) }); 
      console.log(location)
    } else {
      setdestination(null); 
    }
  }

  return (
    
    <View style={styles.container}>  
   
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 8.9257431,
        longitude: 76.7677783,
        latitudeDelta: 30,
        longitudeDelta: 30,
      }}
      >
      {location && ( 
        <Marker pinColor={'green'} coordinate={{latitude:location.latitude, longitude: location.longitude}}/>
       )}
       {destination && (
        <Marker pinColor={'red'} coordinate={{latitude:destination.latitude, longitude: destination.longitude}}/>
       )}
      </MapView>

      

      <View style={styles.Lbuttons} > 
      <View style={styles.navbutton}>
        <TouchableOpacity onPress={()=> setShowModal(true)}>
          <NavIcon />
        </TouchableOpacity> 
        </View> 
          <TouchableOpacity onPress={getCurrentLocation}>
          <MaterialCommunityIcons style={styles.Lbutton} name="target" size={hp(4)} color="black"/> 
          </TouchableOpacity> 
      </View>
      {renderModal()}
      
    </View>
  );
};

export default LocationComponent;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  Lbuttons: { 
    position:'absolute',
    width: wp(10),
    height: hp(10),
    zIndex: 9999,
    borderRadius:wp(1),
    // margin:100,
    top: hp(85),
    left: wp(80),
    // backgroundColor: '#EBF5F0',
    alignItems:'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
  },
  Lbutton:{
    backgroundColor: '#EBF5F0',
    borderRadius:wp(1),
    padding:wp(0.5),
    marginTop:hp(1)
  },
  navbutton:{
    backgroundColor: '#EBF5F0',
    borderRadius:wp(1),
    margin: 2,
    alignItems:'center',
    padding:wp(0.6),
  },

  seachView: {
    // backgroundColor: 'tomato',
    position: 'absolute',
    width: wp(90),
    height: hp(7), 
    top: hp(7),
    borderRadius: wp(100),
    marginHorizontal: wp(5),
     


  },
  seachBox: {
    backgroundColor: '#FDFCFA',   
    width: wp(90),
    height: hp(7),  
    borderRadius: wp(100), 
    textAlign:'center'
  },
  searchIcon:{
    // backgroundColor:'red',
    position:'absolute',
    right:wp(5),
    top: hp(0.7)
    
  },
  Modalstyle: {
  //  backgroundColor: 'red',
   height:'100%',
   width: '100%',
   top : hp(40),
  
  }

});
     
