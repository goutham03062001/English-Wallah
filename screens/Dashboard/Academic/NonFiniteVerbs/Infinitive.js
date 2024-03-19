import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import RenderHTML from "react-native-render-html";
import BoldText from "../utils/BoldText";
import { PoppinsLight,PoppinsRegular } from "../../../../utils/FontHelper";
import BoldTextHelper from "../utils/BoldText";
const YourComponent = () => {
  const wordContent = `
  <div class="mainDiv">
  <div class="">
  <p class="mainHeading">Infinitive</p>
  </div>
<div class="row">
<p class="sideHeading">Kinds of Infinitive—</p><p class="text">Infinitives are of two kinds :</p>
</div>

<div class="div">

 <p class="text"><b>1. The Noun-Infinitive—</b>Noun-Infinitive is also called Simple Infinitive. It is used like a Noun.
   Therefore, it is also called Verb–Noun. It performs all the Functions of a Noun.</p>
   
   <p class="text"><b>2.The Gerundial Infinitive —</b>Gerundial Infinitive is also called Qualifying Infinitive. It performs the 

   Functions of an Adjective or an Adverb.
   </p>

</div>

<div>
<h3><u>Infinitive with or without ‘To’</u></h3>
<p class="text">

Most of the Infinitives have ‘to’ before them.
This is the sign to recognize them, as—to go, to eat, to drink, to be loved, to have been completed.

But there are some Verbs after which Infinitives are used without ‘to’.

</p>
<h3><u>Infinitive without ‘to’ :</u></h3>
<p class="text">

    
<p class="text">The following are the rules of the use of Infinitives without ‘to’:</p>

<p class="text">
Rule 1—The Infinitive is used without ‘to’ after these Verbs—hear, see, feel, make, let, observe,
   need not, dare not. bid, watch, behold, know, notice, As—
   <br/><br/>
   1. <b>He bade me go.</b><br/>
   2. <b>We shall watch him dance.</b><br/>
   3. <b>Let him sing.</b><br/>
   4. <b>Make him work.</b><br/>
   5. <b>Behold / see / observe him play.</b></div>

<h3>Note—</h3>
<p class="text">(i) If ‘dare’ and ‘need’ sentences have do/does/did used within them, the Infinitive is used with ‘to’.
Also affirmative sentences with ‘need’ and ‘dare’ take the Infinitive with ‘to’, As—
</p> 
   <p class="text">
   1. <b>Does he dare to challenge you ?</b><br/>
   2. <b>Does he need to challenge you ?</b><br/>
   3. <b>He dares me to cross the river.</b><br/>
   4. <b>He needs to go at once.</b><br/>
</p>
<p class="text">(ii) If the verbs listed above under Rule 1 are used Passively, they will take the Infinitive with ‘to’. As—
</p>   
    <p class="text">
    1. <b>He was made to do it.</b><br/>
    2. <b>He was known to have hidden the treasure.</b><br/>
    3. <b>He was bidden to go.</b><br/>
    4. <b>He was seen to be crossing the river.</b></p><br/>
<div class="div">
    <p class="text">
<b>Rule 2</b>—The Infinitives coming after these verbs also do not take ‘to’ before them—shall, might, will,
should, would, do, did, may, must, can, could. As—
    </p>
    
    <p class="text">
    1. <b>He could do it.</b><br/>
    2. <b>We shall try.</b><br/>
    3. <b>You would laugh.</b><br/>
    4. <b>He can play.</b>
    </p>
 
</div>
   
  
<div>

<p class="text">
<b>Rule 3</b>—Infinitives do not take ‘to’ after these expressions also—had better, had rather, would
sooner, would rather, sooner than, rather than, had sooner. As—

</p>

<p class="text">
1. <b>He had better resign.</b><br/>
2. <b>He would rather withdraw.</b><br/>
3. <b>I would sooner resign than serve in these conditions.</b><br/>
4. <b>I would study rather than waste my time.</b><br/>
</p>

</div>

<div class="div">
<p class="text">
<b>Rule 4</b>—‘To’ is not used with the Infinitive after the conjunction ‘than’. As—
    </p>
<p class="text"><b>He is better able to write than speak.</b></p>
</div>

<div>
<p class="text"><b>Rule 5</b>—‘To’ is not used with the Infinitive after the Preposition ‘but’, provided that but has ‘do’ Verb
before it. As—</p>


<p class="text">

1. <b>She can do nothing but weep.</b><br/>
2. <b>We did nothing but play.</b>

</p>

</div>


<div class="div">

<p class="text">Rule 6—If Have / has / had have a Noun or a Pronoun after them, the Infinitive coming thereafter
will not have ‘to’ with it. As—</p>

<p class="text">1. <b>I will have you remember me.</b><br/>
2. <b>He had him know his fault.</b><br/>
3. <b>He will have me forget my insult.</b></p>
</div>

<h2>Uses of Noun-Infinitives</h2>
<p class="text">Noun-Infinitives have the following uses:</p>
<div> 
1. <u>As the Subject of a Verb:</u><br/>
<p class="text">
<b>To err is human.</b><br/>
<b>To find fault is easy.</b><br/>
<b>To earn is not so difficult as to spend (is difficult)</b><br/>
<b>To live honourably is not easy.</b></p><br/>

</div>

<p class="text">2. <u>As the Object of a Verb:</u></p>

  <p class="text"> <b>He loves to read novels.</b><br/>
  <b>I want to go.</b><br/>
  <b>He likes to play chess.</b><br/>
  <b>He desires to settle down here.</b></p><br/>

 <p class="text">3. <u>As the Object of a Preposition:</u></p>
   <p class="text"><b>He has no choice but to go.</b><br/>
   <b>The show is about to start.</b><br/>
   <b>The enemy is about to surrender.</b><br/>
   <b>I want nothing but to be free.</b></p><br/>

   <p class="text">4. <u>As the Complement of a Verb:</u></p>
   <p class="text"><b>My only ambition is to be a doctor.</b><br/>
   <b>His habit is to sleep in the afternoon.</b><br/>
   <b>The old custom was to sacrifice a goat.</b><br/>
   <b>His dream is to have a huge factory.</b></p><br/>

<p class="text">5. <u>As an Objective Complement:</u></p>
   <p class="text">
   <b>I saw him dance.</b><br/>
   <b>I bid you go.</b><br/>
   <b>I will have you accept your fault.</b><br/>

   </p>
</div>
`;

  const tagsStyles = {
    p: { marginBottom: 10 },
  };

  const classesStyles = {
    mainDiv: { paddingHorizontal: 8 },
    "custom-paragraph": { color: "blue" },
    mainHeading: {
      marginTop: 10,
      textAlign: "center",
      fontSize: 20,
      color: "red",
      fontFamily:PoppinsRegular
    },
    sideHeading: {  fontSize: 17 ,fontFamily:PoppinsRegular},
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: { fontSize: 16, lineHeight: 26 ,fontFamily:PoppinsRegular,lineHeight:29},
    div: { marginVertical: 10 },

    // Add more styles for other classes if needed
  };

  return (
    <ScrollView>
      <RenderHTML
        source={{ html: wordContent }}
        contentWidth={300}
        tagsStyles={tagsStyles}
        classesStyles={classesStyles}
        enableCSSInlineProcessing={true}
      />

      <View style={styles.rootContainer}>
        <Text style={[styles.heading,{fontFamily:PoppinsRegular,color:"red"}]}>
          Functions of the Gerundial Infinitive
        </Text>
        <Text style={{ fontSize: 16 }}>
          Gerundial Infinitives have the following functions—
        </Text>

        <View style={styles.section}>
          <Text style={[styles.text, { textDecorationLine: "underline",color:"green",fontFamily:PoppinsRegular }]}>
            1.To qualify a Noun:
          </Text>
          <Text style={styles.text}>There is no book <BoldTextHelper text="to read."/></Text>
          <Text style={styles.text}>I have no time <BoldTextHelper text="to waste."/></Text>
          <Text style={styles.text}>He is not a man <BoldTextHelper text="to be respected."/></Text>
          <Text style={styles.text}>I have a horse <BoldTextHelper text="to sell."/></Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.text, { textDecorationLine: "underline",color:"green",fontFamily:PoppinsRegular }]}>
            2.To qualify an Adjective:
          </Text>
          <Text style={styles.text}>This book is good <BoldTextHelper text="to read."/></Text>
          <Text style={styles.text}>Mangoes are sweet <BoldTextHelper text="to eat."/></Text>
          <Text style={styles.text}>I am eager <BoldTextHelper text="to go."/></Text>
          <Text style={styles.text}>The weather is pleasant <BoldTextHelper text="to enjoy."/></Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.text, { textDecorationLine: "underline",color:"green",fontFamily:PoppinsRegular }]}>
            3.To qualify a Verb (to express a purpose):
          </Text>
          <Text style={styles.text}>He came <BoldTextHelper text="to seek"/> my permission.</Text>
          <Text style={styles.text}>We earn <BoldTextHelper text="to live"/> comfortably.</Text>
          <Text style={styles.text}>We work <BoldTextHelper text="to make"/> a living.</Text>
          <Text style={styles.text}>He went <BoldTextHelper text="to meet"/> his friend.</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.text, { textDecorationLine: "underline",color:"green",fontFamily:PoppinsRegular }]}>
            4. To qualify a sentence:
          </Text>
          <Text style={styles.text}><BoldTextHelper text="To tell"/> the truth, I am very tired.</Text>
          <Text style={styles.text}>
            He was, so to speak, pierced to the heart.
          </Text>
        </View>
      </View>

      <View style={styles.rootContainer}>
        <Text style={[styles.heading,{color:"red",fontFamily:PoppinsRegular}]}>Other Uses of Infinitives</Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Rule 1—How + Infinitive
        </Text>

        <View style={styles.section}>
          {/* <Text style={[styles.text,{textDecorationLine:"underline"}]}>1. To qualify a Noun:</Text> */}
          <Text style={styles.text}>
            If an Infinitive is used as the object of the following verbs, <BoldTextHelper text="how "/> 
             is used before the Infinitive. These verbs are : <BoldTextHelper text="know, see, learn,
            observe, forget, discover, decide, teach, show, wonder, ask,
            enquire, explain, tell. As—"/>
          </Text>

          <Text style={styles.text}>
            1. Please <BoldText text="tell" /> me{" "}
            <BoldText text="how to reach" /> there.
          </Text>
          <Text style={styles.text}>
            2. I <BoldText text="wonder how to account" /> for it.
          </Text>
          <Text style={styles.text}>
            3. Please <BoldText text="show" /> me{" "}
            <BoldText text="how to close" /> it.
          </Text>
          <Text style={styles.text}>
            4. I can’t <BoldText text="decide how to get" /> out of the fray.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Rule 2—Verb + Infinitive
          </Text>

          <Text style={[styles.text,{lineHeight:29}]}>
            Some <BoldTextHelper text="Verbs"/> when joined with an <BoldTextHelper text="Infinitive"/> show the <BoldTextHelper text="occurrence"/> of an
            action. They also carry the sense of <BoldTextHelper text="sudden occurrence"/> of the action
            concerned. These Verbs are : <BoldTextHelper text="happen, seem, chance, appear. As—"/>
          </Text>

          <Text style={styles.text}>1. <BoldTextHelper text="happened to see"/> a snake.</Text>
          <Text style={styles.text}>2. He <BoldTextHelper text="seemed to have forgotten"/> me.</Text>
          <Text style={styles.text}>
            3. I <BoldTextHelper text="chanced to meet"/>him in the market.
          </Text>
          <Text style={styles.text}>4. He <BoldTextHelper text="appeared to recognize"/> me.</Text>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Rule 3—Noun / Adjective + Infinitive
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>
            In some sentences an <BoldTextHelper text="Infinitive"/> is used after a <BoldTextHelper text="Noun"/> or an
            <BoldTextHelper text="Adjective"/>. This Infinitive qualifies the <BoldTextHelper text="Noun"/> or the <BoldTextHelper text="Adjective"/>
            concerned. <BoldTextHelper text="As—"/>
          </Text>

          <Text style={styles.text}>1. The problem is <BoldTextHelper text="easy to solve."/></Text>
          <Text style={styles.text}>2. He has a <BoldTextHelper text="horse to sell."/></Text>
          <Text style={styles.text}>3. I have a <BoldTextHelper text="house to furnish."/></Text>
          <Text style={styles.text}>4. He is <BoldTextHelper text="hard to please."/></Text>
          <Text style={styles.text}>5. These mangoes are <BoldTextHelper text="sweet to eat."/></Text>

          <View style={{ marginVertical: 10 }}>
          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

              <BoldText text="Note---" />
              In such sentences the Infinitive is used only in <BoldTextHelper text="Active Voice, not in Passive Voice."/> Therefore we <BoldTextHelper text="cannot write"/> the following
              sentences:
            </Text>

            <Text style={styles.text}>
              1. The problem is easy <BoldText text="to be solved" />.
            </Text>
            <Text style={styles.text}>
              2. He has a horse <BoldText text="to be sold" />.
            </Text>
            <Text style={styles.text}>
              3. I have a house <BoldText text="to be furnished." />
            </Text>
            <Text style={styles.text}>
              4. He is hard <BoldText text="to be pleased" />.
            </Text>
            <Text style={styles.text}>
              5. These mangoes are sweet <BoldText text="to be eaten." />
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Rule 4—Noun / Infinitive + Preposition
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            In some sentences an <BoldTextHelper text="Infinitive"/> comes <BoldTextHelper text="after the Noun"/> and at the end
            of the sentence comes a <BoldTextHelper text="Preposition"/>. In such sentences the <BoldTextHelper text="Noun"/>
            functions as the agent or instrument to a <BoldTextHelper text="purpose"/>. As—
          </Text>

          <Text style={styles.text}>
            1. I have no <BoldText text=" pen to write with" />.
          </Text>
          <Text style={styles.text}>
            2. There is a <BoldText text="chair to sit on" />.
          </Text>
          <Text style={styles.text}>
            3. I have a house <BoldText text="to live in" />.
          </Text>
          <Text style={styles.text}>
            4. There is no <BoldText text="friend to talk to" />.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Rule 5—Verb + Object + Infinitive
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            There are some <BoldTextHelper text="Transitive Verbs"/>  which take an <BoldTextHelper text="Object"/> after them, and
            after the object an <BoldTextHelper text="Infinitive"/>. These verbs are : <BoldTextHelper text="Allow, permit,
            order, advise, tell, request, force, invite, remind."/> As—
          </Text>

          <Text style={styles.text}>
            1. He <BoldText text="allowed me to go." />
          </Text>
          <Text style={styles.text}>
            2. He <BoldText text="forced me to resign." />
          </Text>
          <Text style={styles.text}>
            3. I <BoldText text="advise you to go." />
          </Text>
          <Text style={styles.text}>
            4. You <BoldText text="remind him to come." />
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Rule 6</Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            There are some <BoldTextHelper text="Verbs"/> and some <BoldTextHelper text="Adjectives"/> after which <BoldTextHelper text="only an Infinitive"/> is used, not a <BoldTextHelper text="Gerund"/> (verb + ‘ing’). These Verbs
            <BoldTextHelper text="Agree, desire, hope, expect, want, wish, promise, refuse, dare, decide, fail, glad, happy, eager, anxious, easy, hard, able, ready."/>
            As—
          </Text>

          <Text style={styles.text}>
            1. I am <BoldText text="ready to go" />. (Not, ‘ready to going’ or
            ‘ready for going’)
          </Text>
          <Text style={styles.text}>
            2. He <BoldText text="expects to pass." /> (Not, ‘to passing’)
          </Text>
          <Text style={styles.text}>
            3. He <BoldText text="promised / refused to come." /> (Not, ‘to
            coming’)
          </Text>
          <Text style={styles.text}>
            4. I shall be <BoldText text="glad to allow" /> your request. (Not,
            ‘to allowing’)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Rule 7—Subject + Verb + Infinitive / Gerund
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            There are some <BoldTextHelper text="Verbs"/> after which either <BoldTextHelper text="Infinitive"/> or <BoldTextHelper text="Gerund"/> (verb +
            ‘ing’) can be used. But then their meanings change.
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

          <BoldTextHelper text="‘Verb + Gerund’"/> show that an action is being done in the normal
            course, while <BoldTextHelper text="Verb + Infinitive"/> show that an action is being done
            under some <BoldTextHelper text="special situation"/> or on a <BoldTextHelper text="particular occasion"/>. These
            Verbs are : <BoldTextHelper text="like, dislike, stop, begin."/> As—
          </Text>

          <Text style={styles.text}>
            1. I like <BoldText text="dancing" />.
          </Text>
          <Text style={styles.text}>
            2. I like <BoldText text="to dance" /> on such occasions.
          </Text>
          <Text style={styles.text}>
            3. He began <BoldText text="writing" />.
          </Text>
          <Text style={styles.text}>
            4. He began <BoldText text="to write" />.
          </Text>
          <Text style={styles.text}>
            5. He has stopped <BoldText text="going" /> there.
          </Text>
          <Text style={styles.text}>
            6. He has stopped <BoldText text="to go" /> there.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Rule 8—Infinitive of Purpose / Result 
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            Some <BoldTextHelper text="Infinitives"/> come <BoldTextHelper text="after the Verb"/> and they carry the sense of
            some <BoldTextHelper text="special purpose or result. As—"/>
          </Text>

          <Text style={styles.text}>
            1. He went to Agra <BoldText text="to see" /> the Taj.
          </Text>
          <Text style={styles.text}>
            2. He came <BoldText text="to return" /> my books.8
          </Text>
          <Text style={styles.text}>
            3. He failed <BoldText text="to win" /> the prize.
          </Text>
          <Text style={styles.text}>
            4. He came <BoldText text="to repent" /> sincerely.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: { fontSize: 20, textAlign: "center", marginVertical: 20 },
  rootContainer: { paddingHorizontal: 8 },
  text: { fontSize: 17, marginTop: 10, lineHeight: 28, },
  section: { marginVertical: 20 },
});
export default YourComponent;
