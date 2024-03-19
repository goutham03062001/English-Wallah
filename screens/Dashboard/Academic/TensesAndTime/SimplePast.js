import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const SimplePast = () => {
  return (
   <ScrollView>
     <View style={styles.rootContainer}>
      <Text style={styles.mainHeading}>Simple Past Tense: (Subject +V2)</Text>
      <Text style={styles.normalText}>It is used in the following cases –</Text>
    
      {/* A */}

      <View>
        <Text style={styles.sideHeading}>
        (A) To express actions those ended in the past, and carry the sense of Past Time.
        </Text>

        <Text style={styles.normalText}>1. I <UnderlineTextHelper text="wrote"/> a letter yesterday.</Text>
        <Text style={styles.normalText}>2. He <UnderlineTextHelper text="called"/> me an hour ago.</Text>
        <Text style={styles.normalText}>3. My father <UnderlineTextHelper text="came"/> from Dubai last year.</Text>
        <Text style={styles.normalText}>* 4. She <UnderlineTextHelper text="came"/> to me this morning.</Text>
        <Text style={styles.normalText}>5. India <UnderlineTextHelper text="got"/> independence in 1947.</Text>
        <Text style={styles.normalText}>* 6. We <UnderlineTextHelper text="were"/> at home in the morning.</Text>
        <Text style={styles.normalText}>7. He <UnderlineTextHelper text="was"/> hungry then.</Text>
        <Text style={styles.normalText}>* 8. Alexander Fleming <UnderlineTextHelper text="discovered"/> Penicillin.</Text>
      </View>
    
{/* B */}
      <View>
        <Text style={styles.sideHeading}>
        (B) Past habits are described by using the simple past.
        </Text>

        <Text style={styles.normalText}>1. In those days, I <UnderlineTextHelper text="watched"/> television every Saturday.</Text>
        <Text style={styles.normalText}>2. We <UnderlineTextHelper text="used"/> to get up early in the morning.</Text>
      </View>
    </View>
   </ScrollView>
  )
}

export default SimplePast

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