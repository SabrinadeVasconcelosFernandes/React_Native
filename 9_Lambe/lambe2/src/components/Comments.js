import React, {Component} from 'react'
import {
   View, 
   Text,
   StyleSheet,
   Dimensions,
   Alert
} from 'react-native'

class Comments extends Component {
   render(){
      let view = null
      if (this.props.comments) {
         view = this.props.comments.map((item, index)=> {
            return(
               <View style={styles.commentContainer} key={index}>
                  <Text style={styles.nickname}>{item.nickname}:</Text>
                  <Text style={styles.comment}>{item.comment}</Text>
               </View>
            )
         })
      }
   }
}