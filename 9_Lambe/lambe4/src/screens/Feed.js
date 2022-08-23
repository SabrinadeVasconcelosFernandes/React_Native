import React, {Component} from 'react'
import {StyleSheet, FlatList, View} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
   state = {
      posts:
      [
         {
            id: Math.random(),
            nickname: 'Rafael Pereira',
            email: 'rafa@pereira.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [
               {
                  nickname: 'John Ray',
                  comment: ' Stunning!',
               },
               {
                  nickname: 'Michaela Santos',
                  comment: ' Que lindo!',
               },
               {
                  nickname: 'Consuela Martinez',
                  comment: ' Mira cariño, que precioso!',
               }
            ]
         },
         {
            id: Math.random(),
            nickname: 'Sandra Fernandes',
            email: 'sandra@fernandes.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: 
            [
               {
                  nickname: 'Emilly Costa',
                  comment: ' Nossa, que bonito',
               },
               {
                  nickname: 'Mei Ling',
                  comment: ' 美丽的!',
               },
               {
                  nickname: 'Saori Watanabe',
                  comment: ' 私は愛した！かわいいね',
               }
            ]
         }
      ]
   }
   render() {
      return(
         <View style={styles.container}>
            <Header/>
            <FlatList
               data={this.state.posts}
               keyExtractor={item => `${item.id}`}
               renderItem={({item}) => <Post key={item.id} {...item}/>}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
   }
})

export default Feed