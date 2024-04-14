import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
import UnderLineTextHelper from "../utils/UnderlineText";
import { PoppinsRegular, PoppinsLight } from "../../../../utils/FontHelper";
import UnderlineTextHelper from "../utils/UnderlineText";
const SubjectVerbAgreement = () => {
  const highLightColor = "#0165E1";
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <View>
          {/* Dare not need not */}
          <Text style={{ fontFamily: PoppinsRegular, fontSize: 16 }}>
            (1)
            <BoldTextHelper
              text="Dare not"
              inputStyle={{ color: "#0165E1" }}
            />{" "}
            and{" "}
            <BoldTextHelper text="Need not" inputStyle={{ color: "#0165E1" }} />
          </Text>
          <Text style={styles.normalText}>
            These are the two typical Verbs which in{" "}
            <BoldTextHelper
              text="Negative Sentences"
              inputStyle={{ color: highLightColor }}
            />{" "}
            (where
            <BoldTextHelper
              text=" dare"
              inputStyle={{ color: highLightColor }}
            />{" "}
            and{" "}
            <BoldTextHelper
              inputStyle={{ color: highLightColor }}
              text="need"
            />{" "}
            are followed by{" "}
            <BoldTextHelper text="not" inputStyle={{ color: highLightColor }} />
            ) are used in the Plural form even with Singular Subjects. “The
            third person singular is ’ and{" "}
            <BoldTextHelper
              text="need, "
              inputStyle={{ color: highLightColor }}
            />{" "}
            not
            <BoldTextHelper
              text="‘needs’ "
              inputStyle={{ color: highLightColor }}
            />{" "}
            just as{" "}
            <BoldTextHelper
              text="‘dare’"
              inputStyle={{ color: highLightColor }}
            />{" "}
            is used for ‘dares’ provided it is followed by a negative.” —{" "}
            <BoldTextHelper
              text="(Nesfield) As—"
              inputStyle={{ color: highLightColor }}
            />
          </Text>

          {/* Examples */}
          <View style={{ marginTop: 10 }}>
            <Text style={styles.normalText}>
              1. He <BoldTextHelper text="dare" /> not oppose me.
            </Text>
            <Text style={styles.normalText}>
              2. They <BoldTextHelper text="dare" /> not oppose me.
            </Text>
            <Text style={styles.normalText}>
              3. He <BoldTextHelper text="need" /> not go.
            </Text>
            <Text style={styles.normalText}>
              4. They <BoldTextHelper text="need" /> not go.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.normalText}>
              Note—If{" "}
              <BoldTextHelper
                text="dare"
                inputStyle={{ color: highLightColor }}
              />{" "}
              and{" "}
              <BoldTextHelper
                text="need"
                inputStyle={{ color: highLightColor }}
              />{" "}
              are used in the affirmative sense (i.e. without ‘not’) they take
              Plural form with the Plural Subject and Singular form with the
              Singular Subject. As—
            </Text>
            <Text style={styles.normalText}>
              1. He <BoldTextHelper text="dares" />.{" "}
            </Text>
            <Text style={styles.normalText}>
              2. They <BoldTextHelper text="dare" />.
            </Text>
            <Text style={styles.normalText}>
              3. He <BoldTextHelper text="needs" />.{" "}
            </Text>
            <Text style={styles.normalText}>
              4. They <BoldTextHelper text="need" />.
            </Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            {/* 2 Verbs of */}
            <Text style={styles.normalText}>
              <BoldTextHelper
                text="(2) Verbs of Supposition/ Subjunctive Mood"
                inputStyle={{ backgroundColor: "#FFDE7D", color: "black" }}
              />
            </Text>
            <Text style={styles.normalText}>
              The second exception to Rule 1 above is that{" "}
              <Text style={{ color: highLightColor }}>Plural Verb</Text> is used
              with{" "}
              <BoldTextHelper
                text="Singular Subjects"
                inputStyle={{ color: highLightColor }}
              />{" "}
              in sentences expressing mere imagination or impossible hope, wish
              or condition. As—
            </Text>
            <Text style={styles.normalText}>
              1. If I <BoldTextHelper text="were" /> you, I would do it.
            </Text>
            <Text style={styles.normalText}>
              2. He behaved as if he <BoldTextHelper text="were" /> our master.
            </Text>
          </View>

          <View>
            {/* 3 verbs of wish */}
            <Text style={styles.sideHeading}>(3) Verbs of Wish/Blessing</Text>
            <Text style={styles.normalText}>
              The third exception is that in sentences expressing deep and sharp
              wish, blessing or hope, Plural Verb is used with Singular
              Subjects. In these sentences the verb is used in the Subjunctive
              Mood. This use is now confined to a few sentences only. As—
            </Text>

            <Text style={styles.normalText}>
              1. Long <UnderLineTextHelper text="live" /> the{" "}
              <BoldTextHelper text="King" />.
            </Text>
            <Text style={styles.normalText}>
              2. <BoldTextHelper text="God" />{" "}
              <UnderLineTextHelper text="save" /> the King.
            </Text>
            <Text style={styles.normalText}>
              3. <BoldTextHelper text="Lor" />{" "}
              <UnderLineTextHelper text="bless" /> you.
            </Text>
            <Text style={styles.normalText}>
              4. Long <UnderLineTextHelper text="live" /> our{" "}
              <BoldTextHelper text="friendship" />.
            </Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            {/* 4 If two or */}
            <Text style={styles.sideHeading}>
              (4) If{" "}
              <BoldTextHelper
                inputStyle={{ color: highLightColor }}
                text="two"
              />{" "}
              or{" "}
              <BoldTextHelper
                inputStyle={{ color: highLightColor }}
                text="more Singular Subjects"
              />{" "}
              are joined with{" "}
              <BoldTextHelper
                inputStyle={{ color: highLightColor }}
                text="and"
              />
              , they take{" "}
              <BoldTextHelper
                inputStyle={{ color: highLightColor }}
                text="verb"
              />{" "}
              in the{" "}
              <BoldTextHelper
                inputStyle={{ color: highLightColor }}
                text="Plural Number"
              />{" "}
              . As—
            </Text>

            <Text style={[styles.normalText, { marginTop: 15 }]}>
              1. Ram <BoldTextHelper text="and" /> Mohan{" "}
              <BoldTextHelper text="come" /> here every day.
            </Text>
            <Text style={styles.normalText}>
              2. The father <BoldTextHelper text="and" /> son{" "}
              <BoldTextHelper text="work" /> together.
            </Text>
            <Text style={styles.normalText}>
              3. Lightning <BoldTextHelper text="and" /> thunder{" "}
              <BoldTextHelper text="come" /> together.
            </Text>
            <Text style={styles.normalText}>
              4. Shyam, Mohan <BoldTextHelper text="and" /> Ashok{" "}
              <BoldTextHelper text="have" /> come.
            </Text>
            <Text style={styles.normalText}>
              5. Gold <BoldTextHelper text="and" /> silver are precious metals.
            </Text>
            <Text style={styles.normalText}>
              6. Fire <BoldTextHelper text="and" /> water do not agree.
            </Text>
            <Text style={styles.normalText}>
              7. Knowledge <BoldTextHelper text="and" /> wisdom have oft-times
              no connection.
            </Text>
            <Text style={styles.normalText}>
              8. Are your father <BoldTextHelper text="and" /> mother at home?
            </Text>
            <Text style={styles.normalText}>
              9. He <BoldTextHelper text="and" /> I were playing.
            </Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            {/* 5 But if the */}
            <Text style={styles.sideHeading}>
              (5) But if the nouns suggest one idea to the mind, or refer to the
              same person or thing, the verb is singular; as,
            </Text>

            <Text style={[styles.normalText, { marginTop: 15 }]}>
              1. My friend <BoldTextHelper text="and" /> benefactor{" "}
              <UnderLineTextHelper text="has" /> come.
            </Text>
            <Text style={styles.normalText}>
              2. The novelist <BoldTextHelper text="and" /> poet{" "}
              <UnderLineTextHelper text="is" /> dead.
            </Text>
            <Text style={styles.normalText}>
              3. Time <BoldTextHelper text="and" /> tide{" "}
              <UnderLineTextHelper text="waits" /> for no man.
            </Text>
            <Text style={styles.normalText}>
              4. Bread <BoldTextHelper text="and" /> butter{" "}
              <UnderLineTextHelper text="is" /> his only food.
            </Text>
            <Text style={styles.normalText}>
              5. The horse <BoldTextHelper text="and" /> carriage{" "}
              <UnderLineTextHelper text="is" /> at the door.
            </Text>
            <Text style={styles.normalText}>
              6. Honour <BoldTextHelper text="and" /> glory{" "}
              <UnderLineTextHelper text="is" /> his reward.
            </Text>
            <Text style={styles.normalText}>
              7. The rise <BoldTextHelper text="and" /> fall of the tide{" "}
              <UnderLineTextHelper text="is" />, due to lunar influence.
            </Text>
            <Text style={styles.normalText}>
              8. <BoldTextHelper text="Slow" /> and{" "}
              <BoldTextHelper text="steady" />{" "}
              <UnderLineTextHelper text="wins" /> the race.
            </Text>
            <Text style={styles.normalText}>
              9. <BoldTextHelper text="Early to bed " /> and{" "}
              <BoldTextHelper text="early to rise" />{" "}
              <UnderLineTextHelper text="makes" /> a man healthy, wealthy and
              wise.
            </Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            {/* 6 If two */}
            <Text style={styles.sideHeading}>
              (6) If two Singular Nouns point to only one person or thing, they
              take verb in the Singular Number. As—
            </Text>

            <Text style={[styles.normalText, { marginTop: 15 }]}>
              1. <BoldTextHelper text="The" /> great poet and scholar{" "}
              <BoldTextHelper text="is" /> dead.
            </Text>
            <Text style={styles.normalText}>
              2. My friend and benefactor <BoldTextHelper text="has" /> come.
            </Text>
            <Text style={styles.normalText}>
              3. <BoldTextHelper text="The" /> great warrior and patriot{" "}
              <BoldTextHelper text="is" /> being honoured.
            </Text>
            <Text style={styles.normalText}>
              4. <BoldTextHelper text="The" /> chief Engineer and Manager of the
              factory <BoldTextHelper text="has" /> agreed.
            </Text>

            <Text style={styles.normalText}>
              <Text style={styles.sideHeading}> Note— </Text> It should be kept
              in mind that when{" "}
              <BoldTextHelper
                text="two Nouns"
                inputStyle={{ color: highLightColor }}
              />{" "}
              point to{" "}
              <BoldTextHelper
                text="only one person"
                inputStyle={{ color: highLightColor }}
              />{" "}
              or{" "}
              <BoldTextHelper
                text="thing"
                inputStyle={{ color: highLightColor }}
              />
              , the article is used{" "}
              <BoldTextHelper
                text="only once"
                inputStyle={{ color: highLightColor }}
              />{" "}
              with the{" "}
              <BoldTextHelper
                text="first noun"
                inputStyle={{ color: highLightColor }}
              />
              . If the article is used before{" "}
              <BoldTextHelper
                text="both the Nouns"
                inputStyle={{ color: highLightColor }}
              />{" "}
              separately, they would mean to point to{" "}
              <BoldTextHelper
                text="two persons"
                inputStyle={{ color: highLightColor }}
              />{" "}
              or{" "}
              <BoldTextHelper
                text="things"
                inputStyle={{ color: highLightColor }}
              />
              , and in that case Plural Verb would be used. As—
            </Text>

            <Text style={styles.normalText}>
              <BoldTextHelper text="The" /> Chief Engineer and{" "}
              <BoldTextHelper text="the" /> Manager of the factory{" "}
              <BoldTextHelper text="have" /> agreed.
            </Text>
          </View>

          <View>
            {/* 7 If two or  */}
            <Text style={styles.sideHeading}>
              7. If two or more Subjects have each or every before them, they
              take the verb in the Singular Number. Remember that each and every
              are used before Singular Nouns only. As—
            </Text>

            <Text style={[styles.normalText, { marginTop: 20 }]}>
              1. <BoldTextHelper text="Each" />{" "}
              <UnderLineTextHelper text="boy" /> and{" "}
              <UnderLineTextHelper text="girl" /> <BoldTextHelper text="has" />{" "}
              to go.
            </Text>
            <Text style={[styles.normalText]}>
              2. <BoldTextHelper text="Every" /> man, woman and child{" "}
              <BoldTextHelper text="was" /> glad.
            </Text>
            <Text style={[styles.normalText]}>
              3. <BoldTextHelper text="Each" /> day and{" "}
              <BoldTextHelper text="each" /> hour is important.
            </Text>
            <Text style={[styles.normalText]}>
              4. <BoldTextHelper text="Every" /> boat and{" "}
              <BoldTextHelper text="every" /> sailor{" "}
              <BoldTextHelper text="was" /> lost in the storm.
            </Text>
            <Text style={[styles.normalText]}>
              5. <BoldTextHelper text="Every" /> boy and{" "}
              <BoldTextHelper text="every" /> girl was given a packet of sweets.
            </Text>
          </View>

          <View>
            {/* 8 If two or more */}
            <Text style={styles.sideHeading}>
              8. If two or more Singular Subjects are joined by or, nor, either…
              or, or neither … nor, they take a Singular Verb. As—
            </Text>
            <Text style={[styles.normalText, { marginTop: 20 }]}>
              1. <BoldTextHelper text="Either" /> Ram{" "}
              <BoldTextHelper text="or" /> Shyam is coming today.
            </Text>
            <Text style={styles.normalText}>
              2. <BoldTextHelper text="Neither" /> he{" "}
              <BoldTextHelper text="nor" /> I was there.
            </Text>
            <Text style={styles.normalText}>
              3. <BoldTextHelper text="Neither" /> food{" "}
              <BoldTextHelper text="nor" /> water was available there.
            </Text>
            <Text style={styles.normalText}>
              4. <BoldTextHelper text="No" /> boy <BoldTextHelper text="or" />{" "}
              girl <BoldTextHelper text="was" /> present on the field.
            </Text>
            <Text style={styles.normalText}>
              5. No nook <BoldTextHelper text="or" /> corner was left
              unexplored.
            </Text>
            <Text style={styles.normalText}>
              6. Our happiness <BoldTextHelper text="or" /> our sorrow is
              largely due to our own actions.
            </Text>
            <Text style={styles.normalText}>
              7. <BoldTextHelper text="Either" /> the cat{" "}
              <BoldTextHelper text="or" /> the dog has been here.
            </Text>
            <Text style={styles.normalText}>
              8. <BoldTextHelper text="Neither" /> food{" "}
              <BoldTextHelper text="nor" /> water was to be found there.
            </Text>
            <Text style={styles.normalText}>
              9. <BoldTextHelper text="Neither" /> praise{" "}
              <BoldTextHelper text="nor" /> blame seems to affect him.
            </Text>
          </View>

          <View>
            {/* 9 */}
            <Text style={styles.sideHeading}>
              9. If two or more Subjects are joined by or, nor, either … or, or
              neither … nor, and if they are of different Numbers, the Plural
              Subject is placed near the verb and the verb is used in the Plural
              Number. As—
            </Text>

            <Text style={[styles.normalText, { marginTop: 15 }]}>
              1. <BoldTextHelper text="Neither" /> the teacher{" "}
              <BoldTextHelper text="nor" /> his{" "}
              <BoldTextHelper text="students" /> were present there.
            </Text>

            <Text style={styles.normalText}>
              2. <BoldTextHelper text="Either" /> Ram{" "}
              <BoldTextHelper text="or" /> his friends have broken the glass.
            </Text>
            <Text style={styles.normalText}>
              3. Ram <BoldTextHelper text="or his brothers" /> are expected to
              come.
            </Text>
            <Text style={styles.normalText}>
              4. Mohan <BoldTextHelper text="nor his friends" /> were invited.
            </Text>
            <Text style={styles.normalText}>
              5. <BoldTextHelper text="Neither" /> the Chairman{" "}
              <BoldTextHelper text="nor" /> the{" "}
              <BoldTextHelper text="directors" /> are present.
            </Text>
          </View>

          <View>
            {/* 10 */}
            <Text style={styles.sideHeading}>
              10. If two or more Subjects are joined by or, nor, either … or, or
              neither … nor, and if they are of different Persons, the verb is
              used according to the subject nearest to it. As—
            </Text>

            <Text style={[styles.normalText, { marginTop: 15 }]}>
              1. <BoldTextHelper text="You" /> or <BoldTextHelper text="Ram" />{" "}
              is responsible for it.
            </Text>
            <Text style={styles.normalText}>
              2. Either <BoldTextHelper text="you" /> or{" "}
              <BoldTextHelper text="I" /> am correct.
            </Text>
            <Text style={styles.normalText}>
              3. Neither <BoldTextHelper text="he" /> nor{" "}
              <BoldTextHelper text="you" /> are to blame.
            </Text>
            <Text style={styles.normalText}>
              4. Either <BoldTextHelper text="she" /> or{" "}
              <BoldTextHelper text="you" /> have to do it.
            </Text>
            <Text style={styles.normalText}>
              5. Either <BoldTextHelper text="he" /> or{" "}
              <BoldTextHelper text="I" /> am mistaken.
            </Text>
            <Text style={styles.normalText}>
              6. Either <BoldTextHelper text="YOU" /> or{" "}
              <BoldTextHelper text="he" /> is mistaken.
            </Text>
            <Text style={styles.normalText}>
              7. Neither <BoldTextHelper text="you" /> nor he is to blame.
            </Text>
            <Text style={styles.normalText}>
              8. Neither <BoldTextHelper text="my friend" /> not{" "}
              <BoldTextHelper text="I" /> am to blame.
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: PoppinsRegular,
                textAlign: "justify",
              }}
            >
              But it is better to avoid these constructions, and to write:-
            </Text>
            <Text style={styles.normalText}>
              <BoldTextHelper text="He" />{" "}
              <UnderLineTextHelper text="is" inputStyle={{ color: "black" }} />{" "}
              mistaken, or else <BoldTextHelper text="I" />{" "}
              <UnderLineTextHelper text="am" inputStyle={{ color: "black" }} />.
            </Text>
            <Text style={styles.normalText}>
              <BoldTextHelper text="You" />{" "}
              <UnderLineTextHelper text="are" inputStyle={{ color: "black" }} />{" "}
              mistaken, or else <BoldTextHelper text="he" />{" "}
              <UnderLineTextHelper text="is" inputStyle={{ color: "black" }} />.
            </Text>
            <Text style={styles.normalText}>
              <BoldTextHelper text="He" />{" "}
              <UnderLineTextHelper text="is" inputStyle={{ color: "black" }} />{" "}
              not to blame, nor{" "}
              <UnderLineTextHelper text="are" inputStyle={{ color: "black" }} />{" "}
              <BoldTextHelper text="you" />.
            </Text>
            <Text style={styles.normalText}>
              <BoldTextHelper text="My friend" />{" "}
              <UnderLineTextHelper text="is" inputStyle={{ color: "black" }} />{" "}
              not to blame, nor{" "}
              <UnderLineTextHelper text="am" inputStyle={{ color: "black" }} />{" "}
              <BoldTextHelper text="I" />
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={[styles.sideHeading, { textAlign: "justify" }]}>
              11. If two or more Subjects are joined by and, and if they are of
              different Numbers and different Persons, the verb is always used
              in the Plural Number. Also, if the subjects have any First Person,
              the verb will be in First Person Plural, but if there is no First
              Person, but there is a Second Person, the verb is used in the
              Second Person Plural Number. As—
            </Text>

            <Text style={[styles.normalText, { marginTop: 15 }]}>
              1. He and I <BoldTextHelper text="are" /> going.
            </Text>
            <Text style={styles.normalText}>
              2. My father and I <BoldTextHelper text="have" /> known him for
              many years.
            </Text>
            <Text style={styles.normalText}>
              3. You and he <BoldTextHelper text="are" /> well known here.
            </Text>
            <Text style={styles.normalText}>
              4. You and I <BoldTextHelper text="have" /> done our best.
            </Text>

            <Text style={styles.sideHeading}>
              Two nouns qualified by each or every, even though connected by
              and, require a singular verb; as,
            </Text>

            <Text style={[styles.normalText, { marginTop: 15 }]}>
              Every boy and every girl was given a packet of sweets.
            </Text>
            <Text
              style={{
                marginVertical: 15,
                fontFamily: PoppinsRegular,
                fontSize: 16,
              }}
            >
              {" "}
              <BoldTextHelper text="Either, neither, each, everyone, many a," />{" "}
              must be followed by a singular verb; as,
            </Text>
            <Text style={styles.normalText}>
              {" "}
              <BoldTextHelper text="Neither" /> of the two men was very strong.
            </Text>
            <Text style={styles.normalText}>
              <BoldTextHelper text="Each" /> of these substances is found in
              India.
            </Text>
            <Text style={styles.normalText}>
              <BoldTextHelper text="Every one" /> of the prisons is full.
            </Text>
            <Text style={styles.normalText}>
              {" "}
              <BoldTextHelper text="Many a" /> man has done so.
            </Text>
            <Text style={styles.normalText}>
              <BoldTextHelper text="Many a" /> man does not know his own good
              deeds.
            </Text>
            <Text style={styles.normalText}>
              <BoldTextHelper text="Many a" /> man has succumbed to this
              temptation.
            </Text>
          </View>

          <View style={{ marginTop: 15 }}>
            {/* 12 */}
            <Text style={styles.sideHeading}>
              12. Collective Noun and the Verb
            </Text>

            <Text style={styles.normalText}>
              With collective Nouns verbs can be used either in the <BoldTextHelper text="Singular" inputStyle={{color:highLightColor}}/> or
              the <BoldTextHelper text="Plural" inputStyle={{color:highLightColor}}/> Number <UnderlineTextHelper text="according to sense." inputStyle={{color:"black"}}/> If a Collective Noun
              represents a <UnderLineTextHelper inputStyle={{color:"black"}} text="whole group"/> or a <UnderLineTextHelper inputStyle={{color:"black"}} text="body"/> (institution), it takes a
              Singular Verb. But if the Collective Noun represents a <UnderLineTextHelper inputStyle={{color:"black"}} text="part"/> or
              <UnderLineTextHelper inputStyle={{color:"black"}} text="parts"/> or <UnderLineTextHelper inputStyle={{color:"black"}} text="division"/> of a <UnderLineTextHelper inputStyle={{color:"black"}} text="body"/>, it takes a <UnderLineTextHelper inputStyle={{color:"black"}} text="Plural Verb"/>
            </Text>

              <Text style={styles.sideHeading}>
              The important Collective Nouns are these :
              </Text>
              <Text style={styles.normalText}>
              Government, Parliament, Assembly, Council, committee, army, crew, staff, jury, fleet, crowd, majority, mob.  As—
              </Text>

              <Text style={styles.normalText}>1. The committee <BoldTextHelper text="has"/> agreed on this issue. (The verb is Singular because there is no division in the committee.)</Text>
              <Text style={styles.normalText}>2. The committee <BoldTextHelper text="are"/> divided on this issue. (Here the verb is Plural because the committee is divided.)</Text>
              <Text style={styles.normalText}>3. The crew <BoldTextHelper text="is"/> well trained. (Here the verb is Singular because the “crew” represents one undivided group.)</Text>
              <Text style={styles.normalText}>4. The crew <BoldTextHelper text="were"/> taken prisoners. (Here the verb is Plural because the members of the crew have to be taken prisoners separately.)</Text>
              
              <Text style={styles.sideHeading}>In the same way—</Text>
              <Text style={styles.normalText}>5. The Parliament <BoldTextHelper text="has"/> elected its Speaker.</Text>
              <Text style={styles.normalText}>6. The military <BoldTextHelper text="were"/> deployed over the troubled area.</Text>
              <Text style={styles.normalText}>7. The fleet <BoldTextHelper text="has"/> touched the shore.</Text>
              <Text style={styles.normalText}>8. The Government <BoldTextHelper text="have"/> decided to introduce the Bill.</Text>
              <Text style={styles.normalText}>9. The Assembly <BoldTextHelper text="is"/> in session</Text>
              <Text style={styles.normalText}>10. The mob <BoldTextHelper text="has"/> dispersed.</Text>
              <Text style={styles.normalText}>11. The mob <BoldTextHelper text="have"/> started throwing stones.</Text>
              <Text style={styles.normalText}>12. The jury <BoldTextHelper text="has"/> come to a unanimous verdict.</Text>
              <Text style={styles.normalText}>13. The jury <BoldTextHelper text="are"/> divided in opinion.</Text>
          </View>

          <View style={{marginTop:30}}>
              <Text style={styles.sideHeading}>
              (13) Some Nouns appear to be Plural in form, but actually singular in meaning .These nouns take the verb in the singular number.
The important Nouns of this type are News, Wages, Physics, Politics, Mathematics, Economics, Innings (both Singular and Plural), Gallows.
As—

              </Text>

              <Text style={[styles.normalText,{marginTop:15}]}>1. <BoldTextHelper text="Politics"/> <UnderlineTextHelper text="is" inputStyle={{color:"black"}}/> not an easy game.</Text>
              <Text style={styles.normalText}>2. <BoldTextHelper text="Mathematics"/>  <UnderLineTextHelper text="Politics" inputStyle={{color:"black"}}/>  a difficult subject.</Text>
              <Text style={styles.normalText}>3. The <BoldTextHelper text="wages"/> of sin <UnderLineTextHelper text="is" inputStyle={{color:"black"}}/> death.</Text>
              <Text style={styles.normalText}>4. The <BoldTextHelper text="news"/> <UnderLineTextHelper text="is" inputStyle={{color:"black"}}/> correct.</Text>
              <Text style={styles.normalText}>5. Their first <BoldTextHelper text="innings"/> <UnderLineTextHelper text="is" inputStyle={{color:"black"}}/> disappointing.</Text>
          </View>

          <View style={{marginTop:30}}>
            <Text style={styles.sideHeading}>
            (14) Some Nouns appear to be Singular in form, but they are actually Plural in meaning and sense. These nouns take a Plural Verb. 
The more important of them are—Dozen, score, million, hundred, thousand, people, cattle. As—

            </Text>
            <Text style={[styles.normalText,{marginTop:15}]}>1. A dozen <BoldTextHelper text="were"/> injured.</Text>
            <Text style={styles.normalText}>2. A million <BoldTextHelper text="were"/> affected by the drought.</Text>
            <Text style={styles.normalText}>3. A score <BoldTextHelper text="were"/> saved.</Text>
            <Text style={styles.normalText}>4. The cattle <BoldTextHelper text="are"/> grazing.</Text>
            <Text style={styles.normalText}>5. The people <BoldTextHelper text="are"/> satisfied.</Text>


          </View>
          <View>
            {/* 15 */}
            <Text style={styles.sideHeading}>
            15. If a Subject has such words or phrases as with, together with, along with, in addition to, as well as connected with it, these connected words or phrases do not affect the verb in any way (because they are parenthetical words or phrases) and the verb is used according to the real Subject. As—
            </Text>

              
            <Text style={[styles.normalText,{marginTop:20}]}>1. The commander,<UnderlineTextHelper text=" with all his soldiers" inputStyle={{color:"black"}}/>, <BoldTextHelper text="was"/> killed.</Text>
            <Text style={[styles.normalText]}>2. The chief cashier, <UnderlineTextHelper text="together with all his men" inputStyle={{color:"black"}}/>, <BoldTextHelper text="has"/> been dismissed.</Text>
            <Text style={[styles.normalText]}>3. He, <UnderlineTextHelper text="as well as his friends" inputStyle={{color:"black"}}/>, <BoldTextHelper text="has" /> failed.</Text>
            <Text style={[styles.normalText]}>4. Ram, <UnderlineTextHelper text="like Mohan and Sohan" inputStyle={{color:"black"}}/>, <BoldTextHelper text="is"/> fond of pictures.</Text>
            <Text style={[styles.normalText]}>5. The house, <UnderLineTextHelper text="with its contents," inputStyle={{color:"black"}}/> <BoldTextHelper text="was"/> insured.</Text>
            <Text style={[styles.normalText]}>The Mayor, <UnderlineTextHelper text="with his councillors" inputStyle={{color:"black"}}/>, <BoldTextHelper text="is"/> to be present.</Text>
            <Text style={[styles.normalText]}>• The ship, <UnderLineTextHelper text="with its crew," inputStyle={{color:"black"}}/> <BoldTextHelper text="was"/> lost.</Text>
            <Text style={[styles.normalText]}>• Silver, <UnderLineTextHelper text="as well as cotton" inputStyle={{color:"black"}}/>, <BoldTextHelper text="has"/> fallen in price.</Text>
            <Text style={[styles.normalText]}>• Sanskrit, <UnderLineTextHelper text="as well as Arabic" inputStyle={{color:"black"}}/>, <BoldTextHelper text="was"/> taught there.</Text>
            <Text style={[styles.normalText]}>• Justice, as well as mercy, <BoldTextHelper text="allows"/> it.</Text>
            <Text style={[styles.normalText]}>• The guidance, <UnderlineTextHelper text="as well as the love of a mother" inputStyle={{color:"black"}}/>, <BoldTextHelper text="was"/> wanting.</Text>
            <Text style={{marginTop:20}}>
            <Text style={styles.sideHeading}>Note— </Text>
             <Text style={styles.normalText}>
              Such other words and phrases are— <BoldTextHelper text="like, and not, in addition to, no less than, rather than, more than, unlike, besides, including, excluding."/>
            </Text>
          </Text>
          </View>

              <View style={{marginTop:20}}>
                {/* 16 */}
                <Text style={styles.sideHeading}>
                16. If the Subject of a verb is a Relative Pronoun (who, whom, whose, which, that), the verb is used according to the Number and Person of the Antecedent (i.e. Noun or Pronoun used before it).
As—

                </Text>
            <Text style={[styles.normalText,{marginTop:20}]}>1. <UnderlineTextHelper text="The pen" inputStyle={{color:"black"}}/>, which <BoldTextHelper text="is"/> in your hand, <BoldTextHelper text="is"/> mine.</Text>
              <Text style={styles.normalText}>2. <UnderlineTextHelper text="The book" inputStyle={{color:"black"}}/>, that <BoldTextHelper text="is"/> on the table, <BoldTextHelper text="is"/> very interesting.</Text>
              <Text style={styles.normalText}>3. He is one of those <UnderLineTextHelper text="boys" inputStyle={{color:"black"}}/> who <BoldTextHelper text="work"/> very hard.</Text>
              <Text style={styles.normalText}> 4. <UnderLineTextHelper text="I"/>, who <BoldTextHelper text="am"/> your friend, should help you.</Text>
              <Text style={styles.normalText}>5. <UnderLineTextHelper text="You"/>, who <BoldTextHelper text="are"/> my friend, should help me.</Text>
              <Text style={styles.normalText}>6. <UnderLineTextHelper text="He"/>, who <BoldTextHelper text="is"/> your friend, should help you.</Text>
              </View>
          
          {/* 17 */}

          <View style={{marginVertical:20}}>
            <Text style={styles.sideHeading}>
            17. If a Plural Noun denotes a definite quantity or number, or amount, or distance, or if it denotes the name of a country or title of a book, it takes a Singular Verb with it. As—
            </Text>

            <Text style={[styles.normalText,{marginTop:20}]}>1. <BoldTextHelper text="The United States of America"/> <UnderLineTextHelper text="is"/> the most powerful country.</Text>
            <Text style={styles.normalText}>2. <BoldTextHelper text="Gulliver’s Travels"/> <UnderLineTextHelper text="is"/> a novel of adventure.</Text>
            <Text style={styles.normalText}>• <BoldTextHelper text="The Arabian Nights"/> <UnderLineTextHelper text="is"/> still a great favourite.</Text>
            <Text style={styles.normalText}>• <BoldTextHelper text="The United States"/> <UnderLineTextHelper text="has"/> a big navy.</Text>
            <Text style={styles.normalText}>• <BoldTextHelper text="Plutarch's Lives"/> <UnderLineTextHelper text="is"/> an interesting book.</Text>
            <Text style={styles.normalText}>3. <BoldTextHelper text="Sixty miles"/> <UnderLineTextHelper text="is"/> not a long distance for a motorist.</Text>
            <Text style={styles.normalText}>4. <BoldTextHelper text="Ten lakh rupees "/>  <UnderLineTextHelper text="is"/> a huge sum.</Text>
            <Text style={styles.normalText}>5. <BoldTextHelper text="Four quintals"/>   <UnderLineTextHelper text="is"/> a heavy load for a camel.</Text>
            <Text style={styles.normalText}> <BoldTextHelper text="Fifteen minutes"/> <UnderLineTextHelper text="is"/> allowed to each speaker.</Text>
            <Text style={styles.normalText}> <BoldTextHelper text="Ten kilometers"/> <UnderLineTextHelper text="is"/> a long walk.</Text>
            <Text style={styles.normalText}> <BoldTextHelper text="Fifty thousand rupees"/> <UnderLineTextHelper text="is"/> a large sum.</Text>
            <Text style={styles.normalText}><BoldTextHelper text="Three parts"/>  of the business <UnderLineTextHelper text="is"/> left for me to do.</Text>

          </View>

          <View style={{marginVertical:20}}>
            {/* 18 */}
            <Text style={styles.sideHeading}>
            18. There are certain things which are made of two major parts. Such things are supposed to be in Plural Number and a Plural Verb is used with them. (Such common things are—Trousers, Scissors, spectacles, shears, tongs, etc.)
As—

            </Text>
            <Text style={[styles.normalText,{marginTop:20}]}>1. Your <UnderlineTextHelper text="trousers"/> <BoldTextHelper text="are"/> dirty.</Text>
            <Text style={styles.normalText}>2. Your <UnderlineTextHelper text="scissors"/> <BoldTextHelper text="are"/> blunt.</Text>
            <Text style={styles.normalText}>3. The <UnderlineTextHelper text="tongs"/> <BoldTextHelper text="are"/> missing.</Text>
            <Text style={styles.normalText}>4. Where <BoldTextHelper text="are"/> your <UnderlineTextHelper text="spectacles"/> ?</Text>
         
              <Text style={styles.normalText}>
              <Text style={styles.sideHeading}> Note—</Text>
             These things can also be referred to as A pair of ……. In that case only a Singular Verb will be used. As—
              </Text>

              <Text style={styles.normalText}>1. <UnderLineTextHelper text="A pair of trousers"/> <BoldTextHelper text="is"/> ready for you.</Text>
              <Text style={styles.normalText}>2. <UnderlineTextHelper text="A pair of scissors"/> <BoldTextHelper text="is"/> on the table.</Text>
          </View>
          <View>
            {/* 19 */}
            <Text style={styles.sideHeading}>
            19. If the Subject of a sentence is some infinitive/ gerund / phrase / clause, only a Singular Verb will be used. As—
            </Text>

            <Text style={[styles.normalText,{marginTop:20}]}>1. <BoldTextHelper text="Walking"/> <BoldTextHelper text="is"/> a good exercise.</Text>
            <Text style={[styles.normalText]}>2. <BoldTextHelper text="To work"/> hard <BoldTextHelper text="is"/> his lot.</Text>
            <Text style={[styles.normalText]}>3. <BoldTextHelper text="How to reach there "/> <BoldTextHelper text="is"/> the problem.</Text>
            <Text style={[styles.normalText]}>4. <BoldTextHelper text="That he is honest "/> <BoldTextHelper text="is"/> known to all.</Text>

          </View>

          <View style={{marginVertical:20}}>
            {/* 20 */}
            <Text style={styles.sideHeading}>
            20. There are certain Adjectives which, when joined with the Article the, become Plural Nouns. They take the verb in the Plural Number. (The more common of these adjectives are—Poor, rich, humble, blind, honest, dumb, etc.)
As—

            </Text>
              <Text style={styles.normalText}>1. <BoldTextHelper text="The poor"/> <UnderlineTextHelper text="are"/> honest. (“The poor” means “poor men”)</Text>
              <Text style={styles.normalText}>2. <BoldTextHelper text="The rich"/> <UnderlineTextHelper text="are"/> not used to physical labour. (“The rich” means “rich men”.)</Text>
              <Text style={styles.normalText}>3. <BoldTextHelper text="The dumb"/> <UnderlineTextHelper text="do"/> not speak.</Text>
              <Text style={styles.normalText}>4. <BoldTextHelper text="The virtuous"/> <UnderlineTextHelper text="are"/> respected.</Text>

          </View>

          <View style={{marginVertical:20}}>
              <Text style={styles.sideHeading}>
              21. If in a certain sentence the Subject carries its Apposition with it, the verb will be used according to the actual Subject, not according to its Apposition.
              </Text>

            <Text style={[styles.normalText,{marginTop:20}]}>1. <UnderlineTextHelper text=" I "/>, <BoldTextHelper text="the Manager of the Mill"/>, <UnderlineTextHelper text="am"/> not happy with your work.</Text>
            <Text style={[styles.normalText,]}>2. <UnderlineTextHelper text=" You"/>, <BoldTextHelper text="my servant"/>, <UnderlineTextHelper text="are"/> not loyal to me.</Text>
            <Text style={[styles.normalText]}>3. <UnderlineTextHelper text=" He"/>, <BoldTextHelper text="your teacher"/>, <UnderlineTextHelper text="was"/> here yesterday.</Text>
            <Text style={[styles.normalText]}>4. <UnderlineTextHelper text=" We "/>, <BoldTextHelper text="your students"/>, <UnderlineTextHelper text="are"/> playing a match today.</Text>

              <Text style={styles.normalText}>
                <Text style={styles.sideHeading}>Note—</Text>
                Apposition is the word or phrase used to explain or identify the Subject. In the above sentence <BoldTextHelper inputStyle={{color:highLightColor}} text="‘the Manager of the Mill’"/> is the Apposition of the subject <BoldTextHelper inputStyle={{color:highLightColor}} text="I"/>. Similarly,  <BoldTextHelper inputStyle={{color:highLightColor}} text="my servant"/>, <BoldTextHelper inputStyle={{color:highLightColor}} text="your teacher"/>, <BoldTextHelper inputStyle={{color:highLightColor}} text="your students"/> are Appositions.
              </Text>
          </View>

          <View style={{marginVertical:20}}>
            {/* 22 */}
            <Text style={styles.sideHeading}>
            22. When Adjectives of Quantity (much, more, little, less) are used as subjects, they take a Singular Verb. As—
            </Text>

            <Text style={[styles.normalText,{marginTop:20}]}>1. <BoldTextHelper text="Much"/> <UnderlineTextHelper text=" has "/> already been done.</Text>
            <Text style={[styles.normalText,]}>2. <BoldTextHelper text="Little"/> <UnderlineTextHelper text=" has "/> been done so far.</Text>
            <Text style={[styles.normalText,]}>3. <BoldTextHelper text="Much more"/> <UnderlineTextHelper text=" is "/> still needed.</Text>
            <Text style={[styles.normalText,]}>4. <BoldTextHelper text="Much less"/> <UnderlineTextHelper text=" is "/> expected.</Text>


          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SubjectVerbAgreement;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 30,
    padding: 10,
  },
  normalText: {
    fontSize: 15,
    fontFamily: PoppinsRegular,
    textAlign: "justify",
    lineHeight: 29,
  },
  sideHeading: {
    backgroundColor: "#FFDE7D",
    fontSize: 17,
    fontFamily: PoppinsRegular,
    textAlign:'justify'
  },
});
