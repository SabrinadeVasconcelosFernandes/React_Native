import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, Image,TouchableOpacity} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'

export default props => {

   const doneOrNotStyle = props.doneAlt != null ?
      {textDecorationLine: 'line-through'} : {}

   const date = props.doneAlt ? props.doneAlt : props.estimateAlt

   const formattedDate = moment(props.estimateAlt).locale('pt-br').format('ddd, D, [de] MMMM')

   return(
         <View style={styles.container}>

            <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
               <View style={styles.checkContainer}>
                  {getCheckView(props.doneAlt)}
               </View>
            </TouchableWithoutFeedback>


            <View>
               <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
               {/*descrição*/}
               <Text style={styles.date}>{formattedDate}</Text>
               {/*data*/}
            </View>

            <TouchableOpacity style={styles.right} onPress={() => props.onDelete && props.onDelete(props.id)}>
               <Image
                  style={styles.iconeLIXO}
                  source={{uri:'https://cdn.pixabay.com/photo/2016/10/02/03/14/garbage-1708863_1280.png'}}
               />
            </TouchableOpacity>
            
         </View>
  
   )
}

function getCheckView(doneAlt){
   if(doneAlt != null){
      return(
         <View style={styles.done}>
            <Image
               style={styles.icone}
               source={{uri:'https://cdn.pixabay.com/photo/2012/04/24/16/22/check-40319_1280.png'}}
            />
         </View>
      )
   }

   else{
      return(
         <View style={styles.pending}></View>
      )
   }
}

const styles = StyleSheet.create({
   container:{
      flexDirection: 'row',
      borderColor: '#AAA',
      borderBottomWidth: 1,
      alignItems: 'center',
      paddingVertical: 10,
   },
   checkContainer: {
      width: '20%',
      alignItems: 'center',
   },
   pending:{
      height: 25,
      width: 25,
      borderRadius: 13,
      borderWidth: 1,
      borderColor:'#555'
   },
   done:{
      height: 25,
      width: 25,
      borderRadius: 13,
      backgroundColor: '#4D7031',
      alignItems: 'center',
      justifyContent: 'center',
   },
   desc: {
      fontFamily: commonStyles.fontFamily,
      color: commonStyles.colors.mainText,
      fontSize: 15,
   },
   date: {
      fontFamily: commonStyles.fontFamily,
      color: commonStyles.colors.subText,
      fontSize: 12,
   },
   icone: {
      width: 20,
      height:20,
      justifyContent: 'flex-end',
   },
   iconeLIXO: {
      width: 40,
      height:40,
   },
   right:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: 20,
   },
})