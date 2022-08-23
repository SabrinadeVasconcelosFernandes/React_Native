import React from 'react'
import { Button } from 'react-native'

export default props =>{

   function executar(){
      console.warn('hey girl heeey')
   }

   return(
      <Button 
        title = "Executa função"
        onPress = {executar()}
      />
      <Button 
        title = "Função imbutida"
        onPress = {function(){
           console.warn('hey girl heeey')
        }}
      />
      <Button 
        title = "Arrow Function"
        onPress = {() => console.warn('hey girl heeey')}
      />
   )
}