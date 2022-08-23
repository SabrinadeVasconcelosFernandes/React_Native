import React, {Component} from 'react'
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   TextInput,
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

class Login extends Component {

   state = {
      email: '',
      password: ''
   }

   login = () => {
      this.props.navigation.navigate('Profile')
   }
//autoFocus={true} 
   render() {
      return(
         <View style={styles.container}>
      
            {/* email */}
            <TextInput placeholder='E-mail' style={styles.input} autoFocus={true} keyboardType='email-address' value={this.state.email} onChangeText={email => this.setState({ email })} />

            {/* senha */}
            <TextInput placeholder='Senha' style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={password => this.setState({ password })} />

            <TouchableOpacity onPress={this.login} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {props.navigation.navigate('Register')}} style={styles.button}>
                <Text style={styles.buttonText}>Criar nova conta...</Text>
            </TouchableOpacity>

        </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   },
   button: {
       marginTop: 30,
       padding: 10,
       backgroundColor: '#4286f4',
   },
   buttonText: {
       fontSize: 20,
       color: '#FFF',
   },
   input: {
      marginTop: 20,
      width: '90%',
      backgroundColor: '#EEE',
      height: 40,
      borderWidth: 1,
      borderColor: '#333',
   }
})
export default Login