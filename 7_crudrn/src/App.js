import React, {useContext, createContext, useReducer, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserForm from './views/UserForm'
import UserList from './views/UserList'
// import {Button} from 'react-native'
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed'
import {UsersProvider} from './context/UsersContext'


const Stack = createNativeStackNavigator()

export default props => {
   return(

      <UsersProvider>
       
         <NavigationContainer>
            <Stack.Navigator
               initialRouteName="UserList" screenOptions={screenOptions}>
               <Stack.Screen
                  name="UserList"
                  component={UserList}
                  options={({navigation}) => {
                     return{
                        headerTitle: "Lista de usuários",
                        headerRight: () => (
                           
                           <Button
                           onPress={() => navigation.navigate("UserForm")}
                           icon={{
                           name: 'plus',
                           type: 'font-awesome',
                           size: 25,
                           color: 'white',
                           }}
                           iconContainerStyle={{ marginRight: 10 }}
                           titleStyle={{ fontWeight: '700' }}
                           buttonStyle={{
                           backgroundColor: 'transparent',
                           borderColor: 'transparent',
                           borderWidth: 0,
                           borderRadius: 25,
                           }}
                           containerStyle={{
                           width: 60,
                           }}
                        />
                        
                        ),
                     }
                  }}
               />
               <Stack.Screen
                  name="UserForm"
                  component={UserForm}
                  options={{
                     title: "Formulário de usuários"
                  }}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </UsersProvider>   
      
   )
}

const screenOptions = {
   headerStyle:{
      backgroundColor: '#DB7093'
   },
   headerTintColor: '#FFF5EE',
}