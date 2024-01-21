import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native-paper";
import BoldTextHelper from "../utils/BoldText";
import { useNavigation } from "@react-navigation/native";
// import Infinitive from "./Infinitive";
// import Gerund from "./Gerund";
// import Participle from "./Participle"
const Drawer = createDrawerNavigator();



import { Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
function StartingScreen() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View>
            <Text>
            It is a common practice in conversation to make a statement and ask for conformation. Question tags are often placed after some statements, requests, proposals or commands. They are always in question form.
</Text>

<Text>
Steps:
1) Helping verb
2) A) Positive – Negative
    B) Negative – Positive 
3) Pronoun (not Noun)
4) ?
</Text>

<Text>
NOTE: 
Negative Words: 
no, not, never, nothing, nobody, no one
1. You don’t love me, do you ?
2. He never plays cricket, does he?
3. Nothing is imposible, is it?

</Text>
<Text>
Semi Negative Words:
Semi-negative words As : few, little, hardly, scarcely, rarely, seldom, etc. Are also believed to be Negative and therefore we use Positive Question–tags after them. As :
1. He rarely comes here, does he ?
2. Few people are interested in this scheme, are they ?

</Text>

<Text>
A) If the subject of the statement is “I am” and the statement is affirmative, the subject of the Question Tag would be “aren’t I” (not, am not I).

B) But if the statement is negative, we use “am I ?”
</Text>

<Text>
1. I am a lecturer, aren’t I?
2. I am not a student, am I?
3. I am a doctor, aren’t I?
4. I am not a lawyer, am I?

</Text>

<Text>
B) If the statement begins with Let, it may have two meanings, and with them two different types of Question Tags are added.

</Text>

<Text>
(i) If the statement suggests Proposal or Suggestion, the Question Tag will have Shall we ?

1. Let us now go for dinner, Shall we ?
2. Let us form a society, Shall we ?


(ii) If the statement suggests Permission, the Question Tag will have will you?

1. Let them read here, will you?
2. Let her take the book, will you?
</Text>

<Text>
    
C) For positive requests / commands, we use “will you?” / “won’t you?” in the question tag, but for negative requests / commands, we use only “will you?”

1. Ring the bell, will you? / won’t you?
2. Don’t ring the bell, will you?

</Text>

<Text>
D) When the statement has need / needs, the question tag would be “don’t / doesn’t” , and with “used to”, we use “didn’t”.

1. I need a book, don’t I?
2. He needs a book, doesn’t he?
3. He used to live here, didn’t he?
4. She used to be quite a good tennis player, didn’t she?
</Text>

<Text>
    
E) When the statement has this pattern:

“There + Helping Verb + Subject”, the question tag would be, “Verb + there?” (not Verb + Pronoun).

1. There is a good college, isn’t there?
2. There is no good college, is there?
</Text>
<Text>
    
F) When the subject of the statement is one thing / anything / everything / something / nothing, the subject of the Question Tag would be “It”. 

1. Everything is lost, isn’t it?
2. Nothing is lost, is it?
</Text>

<Text>
    
G) When the subject of the statement is one of you / any one of you / every one of you / some of you / most of you / none of you, the subject of the Question Tag would be “you”. 

1. All of you can do it, can’t you?
2. Some of you are learning Russian, aren’t you?
3. None of you can do it, can you?
</Text>

<Text>
    
H) When the subject of the statement is one of them / some of them / all of them / none of them, the subject of the Question Tag would be “they”. 

1. All of them were present, weren’t they?
2. None of them were present, were they?

</Text>

<Text>
I) when the subject of the statement is one of us / some of us / most of us /  most of us / all of us / none of us, the subject of the Question Tag would be  “We”.  

1. All of us will go, won’t we?
2. On the return journey some of us lost the way, didn’t we?
3. None of us has done it, has we?
4. None of us knew the way, did we?
5. Some of us want to stay longer, do we?

</Text>

<Text>
    
J) When the subject of the statement is someone / somebody /  anyone / anybody / everyone / everybody / no one / nobody, the subject of the Question Tag would be “he” / “they”.   

1. Anyone can come, can’t he? / can’t they?
2. Everybody can’t come in first, can he? / can they?
3. Somebody cheered wildly, didn’t he? / didn’t they? 
4. No one will come, will he? / will they?
5. None of the workmen arrived to time, didn’t he? / didn’t they?
</Text>

<Text>
    K) 
    1. One can’t be too careful, ______________
</Text>
<Text>
    
L)  
(i) Simple Present (Subject + V1) 
    
(I,WE,YOU,THEY = “do” & HE,SHE,IT = “does”) 

1. I drink tea, don’t I?
2. We do not drink tea, do I?
3. He sleeps at 9 pm, doesn’t he?
4. She does not sleep at 9 pm, does she?

(ii) Simple Past (Subject + V2) = did. 

5. I ate an apple, didn’t I?
6. They did not eat an apple, did they?
7. You asked him, didn’t you?
8. We did not ask him, did we?

NOTE: Semi Negative Words:

Few, little, hardly, scarcely, rarely, seldom, etc, are believed to be Negatives and therefore we use Positive Question Tags after them.

</Text>
<View>
    <Text>
    1.	Few people knew the answer, did they?
2.	Little progress has been made, has it?
3.	We could scarcely hear what he said, could we?
4.	We seldom see them nowadays, do we?
5.	He rarely comes here, does he?
6.	Few people are interested in this scheme, are they?

(NOTE:
Though “few” and “little” are negatives, “a few” and “a little” are positives, and therefore need a negative tag.)

7. A few people knew the answer, didn’t they?
8. A little progress has been made, hasn’t it?

(NOTE: The adverb “Only” may take either a positive or a negative tag.)

9. There were only six people present, ___________
10. There were only six people present, ____________
(The positive is more usual.)

(M)
    </Text>
</View>
<View>
<Text>
1. He is eating an apple, isn’t he?
2. Raju is not eating an apple, is he?
3. We are going to Metpally, aren’t we?
4. Raju and Rani are not going to Metpally, are they?
5. I was playing cricket, wasn’t I?
6. It was not barking, was I?
7. We were not playing cricket, were we?
8. You have told me, haven’t you?
9. They have not told me, have they?
10. She has watched that movie, hasn’t she?
11. Rani has not watched that movie, has she?
12. I had come here, hadn’t I?
13. They had not opened, had they?
14. I shall help you, shan’t I?
15. We shall not help you, shall we?
16. He will come tomorrow, won’t he?
17. Raju will not come tomorrow, will he?
18. You should help me, shouldn’t you?
19. She must come me, mustn’t she?
20. I go to college daily, don’t I?
21. They do not go daily, do they?
22. Rajkumar eats non veg, doen’t he? (eat / ate / eaten)
23. Ramesh does not eat non veg, does he?
24. Srinidhi slept well in the afternoon, didn’t she? (sleep / slept / slept)
25. I did not sleep well yesterday, did I?
26. My mother cooked food, didn’t she? (cook / cooked / cooked)
27. I don’t like you, do I?
28. She plays well, doen’t she? (play / played / played)
29. We didn’t stay there, did we?
30. Don’t do there, will you?
31. Let us play now, shall we?
32. Raju  is a good man, isn’t he?
33.He does not work hard, does he?
34.Rani works hard, doesn’t she? (work / worked / worked)
35. You watched that, didn’t you? (watch / watched / watched) 
36. He will be coming, won’t he?
37. You wouldn’t hit me, would you?
38. Call the peon, will you? / won’t you?
39. He isn’t going to like this, is he?
40. I am soldier, aren’t I?
41. Nothing could be saved, could it?
42. You are joking, aren’t you?
43. She can’t swim, can she?
44. None of the clerks came, did they?
45. Let’s go to the beach, shall we?
46. Some of them are going to Hyderabad, aren’t they?
47. I am a fool, aren’t I?
48. Sravan does not know Telugu, does she?
49. It rains frequently here, doesn’t it?
50. It hasn’t showed till now, has it?
51. Hindi is easy to learn, isn’t it?
52. They have got a new car, haven’t they?
53. She lives in Bombay, doesn’t she?
54. He saw that, didn’t he?
55. You know that’s right, don’t you?
56. It is raining, isn’t it? 
57. Mohan does not work hard, does he?
58. We shall win, shan’t we?
59. She knows Telugu, doesn’t she?
60. The children went to sleep, didn’t they?
61. We are not disturbing you, are we?
62. You can understand, can’t you?
63. Raju didn’t write the exam, did he?
64. You are going out, aren’t you?
65. You didn’t beat him, did you?
66. He has answered, hasn’t he?  
67. She isn’t thief, is she?
68. You wouldn’t lie, would you?
69. Raju never drinks tea, does he?
70. You are angry with me, aren’t you?
71. He went to college, didn’t he?
72. They won’t come again, will they?
73. He was for the meeting, wasn’t he?
74. He will never give up, will he?
75. They don’t like dogs, do they?
76. She never lies, does she? (lie / lied / lied)
77. One loves ones country, _________________
78. One can’t be too careful, _________________
79. That girl isn’t very attractive, is she?
80. I’m older than you, aren’t I?
81. There are many girls, aren’t there?
82. Somebody has called, ________________
83. Wait a minute, will you? / won’t you?
84. I am innocent, aren’t I?
85. I am not innocent, am I?
86. Have some more rice, will you?
87. Some of you are staying back, aren’t you?
88. I am selected, aren’t I? 
89. I am not invited to the party, am I?
90. Everyone appreciated the magician, _________ (appreciate / appreciated / appreciated)
91. I am not guilty, am I?
92. Kumar and Arun worked in Metpally for some time, didn’t they? (work/worked/worked)
93. Go to the store, will you? / won’t you?
94. I am selected for the competition, aren’t I?
95. Students haven’t received their scholarship, have they?
96. Srinidhi did her home work, didn’t she? (Do/does-did-done)
97. There is not a letter for me, _________________
98. There is a crack in the wall, _______________
99. Your father is a doctor, isn’t he?
100. There is no railway station, _________________
101. This is  the house, ______________________
102. The children like sweets, don’t they? (like/likes-liked-liked)
103. Few people know him, _________________
104. That is not your house, is it?
105. None of the food was wasted, ______________
106. We saw no-one we knew, did we?
107. A small scratch like that is nothing, is it?
108. Money goes nowhere nowadays, does it?
109. You don’t love me, do you?
</Text>
</View> 

        </View>
      </ScrollView>
    </>
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
  cardStyle: {
    marginVertical: 10,
    width: "95%",
    marginHorizontal: Dimensions.get("screen").width / 50,
    borderRadius: 10,
    elevation: 5,
  },
});

export default QuestionTagsStartingScreen;
