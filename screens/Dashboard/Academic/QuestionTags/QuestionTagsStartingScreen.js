import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native-paper";
import BoldTextHelper from "../utils/BoldText";

const Drawer = createDrawerNavigator();

import { Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
function StartingScreen() {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View>
          <Text style={styles.text}>
            It is a common practice in conversation to make a statement and ask
            for conformation. Question tags are often placed after some
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
          B) If the statement begins with Let, it may have two meanings, and with them two different types of Question Tags are added.
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
        C) For positive requests / commands, we use <BoldTextHelper text="“will you?” / “won’t you?”"/> in the question tag, but for negative requests / commands, we use only <BoldTextHelper text="“will you?”"/>
        </Text>

        <Text style={styles.text}>1. Ring the bell, will you? / won’t you?</Text>
        <Text style={styles.text}>2. Don’t ring the bell, will you?</Text>

        <Text style={styles.text}>
        D) When the statement has need / needs, the question tag would be “don’t / doesn’t” , and with “used to”, we use “didn’t”.
        </Text>

        <Text style={styles.text}>1. I need a book, don’t I?</Text>
        <Text style={styles.text}>2. He needs a book, doesn’t he?</Text>
        <Text style={styles.text}>3. He used to live here, didn’t he?</Text>
        <Text style={styles.text}>4. She used to be quite a good tennis player, didn’t she?</Text>

        <Text style={styles.text}>
        E) When the statement has this pattern:
        </Text>

        <Text style={styles.text}>
        “There + Helping Verb + Subject”, the question tag would be, “Verb + there?” (not Verb + Pronoun).
        </Text>
        <Text style={styles.text}>1. There is a good college, isn’t there?</Text>
        <Text style={styles.text}>2. There is no good college, is there?</Text>

        <Text style={styles.text}>
        F) When the subject of the statement is one thing / anything / everything / something / nothing, the subject of the Question Tag would be “It”. 
        </Text>
        <Text style={styles.text}>1. Everything is lost, isn’t it?</Text>
        <Text style={styles.text}>2. Nothing is lost, is it?</Text>


        <Text style={styles.text}>
        G) When the subject of the statement is one of you / any one of you / every one of you / some of you / most of you / none of you, the subject of the Question Tag would be “you”. 
        </Text>

        <Text style={styles.text}>1. All of you can do it, can’t you?</Text>
        <Text style={styles.text}>2. Some of you are learning Russian, aren’t you?</Text>
        <Text style={styles.text}>3. None of you can do it, can you?</Text>
        
        <Text style={styles.text}>
        H) When the subject of the statement is one of them / some of them / all of them / none of them, the subject of the Question Tag would be “they”.  
        </Text>


        <Text style={styles.text}>1. All of them were present, weren’t they?</Text>
        <Text style={styles.text}>2. None of them were present, were they?</Text>

        <Text style={styles.text}>
        I) when the subject of the statement is one of us / some of us / most of us /  most of us / all of us / none of us, the subject of the Question Tag would be  “We”.   
        </Text>

        <Text style={styles.text}>1. All of us will go, won’t we?</Text>
        <Text style={styles.text}>2. On the return journey some of us lost the way, didn’t we?</Text>
        <Text style={styles.text}>3. None of us has done it, has we?</Text>
        <Text style={styles.text}>4. None of us knew the way, did we?</Text>
        <Text style={styles.text}>5. Some of us want to stay longer, do we?</Text>


        <Text style={styles.text}>
        J) When the subject of the statement is someone / somebody /  anyone / anybody / everyone / everybody / no one / nobody, the subject of the Question Tag would be “he” / “they”.      
        </Text>

        <Text style={styles.text}>1. Anyone can come, can’t he? / can’t they?</Text>
        <Text style={styles.text}>2. Everybody can’t come in first, can he? / can they?</Text>
        <Text style={styles.text}>3. Somebody cheered wildly, didn’t he? / didn’t they? </Text>
        <Text style={styles.text}>4. No one will come, will he? / will they?</Text>
        <Text style={styles.text}>5. None of the workmen arrived to time, didn’t he? / didn’t they?</Text>

        <Text style={styles.text}>
        K) 
1. One can’t be too careful, ______________

        </Text>

        <Text style={styles.text}>
        L)  
(i) Simple Present (Subject + V1) 
(I,WE,YOU,THEY = “do” & HE,SHE,IT = “does”) 
        </Text>
        <Text style={styles.text}>
        1. I drink tea, don’t I?
        </Text>
        <Text style={styles.text}>2. We do not drink tea, do I?</Text>
        <Text style={styles.text}>3. He sleeps at 9 pm, doesn’t he?</Text>
        <Text style={styles.text}>4. She does not sleep at 9 pm, does she?</Text>
       
        <Text style={styles.text}>(ii) Simple Past (Subject + V2) = did. </Text>
        <Text style={styles.text}>5. I ate an apple, didn’t I?</Text>            
        <Text style={styles.text}>6. They did not eat an apple, did they?</Text>            
        <Text style={styles.text}>7. You asked him, didn’t you?</Text>            
        <Text style={styles.text}>8. We did not ask him, did we?</Text>            

        <Text style={styles.text}>NOTE: Semi Negative Words:</Text>
        <Text style={styles.text}>
        Few, little, hardly, scarcely, rarely, seldom, etc, are believed to be Negatives and therefore we use Positive Question Tags after them.
        </Text>

        <Text style={styles.text}>1.	Few people knew the answer, did they?</Text>            
        <Text style={styles.text}>2.	Little progress has been made, has it?</Text>            
        <Text style={styles.text}>3.	We could scarcely hear what he said, could we?</Text>            
        <Text style={styles.text}>4.	We seldom see them nowadays, do we?</Text>            
        <Text style={styles.text}>5.	He rarely comes here, does he?</Text>            
        <Text style={styles.text}>6.	Few people are interested in this scheme, are they?</Text>            

        <Text style={styles.text}>(NOTE:
Though “few” and “little” are negatives, “a few” and “a little” are positives, and therefore need a negative tag.)
</Text>

<Text style={styles.text}>7. A few people knew the answer, didn’t they?</Text>            
<Text style={styles.text}>8. A little progress has been made, hasn’t it?</Text>            
<Text style={styles.text}>(NOTE: The adverb “Only” may take either a positive or a negative tag.)</Text>            
<Text style={styles.text}>9. There were only six people present, ___________</Text>            
<Text style={styles.text}>10. There were only six people present, ____________
(The positive is more usual.)
</Text>       

<Text style={styles.text}>(M)
1. He is eating an apple, isn’t he?
</Text> 
<Text style={styles.text}>
2. Raju is not eating an apple, is he?
</Text>           

<Text style={styles.text}>3. We are going to Metpally, aren’t we?</Text> 

<TextHelper text = "4. Raju and Rani are not going to Metpally, are they?"/>
<TextHelper text = "5. I was playing cricket, wasn’t I?"/>
<TextHelper text = "6. It was not barking, was I?"/>
<TextHelper text = "7. We were not playing cricket, were we?"/>
<TextHelper text = "8. You have told me, haven’t you?"/>
<TextHelper text = "9. They have not told me, have they?"/>
<TextHelper text = "10. She has watched that movie, hasn’t she?"/>
<TextHelper text = "11. Rani has not watched that movie, has she?"/>
<TextHelper text = "12. I had come here, hadn’t I?"/>
<TextHelper text = "13. They had not opened, had they?"/>
<TextHelper text = "14. I shall help you, shan’t I?"/>
<TextHelper text = "15. We shall not help you, shall we?"/>
<TextHelper text = "16. He will come tomorrow, won’t he?"/>
<TextHelper text = "17. Raju will not come tomorrow, will he?"/>
<TextHelper text = "18. You should help me, shouldn’t you?"/>
<TextHelper text = "19. She must come me, mustn’t she?"/>
<TextHelper text = "20. I go to college daily, don’t I?"/>
<TextHelper text = "19. She must come me, mustn’t she?"/>
<TextHelper text = "21. They do not go daily, do they?"/>
<TextHelper text = "22. Rajkumar eats non veg, doen’t he? (eat / ate / eaten)"/>
<TextHelper text = "23. Ramesh does not eat non veg, does he?"/>
<TextHelper text = "24. Srinidhi slept well in the afternoon, didn’t she? (sleep / slept / slept)"/>
<TextHelper text = "25. I did not sleep well yesterday, did I?"/>
<TextHelper text = "26. My mother cooked food, didn’t she? (cook / cooked / cooked)"/>
<TextHelper text = "27. I don’t like you, do I?"/>
<TextHelper text = "28. She plays well, doen’t she? (play / played / played)"/>
<TextHelper text = "29. We didn’t stay there, did we?"/>
<TextHelper text = "30. Don’t do there, will you?"/>
<TextHelper text = "31. Let us play now, shall we?"/>
<TextHelper text = "32. Raju  is a good man, isn’t he?"/>
<TextHelper text = "33.He does not work hard, does he?"/>
<TextHelper text = "34.Rani works hard, doesn’t she? (work / worked / worked)"/>
<TextHelper text = "35. You watched that, didn’t you? (watch / watched / watched) "/>
        </View>

      </View>
    </ScrollView>
  );
}
function TextHelper({text}){
  return(<>
<Text style={styles.text}>{text}</Text> 

  </>)
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
