import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper'

const BoldTextHelper = ({text,fontSize,styling,color,inputStyle}) => {
  return (
    
     <>
     {styling ? <>
      <View style={styling}>
        <Text style={{fontSize:fontSize,color:"red",fontFamily:PoppinsRegular}}>{text}</Text>
      </View>
     </> : <>
     <Text style={[{fontWeight:"600",fontSize:fontSize,textAlign:"justify",color:"red",lineHeight:28,fontFamily:PoppinsRegular},inputStyle]}>{text}</Text>

     </>}
     </>
    
  )
}

export default BoldTextHelper

const styles = StyleSheet.create({})