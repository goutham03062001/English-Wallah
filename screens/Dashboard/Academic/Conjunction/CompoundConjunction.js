import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../Adverb/UnderlineTextHelper";
import { Divider } from "react-native-paper";
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
            styling={{ padding: 1, marginVertical: 8}}
          />

          <View style={{ marginVertical: 8, gap: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 17 }}>
              <Text>
                1. He applied for a job <UnderlineTextHelper text="in order that"/> he might help his father.
              </Text>
            </Text>
            <Text style={{ fontSize: 17 }}>
              <Text>
                2. He spends <UnderlineTextHelper text="as if"/> he were a rich man.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                3. He danced with joy <UnderlineTextHelper text="as if"/> he had won the prize.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              4. He behaved <UnderlineTextHelper text="as though"/> he were a king.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              5. She appears as <UnderlineTextHelper text="as though"/> she were a film star.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              6. <UnderlineTextHelper text="As soon as "/>I saw Madavi, I fell in love with her.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              7. Madavi <UnderlineTextHelper text="as well as "/> her friend is beautiful.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              8. He saved some money <UnderlineTextHelper text="so that"/> he might use it in future.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              9. <UnderlineTextHelper text="Even if"/> she is beautiful, I won’t marry her.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              10. I shall give the job <UnderlineTextHelper text="provided that"/> you must know typing.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
              11. I can lend you the money on <UnderlineTextHelper text="condition that"/> you return it in a month.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                12. She had <UnderlineTextHelper text="scarcely " /> returned
                home when someone knocked at the door.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                13. We had <UnderlineTextHelper text="no sooner" /> started for
                Hyderabad than our uncle arrived.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                14. <UnderlineTextHelper text="Though" /> he tried to convince
                his wife, (yet) she was not happy with his words.
              </Text>
            </Text>
          </View>
        </View>

        <Divider />
        <View style={{ marginVertical: 35 }}>
          {/* Cumulative or Copulative Conjunctions */}
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Note: Position of Correlatives:
          </Text>
          <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22 }}>
            If the first part of the pair is used before a{" "}
            <Text style={{ fontWeight: "bold" }}>noun </Text>, the second part
            should also be used before a{" "}
            <Text style={{ fontWeight: "bold" }}>noun</Text>, not before a verb,
            adjective or adverb.
          </Text>

          {/* <Text style={{textAlign:"center",marginVertical:10}}>Or</Text>

      <Text style={{fontSize:16}}>
      Conjunctions which are used to join statements are known as Cumulative or Copulative conjunctions.
      </Text> */}

          <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22 }}>
          Likewise, if the first part is used before a <Text style={{ fontWeight: "bold" }}>verb</Text>, <Text style={{ fontWeight: "bold" }}>adjective</Text> or <Text style={{ fontWeight: "bold" }}>adverb</Text>, the second part should also be used accordingly.
          </Text>

          <View style={{ marginVertical: 8 }}>
            <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22 }}>
                1. <>
                        <BoldTextHelper text="Either" fontSize={16}/>
                    </> my father <BoldTextHelper text="or" fontSize={16}/> my brother, <BoldTextHelper text="or" fontSize={16}/> my uncle will help me in my hour of need.
                
                 </Text>
            <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22 }}>
              <Text>
              2. He is <BoldTextHelper text="neither" fontSize={16}/> strong <BoldTextHelper text="nor" fontSize={16}/> courageous.
              </Text>
            </Text>
            <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22 }}>
              <Text>
              3. I shall <BoldTextHelper text="either" fontSize={16}/> read <BoldTextHelper text="or" fontSize={16}/> write a story.  
              </Text>
            </Text>
            <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22 }}>
              4. He will <BoldTextHelper text="not only" fontSize={16}/> encourage you but also help you.
            </Text>
            
          </View>
        </View>

        
      </View>
    </ScrollView>
  );
};

export default CompoundConjunction;

const styles = StyleSheet.create({});
