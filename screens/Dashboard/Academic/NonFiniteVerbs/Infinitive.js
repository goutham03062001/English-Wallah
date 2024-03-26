import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import RenderHTML from "react-native-render-html";
import BoldText from "../utils/BoldText";
import { PoppinsLight,PoppinsRegular } from "../../../../utils/FontHelper";
import BoldTextHelper from "../utils/BoldText";
import {HighLightColor,SideHeadingColor} from "../utils/Colors"
const YourComponent = () => {
  const wordContent = `
  <div class="mainDiv">
  <div class="">
  <p class="mainHeading">Infinitive</p>
  </div>
<div class="row">
<p>Kinds of Infinitive—</p><p class="text">Infinitives are of two kinds :</p>
</div>

<div class="div">

 <p class="text"><b class="sideHeading">1. The Noun-Infinitive—</b>Noun-Infinitive is also called Simple Infinitive. It is used like a Noun.
   Therefore, it is also called Verb–Noun. It performs all the Functions of a Noun.</p>
   
   <p class="text"><b class="sideHeading">2.The Gerundial Infinitive —</b>Gerundial Infinitive is also called Qualifying Infinitive. It performs the 

   Functions of an Adjective or an Adverb.
   </p>

</div>

<div>
<h3><u class="sideHeading">Infinitive with or without ‘To’</u></h3>
<p class="text">

Most of the Infinitives have ‘to’ before them.
This is the sign to recognize them, as—to go, to eat, to drink, to be loved, to have been completed.

But there are some Verbs after which Infinitives are used without ‘to’.

</p>
<h3><u class="sideHeading">Infinitive without ‘to’ :</u></h3>
<p class="text">

    
<p class="text">The following are the rules of the use of Infinitives without ‘to’:</p>

<p class="text">
Rule 1—The Infinitive is used without ‘to’ after these Verbs—hear, see, feel, make, let, observe,
   need not, dare not. bid, watch, behold, know, notice, As—
   <br/><br/>
   1. He made me <span class="highlighText">go</span><br/>
   2. We shall watch him <span class="highlighText">dance</span>.<br/>
   3. Let him <span class="highlighText">sing</span>.<br/>
   4. Make him <span class="highlighText">work</span>.<br/>
   5. Behold / see / observe him <span class="highlighText">play</span>.</div>

<h3>Note—</h3>
<p class="text">(i) If ‘dare’ and ‘need’ sentences have do/does/did used within them, the Infinitive is used with ‘to’.
Also affirmative sentences with ‘need’ and ‘dare’ take the Infinitive with ‘to’, As—
</p> 
   <p class="text">
    <p style="font-size:16px">1. <span class="highlighText">Does</span> he <span class="highlighText">dare to challenge </span>you ?</p>
    <p style="font-size:16px">2. <span class="highlighText">Does</span> he <span class="highlighText">need to challenge </span> you ?</p>
    <p style="font-size:16px">3. He <span class="highlighText">dares</span> me <span class="highlighText">to cross  </span>the river.</p>
    <p style="font-size:16px">4. He <span class="highlighText">dare to challenge </span>.</p>
</p>
<p class="text">(ii) If the verbs listed above under Rule 1 are used Passively, they will take the Infinitive with ‘to’. As—
</p>   
    <p class="text">
    1. He was made <span class="highlighText"> to do</span> it.<br/>
    2. He was known <span class="highlighText">to have hidden</span> the treasure.<br/>
    3. He was bidden <span class="highlighText">to go</span>.<br/>
    4. He was seen <span class="highlighText">to be crossing</span> the river.</p><br/>
<div class="div">
    <p class="text">
<b>Rule 2</b>—The Infinitives coming after these verbs also do not take ‘to’ before them—shall, might, will,
should, would, do, did, may, must, can, could. As—
    </p>
    
    <p class="text">
    1. He <span class="highlighText">could do</span> it.<br/>
    2. We <span class="highlighText">shall try</span>.<br/>
    3. You <span class="highlighText">would laugh</span><br/>
    4. He <span class="highlighText">can play</span>.
    </p>
 
</div>
   
  
<div>

<p class="text">
<b>Rule 3</b>—Infinitives do not take ‘to’ after these expressions also—had better, had rather, would
sooner, would rather, sooner than, rather than, had sooner. As—

</p>

<p class="text">
1. He <span class="highlighText">had better resign.</span><br/>
2. He <span class="highlighText">would rather withdraw.</span><br/>
3. I <span class="highlighText">would sooner resign</span> than <span class="highlighText">serve</span> in these conditions.<br/>
4. I would study <span class="highlighText">rather than waste</span> my time.<br/>
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

1. She can <span class="highlighText">do</span> nothing <span class="highlighText">but weep.</span><br/>
2. We <span class="highlighText">did</span> nothing but <span class="highlighText">play.</span>

</p>

</div>


<div class="div">

<p class="text">Rule 6—If Have / has / had have a Noun or a Pronoun after them, the Infinitive coming thereafter
will not have ‘to’ with it. As—</p>

<p class="text">1. I will <span class="highlighText">have</span> you <span class="highlighText"> remember</span> me.<br/>
2. He <span class="highlighText">had</span> him <span class="highlighText">know</span> his fault.<br/>
3. He will <span class="highlighText">have</span> me <span class="highlighText">forget</span> my insult.</p>
</div>

<h2 class="sideHeading">Uses of Noun-Infinitives</h2>
<p class="text">Noun-Infinitives have the following uses:</p>
<div> 
1. <u class="sideHeading">As the Subject of a Verb:</u><br/>
<p class="text">
<span class="highlighText">To err</span> is human.<br/>
<span class="highlighText">To find</span> fault is easy.<br/>
<span class="highlighText">To earn</span> is not so difficult as to spend (is difficult)<br/>
<span class="highlighText">To live</span> honourably is not easy.</p><br/>

</div>

<p class="text" >2. <u class="sideHeading">As the Object of a Verb:</u></p>

  <p class="text"> He loves <span class="highlighText">to read</span> novels.<br/>
  I want <span class="highlighText">to go</span>.<br/>
  He likes <span class="highlighText">to play</span> chess.<br/>
  He desires <span class="highlighText">to settle</span> down here.</p><br/>

 <p class="text">3. <u class="sideHeading">As the Object of a Preposition:</u></p>
   <p class="text">He has no choice but <span class="highlighText">to go</span>.<br/>
   The show is about <span class="highlighText">to start</span>.<br/>
   The enemy is about <span class="highlighText">to surrender</span>.<br/>
   I want nothing but <span class="highlighText">to be</span> free.</p><br/>

   <p class="text">4. <u class="sideHeading">As the Complement of a Verb:</u></p>
   <p class="text">My only ambition is <span class="highlighText">to be</span> a doctor.<br/>
   His habit is <span class="highlighText">to sleep</span> in the afternoon.<br/>
   The old custom was <span class="highlighText">to sacrifice</span> a goat.<br/>
   His dream is <span class="highlighText">to have</span> a huge factory.</p><br/>

<p class="text">5. <u class="sideHeading">As an Objective Complement:</u></p>
   <p class="text">
   I saw him <span class="highlighText">dance</span>.<br/>
   I bid you <span class="highlighText">go</span>.<br/>
   I will have you <span class="highlighText">accept</span> your fault.<br/>

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
      color: "black",
      fontFamily:PoppinsRegular,
      backgroundColor:SideHeadingColor
    },
    highlighText:{color:'red',fontFamily:PoppinsRegular},
    sideHeading: {  fontSize: 17 ,fontFamily:PoppinsRegular,color:"black",backgroundColor:SideHeadingColor},
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
        <Text style={[styles.heading,{fontFamily:PoppinsRegular,color:"black",backgroundColor:SideHeadingColor}]}>
          Functions of the Gerundial Infinitive
        </Text>
        <Text style={{ fontSize: 16 }}>
          Gerundial Infinitives have the following functions—
        </Text>

        <View style={styles.section}>
          <Text style={[styles.text, { textDecorationLine: "underline",color:"green",fontFamily:PoppinsRegular ,color:"black",backgroundColor:SideHeadingColor}]}>
            1.To qualify a Noun:
          </Text>
          <Text style={styles.text}>There is no book <BoldTextHelper text="to read."/></Text>
          <Text style={styles.text}>I have no time <BoldTextHelper text="to waste."/></Text>
          <Text style={styles.text}>He is not a man <BoldTextHelper text="to be respected."/></Text>
          <Text style={styles.text}>I have a horse <BoldTextHelper text="to sell."/></Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.text, { textDecorationLine: "underline",color:"green",fontFamily:PoppinsRegular ,color:"black",backgroundColor:SideHeadingColor}]}>
            2.To qualify an Adjective:
          </Text>
          <Text style={styles.text}>This book is good <BoldTextHelper text="to read."/></Text>
          <Text style={styles.text}>Mangoes are sweet <BoldTextHelper text="to eat."/></Text>
          <Text style={styles.text}>I am eager <BoldTextHelper text="to go."/></Text>
          <Text style={styles.text}>The weather is pleasant <BoldTextHelper text="to enjoy."/></Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.text, { textDecorationLine: "underline",color:"green",fontFamily:PoppinsRegular,color:"black",backgroundColor:SideHeadingColor }]}>
            3.To qualify a Verb (to express a purpose):
          </Text>
          <Text style={styles.text}>He came <BoldTextHelper text="to seek"/> my permission.</Text>
          <Text style={styles.text}>We earn <BoldTextHelper text="to live"/> comfortably.</Text>
          <Text style={styles.text}>We work <BoldTextHelper text="to make"/> a living.</Text>
          <Text style={styles.text}>He went <BoldTextHelper text="to meet"/> his friend.</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.text, { textDecorationLine: "underline",color:"green",fontFamily:PoppinsRegular ,color:"black",backgroundColor:SideHeadingColor}]}>
            4. To qualify a sentence:
          </Text>
          <Text style={styles.text}><BoldTextHelper text="To tell"/> the truth, I am very tired.</Text>
          <Text style={styles.text}>
            He was, so to speak, pierced to the heart.
          </Text>
        </View>
      </View>

      <View style={styles.rootContainer}>
        <Text style={[styles.heading,{color:"red",fontFamily:PoppinsRegular,color:"black",backgroundColor:SideHeadingColor}]}>Other Uses of Infinitives</Text>
        <Text style={{ fontSize: 17, fontWeight: "bold",color:"black",backgroundColor:SideHeadingColor }}>
          Rule 1—How + Infinitive
        </Text>

        <View style={styles.section}>
          {/* <Text style={[styles.text,{textDecorationLine:"underline"}]}>1. To qualify a Noun:</Text> */}
          <Text style={styles.text}>
            If an Infinitive is used as the object of the following verbs, <BoldTextHelper text="how " inputStyle={{color:HighLightColor}}/> 
             is used before the Infinitive. These verbs are : <BoldTextHelper text="know, see, learn, 
            observe, forget, discover, decide, teach, show, wonder, ask,
            enquire, explain, tell. As—" inputStyle={{color:HighLightColor}}/>
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
          <Text style={{ fontSize: 17, fontWeight: "bold" ,color:"black",backgroundColor:SideHeadingColor}}>
            Rule 2—Verb + Infinitive
          </Text>

          <Text style={[styles.text,{lineHeight:29}]}>
            Some <BoldTextHelper text="Verbs" inputStyle={{color:HighLightColor}}/> when joined with an <BoldTextHelper text="Infinitive" inputStyle={{color:HighLightColor}}/> show the <BoldTextHelper text="occurrence" inputStyle={{color:HighLightColor}}/> of an
            action. They also carry the sense of <BoldTextHelper text="sudden occurrence" inputStyle={{color:HighLightColor}}/> of the action
            concerned. These Verbs are : <BoldTextHelper text="happen, seem, chance, appear. As—" inputStyle={{color:HighLightColor}}/>
          </Text>

          <Text style={styles.text}>1. <BoldTextHelper text="happened to see"/> a snake.</Text>
          <Text style={styles.text}>2. He <BoldTextHelper text="seemed to have forgotten"/> me.</Text>
          <Text style={styles.text}>
            3. I <BoldTextHelper text="chanced to meet"/>him in the market.
          </Text>
          <Text style={styles.text}>4. He <BoldTextHelper text="appeared to recognize"/> me.</Text>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 17, fontWeight: "bold" ,color:"black",backgroundColor:SideHeadingColor}}>
            Rule 3—Noun / Adjective + Infinitive
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>
            In some sentences an <BoldTextHelper text="Infinitive" inputStyle={{color:HighLightColor}}/> is used after a <BoldTextHelper text="Noun" inputStyle={{color:HighLightColor}}/> or an
            <BoldTextHelper text="Adjective" inputStyle={{color:HighLightColor}}/>. This Infinitive qualifies the <BoldTextHelper text="Noun" inputStyle={{color:HighLightColor}}/> or the <BoldTextHelper text="Adjective " inputStyle={{color:HighLightColor}}/>
            concerned. <BoldTextHelper text="As—" inputStyle={{color:HighLightColor}}/>
          </Text>

          <Text style={styles.text}>1. The problem is <BoldTextHelper text="easy to solve."/></Text>
          <Text style={styles.text}>2. He has a <BoldTextHelper text="horse to sell."/></Text>
          <Text style={styles.text}>3. I have a <BoldTextHelper text="house to furnish."/></Text>
          <Text style={styles.text}>4. He is <BoldTextHelper text="hard to please."/></Text>
          <Text style={styles.text}>5. These mangoes are <BoldTextHelper text="sweet to eat."/></Text>

          <View style={{ marginVertical: 10 }}>
          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

              <BoldText text="Note---" />
              In such sentences the Infinitive is used only in <BoldTextHelper text="Active Voice, not in Passive Voice."
                inputStyle={{color:HighLightColor}}
              /> Therefore we <BoldTextHelper text="cannot write"
              inputStyle={{color:HighLightColor}}
              /> the following
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
          <Text style={{ fontSize: 17, fontWeight: "bold" ,color:"black",backgroundColor:SideHeadingColor}}>
            Rule 4—Noun / Infinitive + Preposition
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            In some sentences an <BoldTextHelper text="Infinitive"
              inputStyle={{color:HighLightColor}}
            /> comes <BoldTextHelper text="after the Noun"
            inputStyle={{color:HighLightColor}}
            /> and at the end
            of the sentence comes a <BoldTextHelper text="Preposition"
              inputStyle={{color:HighLightColor}}
            />. In such sentences the <BoldTextHelper text="Noun "
            inputStyle={{color:HighLightColor}}
            />
            functions as the agent or instrument to a <BoldTextHelper text="purpose"
              inputStyle={{color:HighLightColor}}
            />. As—
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
          <Text style={{ fontSize: 17, fontWeight: "bold",color:"black",backgroundColor:SideHeadingColor }}>
            Rule 5—Verb + Object + Infinitive
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            There are some <BoldTextHelper text="Transitive Verbs" inputStyle={{color:HighLightColor}}/>  which take an <BoldTextHelper text="Object" inputStyle={{color:HighLightColor}}/> after them, and
            after the object an <BoldTextHelper text="Infinitive" inputStyle={{color:HighLightColor}}/>. These verbs are : <BoldTextHelper text="Allow, permit, 
            order, advise, tell, request, force, invite, remind." inputStyle={{color:HighLightColor}}/> As—
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
          <Text style={{ fontSize: 17, fontWeight: "bold" ,color:"black",backgroundColor:SideHeadingColor}}>Rule 6</Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            There are some <BoldTextHelper text="Verbs" inputStyle={{color:HighLightColor}}/> and some <BoldTextHelper text="Adjectives" inputStyle={{color:HighLightColor}}/> after which <BoldTextHelper text="only an Infinitive" inputStyle={{color:HighLightColor}}/> is used, not a <BoldTextHelper text="Gerund" inputStyle={{color:HighLightColor}}/> (verb + ‘ing’). These Verbs
            <BoldTextHelper text="Agree, desire, hope, expect, want, wish, promise, refuse, dare, decide, fail, glad, happy, eager, anxious, easy, hard, able, ready." inputStyle={{color:HighLightColor}}/>
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
          <Text style={{ fontSize: 17, fontWeight: "bold",color:"black",backgroundColor:SideHeadingColor }}>
            Rule 7—Subject + Verb + Infinitive / Gerund
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            There are some <BoldTextHelper text="Verbs" inputStyle={{color:HighLightColor}}/> after which either <BoldTextHelper text="Infinitive" inputStyle={{color:HighLightColor}}/> or <BoldTextHelper text="Gerund" inputStyle={{color:HighLightColor}}/> (verb +
            ‘ing’) can be used. But then their meanings change.
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

          <BoldTextHelper text="‘Verb + Gerund’" inputStyle={{color:HighLightColor}}/> show that an action is being done in the normal
            course, while <BoldTextHelper text="Verb + Infinitive" inputStyle={{color:HighLightColor}}/> show that an action is being done
            under some <BoldTextHelper text="special situation" inputStyle={{color:HighLightColor}}/> or on a <BoldTextHelper text="particular occasion" inputStyle={{color:HighLightColor}}/>. These
            Verbs are : <BoldTextHelper text="like, dislike, stop, begin." inputStyle={{color:HighLightColor}}/> As—
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
          <Text style={{ fontSize: 17, fontWeight: "bold" ,color:"black",backgroundColor:SideHeadingColor}}>
          Rule 8—Infinitive of Purpose / Result 
          </Text>

          <Text style={[styles.text,{lineHeight:29,textAlign:"justify"}]}>

            Some <BoldTextHelper text="Infinitives" inputStyle={{color:HighLightColor}}/> come <BoldTextHelper text="after the Verb" inputStyle={{color:HighLightColor}}/> and they carry the sense of
            some <BoldTextHelper text="special purpose or result. As—" inputStyle={{color:HighLightColor}}/>
          </Text>

          <Text style={styles.text}>
            1. He went to Agra <BoldText text="to see" /> the Taj.
          </Text>
          <Text style={styles.text}>
            2. He came <BoldText text="to return" /> my books.
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
