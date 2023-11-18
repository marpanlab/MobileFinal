import React, { useState, useEffect } from 'react';
import firebase from './pages/firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import Login from './pages/login';
import Register from './pages/register';
import Player from './pages/player'
import Alpha from './pages/alpha'
import Sertanejo from './pages/sertanejo'
import Home from './pages/home'
import Hits from './pages/hits'
import Radio from './pages/radio'
import Profile from './pages/profile'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const homeIcon = require('./assets/icons/home.png');
const streamIcon = require('./assets/icons/stream.png');
const radioIcon = require('./assets/icons/radio.png');
const profileIcon = require('./assets/icons/perfil.png');

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        
        tabBarStyle:{
          borderTopWidth: 0,
          width: '80%',
          borderRadius: 25,
          marginBottom: 10, 
          position: 'absolute', 
          height: 50,
          marginLeft: '10%',
        }
      }}          
    >

      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: () => (
            <Image source={homeIcon} style={{ width: 40, height: 40}} />
          ),
        }}
      />
      <Tab.Screen 
        name="Hits" 
        component={Hits} 
        options={{
          tabBarIcon: () => (
            <Image source={streamIcon} style={{ width: 40, height: 40}} />
          ),
        }}
      />
      <Tab.Screen 
        name="Radio" 
        component={Radio} 
        options={{
          tabBarIcon: () => (
            <Image source={radioIcon} style={{ width: 40, height: 40}} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: () => (
            <Image source={profileIcon} style={{ width: 40, height: 40}} />
          ),
        }}
      />
        <Tab.Screen name="Player" component={Player} options={{tabBarButton: () => null
      }}/>
            <Tab.Screen name="Alpha" component={Alpha} options={{tabBarButton: () => null
      }}/>
            <Tab.Screen name="Sertanejo" component={Sertanejo} options={{tabBarButton: () => null
      }}/>
    </Tab.Navigator>
  );
}

export function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return isAuthenticated ? <MainTabNavigator /> : <AuthStack />;
}
