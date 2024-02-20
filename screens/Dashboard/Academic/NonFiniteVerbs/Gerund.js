import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import { ScrollView } from "react-native-gesture-handler";

const Gerund = () => {
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 20, textAlign: "center" }}>The Gerund</Text>
        </View>

        <View>
          <Text style={{ fontSize: 17, textDecorationLine: "underline" }}>
            <BoldTextHelper text="It's Form" />
          </Text>
          <Text style={styles.text}>
            “A Gerund is that form of the verb which ends in “ing” and has the
            force of a Noun and a Verb.” (Wren and Martin)
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.text}>
            It would appear from the above definition that a Gerund is formed by
            adding ‘ing’ to a Verb, and it performs the functions of both Noun
            and Verb. The sign of recognizing a Gerund is that it is always a
            ‘Verb + ing’, as—
            <BoldTextHelper text="running , walking, driving, reading, writing" />
            , etc.
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={{ textDecorationLine: "underline", fontSize: 16 }}>
            <BoldTextHelper text="Note--" />
          </Text>
          <Text style={styles.text}>
            It may be remembered in this connection that in form the Present
            Participle is also Verb + ing. But the functions of Gerund and
            Present Participle are quite different.
          </Text>

          <Text style={styles.text}>
            The function of Gerund is Verb + Noun, while that of Present
            Participle is Verb + Adjective.
          </Text>

          <Text style={styles.text}>
            <BoldTextHelper text="Gerund" /> = Verb + Noun (Verbal Noun)
          </Text>
          <Text style={styles.text}>
            <BoldTextHelper text="Participle" /> = Verb + Adjective (Verbal
            Adjective)
          </Text>
        </View>

        <View style={styles.view}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              textDecorationLine: "underline",
            }}
          >
            Its Different Forms
          </Text>

          <View style={styles.view}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={[styles.text, { fontWeight: "bold" }]}>Tense</Text>
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                Active Voice
              </Text>
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                Passive Voice
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                Present or Continuous{" "}
              </Text>
              <Text style={styles.text}>Loving </Text>
              <Text style={styles.text}>Being loved</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                Perfect{" "}
              </Text>
              <Text style={styles.text}>Having loved </Text>
              <Text style={styles.text}>Having been loved</Text>
            </View>
          </View>
        </View>

        <View style={styles.view}>
          <Text style={styles.sideHeading}>Gerund and Noun-Infinitive</Text>
          <Text style={styles.text}>
            As we have said above the function of Gerund is Verb + Noun. The
            function of Noun Infinitive is also Verb + Noun. Therefore in most
            sentences either Gerund or Noun Infinitive can be used without any
            change in meaning.
          </Text>

          <View style={styles.view}>
            <Text style={styles.text}>
              <BoldTextHelper text="Teaching" /> is easy. (Gerund)
            </Text>
            <Text style={styles.text}>
              <BoldTextHelper text="To teach" /> is easy. (Infinitive)
            </Text>
            <Text style={styles.text}>
              <BoldTextHelper text="To see" /> is to believe. (Infinitive)
            </Text>
            <Text style={styles.text}>
              <BoldTextHelper text="Seeing" /> is believing. (Gerund)
            </Text>
          </View>
        </View>

        <View style={styles.view}>
          <Text style={styles.sideHeading}>Functions of Gerund</Text>
          <Text style={styles.text}>
            Like Infinitive, Gerund also performs the following functions of the
            Noun :{" "}
          </Text>

          <View style={styles.view}>
            <Text style={styles.sideHeading}>A. As the Subject of a Verb</Text>
            <Text style={styles.text}>
              1. <BoldTextHelper text="Walking" /> is good for health. (What is
              good for health? – walking)
            </Text>
            <Text style={styles.text}>
              2. <BoldTextHelper text="Seeing" /> is believing. (What is
              believing? – seeing)
            </Text>
            <Text style={styles.text}>
              3. <BoldTextHelper text="Fishing" /> is popular in coastal areas.
              (What is popular in coastal areas? – fishing)
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.sideHeading}>B. As the object of a Verb</Text>
            <Text style={styles.text}>
              1. Stop <BoldTextHelper text="shouting" />. (Stop what? –
              shouting.)
            </Text>
            <Text style={styles.text}>
              * 2. I hate <BoldTextHelper text="telling" /> lies. (I hate what?
              – telling.)
            </Text>
            <Text style={styles.text}>
              3. He loves <BoldTextHelper text="hunting" />. (He loves what? –
              hunting)
            </Text>
            <Text style={styles.text}>
              * 4. He likes <BoldTextHelper text="sitting" /> idle. (He likes
              what? – sitting)
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.sideHeading}>
              C. As the object of a Preposition
            </Text>
            <Text style={styles.text}>
              * 1. He is fond <BoldTextHelper text="of reading" /> novels. (He
              is fond of what? – reading)
            </Text>
            <Text style={styles.text}>
              2. I was tired <BoldTextHelper text="of waiting." />
            </Text>
            <Text style={styles.text}>
              * 3. I believe <BoldTextHelper text="in working" /> hard.
            </Text>
            <Text style={styles.text}>
              4. I am <BoldTextHelper text="against fighting." />
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.sideHeading}>
              D. As the Complement of a Verb
            </Text>
            <Text style={styles.text}>
              * 1. What I hate <BoldTextHelper text="is telling" /> lies
            </Text>
            <Text style={styles.text}>
              2. His habit <BoldTextHelper text="was reading" /> till late in
              the night.
            </Text>
            <Text style={styles.text}>
              * 3. What I detest most is <BoldTextHelper text="sitting" /> idle.
            </Text>
            <Text style={styles.text}>
              4. His weakness <BoldTextHelper text="is drinking" />. (His
              weakness is what? – drinking)
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.sideHeading}>E. As case in Apposition</Text>
            <Text style={styles.text}>
              1. It is no use <BoldTextHelper text="running" /> after shadows.
            </Text>
            <Text style={styles.text}>
              2. It is useless <BoldTextHelper text="talking" /> to him.
            </Text>
            <Text style={styles.text}>
              3. It was foolish of him <BoldTextHelper text="weeping" /> alone.
            </Text>
            <Text style={styles.text}>
              4. It was so sweet of her <BoldTextHelper text="trusting" /> me.
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.sideHeading}>F. Absolute use </Text>
            <Text style={styles.text}>
              <BoldTextHelper text="Hunting being hateful to him," /> we did not
              carry our guns.
            </Text>
            <Text style={styles.text}>
              <BoldTextHelper text="Drinking being his weakness," /> we did not
              take him with us.
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>Rules of the Use of Gerund</Text>
          </View>
        </View>

        <View style={styles.view}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Gerund</Text>
          <Text style={styles.sideHeading}>
            Rule 1—Gerund and Possessive Case
          </Text>

          <View>
            <Text>
              The Noun or Pronoun coming before Gerund must be used in
              Possessive case. As—
            </Text>
            <Text style={styles.text}>
              1. I am sorry for my being late. (not “for me / I being late”)
            </Text>
            <Text style={styles.text}>
              2. I am glad at your reaching here in time. (not “at you
              reaching”)
            </Text>
            <Text style={styles.text}>
              3. Please excuse me for my coming late. (not “me / I coming late”)
            </Text>
            <Text style={styles.text}>
              4. Nobody can prevent my going there. (not “me going there”)
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>
              <BoldTextHelper text="Note—" />
              --(i) If the Noun coming before Gerund is a lifeless thing, it
              should not be used in the Possessive case. As—
            </Text>

            <Text style={styles.text}>
              1. There is a chance of the milk turning sour. (not “milk’s
              turning”)
            </Text>
            <Text style={styles.text}>
              2. There is danger of the roof falling in rains. (not “roof’s
              falling”)
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>
              (ii) In the same way, Possessive case should not be made of Plural
              Nouns ending in – s, or of Demonstrative Pronouns (this / that /
              these / those).
            </Text>
          </View>

                <View style={styles.view}>
                  <Text style={[styles.sideHeading,{lineHeight:28}]}>
                  * Rule 2—There are some Verbs after which only Gerund should be used (not Infinitive).
                  </Text>

                  <Text style={styles.text}>
                  These Verbs are : Feel, mind, avoid, consider, enjoy, excuse, finish, miss, can’t help, look forward, to give up, go on, it is no good, it is no use.As—
</Text>
                </View>
                <View>
           
            <Text style={styles.text}>
            1. I avoid going there. 				(not “avoid to go”)
            </Text>
            <Text style={styles.text}>
            2. I can’t help rejecting your application.		(not “can’t help to reject”)
            </Text>
            <Text style={styles.text}>
            3. We just missed catching the train. 		(not “missed to catch”)            </Text>
            <Text style={styles.text}>
            4. Would you mind leaving me alone. 		(not “mind to leave”)
            </Text>
          </View>


          <View style={styles.view}>
                  <Text style={[styles.sideHeading,{lineHeight:28}]}>
                  Rule 3—Compound Nouns as Gerunds
                  </Text>

                  <Text style={styles.text}>
                  The following compound Nouns have Verb + ing as one part of their form. This Verb + ing part is called its Gerund. As— Walking-stick, writing-table, frying-pan, hunting-whip, sitting-room, inking-pad, etc.
</Text>
                </View>
                <View>
           
            <Text style={styles.text}>
            This is because the ‘ing’ part is not separable from the complete word, and therefore it cannot be a qualifying Adjective.
            </Text>
           
          </View>



          <View style={styles.view}>
                  <Text style={[styles.sideHeading,{lineHeight:28}]}>
                  Rule 4—Compound Gerunds
                  </Text>

                  <Text style={styles.text}>
                  Sometimes Gerunds can be formed by using Past Participle form of the Verb after Having or Being. They are called Compound Gerunds.                  </Text>
                </View>
                <View>
           
            <Text style={styles.text}>
            1. He is fond of being praised.
           </Text>
           <Text style={styles.text}>
           2. He is afraid of being punished.
           </Text>
           <Text style={styles.text}>
           3. We hear of his having won a reward.
           </Text>
           <Text style={styles.text}>
           4. He is guilty of having deceived a friend.
           </Text>
           
          </View>


                
          <View style={styles.view}>
                  <Text style={[styles.sideHeading,{lineHeight:28}]}>
                  Rule 5—Gerunds as Ordinary Nouns
                  </Text>

                  <Text style={styles.text}>
                  Sometimes Gerunds can be used as pure ordinary Nouns. They have ‘The before them and ‘of’ after them.
                  </Text>
                 </View>
                <View>
           
            <Text style={styles.text}>
            1. Now there remains only the signing of the treaty.
           </Text>
           <Text style={styles.text}>
           2. From here we can watch the setting of the sun.           </Text>
           <Text style={styles.text}>
           3. Let us now begin the singing of the hymns.           </Text>
           <Text style={styles.text}>
           4. This is no time for the playing of cards.           </Text>
           
          </View>

        </View>

        
      </ScrollView>
    </View>
  );
};

export default Gerund;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 28,
    textAlign: "justify",
  },
  view: {
    marginVertical: 10,
  },
  sideHeading: {
    fontSize: 17,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});