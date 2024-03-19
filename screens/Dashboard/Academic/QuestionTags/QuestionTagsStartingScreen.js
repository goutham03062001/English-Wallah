import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native-paper";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText"
const Drawer = createDrawerNavigator();
import { PoppinsLight,PoppinsRegular } from "../../../../utils/FontHelper";

import { Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
function StartingScreen() {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View>
          <Text style={styles.text}>
            It is a common practice in conversation to make a statement and <UnderlineTextHelper text="ask
            for conformation."/> Question tags are often placed after some
            statements, requests, proposals or commands. They are always in
            question form.
          </Text>
        </View>

        <View>
          <Text><BoldTextHelper text = "Steps: " fontSize={18}/></Text>
          <Text style={styles.text}>1) Helping verb</Text>
          <Text style={styles.text}>
          2) A) Positive – Negative</Text>
           
         <Text style={[styles.text,{marginLeft:20}]}>B) Negative – Positive</Text>

          <Text style={styles.text}>3) Pronoun (not Noun)</Text>
          <Text style={styles.text}>4) ?</Text>
        </View>

        <View>
          <Text style={styles.sideHeading}>NOTE : </Text>
          <Text style={styles.sideHeading}>Negative Words: </Text>
      
          <Text style={styles.text}>
          <BoldTextHelper text = "no, not, never, nothing, nobody, no one"/>
          </Text>
          <Text style={styles.text}>1. You don’t love me, <BoldTextHelper text="do you ?"/></Text>
          <Text style={styles.text}>2. He never plays cricket, <BoldTextHelper text="does he?"/></Text>
          <Text style={styles.text}>3. Nothing is imposible, <BoldTextHelper text="is it?"/></Text>
        

        <Text style={styles.sideHeading}>Semi Negative Words:</Text>
          <Text style={styles.text}>
          Semi-negative words As : <BoldTextHelper text="few, little, hardly, scarcely, rarely, seldom,"/> etc. Are also believed to be Negative and therefore we use Positive Question–tags after them. As :
          </Text>

          <Text style={styles.text}>1. He <BoldTextHelper text="rarely"/> comes here, <BoldTextHelper text="does"/> he ?</Text>
          <Text style={styles.text}>2. <BoldTextHelper text="Few"/> people are interested in this scheme, <BoldTextHelper text="are"/> they ?</Text>

          <Text style={styles.text}>
          A) If the subject of the statement is “I am” and the statement is <BoldTextHelper text="affirmative"/>, the subject of the Question Tag would be <BoldTextHelper text="“aren’t I”"/> (not, am not I).
          </Text>
        <Text style={styles.text}>
        B) But if the statement is <BoldTextHelper text="negative"/>, we use <BoldTextHelper text="am I ?"/>
        </Text>

        <Text style={styles.text}>1. I <BoldTextHelper text="am"/> a lecturer, aren’t I?</Text>
        <Text style={styles.text}>2. I <BoldTextHelper text="am"/> not a student, <BoldTextHelper text="am I?"/> </Text>
        <Text style={styles.text}>3. I <BoldTextHelper text="am"/> a doctor, aren’t I?</Text>
        <Text style={styles.text}>4. I <BoldTextHelper text="am"/> not a lawyer, <BoldTextHelper text="am I?"/> </Text>
        
          <Text style={styles.text}>
          <BoldTextHelper text="B)" inputStyle={{color:"black",fontWeight:"bold"}}/>  If the statement begins with Let, it may have two meanings, and with them two different types of Question Tags are added.
          </Text>
          <Text style={styles.text}>
          (i) If the statement suggests <BoldTextHelper text="Proposal or Suggestion"/>, the Question Tag will have <BoldTextHelper text="Shall we ?"/>
          </Text>

          <Text style={styles.text}>1. Let us now go for dinner, Shall we ?</Text>
          <Text style={styles.text}>2. Let us form a society, Shall we ?</Text>

            <Text style={styles.text}>
            (ii) If the statement suggests <BoldTextHelper text="Permission"/>, the Question Tag will have <BoldTextHelper text="will you?"/>
            </Text>

            <Text style={styles.text}>
            1. <BoldTextHelper text = "Let"/> them read here, <BoldTextHelper text = "will you?"/>
            </Text>   

            <Text style={styles.text}>
            2. <BoldTextHelper text = "Let"/> her take the book, <BoldTextHelper text = "will you?"/>
            </Text>   

        <Text style={styles.text}>
        <BoldTextHelper text="C)" inputStyle={{color:"black",fontWeight:"bold"}}/>  For positive requests / commands, we use <BoldTextHelper text="“will you?” / “won’t you?”"/> in the question tag, but for negative requests / commands, we use only <BoldTextHelper text="“will you?”"/>
        </Text>

        <Text style={styles.text}>1. <BoldTextHelper text="Ring"/> the bell, <UnderlineTextHelper text="will you? / won’t you?"/></Text>
        <Text style={styles.text}>2.<BoldTextHelper text=" Don’t ring"/> the bell, <UnderlineTextHelper text="will you?"/></Text>

        <Text style={styles.text}>
        <BoldTextHelper text="D)" inputStyle={{color:"black",fontWeight:"bold"}}/>  When the statement has <BoldTextHelper text="need / needs,"/> the question tag would be <UnderlineTextHelper text="“don’t / doesn’t”"/> , and with <BoldTextHelper text="“used to”"/>, we use <UnderlineTextHelper text="“didn’t”"/>.
        </Text>

        <Text style={styles.text}>1. I <BoldTextHelper text="need"/> a book, <UnderlineTextHelper text="don’t I?"/></Text>
        <Text style={styles.text}>2. He <BoldTextHelper text="needs"/> a book, <UnderlineTextHelper text="doesn’t he?"/></Text>
        <Text style={styles.text}>3. He <BoldTextHelper text="used to"/> live here, <UnderlineTextHelper text="didn’t he?"/></Text>
        <Text style={styles.text}>4. She <BoldTextHelper text="used to"/> be quite a good tennis player, <UnderlineTextHelper text="didn’t she?"/></Text>

        <Text style={[styles.text,{fontWeight:"bold",fontSize:17}]}>
        <BoldTextHelper text="E)" inputStyle={{color:"black",fontWeight:"bold"}}/>  When the statement has this pattern:
        </Text>

        <Text style={styles.text}>
        <BoldTextHelper text="“There + Helping Verb + Subject”"/>, the question tag would be, <BoldTextHelper text="“Verb + there?”"/> (not Verb +<Text style={{textDecorationLine:"line-through"}}> Pronoun</Text>).
        </Text>
        <Text style={styles.text}>1. <BoldTextHelper text="There"/> is a good college, <UnderlineTextHelper text="isn’t there?"/></Text>
        <Text style={styles.text}>2. <BoldTextHelper text="There"/> is no good college, <UnderlineTextHelper text="is there?"/></Text>

        <Text style={styles.text}>
        <BoldTextHelper text="F)" inputStyle={{color:"black",fontWeight:"bold"}}/>  When the subject of the statement is <BoldTextHelper text="one thing / anything / everything / something / nothing,"/> the subject of the Question Tag would be “It”. 
        </Text>
        <Text style={styles.text}>1. <BoldTextHelper text="Everything"/> is lost, <UnderlineTextHelper text="isn’t it?"/></Text>
        <Text style={styles.text}>2. <BoldTextHelper text="Nothing"/> is lost, <UnderlineTextHelper text="is it?"/></Text>


        <Text style={styles.text}>
        <BoldTextHelper text="G)" inputStyle={{color:"black",fontWeight:"bold"}}/>  
        <Text>When the subject of the statement is</Text>
         <BoldTextHelper text="one of you / any one of you / every one of you / some of you / most of you / none of you,"/>
         <Text>the subject of the Question Tag would be “you”.</Text> 
        </Text>

        <Text style={styles.text}>1. <BoldTextHelper text="All of you"/> can do it, can’t you?</Text>
        <Text style={styles.text}>2. <BoldTextHelper text="Some of you"/> are learning Russian, aren’t you?</Text>
        <Text style={styles.text}>3. <BoldTextHelper text="None of you"/> can do it, can you?</Text>
        
        <Text style={styles.text}>
        <BoldTextHelper text="H)" inputStyle={{color:"black",fontWeight:"bold"}}/>  When the subject of the statement is <BoldTextHelper text="one of them / some of them / all of them / none of them,"/> the subject of the Question Tag would be <BoldTextHelper text="“they”."/>  
        </Text>


        <Text style={styles.text}><BoldTextHelper text="1. All of them were present,"/> <UnderlineTextHelper text="weren’t they?"/></Text>
        <Text style={styles.text}><BoldTextHelper text="2. None of them were present,"/><UnderlineTextHelper text=" were they?"/></Text>

        <Text style={styles.text}>
        <BoldTextHelper text="I)" inputStyle={{color:"black",fontWeight:"bold"}}/> when the subject of the statement is <BoldTextHelper text="one of us / some of us / most of us /  most of us / all of us / none of us,"/> the subject of the Question Tag would be  <BoldTextHelper text="“We”."/>   
        </Text>

        <Text style={styles.text}>1. <BoldTextHelper text="All of us"/> will go, <UnderlineTextHelper text="won’t we?"/></Text>
        <Text style={styles.text}>2. On the return journey <BoldTextHelper text="some of us"/> lost the way, <UnderlineTextHelper text="didn’t we?"/> </Text>
        <Text style={styles.text}>3. <BoldTextHelper text="None of us"/> has done it, <UnderlineTextHelper text="has we?"/></Text>
        <Text style={styles.text}>4. <BoldTextHelper text="None of us"/> knew the way, <UnderlineTextHelper text="did we?"/></Text>
        <Text style={styles.text}>5. <BoldTextHelper text="some of us"/> want to stay longer, <UnderlineTextHelper text="do we?"/></Text>


        <Text style={styles.text}>
        <BoldTextHelper text="J)" inputStyle={{color:"black",fontWeight:"bold"}}/>  When the subject of the statement is <BoldTextHelper text="someone / somebody /  anyone / anybody / everyone / everybody / no one / nobody,"/> the subject of the Question Tag would be <UnderlineTextHelper text="“he” / “they”."/>      
        </Text>

        <Text style={styles.text}>1. <BoldTextHelper text="Anyone"/> can come, <UnderlineTextHelper text="can’t he? / can’t they?"/></Text>
        <Text style={styles.text}>2. <BoldTextHelper text="Everybody"/> can’t come in first, <UnderlineTextHelper text="can he? / can they?"/></Text>
        <Text style={styles.text}>3. <BoldTextHelper text="Somebody"/> cheered wildly, <UnderlineTextHelper text="didn’t he? / didn’t they? "/></Text>
        <Text style={styles.text}>4. <BoldTextHelper text="No one"/> will come, <UnderlineTextHelper text="will he? / will they?"/></Text>
        <Text style={styles.text}>5. <BoldTextHelper text="None"/> of the workmen arrived to time, <UnderlineTextHelper text="didn’t he? / didn’t they?"/></Text>

        <Text style={styles.text}>
        <BoldTextHelper text="K)" inputStyle={{color:"black",fontWeight:"bold"}}/>
<BoldTextHelper text=" 1. One can’t be too careful, ______________"/>

        </Text>

        <Text style={styles.text}>
        <BoldTextHelper text="L)" inputStyle={{color:"black",fontWeight:"bold"}}/>       
 
<BoldTextHelper text=" (i) Simple Present"/> (Subject + V1) 
(I,WE,YOU,THEY = “do” & HE,SHE,IT = “does”) 
        </Text>
        <Text style={styles.text}>
        1. <BoldTextHelper text="I drink"/> tea, <UnderlineTextHelper text="don’t I?"/>
        </Text>
        <Text style={styles.text}>2. We <BoldTextHelper text="do not drink"/> tea, <UnderlineTextHelper text="do I?"/></Text>
        <Text style={styles.text}>3. He <BoldTextHelper text="sleeps"/> at 9 pm, <UnderlineTextHelper text="doesn’t he?"/></Text>
        <Text style={styles.text}>4. She <BoldTextHelper text="does not sleep"/>  at 9 pm, <UnderlineTextHelper text="does she?"/></Text>
       
        <Text style={[styles.text,{marginTop:30}]}><BoldTextHelper text="(ii) Simple Past"/> (Subject + V2) = did. </Text>
        <Text style={styles.text}>5. I <BoldTextHelper text="ate"/> an apple, <BoldTextHelper text="didn’t I?"/></Text>            
        <Text style={styles.text}>6. They <BoldTextHelper text="did not eat"/> an apple, <UnderlineTextHelper text="did they?"/></Text>            
        <Text style={styles.text}>7. You <BoldTextHelper text="asked"/> him, <UnderlineTextHelper text="didn’t you?"/></Text>            
        <Text style={styles.text}>8. We <BoldTextHelper text="did not ask"/> him, <UnderlineTextHelper text="did we?"/></Text>            

        <Text style={styles.text}><UnderlineTextHelper text="NOTE: Semi Negative Words:" inputStyle={{color:"black"}}/></Text>
        <Text style={[styles.text]}>
        <BoldTextHelper text="Few, little, hardly, scarcely, rarely, seldom,"/> etc, are believed to be <BoldTextHelper text="Negatives"/> and therefore we use <UnderlineTextHelper text="Positive Question Tags"/> after them.
        </Text>

        <Text style={styles.text}>1.	<BoldTextHelper text="Few"/> people knew the answer, <UnderlineTextHelper text="did they?"/></Text>            
        <Text style={styles.text}>2.	<BoldTextHelper text="Little"/> progress has been made, <UnderlineTextHelper text="has it?"/></Text>            
        <Text style={styles.text}>3.	We could <BoldTextHelper text="scarcely"/> hear what he said, <UnderlineTextHelper text="could we?"/></Text>            
        <Text style={styles.text}>4.	We <BoldTextHelper text="seldom"/> see them nowadays, <UnderlineTextHelper text="do we?"/></Text>            
        <Text style={styles.text}>5.	He <BoldTextHelper text="rarely"/> comes here, <UnderlineTextHelper text="does he?"/></Text>            
        <Text style={styles.text}>6.	<BoldTextHelper text="Few"/> people are interested in this scheme, <UnderlineTextHelper text="did they?"/></Text>            

        <Text style={styles.text}>(NOTE:
Though <BoldTextHelper text="“few”"/> and <BoldTextHelper text="“little”"/> are <UnderlineTextHelper text="negatives"/>, <BoldTextHelper text="“a few”"/> and <BoldTextHelper text="a little"/> are <UnderlineTextHelper text="positives"/>, and therefore need <BoldTextHelper text="a negative tag."/>)
</Text>

<Text style={styles.text}>7. <BoldTextHelper text="A few"/> people knew the answer, <UnderlineTextHelper text="didn't they?"/></Text>            
<Text style={styles.text}>8. <BoldTextHelper text="A little"/> progress has been made, <UnderlineTextHelper text="hasn't it?"/></Text>            
<Text style={styles.text}>(NOTE: The adverb <BoldTextHelper text="“Only”"/> may take either a <UnderlineTextHelper text="positive"/> or <UnderlineTextHelper text="a negative"/> tag.)</Text>            
<Text style={styles.text}>9. There were <BoldTextHelper text="only"/> six people present, ___________</Text>            
<Text style={styles.text}>10. There were <UnderlineTextHelper text="only"/> six people present, ____________
(The positive is more usual.)
</Text>       

<Text style={[styles.text,{marginTop:15}]}><BoldTextHelper text="M)" inputStyle={{color:"black",fontWeight:"bold"}}/>       

1. He <BoldTextHelper text="is"/> eating an apple, <BoldTextHelper text="isn't he?"/>
</Text> 
<Text style={styles.text}>
2. Raju <BoldTextHelper text="is"/> not eating an apple, <BoldTextHelper text="is he?"/>
</Text>           

<Text style={styles.text}>3. We <BoldTextHelper text="are"/> going to Metpally, <UnderlineTextHelper text="aren’t we?"/></Text> 

<TextHelper text = "4. Raju and Rani are not going to Metpally, are they?" bold="are" underline=" are they?"/>
<TextHelper text = "5. I was playing cricket, wasn’t I?"
  bold="was" underline="wasn't I?"
/>
<TextHelper text = "6. It was not barking, was I?"
  bold="was" underline="wasn't I?"
/>
<TextHelper text = "7. We were not playing cricket, were we?"
  bold="were" underline="were we?"
/>
<TextHelper text = "8. You have told me, haven’t you?"
  bold="have" underline="have they?"
/>
<TextHelper text = "9. They have not told me, have they?"
  bold="have" underline="have they?"
/>
<TextHelper text = "10. She has watched that movie, hasn’t she?"
  bold="has" underline="hasn't she?"
/>
<TextHelper text = "11. Rani has not watched that movie, has she?"
  bold="has" underline="has he?"
/>
<TextHelper text = "12. I had come here, hadn’t I?"
  bold="I had" underline="hadn't I?"
/>
<TextHelper text = "13. They had not opened, had they?"
  bold="had" underline="had they?"
/>
<TextHelper text = "14. I shall help you, shan’t I?"
  bold="I shall" underline="shan't I?"
/>
<TextHelper text = "15. We shall not help you, shall we?"
  bold="shall" underline="shall we?"
/>
<TextHelper text = "16. He will come tomorrow, won’t he?"
  bold="will" underline="won't be?"
/>
<TextHelper text = "17. Raju will not come tomorrow, will he?"
  bold="will" underline="will be?"
/>
<TextHelper text = "18. You should help me, shouldn’t you?"
  bold="should" underline="shouldn't you?"
/>
<TextHelper text = "19. She must come me, mustn’t she?"
  bold="must" underline="mustn't she?"
/>
<TextHelper text = "20. I go to college daily, don’t I?"
  bold="I go" underline="don’t I?"
/> 
<TextHelper text = "21. They do not go daily, do they?"
  bold="do" underline="do they?"
/>
<TextHelper text = "22. Rajkumar eats non veg, doen’t he? (eat / ate / eaten)"
  bold="eats" underline="doesn't he"
/>
<TextHelper text = "23. Ramesh does not eat non veg, does he?"
  bold="does" underline="does he?"
/>
<TextHelper text = "24. Srinidhi slept well in the afternoon, didn’t she? (sleep / slept / slept)"
  bold="slept" underline="didn't she"
/>
<TextHelper text = "25. I did not sleep well yesterday, did I?"
  bold="did" underline="did I?"
/>
<TextHelper text = "26. My mother cooked food, didn’t she? (cook / cooked / cooked)"
  bold="cooked" underline="didn't she?"
/>
<TextHelper text = "27. I don’t like you, do I?"
  bold="I don't" underline="don I?"
/>
<TextHelper 
bold="plays" underline="doesn't she"
text = "28. She plays well, doen’t she? (play / played / played)"/>
<TextHelper 
bold="didn't" underline="did we?"
text = "29. We didn’t stay there, did we?"/>
<TextHelper 
bold="Don't do" underline="will you"
text = "30. Don’t do there, will you?"/>
<TextHelper text = "31. Let us play now, shall we?"
  bold="Let us" underline="shall we?"
/>
<TextHelper text = "32. Raju  is a good man, isn’t he?"
  bold="is" underline="isn't he?"
/>
<TextHelper text = "33.He does not work hard, does he?"
  bold="does" underline="does he?"
/>
<TextHelper 
bold="works" underline="doesn't she?"
text = "34.Rani works hard, doesn’t she? (work / worked / worked)"
  bold="works" underline="doesn't she?"
/>
<TextHelper 
bold="watched" underline="didn't you?"
text = "35. You watched that, didn’t you? (watch / watched / watched) "/>
        </View>

      </View>
    </ScrollView>
  );
}
const TextHelper = ({text,bold,underline})=>{

  const words = text.split(' ');
  
  return (
      <Text style={{marginTop:15}}>
          {words.map((word, index) => {
              const shouldHighlight = bold && bold.includes(word.replace(/[.,]/g, ''));
              const shouldUnderline = underline && underline.includes(word.replace(/[.,]/g, ''));
              return (
                  <Text key={index} style={{ 
                    marginTop:10,
                    fontFamily: shouldHighlight ? PoppinsRegular : 'normal',
                    fontSize:16 ,
                    color:shouldHighlight || shouldUnderline?"green":"black",
                    lineHeight:26,
                    textDecorationLine:shouldUnderline ? "underline":"none"
                    }}>
                      {word}{index !== words.length - 1 && ' '}

                  </Text>
              );
          })}
      </Text>
  );
}

function QuestionTagsStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Question Tag" component={StartingScreen} />
      {/* <Drawer.Screen name = "The Infinitive" component={Infinitive}/>
      <Drawer.Screen name = "The Gerund" component={Gerund}/> 
      <Drawer.Screen name="The Participle" component={Participle} /> */}
      {/* <Drawer.Screen name="Verb Forms" component={VerbForms} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    paddingHorizontal:8
  },
  mainHeading:{
    textAlign:"center",
    fontSize:20,
    marginVertical:10
  },
  text:{
    fontSize:16,
    marginVertical:5,
    textAlign:"justify",
    lineHeight:28
  },
  sideHeading:{
    fontSize:16,
    textDecorationLine:"underline",
    fontWeight:"bold",
    marginVertical:15,
    lineHeight:28
  }
});

export default QuestionTagsStartingScreen;
