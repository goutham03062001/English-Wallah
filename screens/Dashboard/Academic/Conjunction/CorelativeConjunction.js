import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
import { Divider } from "react-native-paper";
import { PoppinsLight,PoppinsRegular } from "../../../../utils/FontHelper";
import {HighLightColor} from "../utils/Colors"
const CorelativeConjunction = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 8, marginTop: 9 }}>
        <Text style={{ lineHeight: 22, fontSize: 16 }}>
          <UnderlineTextHelper text="Conjunctions which are used in pairs"
            inputStyle={{color:HighLightColor}}
          /> are known as correlative
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
      
            inputStyle={{color:HighLightColor,
              padding: 4, marginVertical: 8
            }}
          />

          <View style={{ marginVertical: 8, gap: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 17 }}>
              <Text>
                1. Madavi is <UnderlineTextHelper style={{lineHeight:29}}xtHelper text="either" 
                  inputStyle={{color:"red"}}
                /> a typist
                <UnderlineTextHelper text="or" inputStyle={{color:"red"}}/> a teacher.
              </Text>
            </Text>
            <Text style={{ fontSize: 17 }}>
              <Text style={{lineHeight:29}}>
                2. She can speak <UnderlineTextHelper text="neither" inputStyle ={{lineHeight:29,color:"red"}}/> English{" "}
                <UnderlineTextHelper text="nor" inputStyle={{color:"red"}}/> Hindi.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                3. He is <UnderlineTextHelper text="as much" inputStyle={{color:"red"}}/> greatly as
                miserable.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                4. He <UnderlineTextHelper text="not only" inputStyle={{color:"red"}}/> wrote but also
                sang it well.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                5. <UnderlineTextHelper text="Such" inputStyle={{color:"red"}}/> was her reply that I
                never expected.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                6. Vijaya is <UnderlineTextHelper text="as" inputStyle = {{color:"red"}}/> beautiful{" "}
                <UnderlineTextHelper text="as" inputStyle={{color:"red"}}/> her sister.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                7. <UnderlineTextHelper text="Even if" inputStyle={{color:"red"}}/> she is selfish, I will
                help her.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                8. <UnderlineTextHelper text="As" inputStyle={{color:"red"}}/> you work,{" "}
                <UnderlineTextHelper text="so" inputStyle={{color:"red"}}/> the result is.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                9. He went to Agra <UnderlineTextHelper text="so that" inputStyle={{color:"red"}}/> he
                might see his sister.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                10. I had <UnderlineTextHelper text="hardly" inputStyle={{color:"red"}}/> reached home
                when the phone began ringing.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                11. I don’t know <UnderlineTextHelper text="whether" inputStyle={{color:"red"}}/> she will
                marry him or continue her studies.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                12. She had <UnderlineTextHelper text="scarcely " inputStyle={{color:"red"}}/> returned
                home when someone knocked at the door.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                13. We had <UnderlineTextHelper text="no sooner" inputStyle={{color:"red"}}/> started for
                Hyderabad than our uncle arrived.
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>
              <Text style={{lineHeight:29}}>
                14. <UnderlineTextHelper text="Though" inputStyle={{color:"red"}}/> he tried to convince
                his wife, (yet) she was not happy with his words.
              </Text>
            </Text>
          </View>
        </View>

        <Divider />
        <View style={{ marginVertical: 35 }}>
          {/* Cumulative or Copulative Conjunctions */}
          <Text style={{ fontSize: 17, color:"black",backgroundColor:"#FFDE7D",paddingHorizontal:8,fontFamily:PoppinsRegular,fontWeight:600}}>
            Note: Position of Correlatives:
          </Text>
          <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 29 }}>
            If the first part of the pair is used before a{" "}
            <Text style={{ fontFamily:PoppinsRegular,color:HighLightColor}}>noun </Text>, the second part
            should also be used before a{" "}
            <Text style={{ fontFamily:PoppinsRegular,color:HighLightColor }}>noun</Text>, not before a verb,
            adjective or adverb.
          </Text>

          {/* <Text style={{textAlign:"center",marginVertical:10}}>Or</Text>

      <Text style={{fontSize:16}}>
      Conjunctions which are used to join statements are known as Cumulative or Copulative conjunctions.
      </Text> */}

          <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 29 }}>
          Likewise, if the first part is used before a <Text style={{ fontFamily:PoppinsRegular,color:HighLightColor}}>verb</Text>, <Text style={{ fontFamily:PoppinsRegular,color:HighLightColor}}>adjective</Text> or <Text style={{ fontFamily:PoppinsRegular,color:HighLightColor}}>adverb</Text>, the second part should also be used accordingly.
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
