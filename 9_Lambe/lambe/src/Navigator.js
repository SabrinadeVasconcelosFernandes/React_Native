import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const MenuRoutes = {
   Feed: {
      name: 'Feed',
      screen: Feed,
      navigationOptions:{
         title: 'Feed',
         tabBarIcon: ({tintColor}) => <Icon name='home' size={30} color={tintColor} />
      }
   },
   Add: {
      name: 'AddPhoto',
      screen: Feed,
      navigationOptions:{
         title: 'Add picture',
         tabBarIcon: ({tintColor}) => <Icon name='camera' size={30} color={tintColor}/>
      }
   },
   Profile: {
      name: 'Profile',
      screen: Feed,
      navigationOptions: {
         title: 'Profile',
         tabBarIcon: ({tintColor: color}) => <Icon name='user' size={30} color={color} />
      }
   }
}
// se eu quiser mudar o nome de algo dentro do destructury: ({tintColor}), eu preciso fazer assim: ({tintColor: color}) aí dentro dessa função em específico eu posso me referir ao componente com o novo nome que eu dei, e não com o nome que ele recebeu quando foi criado --> função: ({tintColor: color}) => <Icon cor={color} />


const MenuConfig = {
   initialRouteName: 'Feed',
   tabBarOptions: {
      showLabel: false,
   }
}

// const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

const Tab = createBottomTabNavigator();

function MenuNavigator() {
   return (
     <Tab.Navigator>
       <Tab.Screen name="Routes" component={MenuRoutes} />
       <Tab.Screen name="Config" component={MenuConfig} />
     </Tab.Navigator>
   );
 }

export default MenuNavigator