import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

//Telas
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

function FeedScreen() {
  return (
    <Feed/>
  );
}

function AddScreen() {
   return (
     <AddPhoto/>
   );
 }

 function ProfileScreen() {
   return (
     <Profile/>
   );
 }


const Tab = createBottomTabNavigator()
const SwitchStack = createStackNavigator()
const AuthStack = createStackNavigator()



export default props => {
  // const { email } = useUser()

  const Auth = () => (
      <AuthStack.Navigator initialRouteName="Login">
           <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Register" component={Register} />
       </AuthStack.Navigator>
  )

  const AuthOrProfile = () => (
      <SwitchStack.Navigator screenOptions={{headerShown: false}}>
          {email ? 
               <SwitchStack.Screen name="Home" component={Profile} />
          : 
              <SwitchStack.Screen name="Auth" component={Auth} /> 
           }
      </SwitchStack.Navigator>
   ) 
  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
               let iconName;

               switch (route.name) {
                  case 'Feed':
                     iconName = 'home';
                     break;
                  case 'AddPhoto':
                     iconName = 'camera';
                     break;
                  case 'Profile':
                     iconName = 'person';
                     break;
                  default:
                     iconName = 'edit';
                     break;
               }

               return <Icon name={iconName} size={30} color={color} />;
            },
         })}
            tabBarOptions={{
            showLabel: false,
            activeTintColor: '#9C27B0',
            inactiveTintColor: '#777',
         }}
      > 
         <Tab.Screen name="Feed" component={FeedScreen} />
         <Tab.Screen name="AddPhoto" component={AddScreen} />
         <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}