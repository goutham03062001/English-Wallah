import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import { PoppinsLight,PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";
import { HighLightColor,SideHeadingColor } from "../utils/Colors";
const Gerund = () => {
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 20, textAlign: "center" }}>The Gerund</Text>
        </View>

        <View>
          <Text style={{ fontSize: 17}}>
            <BoldTextHelper text="It's Form" inputStyle={{backgroundColor:SideHeadingColor,color:"black",textDecorationLine:"none"}}/>
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
            <BoldTextHelper
            inputStyle={{color:HighLightColor}}
             text="running , walking, driving, reading, writing" />
            , etc.
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={{ textDecorationLine: "underline", fontSize: 16 }}>
            <BoldTextHelper text="Note--" />
          </Text>
          <Text style={styles.text}>
            It may be remembered in this connection that in form the <BoldTextHelper text="Present  Participle" inputStyle={{color:HighLightColor}}/> is also <BoldTextHelper tex="Verb+ing"/> But the functions of Gerund and
            Present Participle are quite different.
          </Text>

          <Text style={styles.text}>
            The function of Gerund is Verb + Noun, while that of Present
            Participle is Verb + Adjective.
          </Text>

          <Text style={styles.text}>
            <BoldTextHelper text="Gerund" inputStyle={{color:HighLightColor}}/> = Verb + Noun (Verbal Noun)
          </Text>
          <Text style={styles.text}>
            <BoldTextHelper text="Participle" inputStyle={{color:HighLightColor}}/> = Verb + Adjective (Verbal
            Adjective)
          </Text>
        </View>

        <View style={styles.view}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              textDecorationLine: "underline",
              backgroundColor:SideHeadingColor
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
              <Text style={[styles.text, { fontWeight: "bold" ,width:100}]}>Tense</Text>
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
              <Text style={[styles.text, { fontWeight: "bold" ,width:100}]}>
                Present/Continuous
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
              <Text style={[styles.text, { fontWeight: "bold" ,width:100}]}>
                Perfect{" "}
              </Text>
              <Text style={styles.text}>Having loved </Text>
              <Text style={styles.text}>Having been loved</Text>
            </View>
          </View>
        </View>

        <View style={styles.view}>
          <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor,textDecorationLine:"none"}]}>Gerund and Noun-Infinitive</Text>
          <Text style={styles.text}>
            As we have said above the function of Gerund is <BoldTextHelper text="Verb+Noun." inputStyle={{color:HighLightColor}}/> The
            function of Noun Infinitive is also <BoldTextHelper text="Verb+Noun." inputStyle={{color:HighLightColor}}/> Therefore in most
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
          <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>Functions of Gerund</Text>
          <Text style={styles.text}>
            Like Infinitive, Gerund also performs the following functions of the
            Noun :{" "}
          </Text>

          <View style={styles.view}>
            <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>A. As the Subject of a Verb</Text>
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
            <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>B. As the object of a Verb</Text>
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
            <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>
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
            <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>
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
            <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>E. As case in Apposition</Text>
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
            <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>F. Absolute use </Text>
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
          <Text style={{ textAlign: "center", fontSize: 20 ,backgroundColor:SideHeadingColor}}>Gerund</Text>
          <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor,marginTop:19}]}>
            Rule 1—Gerund and Possessive Case
          </Text>

          <View>
          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

              The Noun or Pronoun coming before Gerund must be used in
              Possessive case. As—
            </Text>
            <Text style={styles.text}>
              1. I am sorry for <BoldTextHelper text="my being"/> late. (not “for me / I being late”)
            </Text>
            <Text style={styles.text}>
              2. I am glad at <BoldTextHelper text="your reaching"/> here in time. (not “at you
              reaching”)
            </Text>
            <Text style={styles.text}>
              3. Please excuse me for <BoldTextHelper text="my coming"/> late. (not “me / I coming late”)
            </Text>
            <Text style={styles.text}>
              4. Nobody can prevent <BoldTextHelper text="my going"/> there. (not “me going there”)
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>
              <BoldTextHelper text="Note—" />
              --(i) If the Noun coming before Gerund is a <BoldTextHelper text="lifeless thing"/>, it should
              <BoldTextHelper text="not be"/> be used in the <BoldTextHelper text="Possessive case."/>  As—
            </Text>

            <Text style={styles.text}>
              1. There is a chance of the <BoldTextHelper text="milk turning"/> sour. (not “milk’s
              turning”)
            </Text>
            <Text style={styles.text}>
              2. There is danger of the <BoldTextHelper text="roof falling"/> in rains. (not “roof’s
              falling”)
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>
              (ii) In the same way, Possessive case should not be made of Plural
              Nouns ending in – s, or of Demonstrative Pronouns <BoldTextHelper text="(this / that /
              these / those)."/>
            </Text>
          </View>

                <View style={styles.view}>
                  <Text style={[styles.sideHeading,{lineHeight:28,backgroundColor:SideHeadingColor}]}>
                  * Rule 2—There are some Verbs after which only Gerund should be used (not Infinitive).
                  </Text>

                  <Text style={styles.text}>
                  These Verbs are : <BoldTextHelper
                  inputStyle={{color:HighLightColor}}
                   text=" Feel, mind, avoid, consider, enjoy, excuse, finish, miss, can’t help, look forward, to give up, go on, it is no good, it is no use."/> As—
</Text>
                </View>
                <View>
           
            <Text style={styles.text}>
            1. I avoid <BoldTextHelper text="going"/> there. 				(not “avoid to go”)
            </Text>
            <Text style={styles.text}>
            2. I can’t help <BoldTextHelper text="rejecting"/> your application.		(not “can’t help to reject”)
            </Text>
            <Text style={styles.text}>
            3. We just missed <BoldTextHelper text="catching"/> the train. 		(not “missed to catch”)            </Text>
            <Text style={styles.text}>
            4. Would you mind <BoldTextHelper text="leaving"/> me alone. 		(not “mind to leave”)
            </Text>
          </View>


          <View style={styles.view}>
                  <Text style={[styles.sideHeading,{lineHeight:28,backgroundColor:SideHeadingColor}]}>
                  Rule 3—Compound Nouns as Gerunds
                  </Text>

                  <Text style={styles.text}>
                  The following compound Nouns have <BoldTextHelper text="Verb+ing" inputStyle={{color:HighLightColor}}/> as one part of their form. This <BoldTextHelper text="Verb+ing" inputStyle={{color:HighLightColor}}/> part is called its Gerund. As— <BoldTextHelper text="Walking-stick, writing-table, frying-pan, hunting-whip, sitting-room, inking-pad," inputStyle={{color:HighLightColor}}/> etc.
</Text>
                </View>
                <View>
           
            <Text style={styles.text}>
            This is because the ‘ing’ part is not separable from the complete word, and therefore it cannot be a qualifying Adjective.
            </Text>
           
          </View>



          <View style={styles.view}>
                  <Text style={[styles.sideHeading,{lineHeight:28,backgroundColor:SideHeadingColor}]}>
                  Rule 4—Compound Gerunds
                  </Text>

                  <Text style={styles.text}>
                  Sometimes Gerunds can be formed by using Past Participle form of the Verb after <BoldTextHelper text="Having" inputStyle={{color:HighLightColor}}/> or Being. They are called <BoldTextHelper text="Compound Gerunds." inputStyle={{color:HighLightColor}}/> </Text>
                </View>
                <View>
           
            <Text style={styles.text}>
            1. He is fond of <BoldTextHelper text="being praised."/>
           </Text>
           <Text style={styles.text}>
           2. He is afraid of <BoldTextHelper text="being punished."/>
           </Text>
           <Text style={styles.text}>
           3. We hear of his <BoldTextHelper text="having own"/> a reward.
           </Text>
           <Text style={styles.text}>
           4. He is guilty of <BoldTextHelper text="having deceived"/> a friend.
           </Text>
           
          </View>


                
          <View style={styles.view}>
                  <Text style={[styles.sideHeading,{lineHeight:28,backgroundColor:SideHeadingColor}]}>
                  Rule 5—Gerunds as Ordinary Nouns
                  </Text>

                  <Text style={styles.text}>
                  Sometimes Gerunds can be used as pure <BoldTextHelper text="ordinary Nouns." inputStyle={{color:HighLightColor}}/> They have <BoldTextHelper text="'The" inputStyle={{color:HighLightColor}}/> before them and ‘of’ after them.
                  </Text>
                 </View>
                <View>
           
            <Text style={styles.text}>
            1. Now there remains only <BoldTextHelper text="the signing of"/> the treaty.
           </Text>
           <Text style={styles.text}>
           2. From here we can watch <BoldTextHelper text="the setting of"/> the sun.           </Text>
           <Text style={styles.text}>
           3. Let us now begin <BoldTextHelper text="the singing"/> of the hymns.           </Text>
           <Text style={styles.text}>
           4. This is no time for <BoldTextHelper text="the playing"/> of cards.           </Text>
           
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
