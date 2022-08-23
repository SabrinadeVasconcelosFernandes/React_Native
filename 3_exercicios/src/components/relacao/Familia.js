import React from 'react'
import {Text} from 'react-native'
import Membro from './Membro'

export default props => {
    return (
        <>
            <Text>Membros dessa familia:</Text>
            {props.children}
            <Text>_____________________</Text>
        </>
    )
}