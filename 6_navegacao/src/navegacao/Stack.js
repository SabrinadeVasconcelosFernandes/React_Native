import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

import PassoStack from '../components/PassoStack'



const Stack = createNativeStackNavigator();

export default props => (
   <Stack.Navigator initialRouteName="TelaA">

      <Stack.Screen name="TelaA" options={{title:'Informações iniciais'}}>
         {props => (
            <PassoStack {...props} avancar="TelaB">
               <TelaA/>
            </PassoStack>
         )}
      </Stack.Screen>   


      <Stack.Screen name="TelaB">
         {props => (
               <PassoStack {...props} avancar="TelaC" voltar>
                  <TelaB/>
               </PassoStack>
            )}
      </Stack.Screen>

      <Stack.Screen name="TelaC">
         {props => (
               <PassoStack {...props} voltar avancar="TelaC">
                  <TelaC/>
               </PassoStack>
            )}
      </Stack.Screen>
      
   </Stack.Navigator>
)
