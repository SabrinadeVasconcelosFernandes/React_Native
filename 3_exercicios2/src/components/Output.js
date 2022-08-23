import React from 'react'
import {Text, View} from 'react-native'
import Estilo from './estilo'
import Botao from './Botao'

export default props => {
   
   return(
      <Text style={Estilo.txtG}>{props.msg}</Text>
   )
}



