import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import { HighLightColor } from "../utils/Colors";
import { PoppinsRegular } from "../../../../utils/FontHelper";
const HelperComponent = ({ inputText, target, avoid }) => {
  const words = inputText.split(" ");

  return (
    <Text>
      {words.map((word, index) => {
        const shouldHighlight =
          target && target.includes(word.replace(/[.,]/g, ""));
        return (
          <Text
            key={index}
            style={{
              fontWeight: shouldHighlight ? "400" : "normal",
              fontSize: 16,
              color: shouldHighlight ? "red" : "black",
              lineHeight: 26,
              fontFamily: shouldHighlight ? PoppinsRegular : "",
            }}
          >
            {word}
            {index !== words.length - 1 && " "}
          </Text>
        );
      })}
    </Text>
  );
};

const UseOfPreposition = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 8 }}>
        <Text style={{ fontSize: 16 }}>
          Generally Prepositions are used{" "}
          <BoldTextHelper
            text="before their objects."
            inputStyle={{ color: HighLightColor }}
          />
        </Text>

        <View style={{ marginVertical: 15 }}>
          <HelperComponent
            inputText="1. The book is on the table."
            target="on"
          />
          <HelperComponent inputText="2. He is in his office." target="in" />
          <HelperComponent inputText="3. He is fond of tea." target="of" />
          <HelperComponent inputText="4. She comes from Delhi." target="from" />
          <Text
            style={{
              fontSize: 16,
              marginVertical: 15,
              lineHeight: 26,
              textAlign: "justify",
            }}
          >
            In the above sentences{" "}
            <BoldTextHelper
              text="on, in, of, from"
              inputStyle={{ color: HighLightColor }}
            />{" "}
            are Prepositions and they have all been used before their objects{" "}
            <BoldTextHelper
              text="(table, office, tea, Delhi)."
              inputStyle={{ color: HighLightColor }}
            />{" "}
            A Preposition may have{" "}
            <BoldTextHelper
              text="two or more than two objects."
              inputStyle={{ color: HighLightColor }}
            />{" "}
            The Preposition will be used before the first of all these objects.
            As—
          </Text>

          <HelperComponent
            inputText="1. The cattle graze in valleys and pastures."
            target="in valleys and pastures"
            avoid="and"
          />

          <HelperComponent
            inputText="2. She is very fond of grapes, apples and oranges."
            target="of grapes, apples  oranges."
          />

          <Text style={{ fontSize: 16, marginVertical: 8 }}>
            But in the following conditions Preposition is used after the
            Object—
          </Text>
          <View>
            {/* I */}
            <HelperComponent
              inputText="(I) When the object is Relative Pronoun ‘that’, the Preposition is placed at the end of the sentence. As—"
              target="Relative Pronoun ‘that’"
            />
            <View style={{ marginVertical: 10 }}></View>

            <HelperComponent
              inputText="1. This is the book that you asked for."
              target="that,for"
            />
            <HelperComponent
              inputText="2. That is the car that you travelled by."
              target="that,by"
            />
            <HelperComponent
              inputText="3. I know the man that you were talking to."
              target="that,to"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            {/* I */}
            <HelperComponent
              inputText="(II) Also when the object is some understood (hidden) Relative Pronoun, the Preposition
is placed at the end of the sentence. As—"
              target="object is some understood , Relative Pronoun"
            />
            <View style={{ marginVertical: 10 }}></View>
            <HelperComponent
              inputText="1. That is the house I lived in. (In this sentence Relative Pronoun ‘that’ or ‘which’ is understood at the point marked )"
              target="in,‘which’,‘that’"
            />
            <HelperComponent
              target="(whom),of"
              inputText="2. That is the man (whom) I was speaking of."
            />
            <HelperComponent
              target="(that), for"
              inputText="3. There is the book (that) you were looking for."
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            {/* I */}
            <HelperComponent
              inputText="(III) When the object is an Interrogative Pronoun (who/whom/what/which), the Preposition is placed at the end of the sentence. As—"
              target="Interrogative Pronoun (who/whom/what/which), end"
            />
            <View style={{ marginVertical: 10 }}></View>

            <HelperComponent
              inputText="1. What are you looking at ?"
              target="What,at"
            />
            <HelperComponent
              inputText="2. What are you thinking of ?"
              target="What,of"
            />
            <HelperComponent
              target="Which,in"
              inputText="3. Which of these houses do you live in ?"
            />
            <HelperComponent
              target="Whom,with"
              inputText="4. Whom are you going with ?"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            {/* I */}
            <HelperComponent
              inputText="(IV) Sometimes for the sake of emphasis the object is placed at the beginning of the sentence.
In that case also the Preposition is placed at the end of the sentence. As—
"
              target="emphasis, object,beginning, Preposition, end"
            />
            <View style={{ marginVertical: 10 }}></View>

            <HelperComponent inputText="1. Him I depend on." target="Him,on" />
            <HelperComponent
              inputText="2. This I insist on."
              target="This, on"
            />
            <HelperComponent
              inputText="3. That you must speak out."
              target="That,out"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            {/* I */}
            <HelperComponent
              inputText="(V) In the Passive Voice also the Preposition is placed at the end of the sentence."
              target="Passive Voice, Preposition,end"
            />
            <View style={{ marginVertical: 10 }}></View>

            <HelperComponent
              inputText="1. He can be relied upon."
              target="upon"
            />
            <HelperComponent
              inputText="2. Was the proposal agreed to ?"
              target="to"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UseOfPreposition;

const styles = StyleSheet.create({});
