import { StyleSheet, Text, View, Image } from 'react-native'
import React,{ useEffect, useState }  from 'react'
import { Link } from 'expo-router' 
import { TouchableOpacity } from 'react-native-gesture-handler' 
import customColors  from '../../assets/styles/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress'; 
import ComponenView from '../ComponentView'

export default function index() {
  const SampleExpense = [{
                          Day: 'Today',
                          Expenses: [{'Category': 'Food', 'Amount': '100'},
                                      {'Category': 'Fruit', 'Amount': '50'},
                                      {'Category': 'Travel', 'Amount': '150'}],
                          TotalExpense: '200' 
                        },
                        {
                          Day: 'Yesterday',
                          Expenses: [{'Category': 'Food', 'Amount': '100'},
                                      {'Category': 'Fruit', 'Amount': '50'},
                                      {'Category': 'Travel', 'Amount': '150'}],
                          TotalExpense: '200' 
                        }
                      ]
  const currentDate = new Date();
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      const formattedStartDate = `${firstDayOfMonth.getDate().toString().padStart(2, '0')}-${(firstDayOfMonth.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${firstDayOfMonth.getFullYear()}`;

      const formattedEndDate = `${lastDayOfMonth.getDate().toString().padStart(2, '0')}-${(lastDayOfMonth.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${lastDayOfMonth.getFullYear()}`;
  
  return (
    <View style={styles.container}>   
    {/* header section */}
      <View style={styles.headerSection}>
        <View style={styles.dateSection}>
          <Text style={styles.dateSectionDate}>
            {/* {formattedStartDate} - {formattedEndDate} */}
            This Month
          </Text>
          <View style={styles.budgetSection}>
            <Text style={styles.budgetSectionText}>
              Budget : ₹0
            </Text>
            <Text style={styles.budgetSectionText}>
              Expense : ₹0
            </Text>
          </View>

        </View>
      </View>

    {/* progress section */}
    <View style={styles.progressSection}>
      <View style={{alignSelf:'flex-start', marginLeft:wp(5)}}>
        <Text style={{fontWeight:'500'}}>Expenses This Month</Text>
      </View>
      <View style={{alignSelf:'center'}}>
      <Progress.Bar 
        progress={.1}
        width={wp(70)} 
        height={hp(1.1)} 
        animationType={'timing'} 
        borderColor={customColors.primary} 
        color={'#4cbb17'}/>
      </View>
      <View style={{alignSelf:'flex-end', marginRight:wp(5)}}>
        <Text> Budget Balance : ₹0</Text>
      </View>

    </View>

    {/* recents section */}
    <View style={styles.recentsSection}>
      <View>
        <Text style={{marginTop:hp(1), marginLeft:wp(2), fontWeight:'500'}}> Top Recent Transactions</Text>
        {SampleExpense.map((Expense, index) => ( 
            <View key={index}> 
              <ComponenView Expense={Expense}/>
            </View>
          ))} 
      </View>
    </View>

    
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.secondary.toString(), // Set your desired background color
    display: 'flex',
    flexDirection: 'column', 
  }, 

  headerSection:{
    backgroundColor:customColors.primary.toString(), 
    flex: 2,
  },
  dateSection: {
    
  },
  dateSectionDate: {
    fontWeight:'500',
    fontSize: hp(2),
    color: customColors.textWhite.toString(),
    marginTop: hp(7),
    marginLeft: wp(15)
  },
  budgetSection:{
     display:'flex',
    //  marginTop: hp(2),
    //  marginLeft: wp(26),  
    alignSelf:'center'
  },
  budgetSectionText :{ 
    color: customColors.textWhite.toString(),
    paddingVertical:15,
    fontSize: 25,   
    fontWeight:'900'
 },
  
  progressSection:{
    flex: 1,
    backgroundColor: 'white',
    display:'flex',
    justifyContent:'space-around', 
    marginTop: hp(1),
    borderRadius: wp(5),
    width: wp(95),
    marginHorizontal: wp(2.5)

  },

  recentsSection: {
    flex: 3,
    backgroundColor: customColors.secondary.toString(),
  },
});