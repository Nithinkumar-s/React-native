import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ComponenView({Expense}) { 
    const ExpenseList = Expense.Expenses ? Expense.Expenses : []
    // console.log(ExpenseList)
    
    const sortedExpenses = ExpenseList.sort((a, b) => parseInt(b.Amount, 10) - parseInt(a.Amount, 10));
    // console.log(sortedExpenses)

  return (
    
    <View style={styles.Container}>
      
      <View style={styles.totalTextSection}>
        <Text>{Expense.Day}</Text>
        <Text>Total Expense : {Expense.TotalExpense}</Text> 
      </View> 
        {sortedExpenses.map((Expense, index) => (
          <View key={index} style={styles.topExpensesList}>
            <Text>{Expense.Category}</Text>
            <Text >{Expense.Amount}</Text>
          </View>
        ))} 
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{ 
        backgroundColor:'white',
        height: hp(15),
        marginTop: hp(1),
        width: wp(90),
        marginHorizontal: wp(5),
        borderRadius: wp(5)
    },

    totalTextSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal : wp(3),
        marginTop: hp(1),
        // backgroundColor: 'red'
    },

    topExpensesList: {
      display:'flex',
      flexDirection:'row',
      // alignSelf: 'center',
      justifyContent: 'space-between',
      marginHorizontal : wp(20),
      marginTop: hp(1),
    },
})