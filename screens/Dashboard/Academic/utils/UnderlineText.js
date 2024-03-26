import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper'
const UnderlineTextHelper = ({text,inputStyle}) => {
  return (
   
      <Text style={[{textDecorationLine:"underline",color:"red"},inputStyle,{fontFamily:PoppinsRegular}]}>{text}</Text>
 
  )
}

export default UnderlineTextHelper

const styles = StyleSheet.create({})