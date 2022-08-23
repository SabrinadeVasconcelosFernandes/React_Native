import React, {useState} from 'react'
import {TextInput, View, Text} from 'react-native'
import Estilo from './estilo'



export function Msg1() {

   const [nome, setNome] = useState('Texto do usuário')

   return(
      <View>
         
         <TextInput
         placeholder="Digite aqui"
         value={nome}
         onChangeText={nome=>setNome(nome)}
         />

         
      </View>
   )
}

export function Msg2() {
   const [nome, setNome] = useState('Texto do usuário')
   return(
      <Text>{nome}</Text>
   )
}
