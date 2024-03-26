import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
import {HighLightColor,SideHeadingColor} from "../utils/Colors"
const TransitiveVerbs = () => {
  return (
    <View style={{ paddingHorizontal: 8, marginTop: 8 }}>
      <Text style={{ fontSize: 18, fontFamily: PoppinsRegular, backgroundColor:SideHeadingColor }}>
        TransitiveVerbs
      </Text>
      <Text style={{ fontSize: 16, marginVertical: 10, lineHeight: 29 }}>
        A Verb is <BoldTextHelper text="Transitive" inputStyle={{color:HighLightColor}}/> if the action does not
        stop with the agent, but passes from the agent to something else.”{" "}
        <BoldTextHelper text="(J. C. Nesfield)" 
          inputStyle={{color:HighLightColor}}
        />
      </Text>
      <Text style={{ fontSize: 16 }}>
        I <UnderlineTextHelper text="read" inputStyle={{color:'red'}}/> a{" "}
        <UnderlineTextHelper text="book" inputStyle={{color:'red'}}/>.
      </Text>

      <Text style={{ fontSize: 16, marginVertical: 8, lineHeight: 29 }}>
        In this sentence the sense is not complete with{" "}
        <UnderlineTextHelper text="‘I read’ " inputStyle={{color:'red'}}/> only, until it is known what I
        read. The sense is complete only when we say “I read a <UnderlineTextHelper text="book" inputStyle={{color:'red'}}/>. The
        action, thus, passes on to the <UnderlineTextHelper text="book" inputStyle={{color:'red'}}/>. In this way the <UnderlineTextHelper text="Person" inputStyle={{color:'red'}}/> or <UnderlineTextHelper text="Thing " inputStyle={{color:'red'}}/>
        with which the <UnderlineTextHelper text="action of the verb ends" inputStyle={{color:'red'}}/> is called its <UnderlineTextHelper text="Object" inputStyle={{color:'red'}}/>. A
        <UnderlineTextHelper text="Transitive" inputStyle={{color:'red'}}/> Verb must have its <UnderlineTextHelper text="Object" inputStyle={{color:'red'}}/>.
      </Text>
    </View>
  );
};

export default TransitiveVerbs;

const styles = StyleSheet.create({});
