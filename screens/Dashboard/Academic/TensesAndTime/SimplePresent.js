import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from "../utils/UnderlineText"
import { PoppinsRegular } from '../../../../utils/FontHelper';
const SimplePresent = () => {
  return (
   <ScrollView>
    <View style={styles.rootContainer}>
      <Text style={styles.mainHeading}>Simple Present Tense : (Subject + V1 (s/es)</Text>
      <Text style={styles.normalText}>
      The Simple Present Tense is used in the following situations:
      </Text>

      {/* A */}

      <View>
        {/* side heading */}
        <Text style={styles.sideHeading}>(A)To express daily doing actions.</Text>
        <Text style={styles.normalText}>1. We <UnderlineTextHelper text="come"/> to school/college daily.</Text>
        <Text style={styles.normalText}>2. My mother <UnderlineTextHelper text="prepares"/> food for us every day in the morning.</Text>
        <Text style={styles.normalText}>3. They <UnderlineTextHelper text="play"/> cricket in the evenings.</Text>
        <Text style={styles.normalText}>4. Raju <UnderlineTextHelper text="goes"/> to temple on Mondays / every Monday.</Text>
      </View>

      <View>
        {/* side heading */}
        <Text style={styles.sideHeading}>(B)To express a habitual action or some repeated action.</Text>
        <Text style={styles.normalText}>1. I <UnderlineTextHelper text="love"/> children.</Text>
        <Text style={styles.normalText}>2. She <UnderlineTextHelper text="uses"/> heavy cosmetics.</Text>
        <Text style={styles.normalText}>3. He <UnderlineTextHelper text="reads"/> till late in the night.</Text>
        <Text style={styles.normalText}>4. He <UnderlineTextHelper text="doesn't"/> talk too much.</Text>
        <Text style={styles.normalText}>5. They <UnderlineTextHelper text="like"/> playing cricket.</Text>
      </View>

      <View>
        {/* side heading */}
        <Text style={styles.sideHeading}>(C)To express some Universal Truths or Principles. These sentences carry the sense of Past, Present and Future Time.</Text>
        <Text style={styles.normalText}>1. The moon <UnderlineTextHelper text="appears"/> in the night.</Text>
        <Text style={styles.normalText}>2. The rose <UnderlineTextHelper text="smells"/> sweat.</Text>
        <Text style={styles.normalText}>3. Water <UnderlineTextHelper text="freezes"/> at – 4 C</Text>
        <Text style={styles.normalText}>4. Sugar <UnderlineTextHelper text="tastes"/> seat.</Text>
        <Text style={styles.normalText}>5. Fish <UnderlineTextHelper text="live"/> in water.</Text>
      </View>


      <View>
        {/* side heading */}
        <Text style={styles.sideHeading}>(D)To express some programme, Function or Decision fixed for Future. It indicates Future Time.</Text>
        <Text style={styles.normalText}>1. Our examinations <UnderlineTextHelper text="begin"/> tomorrow.</Text>
        <Text style={styles.normalText}>2. We <UnderlineTextHelper text="play"/> a friendly match next Sunday.</Text>
        <Text style={styles.normalText}>* 3. I <UnderlineTextHelper text="go"/> to Bombay tomorrow morning.</Text>
        <Text style={styles.normalText}>* 4. Depawali <UnderlineTextHelper text="falls"/> next month.</Text>
      </View>

      <View>
        {/* side heading */}
        <Text style={styles.sideHeading}>(E) To express some historical truth, vivid  description, live commentary or broadcasting.</Text>
        <Text style={styles.normalText}>1. Now shivaji <UnderlineTextHelper text="escapes"/> from the Fort of Agra.</Text>
        <Text style={styles.normalText}>2. India <UnderlineTextHelper text="gets"/> Independence on the 15th of August, 1947.</Text>
        <Text style={styles.normalText}>3. Now Kapil Dev <UnderlineTextHelper text="strikes"/> a sixer.</Text>
        <Text style={styles.normalText}>4. The Prime Minister <UnderlineTextHelper text="hoists"/> the national flag.</Text>
      </View>


      <View>
        {/* side heading */}
        <Text style={styles.sideHeading}>(F) Clause of Time or Condition is also expressed in Simple Present.</Text>
        <Text style={styles.normalText}>1. <BoldTextHelper text="If"/> you <UnderlineTextHelper text="work"/> hard, you will pass.</Text>
        <Text style={styles.normalText}>2. You will be appointed <BoldTextHelper text="if"/> you <UnderlineTextHelper text="apply"/>.</Text>
        <Text style={styles.normalText}>3. Please wait <BoldTextHelper text="until"/> <UnderlineTextHelper text="come"/>.</Text>
        <Text style={styles.normalText}>4. The train will leave <BoldTextHelper text="before"/> you <UnderlineTextHelper text="reach"/>.</Text>
      </View>

    </View>
   </ScrollView>
  )
}

export default SimplePresent

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