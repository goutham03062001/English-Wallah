import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
import { Divider } from "react-native-paper";
import { PoppinsLight,PoppinsRegular } from "../../../../utils/FontHelper";
const CorelativeConjunction = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 8, marginTop: 9 }}>
        <Text style={{ lineHeight: 22, fontSize: 16 }}>
          <UnderlineTextHelper text="Conjunctions which are used in pairs"/> are known as correlative
          conjunctions.
        </Text>

        <View>
          {/* Cumulative or Copulative Conjunctions */}

          <BoldTextHelper
            text="Either – or, 
        Neither – nor, 
        Both – and, 
        Al/though – yet, 
        Whether – nor, 
        Not only – but also, 
        So – that, 
        Such – that, 
        Such – as, 
        As - as, 
        Not so – as, 
        As – so, 
        Hardly – when, 
        Scarcely – when, 
        No sooner – than, 
        * Lest – should
        "
            fontSize={16}
            styling={{ padding: 4, marginVertical: 8 }}
            inputStyle={{color:"green"}}
          />

          <View style={{ marginVertical: 8, gap: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 17 }}>
              <Text>
                1. Madavi is <UnderlineTextHelper text="either" 
                  inputStyle={{color:"green"}}
                /> a typist{" "}
                <UnderlineTextHelper text="or" /> a teacher.
              </Text>
            </Text>
            <Text style={{ fontSize: 17 }}>
              <Text>
                2. She can speak <UnderlineTextHelper text="neither" /> English{" "}
                <UnderlineTextHelper text="nor" /> Hindi.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                3. He is <UnderlineTextHelper text="as much" /> greatly as
                miserable.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                4. He <UnderlineTextHelper text="not only" /> wrote but also
                sang it well.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                5. <UnderlineTextHelper text="Such" /> was her reply that I
                never expected.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                6. Vijaya is <UnderlineTextHelper text="as" /> beautiful{" "}
                <UnderlineTextHelper text="as" /> her sister.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                7. <UnderlineTextHelper text="Even if" /> she is selfish, I will
                help her.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                8. <UnderlineTextHelper text="As" /> you work,{" "}
                <UnderlineTextHelper text="so" /> the result is.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                9. He went to Agra <UnderlineTextHelper text="so that" /> he
                might see his sister.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                10. I had <UnderlineTextHelper text="hardly" /> reached home
                when the phone began ringing.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text>
                11. I don’t know <UnderlineTextHelper text="whether" /> she will
                marry him or continue her studies.
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
          <Text style={{ fontSize: 17, color:"green",fontFamily:PoppinsRegular,fontWeight:600}}>
            Note: Position of Correlatives:
          </Text>
          <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22 }}>
            If the first part of the pair is used before a{" "}
            <Text style={{ fontFamily:PoppinsRegular,color:"green"}}>noun </Text>, the second part
            should also be used before a{" "}
            <Text style={{ fontFamily:PoppinsRegular,color:"green" }}>noun</Text>, not before a verb,
            adjective or adverb.
          </Text>

          {/* <Text style={{textAlign:"center",marginVertical:10}}>Or</Text>

      <Text style={{fontSize:16}}>
      Conjunctions which are used to join statements are known as Cumulative or Copulative conjunctions.
      </Text> */}

          <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22 }}>
          Likewise, if the first part is used before a <Text style={{ fontFamily:PoppinsRegular,color:"green"}}>verb</Text>, <Text style={{ fontFamily:PoppinsRegular,color:"green"}}>adjective</Text> or <Text style={{ fontFamily:PoppinsRegular,color:"green"}}>adverb</Text>, the second part should also be used accordingly.
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

export default CorelativeConjunction;

const styles = StyleSheet.create({});
