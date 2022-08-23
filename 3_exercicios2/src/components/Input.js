import React, {useState} from 'react'
import {TextInput, View, Text} from 'react-native'
import Estilo from './estilo'
import Botao from './Botao'

export default props => {

   const [nome, setNome] = useState('Texto do usuário')

   return(
      <View>
         <TextInput
         placeholder="Digite aqui"
         value={nome}
         onChangeText={nome=>setNome(nome)}
         />
         {/* <Text>{nome}</Text> */}
      </View>
      
   )
}
