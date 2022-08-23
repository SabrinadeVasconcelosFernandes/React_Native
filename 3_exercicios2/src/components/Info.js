import React from 'react'
import{Text} from 'react-native'
import Estilo from './estilo'

export function Info1() {
   return(
      <Text style={Estilo.txtCenter}>
         Digite alguma coisa aqui no campo de input:
      </Text>
   )
}

export function Info2() {
   return(
      <Text style={Estilo.txtCenter}>
         Clique no botão para imprimir seu texto na tela:
      </Text>
   )
}

export function Info3() {
   return(
      <Text style={Estilo.txtCenter}>
         Aqui está seu texto:
      </Text>
   )
}