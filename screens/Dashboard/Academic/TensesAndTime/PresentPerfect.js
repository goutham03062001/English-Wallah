import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import UnderlineTextHelper from '../utils/UnderlineText';
import BoldTextHelper from '../utils/BoldText';
import { PoppinsRegular } from '../../../../utils/FontHelper';
const PresentPerfect = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={styles.mainHeading}>
        Present Perfect Tense: (Sub + have / has + V3)
        </Text>
        <Text style={styles.normalText}>The following Adverbs or Adverbial Phrases can be used with the Present Perfect Tense – just, just now, till now, so far, ever, already, yet, etc.</Text>
        <View>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
          (A) The present perfect tense is used to indicate that something has happened just now/recently. Or used for just completed actions.
          </Text>
          

          <Text style={styles.normalText}>
          1. He <UnderlineTextHelper text="has closed"/> the shop just now.
          </Text>
          <Text style={styles.normalText}>
          2. I <UnderlineTextHelper text="have"/> just <UnderlineTextHelper text="come"/> from Delhi.
          </Text>
          <Text style={styles.normalText}>
          3. She <UnderlineTextHelper text="has"/> not yet <UnderlineTextHelper text="paid"/> school fee.
          </Text>
          <Text style={styles.normalText}>
          4. They <UnderlineTextHelper text="have"/> already <UnderlineTextHelper text="met"/> me.
          </Text>
          <Text style={styles.normalText}>
          5. She <UnderlineTextHelper text="has"/> just <UnderlineTextHelper text="come"/>. Let her take rest.
          </Text>
          <Text style={styles.normalText}>
          6. We <UnderlineTextHelper text="have"/> just <UnderlineTextHelper text="finished"/> the discussion. We can’t have any more comments.
          </Text>
        </View>

        <View>
          <Text style={styles.sideHeading}>
          (B) To indicate an action that took place in the past but the exact time of the action is not known or considered important enough to be mentioned.
          </Text>
          <Text style={styles.normalText}>
          1. The teacher <UnderlineTextHelper text="has"/> already <UnderlineTextHelper text="taught"/> us this lesson.
          </Text>
          <Text style={styles.normalText}>
          2. He <UnderlineTextHelper text="has"/> never <UnderlineTextHelper text="come"/> here.
          </Text>
          <Text style={styles.normalText}>
          3. I <UnderlineTextHelper text="have read"/> Ramayana.
          </Text>
          <Text style={styles.normalText}>
          4. He <UnderlineTextHelper text="has been"/> to America.
          </Text>
          <Text style={styles.normalText}>
          4. He<UnderlineTextHelper text="has been"/> to America.
          </Text>
          <Text style={styles.normalText}>
          5. She <UnderlineTextHelper text="has been"/> a great actress.
          </Text>
          <Text style={styles.normalText}>
          6. Look! He is limping. He <UnderlineTextHelper text="has broken"/> his leg.
          </Text>
        </View>

       

        
      </View>
    </ScrollView>
  )
}

export default PresentPerfect

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
  },
  mainHeading: {
    fontSize: 18,
    textAlign: "center",
    color: "red",
    fontFamily: PoppinsRegular,
  },
  normalText: { fontSize: 16, lineHeight: 29, textAlign: "justify" },
  sideHeading: {
    fontWeight: "bold",
    fontSize: 17,
    textDecorationLine: "underline",
    marginVertical: 15,
    textAlign: "justify",
    lineHeight: 26,
  },
});