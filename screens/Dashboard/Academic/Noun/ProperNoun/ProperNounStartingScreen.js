import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import BoldTextHelper from "../../utils/BoldText"
const ArticlesStartingScreen = () => {
 
  return (
   <ScrollView>
     <View style={styles.rootContainer}>
     

      <Text style={{fontSize:16,lineHeight:25,textAlign:"justify",padding:6}}>Special names given to <BoldTextHelper inputStyle={{color:"#0165E1"}} text="people"/>,  <BoldTextHelper inputStyle={{color:"#0165E1"}} text="places"/>,  <BoldTextHelper inputStyle={{color:"#0165E1"}} text="pets"/>, <BoldTextHelper inputStyle={{color:"#0165E1"}} text="days"/>, <BoldTextHelper inputStyle={{color:"#0165E1"}} text="months"/> and <BoldTextHelper inputStyle={{color:"#0165E1"}} text="organizations,"/> etc are called proper nouns.</Text>

      <View style={{marginVertical:20,gap:10}}>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>1. <BoldTextHelper text="Venkatadri"/> sir and <BoldTextHelper text="Mathin"/> sir are my English gurus.</Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>2. <BoldTextHelper text="Delhi"/> is the capital of India</Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>3. <BoldTextHelper text="Tommy"/> is my pet dog.</Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>4. Today is <BoldTextHelper text="Sunday"/></Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>5.I work in  <BoldTextHelper text="Spring Fields High School."/></Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>6. My friend Raju lives in <BoldTextHelper text="New Zealand"/></Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>7. The  <BoldTextHelper text="Ganges"/> is a river.</Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>8. My School is on  <BoldTextHelper text="Rastrapathi Road"/></Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>9. My friend Raju lives in <BoldTextHelper text="New Zealand"/></Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>10. The  <BoldTextHelper text="Everest"/> is a mountain</Text>
      <Text style={{fontSize:16,marginVertical:5,color:"black"}}>11.  <BoldTextHelper text="Dasera"/> falls in october</Text>
      
      </View>
    </View>
   </ScrollView>
  )
}

export default ArticlesStartingScreen

const styles = StyleSheet.create({
    rootContainer:{
        padding:5,
        flex:1,
        
    }
})