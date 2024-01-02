 
import { Tabs } from 'expo-router'
import { Ionicons, FontAwesome5  } from '@expo/vector-icons';
import { Image } from 'react-native';
import customColors from '../../assets/styles/colors'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeIcon = () => (
    <Image
      source={require('../../assets/icons/house.png')} // Adjust the path accordingly
      style={{ width: wp(6), height: hp(6) }} // Adjust the size as needed
    />
  );

  const HomeIconFocused = () => (
    <Image
      source={require('../../assets/icons/housefocused.png')} // Adjust the path accordingly
      style={{ width: wp(6), height: hp(6) }} // Adjust the size as needed
    />
  );

const ExpenseIcon = () => (
    <Image
      source={require('../../assets/icons/payment.png')} // Adjust the path accordingly
      style={{ width: wp(7), height: hp(3) }} // Adjust the size as needed
    />
  );

  const ExpenseIconFocused = () => (
    <Image
      source={require('../../assets/icons/paymentfocused.png')} // Adjust the path accordingly
      style={{ width: wp(7), height: hp(3) }} // Adjust the size as needed
    />
  );

  const SettingsIcon = () => (
    <Image
      source={require('../../assets/icons/settings.png')} // Adjust the path accordingly
      style={{ width: wp(7), height: hp(3.5) }} // Adjust the size as needed
    />
  );

  const SettingsIconFocused = () => (
    <Image
      source={require('../../assets/icons/settingsfocused.png')} // Adjust the path accordingly
      style={{ width: wp(7), height: hp(3.5) }} // Adjust the size as needed
    />
  );

  const UserIcon = () => (
    <Image
      source={require('../../assets/icons/user.png')} // Adjust the path accordingly
      style={{ width: wp(7.8), height: hp(3.7) }} // Adjust the size as needed
    />
  );

  const AddExpenseIcon = () => (
    <Image
      source={require('../../assets/icons/AddPayment.png')} // Adjust the path accordingly
      style={{ width: wp(9), height: hp(5) }} // Adjust the size as needed
    />
  );

  const AddExpenseIconFocused = () => (
    <Image
      source={require('../../assets/icons/AddPaymentfocused.png')} // Adjust the path accordingly
      style={{ width: wp(9), height: hp(5) }} // Adjust the size as needed
    />
  );

export default function _layout() {

    
  return (
     
    <Tabs screenOptions={{headerShown: false,
    tabBarStyle:{
        backgroundColor:customColors.primary,
        height: hp(8),
        borderRadius: 20 , 
        top:0,
        marginTop:-10, 
        marginBottom:20,
        marginHorizontal: 10,
        padding:10,
        shadowColor:'#696969'   
    }, 
    tabBarAllowFontScaling:true,
    
    }
    }>
        <Tabs.Screen name='index' 
        options={{title:'',  
        tabBarIcon: ({focused}) => focused ? <HomeIconFocused /> : <HomeIcon />, 
         }}/>

        <Tabs.Screen name='Expenses/index'
        options={{ 
        tabBarIcon: ({focused}) => focused ? <ExpenseIconFocused /> : <ExpenseIcon />, 
        title:'',  
        }}/> 

        <Tabs.Screen name='ManageTransaction/index'
        options={{title:'', 
        tabBarIcon: ({focused}) => focused ? <AddExpenseIconFocused /> : <AddExpenseIcon />, 
        }}/> 

        <Tabs.Screen name='Settings/index'
        options={{title:'', 
        tabBarIcon: ({focused}) => focused ? <SettingsIconFocused /> : <SettingsIcon />, 
        }}/> 

        <Tabs.Screen name='Profile/index'
        options={{title:'',
        tabBarIcon: () => <UserIcon />,
        }}/> 
    </Tabs>
  )
}



 