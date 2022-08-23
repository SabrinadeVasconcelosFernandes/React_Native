import React, {Component} from 'react'
import{
  View,
  Text
} from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component{
   render() {

    //criando os comentários que serão passados via props para o componente post que por sua vez também mandará via props para o componente comments:
    const comments = [{
      nickname: 'Joana Elena',
      comment: ' Adorei a foto'
    },
    {
      nickname: 'Rafael Pereira',
      comment: ' Muito ruim, até eu faço melhor'
    }]
    //vamos colocar essa constante comments dentro do componente Post, lá dentro de return.

      return(
        <View style={{flex: 1}}>
          <Header/>
          <Post image={require('./assets/imgs/fence.jpg')} comments={comments}/>
        </View>

      )
   }
}