import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { View, Button } from 'react-native'

export default props => {
   return(

      <View style={{flex:1}}>
         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
               title='Abrir'
               onPress={() => { 
                  props.navigation.openDrawer()
                  setTimeout(() => {
                     props.navigation.closeDrawer()
                  }, 3000)
               }}
            />
            <Button
               title='Fechar'
               onPress={() => props.navigation.closeDrawer()}
            />
         </View>

         <View style={{flex:1}}>
            <TextoCentral corFundo='#6B8E23'>
               Tela D
            </TextoCentral>
         </View>
      </View>

   )
}