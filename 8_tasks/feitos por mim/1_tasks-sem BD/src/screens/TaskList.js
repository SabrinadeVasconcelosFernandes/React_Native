import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet,FlatList, TouchableOpacity, Platform, Image, Alert} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'
import Task from '../components/Task'
import AddTask from './AddTask'

const initialState = {
   showDoneTasks: true,
   showAddTask: false,
   visibleTasks: [],
   tasks: [],
}

export default class TaskList extends Component {

   state = {
      ...initialState
   }

   componentDidMount = async () => {
      const stateString = await AsyncStorage.getItem('tasksState')
      const state = JSON.parse(stateString) || initialState
      this.setState(state, this.filterTasks)
   }

   toggleFilter = () => {
      this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks)
   }

   filterTasks = () =>{
      let visibleTasks = null
      if(this.state.showDoneTasks){
         visibleTasks = [...this.state.tasks]
      }
      else{
         const pending = task => task.doneAlt === null
         visibleTasks = this.state.tasks.filter(pending)
      }
      this.setState({visibleTasks})
      AsyncStorage.setItem('state', JSON.stringify(this.state))
   }

   toggleTask = taskId => {
      const tasks = [...this.state.tasks]
      tasks.forEach(task => {
         if(task.id === taskId){
            task.doneAlt = task.doneAlt ? null : new Date()
         }
      })
      this.setState({tasks : tasks}, this.filterTasks)
      //como os dois tem o mesmo nome, vc também pode escrever assim: this.setState({tasks})
   }

   addTask = newTask => {
      if(!newTask.desc || !newTask.desc.trim()){
         Alert.alert('Dado Inválidos', 'Descrição não informada!')
         return
      }
      const tasks = [...this.state.tasks]
      tasks.push({
         id: Math.random(),
         desc: newTask.desc,
         estimateAlt: newTask.date,
         doneAlt: null
      })

      this.setState({tasks,showAddTask:false}, this.filterTasks)
   }

   deleteTask = id => {
      const tasks = this.state.tasks.filter(task => task.id !== id)
      this.setState({tasks}, this.filterTasks)
   }

   render() {
      const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
      return(
      
         <View style={styles.container}>
            <AddTask isVisible={this.state.showAddTask} onCancel={() => this.setState({showAddTask:false})} onSave={this.addTask}/>
            <ImageBackground source={todayImage} style={styles.background}>
               <View style = {styles.iconBar}>
                  <TouchableOpacity onPress={this.toggleFilter}>
                  <Image
                     style={styles.icone}
                     source={this.state.showDoneTasks ? {uri:'https://cdn.pixabay.com/photo/2014/04/03/10/05/eye-309755_1280.png'} : {uri:'https://cdn.pixabay.com/photo/2015/12/22/04/00/eye-1103592_1280.png'}}

                     // source={{uri:'https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915455_1280.png'}}
                  />
                  </TouchableOpacity>
               </View>
               <View style={styles.titleBar}>
                  <Text style={styles.title}>Hoje</Text>
                  <Text style={styles.subtitle}>{today}</Text>
               </View>
            </ImageBackground>
            <View style={styles.taskList}>
               <FlatList data={this.state.visibleTasks} keyExtractor={item => `${item.id}`} renderItem={({item}) => <Task {...item} onToggleTask={this.toggleTask} onDelete = {this.deleteTask }/> }/>
            </View>

            <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={() => this.setState({showAddTask: true})}>
               <Image
                  style={styles.iconeMais}
                  source={{uri:'https://cdn.pixabay.com/photo/2013/07/12/17/55/plus-152614_1280.png'}}
               />
            </TouchableOpacity>




         </View>
      )
         
   }
}

const styles = StyleSheet.create({
   container:{
      flex: 1
   },
   background:{
      flex: 3
   },
   taskList:{
      flex: 7
   },
   titleBar:{
      flex: 1,
      justifyContent: 'flex-end'
   },
   title:{
      fontFamily: commonStyles.fontFamily,
      fontSize: 50,
      color: commonStyles.colors.secondary,
      marginLeft: 20,
      marginBottom: 20,
   },
   subtitle:{
      fontFamily: commonStyles.fontFamily,
      color: commonStyles.colors.secondary,
      marginLeft: 20,
      marginBottom: 20,
   },
   iconBar:{
      flexDirection: 'row',
      marginHorizontal: 20,
      justifyContent: 'flex-end',
      marginTop: Platform.OS === 'ios' ? 40 : 10
      
   },
   icone: {
      width: 30,
      height:20,
   },
   iconeMais: {
      width: 20,
      height:20,
   },
   addButton: {
      position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.colors.today,
        justifyContent: 'center',
        alignItems: 'center'

   },
});