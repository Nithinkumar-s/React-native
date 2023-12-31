 
import { Tabs } from 'expo-router'
import { Ionicons, FontAwesome5  } from '@expo/vector-icons';
import { Image } from 'react-native';
import customColors from '../../assets/styles/colors'; 

const HomeIcon = () => (
    <Image
      source={require('../../assets/icons/house.png')} // Adjust the path accordingly
      style={{ width: 40, height: 40 }} // Adjust the size as needed
    />
  );

const ExpenseIcon = () => (
    <Image
      source={require('../../assets/icons/payment.png')} // Adjust the path accordingly
      style={{ width: 24, height: 24 }} // Adjust the size as needed
    />
  );

  const SettingsIcon = () => (
    <Image
      source={require('../../assets/icons/settings.png')} // Adjust the path accordingly
      style={{ width: 24, height: 24 }} // Adjust the size as needed
    />
  );

  const UserIcon = () => (
    <Image
      source={require('../../assets/icons/user.png')} // Adjust the path accordingly
      style={{ width: 24, height: 24 }} // Adjust the size as needed
    />
  );

  const AddExpenseIcon = () => (
    <Image
      source={require('../../assets/icons/AddPayment1.png')} // Adjust the path accordingly
      style={{ width: 35, height: 35 }} // Adjust the size as needed
    />
  );

export default function _layout() {

    
  return (
     
    <Tabs screenOptions={{headerShown: false,
    tabBarStyle:{
        backgroundColor:customColors.primary,
        height: 70,
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
        tabBarIcon: () => <HomeIcon />,
         }}/>

        <Tabs.Screen name='Expenses/index'
        options={{
        tabBarIcon: () => <ExpenseIcon />,
        title:''
        }}/> 

        <Tabs.Screen name='ManageTransaction/index'
        options={{title:'',
        tabBarIcon: () => <AddExpenseIcon />,
        }}/> 

        <Tabs.Screen name='Settings/index'
        options={{title:'',
        tabBarIcon: () => <SettingsIcon />,
        }}/> 

        <Tabs.Screen name='Profile/index'
        options={{title:'',
        tabBarIcon: () => <UserIcon />,
        }}/> 
    </Tabs>
  )
}



 