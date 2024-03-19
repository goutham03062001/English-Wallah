import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText"
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const OpenConditional = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>

      <Text style={{fontSize:20}}>
      <BoldTextHelper text="Type 1: open conditional clause:"/>
       </Text>

       <Text style={{fontSize:17,marginVertical:20,textAlign:"justify",lineHeight:29}}>It tells that something will take place, if a certain condition is fulfilled. This condition may or may not be fulfilled.</Text>
      
      <Text>
      <UnderlineTextHelper
      inputStyle={{color:"black",fontSize:17,textAlign:"justify"}}
        text="If + Subject + V1 —— subject + will / shall / can / may + V1"
      />
      </Text>

        <View>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>1. If you invite me, I will come.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>2. If you work hard, you will good get good marks.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>3. If you come to class regularly, you will pass.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>4. If you get up early, you will catch the bus.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>5. If you start early from there, you will reach in time.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>6. If she invites me, I will attend the function.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>7. If they ask me, I will give.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>8. If he gives her, she will take it.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>9. If my father gives some money, I will buy a new dress.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>10. If you show your hall ticket, I will let in.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>11. If I find a job, I will help my father.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>12. If you read the book, you will enjoy it.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>13. If you tell the truth, I may help you.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>14. * If the meeting is arranged, you will be informed. </Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>15. He will do it if you ask him.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>16. She will sing a song if you ask her.</Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default OpenConditional

const styles = StyleSheet.create({
    rootContainer:{
        padding:10
    }
})