import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {useState}from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons'; 
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

const Locate = ({getFromModal, setShowModal}) => {

    const [locationName, setLocationName] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const [searchedlocation, setlocationName] = useState('');

    
    const searchLocation = async () => {
        setCoordinates(null);
        setlocationName('')
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`
          );
    
          // result.display_name
          // result.lat
          // result.lon
          if (response.data.length > 0) {
            const result = response.data[0];
            console.log(result)
            setCoordinates({ latitude: parseFloat(result.lat), longitude: parseFloat(result.lon) });
            setlocationName(result.display_name)
          } else {
            setCoordinates(null);
            setlocationName('')
          }
        } catch (error) {
          console.error('Error searching for location:', error);
        }
      };
  return (
    <View style={styles.container}> 
        <View style={styles.closeIcon}>
            <TouchableOpacity onPress={()=>setShowModal(false)}>
            <AntDesign name="close" size={30} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.seachView}>
            <View>
                <TextInput style={styles.seachBox} placeholder='Search Location' 
                    onChangeText={(text) => setLocationName(text)}
                    placeholderTextColor={'rgb(102, 99, 98)'}
                    
                    ></TextInput>
                <TouchableOpacity style={styles.searchIcon} onPress={searchLocation}>
                    <EvilIcons name="search" size={hp(5)} color="black" />
                </TouchableOpacity>
                
                {coordinates && <View style={styles.Suggestion}>
                <TouchableOpacity onPress={()=>getFromModal({coordinates})}>
                    
                        <Text>
                        {searchedlocation}
                        </Text>
                     
                  </TouchableOpacity>
                   
                </View>
                }
                
                
            </View>
            <View style={styles.nbArea}>
            <Text style={styles.texts}>
                Tip: If the initially searched location is not found select a 
                related location, you can adjust the marker to a desired location on the map.
            </Text>
        </View>

        </View> 
        
    </View>
  )
}

export default Locate

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FEFD',
        height: '100%',
        width: '100%',
        borderRadius: hp(7),  
        
    },
    seachView: { 
        // backgroundColor: 'tomato', 
        width: wp(90),
        height: hp(7), 
        top: hp(5),
        borderRadius: wp(100),
        marginHorizontal: wp(5), 
      },
      seachBox: {
        backgroundColor: '#EDEAE2',   
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
      nbArea: {
        marginHorizontal: wp(7)
      },
      texts: {
        color:'#696969'
      },
      closeIcon: {
        // backgroundColor: 'red',
        marginTop: hp(2),
        marginLeft: wp(85),  
      },
      Suggestion: {
        height: hp(7),
        width: wp(77),
        backgroundColor: '#EEEAE1',
        // position: 'absolute',
        // top: hp(7),
        marginHorizontal: wp(6),
        borderRadius: 7,
        padding: 10,

      }
})