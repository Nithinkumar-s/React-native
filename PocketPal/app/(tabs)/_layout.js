 
import { Tabs } from 'expo-router'
import { Ionicons, FontAwesome5  } from '@expo/vector-icons';
import { Image } from 'react-native';

const HomeIcon = () => (
    <Image
      source={require('../../assets/icons/home.png')} // Adjust the path accordingly
      style={{ width: 24, height: 24 }} // Adjust the size as needed
    />
  );

const ExpenseIcon = () => (
    <Image
      source={require('../../assets/icons/spending-money.png')} // Adjust the path accordingly
      style={{ width: 24, height: 24 }} // Adjust the size as needed
    />
  );

  const SettingsIcon = () => (
    <Image
      source={require('../../assets/icons/user-avatar.png')} // Adjust the path accordingly
      style={{ width: 24, height: 24 }} // Adjust the size as needed
    />
  );

export default function _layout() {

    
  return (
     
    <Tabs screenOptions={{headerShown: false,
    tabBarStyle:{
        backgroundColor:'#3A424D',
        height: 70,
        borderRadius: 15 , 
        top:0,
        marginTop:-10, 
        borderBlockColor:'#252D38', 
        
    },
    tabBarActiveBackgroundColor:'#86B7B8', 
    tabBarAllowFontScaling:true,
    tabBarLabelStyle: {
        color: '#FFFFFF',
        fontWeight: "bold",
        marginBottom: 10,
        fontSize: 12,  
      },}
    }>
        <Tabs.Screen name='index' 
        options={{title:'Home',  
        tabBarIcon: () => <HomeIcon />,
         }}/>

        <Tabs.Screen name='Expenses/index'
        options={{title:'Expenses',
        tabBarIcon: () => <ExpenseIcon />,
        }}/> 

        <Tabs.Screen name='Settings/index'
        options={{title:'Settings',
        tabBarIcon: () => <SettingsIcon />,
        }}/> 
    </Tabs>
  )
}



 