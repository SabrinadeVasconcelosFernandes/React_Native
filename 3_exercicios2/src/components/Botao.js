import React from 'react'
import {Button} from 'react-native'
import Estilo from './estilo'
import Input from './Input'
import Output from './Output'

export default props => {
   let textoUs = ""
   function executar(){
      textoUs = () => setNome(nome)
   }
   return(

      <>
         <Button
         title="Clique-me"
         onPress={() => setNome(nome)}
         // onPress={executar()}
         />

         <Output msg={textoUs}/>

      </>
      
   )
}


