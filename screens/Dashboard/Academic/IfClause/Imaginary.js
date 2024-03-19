import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText"
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const Imaginary = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>

      <Text style={{fontSize:20}}>
      <BoldTextHelper text="Type 2: Imaginary / Improbable Conditional Clause:"/>
       </Text>

       <Text style={{fontSize:17,marginVertical:20,textAlign:"justify",lineHeight:29}}>
       It tells us what we expect may not take place. (it happens only in imagination.)
       </Text>
      
      <Text>
      <UnderlineTextHelper
      inputStyle={{color:"black",fontSize:17,textAlign:"justify"}}
        text="If + subject + V2 ———— subject + would / should / could / might + V1"
      />
      </Text>

        <View>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>1. If I were a bird, I should fly.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>2. If I were a fish, I would swim.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>3. If I were you, I would marry her.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>4. If I were you, I should not do like that..</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>5. If I saw a snake, I would run.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>6. If I had money I could study in America.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>7. If I saw Rani, I could talk to her.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>8. If she were a film star, I should ask her autograph.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>9. If they had a house, they would sell it.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>10. If Gandhi were alive, he might not tolerate the violence in the country.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>11. If I had a gun, I should kill him.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>12. If she were Rani, she would help me.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>13. If he were Balakrishna, he would kill everyone.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>14. If I were you, I should accept the offer. </Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default Imaginary

const styles = StyleSheet.create({
    rootContainer:{
        padding:10
    }
})