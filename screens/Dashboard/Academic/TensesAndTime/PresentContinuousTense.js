import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
import { ScrollView } from 'react-native-gesture-handler';
const PresentContinuous = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
      <Text style={styles.mainHeading}>Present Continuous Tense: (sub + am / is / are + V1+ ing)</Text>
      <Text style={styles.normalText}>Present Continuous Tense is used in the following situations</Text>
        <View>

          <Text style={styles.sideHeading}>
          (A)To express an action going on at the time of speaking.
          </Text>

          <Text style={styles.normalText}>1. The birds <UnderlineTextHelper text="are flying"/> in the sky.</Text>
          <Text style={styles.normalText}>2. I <UnderlineTextHelper text="am teaching"/> now.</Text>
          <Text style={styles.normalText}>3. Don’t disturb, the baby <UnderlineTextHelper text="is sleeping"/></Text>
          <Text style={styles.normalText}>4. Look! The old man <UnderlineTextHelper text="is crossing"/> the road.</Text>
          <Text style={styles.normalText}>5. Listen! Somebody <UnderlineTextHelper text="is knocking"/> the door.</Text>
        </View>
    
      <View>
      <Text style={styles.sideHeading}>
      (B) To indicate that a situation is or may be temporary.
          </Text>
          <Text style={styles.normalText}>1. They live in a village, but they <UnderlineTextHelper text="are staying"/> with us this summer in a city.</Text>
          <Text style={styles.normalText}>2. I usually read novels, but <UnderlineTextHelper text="I'm reading"/> poetry these days for a change.</Text>


      </View>

      <View>
        <Text style={styles.sideHeading}>
        (C) To indicate a certain programme or decision scheduled to take place in near future. It carries the sense of Future Time.
        </Text>
        <Text style={styles.normalText}>1. We <UnderlineTextHelper text="are playing"/>  a match tomorrow.</Text>
        <Text style={styles.normalText}>2. I <UnderlineTextHelper text="am leaving"/>  for Calcutta this evening.</Text>
        <Text style={styles.normalText}>3. My father <UnderlineTextHelper text="is coming"/>  today.</Text>
        <Text style={styles.normalText}>4. I <UnderlineTextHelper text="am going"/>  to cinema tonight.</Text>

      </View>

      <View>
        <Text style={styles.sideHeading}>
        (D) To express the possibility or determination.
        </Text>
        <Text style={styles.normalText}>1. I <UnderlineTextHelper text="am going"/> to buy a car.</Text>
        <Text style={styles.normalText}>2. She <UnderlineTextHelper text="is going"/> to give a performance.</Text>
        <Text style={styles.normalText}>3. He <UnderlineTextHelper text="is going"/>  to boat in the lake.</Text>
        <Text style={styles.normalText}>4. You <UnderlineTextHelper text="are going"/>  to lose in this bargain.</Text>

      </View>

    </View>
    </ScrollView>
  )
}

export default PresentContinuous

const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  },
  mainHeading:{
    fontSize:18,
    textAlign:"center",
    color:"red",
    fontFamily:PoppinsRegular
  },
  normalText:{fontSize:16,lineHeight:29,textAlign:"justify"},
  sideHeading:{
    fontWeight:"bold",
    fontSize:17,
    textDecorationLine:"underline",
    marginVertical:15,
    textAlign:"justify",
    lineHeight:26
  }
})