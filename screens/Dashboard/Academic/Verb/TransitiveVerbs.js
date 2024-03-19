import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
const TransitiveVerbs = () => {
  return (
    <View style={{ paddingHorizontal: 8, marginTop: 8 }}>
      <Text style={{ fontSize: 18, fontFamily: PoppinsRegular, color: "red" }}>
        TransitiveVerbs
      </Text>
      <Text style={{ fontSize: 16, marginVertical: 10, lineHeight: 29 }}>
        A Verb is <BoldTextHelper text="Transitive" /> if the action does not
        stop with the agent, but passes from the agent to something else.”{" "}
        <BoldTextHelper text="(J. C. Nesfield)" />
      </Text>
      <Text style={{ fontSize: 16 }}>
        I <UnderlineTextHelper text="read" /> a{" "}
        <UnderlineTextHelper text="book" />.
      </Text>

      <Text style={{ fontSize: 16, marginVertical: 8, lineHeight: 29 }}>
        In this sentence the sense is not complete with{" "}
        <UnderlineTextHelper text="‘I read’ " /> only, until it is known what I
        read. The sense is complete only when we say “I read a <UnderlineTextHelper text="book"/>. The
        action, thus, passes on to the <UnderlineTextHelper text="book"/>. In this way the <UnderlineTextHelper text="Person"/> or <UnderlineTextHelper text="Thing "/>
        with which the <UnderlineTextHelper text="action of the verb ends"/> is called its <UnderlineTextHelper text="Object"/>. A
        <UnderlineTextHelper text="Transitive"/> Verb must have its <UnderlineTextHelper text="Object"/>.
      </Text>
    </View>
  );
};

export default TransitiveVerbs;

const styles = StyleSheet.create({});
