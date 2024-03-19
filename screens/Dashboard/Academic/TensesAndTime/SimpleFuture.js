import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
import { ScrollView } from 'react-native-gesture-handler';
const SimpleFuture = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
      <Text style={styles.mainHeading}>Simple Future Tense: (subject + will/shall/can + V1)</Text>

        <View>
          <Text style={styles.sideHeading}>
          (A)This tense is used for future actions
(It is used to indicate an action scheduled to take place in future.)

          </Text>

          <Text style={styles.normalText}>1. I <UnderlineTextHelper text="shall go"/> to office tomorrow.</Text>
          <Text style={styles.normalText}>2. He <UnderlineTextHelper text="will come"/> on Monday.</Text>
          <Text style={styles.normalText}>3. You <UnderlineTextHelper text="will get"/> your chance next time.</Text>
          <Text style={styles.normalText}>4. We <UnderlineTextHelper text="shall have"/> holiday tomorrow.</Text>
        </View>
    
      <View>
      <Text style={styles.sideHeading}>
      (B) Sometimes Simple Future Tense is used to convey universal truth or habit. These sentences express all three times – Past, Present and Future.
          </Text>
          <Text style={styles.normalText}>1. Sin <UnderlineTextHelper text="will be"/> sin.</Text>
          <Text style={styles.normalText}>2. A drunkard <UnderlineTextHelper text="will drink"/>.</Text>
          <Text style={styles.normalText}>3. Roses <UnderlineTextHelper text="will bloom"/> in spring.</Text>


      </View>

      <View>
        <Text style={styles.sideHeading}>
        (C) Am/Is/are going to is also used to talk about intentions and plans already made some time ago about a future event.
        </Text>
        <Text style={styles.normalText}>1. The Chief Minister <UnderlineTextHelper text="is going"/> to be the guest. (plan)</Text>
        <Text style={styles.normalText}>2. <UnderlineTextHelper text="I'm going"/> to visit Hyderabad after the examinations.(intention)</Text>
        <Text style={styles.normalText}>However, <BoldTextHelper text="“will”"/> is used <BoldTextHelper text=" to report plans in formal English."/></Text>
        <Text style={styles.normalText}>1. The Chief Minister <UnderlineTextHelper text="will address"/> the gathering at 10 a.m.</Text>
        <Text style={styles.normalText}>2. Coffee <UnderlineTextHelper text="will be served"/> at 11 a.m.</Text>

      </View>

    </View>
    </ScrollView>
  )
}

export default SimpleFuture

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