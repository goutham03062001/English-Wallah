import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoldTextHelper = ({text,fontSize,styling,color}) => {
  return (
    
     <>
     {styling ? <>
      <View style={styling}>
        <Text style={{fontWeight:"bold",fontSize:fontSize}}>{text}</Text>
      </View>
     </> : <>
     <Text style={[{fontWeight:"600",fontSize:fontSize,textAlign:"justify",color:"#000",lineHeight:28}]}>{text}</Text>

     </>}
     </>
    
  )
}

export default BoldTextHelper

const styles = StyleSheet.create({})