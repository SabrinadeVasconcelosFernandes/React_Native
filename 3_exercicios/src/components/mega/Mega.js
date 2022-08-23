import React, {Component} from 'react'
import{Text, Button, TextInput, View} from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component{


   state = {
      qutdeNumeros: this.props.qutdeNumeros
      numeros: []
   }

   alterarQutdeNumero = (qtde) => {
      this.setState({qutdeNumeros : +qtde})
   }

   gerarNumeroNaoContido = nums => {
      const novo = parseInt(Math.random()*60) + 1
      return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
   }

   gerarNumeros = () => {
      const numeros = Array(this.state.qutdeNumeros)
         .fill()
         .reduce(n => [...n, this.gerarNumeroNaoContido(n)] , [])
         .sort((a,b) => a - b)
      this.setState({numeros})
   }

   exibirNumeros = () =>{
      const nums = this.state.numeros
      return nums.map(num=> {
         return <MegaNumero key={num} num={num}/>
      })
   }


   render(){
      return (

         <>
         <Text style={Estilo.txtG}>
            Gerador de Mega-Sena 
         </Text>

         <TextInput
            keyboardType={'numeric'}
            style={{borderBottomWidth: 1}}
            placeholder="Qual é a quantidade de números?"
            value={`${this.state.qutdeNumeros}`}
            onChangeText={this.alterarQutdeNumero}
         
         />

         <Button style={{
            marginTop: 20
         }}
            title='Gerar'
            onPress={this.gerarNumeros}
         />
         <View style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
         }}>
            {this.exibirNumeros()}
         </View>

         </>

      )
   }
}