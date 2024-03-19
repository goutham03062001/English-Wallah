import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";
const PastContinuous = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={styles.mainHeading}>
          Past Continuous Tense: (sub + was / were + V1 + ing)
        </Text>
        {/* <Text style={styles.normalText}>Present Continuous Tense is used in the following situations</Text> */}
        <View>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
            (A) Past continuous tense is used to describe an event or action
            going on at some time in the past.
          </Text>
          <Text style={[styles.sideHeading,{marginVertical:0,textAlign:"center"}]}>Or</Text>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
            The past continuous tense is used to talk about a temporary
            situation that existed at a particular time in the past.
          </Text>

          <Text style={styles.normalText}>
          1. We <UnderlineTextHelper text="were watching"/> TV this evening.
          </Text>
          <Text style={styles.normalText}>
          2. I <UnderlineTextHelper text="was sleeping"/> at that time.
          </Text>
          <Text style={styles.normalText}>
          3. They <UnderlineTextHelper text="were visiting"/> London last year.
            <UnderlineTextHelper text="is sleeping" />
          </Text>
          <Text style={styles.normalText}>
          4. When he came home, I <UnderlineTextHelper text="was working"/> on my assignment.
          </Text>
          <Text style={styles.normalText}>
          5. When we <UnderlineTextHelper text="were playing"/> cricket, it rained heavily.
          </Text>
        </View>

        <View>
          <Text style={styles.sideHeading}>
          (B) The past continuous tense is also used to indicate two past simultaneous events or actions.
          </Text>
          <Text style={styles.normalText}>
          1. Ajay <UnderlineTextHelper text="was watching"/> TV while Vijay <UnderlineTextHelper text="was eating"/>
            
          </Text>
          <Text style={styles.normalText}>
          2. Everyone <UnderlineTextHelper text="was sleeping"/> when I <UnderlineTextHelper text="was preparing"/> for my interview.
          </Text>
          <Text style={styles.normalText}>
          3. When I <UnderlineTextHelper text="was teaching,"/> you <UnderlineTextHelper text="were listening"/> yesterday.
          </Text>
        </View>

        <View>
          <Text style={styles.sideHeading}>
          (C) This tense also expresses some persistent habits in the past. Adverbs of Frequency (always, often, continually, etc.) are often used with this Tense.
          </Text>
          <Text style={styles.normalText}>
          1. He <UnderlineTextHelper text="was"/> always <UnderlineTextHelper text="complaining"/>.
          </Text>
          <Text style={styles.normalText}>
          2. She <UnderlineTextHelper text="was"/> continually <UnderlineTextHelper text="harassing"/> her husband.
          </Text>
          <Text style={styles.normalText}>
          3. He <UnderlineTextHelper text="was"/> often <UnderlineTextHelper text="grumbling"/>.	
          </Text>
          
        </View>

        
      </View>
    </ScrollView>
  );
};

export default PastContinuous;

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
