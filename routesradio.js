import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';

import Player from './pages/player'
import Alpha from './pages/alpha'
import Sertanejo from './pages/sertanejo'

const Tab = createBottomTabNavigator();

export function Routes() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Player" component={Player} options={{tabBarButton: () => null
      }}/>
            <Tab.Screen name="Alpha" component={Alpha} options={{tabBarButton: () => null
      }}/>
            <Tab.Screen name="Sertanejo" component={Sertanejo} options={{tabBarButton: () => null
      }}/>
    </Tab.Navigator>
  )
}
