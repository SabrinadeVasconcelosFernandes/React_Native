import React from 'react'
import{View, StyleSheet} from 'react-native'
import Estilo from './components/estilo'
import Titulo from './components/Primeiro'
import {Info1, Info2, Info3} from './components/Info'
import Input from './components/Input'
import Botao from './components/Botao'
import Output from './components/Output'
// import {Msg1,Msg2} from './components/TextoUsuario'

export default () => (
   <View style={style.Fundo}>
      <View style={style.Intro}>
         <Titulo/>
         <Info1/>
      </View>
      <View style={style.Branco}>
         <Input/>
      </View>
      <View style={style.Midi}>
         <Info2/>
         <View style={Estilo.button} >
            <Botao/>
         </View>
      </View>
      <View style={Estilo.fim}>
         {/* <Info3/> */}
         {/* <Output/> */}
         
      </View>
   </View>
)

const style = StyleSheet.create({
   Fundo: {
      backgroundColor: '#FFF0F5',
      flexGrow: 1,
      alignItems: "center",
      
   },
   Intro:{
      marginTop:20,
      marginBottom: 20,
      flexWrap: "wrap",
   },
   Branco:{
      backgroundColor: '#FFF',
   },
   Midi:{
      marginTop:20,
      marginBottom: 20,
      flexWrap: "wrap",
   },
   Fim:{
      marginTop:20,
      marginBottom: 20,
   }
})