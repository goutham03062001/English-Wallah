import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'

const EmphasizingAdjective = () => {
  return (
    <View style={styles.rootContainer}>
      <View>
      <Text style={{fontSize:16,marginVertical:18}}>An adjective used to emphasize a noun is known as Emphasizing adjective.</Text>
      </View>

      <View>
        <Text>
          <BoldTextHelper text="Ex: Own, very" fontSize={16}/>
        </Text>

        <Text style={{fontSize:16,marginVertical:8,color:"green"}}>1. I saw it with my <BoldTextHelper text="own"/> eyes.</Text>
        <Text style={{fontSize:16,marginVertical:8,color:"green"}}>2. His <BoldTextHelper text="own"/> book was lost.</Text>
        <Text style={{fontSize:16,marginVertical:8,color:"green"}}>3. That was the <BoldTextHelper text="very"/> book I was looking for. </Text>
        <Text style={{fontSize:16,marginVertical:8,color:"green"}}>4. This happened before my <BoldTextHelper text="very"/> eyes.</Text>
      </View>
    </View>
  )
}

export default EmphasizingAdjective

const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  }
})