import React, {useState} from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';


const TxtUsuario = (props) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Aqui está seu texto: {props.texto}</Text>
      </View>
    );
}

const executar = () => {
   console.warn('eu funciono')
}



export default LotsOfGreetings = () => {
   const [nome, setNome] = useState('')
    return (
      <>

      <View style={style.Fundo}>

         <View style={style.Branco}>
            <TextInput
            placeholder="Digite aqui"
            value={nome}
            onChangeText={nome=>setNome(nome)}
            />
            {/* <Text>{nome}</Text> */}
         </View>

         <View>
            <Button
               title="Clique-me"
               onPress={executar}
               
            />
         </View>
         
         <View style={{alignItems: 'center', top: 50}}>
         <TxtUsuario texto={nome} />
         </View>

      </View>


    </>  
    );
}

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
      marginTop:20,
      backgroundColor: '#FFF',
      marginBottom: 20,
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