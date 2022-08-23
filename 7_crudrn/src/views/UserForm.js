import React, {useContext, createContext, useReducer, useState} from 'react'
import {View, Text, FlatList, SectionList, TextInput,StyleSheet} from 'react-native'
import estilo from '../components/estilo'
import {
   Icon,
   Button,
   colors,
   } from '@rneui/themed'

import users from '../data/users'
import UsersContext from '../context/UsersContext'

export default ({route,navigation}) => {
   const[user,setUser] = useState(route.params ? route.params : {})
   const {dispatch} = useContext(UsersContext)
   return(
      <View style={style.form}>

         <Text style={estilo.txtCenter}>
            Bem vind@ {user.name}
         </Text>

         <Text>Nome:</Text>
         <TextInput
            style={style.input}
            //atualizar o nome dentro do usuário:
            onChangeText={name => setUser({...user,name})}
            //texto que aparece se o campo input estiver vazio:
            placeholder="Informe o seu nome"
            //faz com que o nome da pessoa(se tiver um) apareça dentro do campo de input:
            value={user.name}
         />

         <Text>E-mail:</Text>
         <TextInput
            style={style.input}
            //atualizar o e-mail dentro do usuário:
            onChangeText={email => setUser({...user,email})}
            //texto que aparece se o campo input estiver vazio:
            placeholder="Informe o seu e-mail"
            //faz com que o e-mail da pessoa(se tiver um) apareça dentro do campo de input:
            value={user.email}
         />
         <Text>URL do Avatar:</Text>
         <TextInput
            style={style.input}
            
            onChangeText={avatarUrl => setUser({...user,avatarUrl})}
            
            placeholder="Informe o URL do Avatar"
            
            value={user.avatarUrl}
         />

         <Button
            title="Salvar"
            onPress={() => {
               dispatch({
                  type: user.id ? 'updateUser' : 'createUser',
                  payload: user,
               })
               navigation.goBack()
            }}
            buttonStyle={{
               backgroundColor: '#F08080',
               borderColor: 'transparent',
               borderWidth: 0,
               borderRadius: 10,
            }}
         />
         
      </View>
   )
}

const style = StyleSheet.create({

   form:{
      padding:12,
   },
   input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
   }
})