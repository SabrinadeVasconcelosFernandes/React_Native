import React, {useContext, createContext, useReducer, useState} from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({})

const actions = {

   createUser(state,action){

      const user = action.payload
      user.id = Math.random()
      return{
         ...state,
         users: [...state.users, user],
      }

   },


   updateUser(state, action){

      const updated = action.payload
      return{
         ...state,
         users: state.users.map(u => u.id === updated.id ? updated : u)
      }

   },

   deleteUser(state,action){
      const user = action.payload
         return {
            //...state pega todos os atributos do objeto state(o nome disso é operador spread)
            ...state,
            //usando a função filter vamos pegar todos os itens que são estritamente diferentes do id do objeto que queremos excluir e mantê-los. Isso faz com que o que for estritamente igual ao id do que queremos excluir seja excluido por que foi filtrado,
            users: state.users.filter(u => u.id !== user.id) 
            //o método filter vai sempre retornar um array novo, não vai mexer no array anterior, no estado anterior.
         }
   }
}

export const UsersProvider = props => {

   function reducer(state,action){
      //o objetivo do reducer é EVOLUIR o estado
      const fn = actions[action.type]
      return fn ? fn(state, action) : state
   }

  const [ state, dispatch ] = useReducer(reducer, initialState)
   return(
      <UsersContext.Provider value={{state, dispatch}}>
         {props.children}
      </UsersContext.Provider>
   )
}

export default UsersContext