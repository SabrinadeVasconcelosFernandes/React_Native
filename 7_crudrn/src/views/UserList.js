import React, {useContext, createContext, useReducer, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, FlatList, SectionList,Alert} from 'react-native'
import {
   Text,
   ListItem,
   Avatar,
   Icon,
   Badge,
   ListItemProps,
   Button,
   Switch,
   colors
   } from '@rneui/themed'
import UserForm from './UserForm'
import users from '../data/users'
import UsersContext from '../context/UsersContext'

export default props => {

   const {state, dispatch} = useContext(UsersContext)

   function confirmUserDeletion(user){
      Alert.alert('Excluir usuário', 'Desejas excluir o usuário?',[
         {
            text: 'Sim',
            onPress(){
               dispatch({
                  //tipo da ação:
                  type: 'deleteUser',
                  //dado passado com a ação - informação que eu quero passar com a minha ação
                  payload: user,
               })
            }
         },
         {
            text: 'Não'
         }
      ])
   }

   function getActions(user){
      return(
         <>
           <Button
               onPress={() => props.navigation.navigate('UserForm', user)}
                        
               icon={{
                  name: 'pencil',
                  type: 'font-awesome',
                  size: 25,
                  color: '#87CEFF',
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
            <Button
               onPress={() => confirmUserDeletion(user)}
               
               icon={{
                  name: 'clear',
                  size: 25,
                  color: '#B22222',
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
            
         </>
      )
   }

   function getUserItem({item: user}){
      return(
         <View>
            {
               <ListItem.Swipeable 
                  bottomDivider 
                  onPress={() => props.navigation.navigate('UserForm', user)}
                  rightContent={getActions(user)} 
               >
              <Avatar source={{uri: user.avatarUrl}} />
               <ListItem.Content>
                  <ListItem.Title>{user.name}</ListItem.Title>
                  <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
               </ListItem.Content>
             </ListItem.Swipeable >
        
            }
         </View>
      ) 
   }


   return(
      <View>
         <FlatList
            keyExtractor={user => user.id.toString()}
            data={state.users}
            renderItem={getUserItem}
         />
      </View>
   )
}