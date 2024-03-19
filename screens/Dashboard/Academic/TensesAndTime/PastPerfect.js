import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UnderlineTextHelper from "../utils/UnderlineText";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";

const PastPerfect = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={styles.mainHeading}>
        Past Perfect Tense (Sub + had + V3)
        </Text>
        <View>
          <Text style={[styles.sideHeading,{marginVertical:5}]}>
          (A) This tense is used to express an action already completed before a certain point of time in the past.
          </Text>
          

          <Text style={styles.normalText}>
          1. My father <UnderlineTextHelper text=" had built"/> my house before 1995.
          </Text>
          <Text style={styles.normalText}>
          2. He <UnderlineTextHelper text=" had resigned"/> from his post before joining here.
          </Text>
          <Text style={styles.normalText}>
          3. He <UnderlineTextHelper text=" had already"/> decided to settle down in America.
          </Text>
         
          
          
        </View>

        <View>
          <Text style={styles.sideHeading}>
          (B) If reference is to two activities completed in the past, one activity having been completed earlier than the other, the one completed earlier will required Past Perfect Tense, and the later one Simple Past Tense.
          </Text>
          <Text style={styles.normalText}>
          1. The doctor arrived after the patient <UnderlineTextHelper text="had died"/>. / The
patient <UnderlineTextHelper text="had died"/> before the doctor arrived.

          </Text>
          <Text style={styles.normalText}>
          2. He <UnderlineTextHelper text="reached"/> the station after the train <UnderlineTextHelper text=" had left."/>
          </Text>
          <Text style={styles.normalText}>
          3. He <UnderlineTextHelper text="had gone"/> to bed before you <UnderlineTextHelper text="reached"/> there.
          </Text>
          <Text style={styles.normalText}>
          4. They <UnderlineTextHelper text="had"/> just <UnderlineTextHelper text="finished"/> cooking, when we <UnderlineTextHelper text="went"/> to their house.
          </Text>
          <Text style={styles.normalText}>
          4. He <UnderlineTextHelper text="has been"/> to America.
          </Text>
          <Text style={styles.normalText}>
          5. Nobody <UnderlineTextHelper text="told"/> me that the principal <UnderlineTextHelper text="had decided"/> to declare a special holiday that Monday.
          </Text>
          <Text style={styles.normalText}>
          6. I realized that <UnderlineTextHelper text="I had forgotten"/> the tickets at home.
          </Text>
        </View>

       

        
      </View>
    </ScrollView>
  );
};

export default PastPerfect;



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
