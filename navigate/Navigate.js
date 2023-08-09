import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from '../screens/Auth';
import Homescreen from '../screens/Homescreen';
import { Icon } from 'react-native-elements';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        
        options={{
            tabBarStyle:{height:96},
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon:({ color }) => (
            <Icon
      color={color}
      name="home"
      size={30}
      solid
      type="material"
    />
        )}
        }
        name="Home"
        component={Homescreen}
      />
      <Tab.Screen name="Product" 

      options={{
        tabBarStyle:{height:96},
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon:({ color }) => (
            <Icon
      color={color}
      name="menu"
      size={30}
      solid
      type="material"
    />)}
        }
      
      component={ProductDetails}/>
       <Tab.Screen name="Cart" 

options={{
    tabBarStyle:{height:96},
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon:({ color }) => (
        <Icon
              name="shopping-cart"
              type="font-awesome"
              color=""
              size={26}
            />
)}
  }

component={Cart}/>
 <Tab.Screen name="Profile" 

options={{
    tabBarStyle:{height:96},
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon:({ color }) => (
      <Icon
color={color}
name="user"
size={30}
solid
type="feather"
/>)}
  }

component={Homescreen}/>
    </Tab.Navigator>
  );
}

export default MyTabs;

