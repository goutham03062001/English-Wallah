import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
import { Divider } from "react-native-paper";
import { HighLightColor } from "../utils/Colors";
const CompoundConjunction = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 8, marginTop: 9 }}>
        <Text style={{ lineHeight: 22, fontSize: 16 }}>
        Group of words which are used as conjunctions are known as compound conjunctions.
        </Text>

        <View>
          {/* Cumulative or Copulative Conjunctions */}

          <BoldTextHelper
            text="As if  / As though, Even if , As well as, As soon as, So that, As much as, In as much as, On condition that, Provided that, In order that
        "
            fontSize={16}
            inputStyle={{color:HighLightColor,padding:1,marginVertical:8}}
          />

          <View style={{ marginVertical: 8, gap: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 17 }}>
              <Text>
                1. He applied for a job <UnderlineTextHelper inputStyle={{color:"red"}} text="in order that"/> he might help his father.
              </Text>
            </Text>
            <Text style={{ fontSize: 17 }}>
              <Text>
                2. He spends <UnderlineTextHelper inputStyle={{color:"red"}} text="as if"/> he were a rich man.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                3. He danced with joy <UnderlineTextHelper inputStyle={{color:"red"}} text="as if"/> he had won the prize.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              4. He behaved <UnderlineTextHelper inputStyle={{color:"red"}} text="as though"/> he were a king.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              5. She appears as <UnderlineTextHelper inputStyle={{color:"red"}} text="as though"/> she were a film star.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              6. <UnderlineTextHelper inputStyle={{color:"red"}} text="As soon as "/>I saw Madavi, I fell in love with her.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              7. Madavi <UnderlineTextHelper inputStyle={{color:"red"}} text="as well as "/> her friend is beautiful.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              8. He saved some money <UnderlineTextHelper inputStyle={{color:"red"}} text="so that"/> he might use it in future.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              9. <UnderlineTextHelper inputStyle={{color:"red"}} text="Even if"/> she is beautiful, I won’t marry her.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              10. I shall give the job <UnderlineTextHelper inputStyle={{color:"red"}} text="provided that"/> you must know typing.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              11. I can lend you the money on <UnderlineTextHelper inputStyle={{color:"red"}} text="condition that"/> you return it in a month.
              </Text>
            </Text>
            
          
           
          </View>
        </View>

     
        
      </View>
    </ScrollView>
  );
};

export default CompoundConjunction;

const styles = StyleSheet.create({});
