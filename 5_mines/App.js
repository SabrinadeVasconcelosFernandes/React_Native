import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'
import Flag from './src/components/Flag'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions'


export default class App extends Component {


  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () =>{
    const cols = params.getCollumsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.dificultLevel)
  }

  createState = () => {
    const cols = params.getCollumsAmount()
    const rows = params.getRowsAmount()
    return{
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row,column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Buhuuuuu', 'Perdeu bobóca !!!')
    }
    if(won){
      showMines(board)
      Alert.alert('Parabéns', 'Você venceu, que demais !!!')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if(won){
      showMines(board)
      Alert.alert('Parabéns', 'Você venceu, que demais !!!')
    }
    this.setState({board, won})
  }

  onLevelSelected = level => {
    params.dificultLevel = level
    this.setState(this.createState())
  }

  render(){
    return(
      <View style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection} onLevelSelected={this.onLevelSelected} onCancel={() => this.setState({showLevelSelection: false})}/>
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())} 
          onFlagPress={() => this.setState({ showLevelSelection: true })} />
        
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField = {this.onOpenField} onSelectField ={this.onSelectField}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
   },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
});

