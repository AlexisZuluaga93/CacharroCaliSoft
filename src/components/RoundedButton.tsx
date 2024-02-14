import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MyColors } from '../theme/AppTheme'

interface Props {
    text :string
}

export const RoundedButton = ({text}:Props) => {
  return (
    
        <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.btnTxt}>{text}</Text>
            
        </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    roundedButton:{
        marginTop:25,
        width:"100%",
        height:50,
        backgroundColor:MyColors.primary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30
    },
    btnTxt:{
        color:MyColors.fontColor,
        fontWeight:"bold"
    }
})


