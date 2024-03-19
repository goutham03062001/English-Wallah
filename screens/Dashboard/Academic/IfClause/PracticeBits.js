import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText"
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const PracticeBits = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>

      <Text style={{fontSize:20}}>
      <BoldTextHelper text="Unless = If not"/>
       </Text>

      
      

        <View>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>1. <BoldTextHelper text="If"/> you run, the police________________ (suspect) you</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>2. <BoldTextHelper text="If"/> he had known of your arrival he________ (meet) you.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>3. <BoldTextHelper text="If"/> he________________ (go) early, he can catch the bus.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>4. <BoldTextHelper text="If"/> I were you I __________ (shall) tell him the truth.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>5. <BoldTextHelper text="If"/> he________________ (take) my advice, he would not have been in trouble.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>6. <BoldTextHelper text="If"/> he had studied harder, he ________________ (pass) the examination.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>7. <BoldTextHelper text="If"/> it________________ (rain), we will not come to your place to night.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>8. <BoldTextHelper text="If"/> I ___________ (be) a bird, I would fly high in the sky.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>9. <BoldTextHelper text="If"/> you work hard, you ________ (pass) the examination.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>10. <BoldTextHelper text="If"/> he_______________ (ask) I would have helped her. </Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default PracticeBits

const styles = StyleSheet.create({
    rootContainer:{
        padding:10
    }
})