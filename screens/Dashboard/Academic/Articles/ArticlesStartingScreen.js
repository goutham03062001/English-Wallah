import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  View
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native-paper";
const Drawer = createDrawerNavigator();
// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';
// import PersonalPronoun from "./PersonalPronoun";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import BoldTextHelper  from "../utils/BoldText"
import DefiniteArticle from "./DefiniteArticle";
import IndefiniteArticle from "./IndefiniteArticle";
import OmissionOfTheArticle from "./OmissionOfTheArticle";
import { PoppinsLight,PoppinsRegular } from "../../../../utils/FontHelper";

function StartingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
      <Text style={{fontSize:19,paddingHorizontal:7,lineHeight:26,marginTop:8,textAlign:"center",color:"red",fontFamily:PoppinsRegular}}>
      Kinds of Articles 
      </Text>
      <Text style={{fontSize:16,marginTop:8}}>
      (i) Indefinite Article—A or An 
      </Text>
      <Text style={{fontSize:16,marginTop:8}}>
      (ii) Definite Article—The
      </Text>
          <View style={{}}>
    <View>

      
      <Text style={{fontSize:16,marginVertical:15,lineHeight:25,textAlign:"justify",paddingHorizontal:5}}>
      
      <Text>
      Indefinite Article 
      <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="(A/An)"/> 
      shows indefiniteness and Definite Article <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="(The)"/> shows definiteness. Articles 
      <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="(A, An, The)"/> 
      are used before Nouns under some rules. When
      <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>
      Singular Countable Noun is used for the first time, 
      <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="Article"/>
      <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> 
       is used before it. But when
       <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>
       Countable Noun, whether Singular or Plural, is used for
       <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>
       definite thing, or refers to
       <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>
       thing or person that has already been referred to earlier,
        <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="Article The"/> 
        is used before it. Thus when<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>
        Singular Countable Noun is used for the first time, Article<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>or an is used before it, but when the same noun is repeated in the same sentence or in the subsequent sentences, Article <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="The"/> is used before it because then it becomes<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>definite thing already referred to earlier. As—
      </Text>
   
</Text>
     
    </View>

    <View>
      <Text style={{fontSize:16,marginTop:8}}>1. I have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> book. <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="The"/> book is very informative.</Text>
      <Text style={{fontSize:16,marginTop:8}}>2. I have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> book, though <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="the"/> book is not very informative.</Text>
      <Text style={{fontSize:16,marginTop:8}}>3. There was <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> house. <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="the"/> house was very large.</Text>
      <Text style={{fontSize:16,marginTop:8}}>4. There was <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> house and <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="the"/> house was very large.</Text>
    </View>
    <Text style={styles.text}>Note:</Text>
    <Text style={styles.text}>Singular Indefinite Noun <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A or An"/></Text>
    <Text style={styles.text}>Singular/Plural Definite Noun <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="The"/></Text>
  </View>

  <View>
  <Text style={{fontSize:20,marginTop:8,textAlign:"center",fontFamily:PoppinsRegular,color:"red"}}>Forms of Indefinite Article</Text>
  <Text style={styles.text}>
  Indefinite Article has two forms—<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> and <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="An"/>. Which one of these two forms will be used before<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>certain Noun depends upon the spellings, sound or pronunciation of the Noun under reference. The following are its rules—
  </Text>

  <Text style={styles.text}>
  (i) Article <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> is used before Nouns of which the spellings begin with<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>consonant. As—
  <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> boy, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> table, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> house, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> book.

  </Text>
  <Text style={styles.text}>
  (ii) Article <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> is also used before words which begin with<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>vowel but are pronounced as with<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>consonant. As—
  </Text>
  <Text style={styles.text}>
  <Text>
  <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> European, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> unique chance, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> one-rupee note, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> usual sight, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> universal truth, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> uniform, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> union, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> unique person, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> united action, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> university student, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> usage, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>useful thing, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> one-eyed man, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> one-rupee note, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> one-sided decision, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> one-sided game, etc.

  </Text>
  </Text>

  <Text style={styles.text}>1. My brother is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> university student.</Text>
  <Text style={styles.text}>2. I have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> European friend.</Text>
  <Text style={styles.text}>3. I have bought <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> uniform.</Text>
  <Text style={styles.text}>4. He is professor in <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> university.</Text>
  <Text style={styles.text}>5. We have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> one-rupee note.</Text>
  <Text style={styles.text}>6. I saw <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> one-eyed man crossing the bridge.</Text>
  <Text style={styles.text}>7 This is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> one-sided game.</Text>
  <Text style={styles.text}>Note:You will see that all these words begin with the sound of y or w (which are consonants) and not with the sound of any vowel.</Text>
  <Text style={styles.text}>
  (iii) Article <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="An"/> is used before those words which begin with a vowel <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="(a, e, i, o, u)."/> As—
<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> apple, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> archer, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> inkpot, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> or<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/>ge, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> umbrella, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> ox, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> ostrich, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> egg <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> element, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> interviw etc..

  </Text>

  <Text style={styles.text}>1. <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="An"/> ostrich has two toed feet.</Text>
  <Text style={styles.text}>2. I have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> umbrella.</Text>
  <Text style={styles.text}>3. He eats <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> egg daily.</Text>
  <Text style={styles.text}>4. He is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> actor.</Text>

  <Text style={styles.text}>(iv) Article <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="An"/> is also used before those words which begin with silent / mute h. As—
an hour, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> hourly meeting, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> honest person, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> honesty <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> honour, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> honorary <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> honourable man, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/>  honorarium, heir, heiress, heirloom
</Text>

<Text style={styles.text}>Note— Earlier humble, humility, hotel, hostel, hospital were also supposed to begin with silent h, and article an was used before them. But now these words are pronounced with the consonant sound of h, and therefore article <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> is used before them.
a hut,<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> history teacher, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> hotel, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> hospital, etc

</Text>



<Text style={styles.text}>(v) Some Abbreviations are there which are pronounced with<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>Vowel sound and therefore article an is used before them. As—</Text>
<Text>
<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> M. A.; <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> M. P.; <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> M. L. A.; <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> F. I. R; <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> S. D. O.; <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> H. M. T.; <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> R. T. O. 
<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> F.S.O., <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> IAS, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> IPS, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> SP, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> M.Sc./ M.com., <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> FIR, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> NCC officer, <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> x-ray machine, etc

</Text>
<Text>1. He is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> N. C. C. officer.</Text>
<Text>2. His brother is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> M. P.</Text>
<Text>
3. I want to purchase <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> H. M. T. watch.

</Text>
<Text>
4. He is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> M. A. in English.

</Text>
<Text>
5. Shyam is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="an"/> S.P.

</Text>


<Text style={styles.text}>
Note—If the above noted Abbreviations are used in their full form, they take article a. As—
A Member of Parliament (an M. P.)<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>Master of Arts (an M. A.)

</Text>


  </View>

  <View>
    <Text style={styles.sideHeading}> (i) Use of Indefinite Article—‘A’/ ‘An’</Text>
    <Text style={styles.text}>The following are the rules of correct use of Indefinite Article<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>or An :—</Text>

    <Text style={[styles.text,{fontWeight:"bold"}]}>Rule 1—Singular Countable Noun</Text>
    <Text style={styles.text}>When<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> Singular Countable Noun is used for the first time, Article<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>or An is used before it.
As—
</Text>
    
    <Text style={styles.text}>1.<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> peacock is<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>bird.</Text>
    <Text style={styles.text}>2.<BoldTextHelper text="A"/> man went out with the dog.</Text>
    <Text style={styles.text}>3.<BoldTextHelper text="A"/> child needs love.</Text>
    <Text style={styles.text}>4.<BoldTextHelper text="A"/> car must be insured.</Text>
    <Text style={styles.text}>5. I have <BoldTextHelper text="a"/> book.</Text>
    <Text style={styles.text}>6. He is <BoldTextHelper text="a"/> boy.</Text>
    <Text style={styles.text}>7. There is <BoldTextHelper text="an"/> eagle.</Text>
    <Text style={styles.text}>8. Delhi is <BoldTextHelper text="a"/> city.</Text>

    <Text style={[styles.text,{fontWeight:"bold"}]}>
Rule 2—When<BoldTextHelper text="a"/>Singular Countable Noun represents<BoldTextHelper text="a"/>whole class, Article A, or An
is used before it. As—
</Text>

<Text style={styles.text}>1.<BoldTextHelper text="A"/> cow has horns. (i.e., All cows have horns.)</Text>
<Text style={styles.text}>2. <BoldTextHelper text="An"/> eagle flies very high. (i.e., All eagles fly very high.)</Text>
<Text style={styles.text}>3.<BoldTextHelper text="A"/> dog is<BoldTextHelper text="a"/>faithful animal.</Text>
<Text style={styles.text}>4. <BoldTextHelper text="A"/> rose smells very sweet.</Text>
<Text style={[styles.text,{fontWeight:"bold",marginTop:10}]}>Rule 3—Article <BoldTextHelper text="a"/> or An is used before<BoldTextHelper text="a"/>Noun Complement. As—</Text>
<Text style={styles.text}>1. He is <BoldTextHelper text="a"/> lawyer.</Text>
<Text style={styles.text}>2. He became <BoldTextHelper text="a"/> great sportsman.</Text>
<Text style={styles.text}>3. She is <BoldTextHelper text="an"/> expert in this field.</Text>
<Text style={styles.text}>4. You are <BoldTextHelper text="a"/> good companion.</Text>

<Text style={styles.text}>
  
<Text style={{fontWeight:"bold",marginTop:10}}>Rule 4—a/an + Adjective/Adverb + Noun </Text>

<Text>
If an Adjective /Adverb comes before <BoldTextHelper text="a"/> Noun, Article <BoldTextHelper text="a"/> or <BoldTextHelper text="an"/> is used before the Adjective / Adverb, and its form is determined by the nearest word. As—

</Text>
</Text>

<Text style={styles.text}>1. She is <BoldTextHelper text="a"/>beautiful girl.</Text>
<Text style={styles.text}>2. He is <BoldTextHelper text="an"/> honest man.</Text>
<Text style={styles.text}>3. He is <BoldTextHelper text="a"/> very honest man.</Text>
<Text style={styles.text}>4. This is <BoldTextHelper text="an"/> old rare book.</Text>

<View>
<Text style={{fontWeight:"bold",fontSize:17}}>Rule 5—a/an + more than one Noun</Text>
<Text style={{fontSize:16}}>
(a) When more than one Noun or Adjective points to one Person or Thing only, Article <BoldTextHelper text="a"/> or An is used before the first word only, and its form is also determined by the same first word.

</Text>
</View>
<Text style={styles.text}>
(b) But if they point to different Persons or Things, Article <BoldTextHelper text="a"/> or An is used before each word, and its form is determined by each word separately. As—

</Text>

<Text style={styles.text}>1. He gave me <BoldTextHelper text="a red and blue pencil."/>  (Only one pencil)</Text>
<Text style={styles.text}>2. He gave me <BoldTextHelper text="a red and a blue "/>pencil (Two pencils)</Text>
<Text style={styles.text}>3. Here is <BoldTextHelper text="an ugly and foolish"/> man. (One person)</Text>
<Text style={styles.text}>4. Here is <BoldTextHelper text="an ugly and a foolish"/> man. (Two persons)</Text>

<View>
<Text style={{fontSize:17,fontWeight:"bold",marginVertical:10}}>Rule 6—Such + a/an</Text>
<Text style={{fontSize:17}}>
When such is used with <BoldTextHelper text="a"/> Countable Noun, Article <BoldTextHelper text="a"/> or An is used after such. As—

</Text>
</View>

<Text style={styles.text}>1. I have never seen such <BoldTextHelper text="a"/> beautiful picture. (not<BoldTextHelper text="a"/>such beautiful)</Text>
<Text style={styles.text}>2. Such <BoldTextHelper text="a"/> thing has never happened before.</Text>
<Text style={styles.text}>3. It was such <BoldTextHelper text="a"/> fine show.</Text>
<Text style={styles.text}>4. He gave us such <BoldTextHelper text="a"/> pleasant surprise.</Text>

<View>
<Text style={{fontSize:17,fontWeight:"bold",marginVertical:10}}>Rule 7—So + Adjective + a/an + Noun </Text>
<Text style={{fontSize:17}}>
When so comes before an Adjective, Article <BoldTextHelper text="A"/> or <BoldTextHelper text="An"/> is used between the Noun and Adjective.
As—
</Text>
</View>

<Text style={styles.text}>1. I have never seen so beautiful <BoldTextHelper text="a"/> picture. (not<BoldTextHelper text="a"/>so beautiful picture)</Text>
<Text style={styles.text}>2. It was so fine <BoldTextHelper text="a"/> show.</Text>
<Text style={styles.text}>3. He gave us so pleasant <BoldTextHelper text="a"/> surprise.</Text>
<Text style={styles.text}>4. I have never read so interesting <BoldTextHelper text="a"/> novel.</Text>

<View>
<Text style={{fontSize:17,fontWeight:"bold"}}>
Rule 8—Exclamations

</Text>
<Text style={{fontSize:17}}>
Article <BoldTextHelper text="a"/> or An is used before <BoldTextHelper text="a"/> Singular Countable Noun in Exclamatory sentences also.
As—

</Text>
</View>

<Text style={styles.text}>1. What <BoldTextHelper text="a"/> hot day !</Text>
<Text style={styles.text}>2. What <BoldTextHelper text="a"/> cruel act !</Text>
<Text style={styles.text}>3. What <BoldTextHelper text="a"/> pretty child !</Text>
<Text style={styles.text}>4. What <BoldTextHelper text="a"/> good chance !</Text>
<Text style={styles.text}>5. What <BoldTextHelper text="a"/> pretty girl !</Text>
<Text style={styles.text}>6. What <BoldTextHelper text="a"/> grand building !</Text>
<Text style={styles.text}>7. Such <BoldTextHelper text="a"/> long queue !</Text>

<View>
<Text style={{fontWeight:"bold",fontSize:17}}>Rule 9—Numerical expressions </Text>
<Text style={{fontSize:17,marginVertical:10}}>
Article <BoldTextHelper text="a"/> or An is used before some Numerical Expressions also. The more common of such expressions are—
a couple, <BoldTextHelper text="a"/> dozen, <BoldTextHelper text="a"/> score, <BoldTextHelper text="a"/> hundred, <BoldTextHelper text="a"/> thousand, <BoldTextHelper text="a"/> million, <BoldTextHelper text="a"/> lot of, <BoldTextHelper text="a"/> great many of, etc.
As—
</Text>
</View>


<Text style={styles.text}>1.<BoldTextHelper text="A"/> couple of people were there.</Text>
<Text style={styles.text}>2. He gave me <BoldTextHelper text="a"/> thousand rupees.</Text>
<Text style={styles.text}>3.<BoldTextHelper text="A"/> great many visitors had turned up.</Text>
<Text style={styles.text}>4.<BoldTextHelper text="A"/> score of houses had been damaged.</Text>

<View>
<Text style={{fontSize:17,fontWeight:"bold"}}>Rule 10—Expressions of price, speed, ratio, etc.</Text>
<Text style={{fontSize:17}}>
Article <BoldTextHelper text="a"/> or An is also used with expressions of price, speed, ratio, etc. As—

</Text>
</View>

<Text style={styles.text}>1. The train is running at ninety kilometers <BoldTextHelper text="an hour."/></Text>
<Text style={styles.text}>2. Bananas are available at ten rupees <BoldTextHelper text="a dozen."/> </Text>
<Text style={styles.text}>3. Sugar sells at ten rupees <BoldTextHelper text="a kilogram"/> .</Text>
<Text style={styles.text}>4. Colour and water are mixed at <BoldTextHelper text="a ratio"/>of one to five.</Text>
<Text style={styles.text}>5. Take this medicine three times <BoldTextHelper text="a day"/> .</Text>

<View>
<Text style={{fontSize:17,fontWeight:"bold"}}>Rule 11—a/an + Mr. /Mrs./Miss + Surname</Text>
<Text>
If we know only the surname of <BoldTextHelper text="a"/> person, and know nothing more, we use Article<BoldTextHelper text="a"/>or An
before the surname. As—
</Text>
</View>

<Text style={styles.text}>1.<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> Mr. Sharma came in the morning.</Text>
<Text style={styles.text}>2. I met <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> Mrs. Peters in the train.</Text>
<Text style={styles.text}>3.<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> Miss Renick is<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>regular visitor here.</Text>
<Text style={styles.text}>4.<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> Ms. Puri is waiting for you.</Text>
<Text style={styles.text}>5.<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="A"/> Mr. Verma saw me yesterday.</Text>


<View style={styles.text}>
<Text style={{fontSize:17,fontWeight:"bold"}}>Rule 12—A few/a little</Text>
<Text>
We should use<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>few for<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>small number, and<BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/>little for small quantity. As—

</Text>
</View>

<Text style={styles.text}>1. Here is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> little milk.</Text>
<Text style={styles.text}>2. Here are <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> few pencils.</Text>
<Text style={styles.text}>3. He is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> little tired.</Text>
<Text style={styles.text}>4. There is <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> little time left.</Text>


<View>
<Text style={{fontSize:17,fontWeight:"bold"}}>Rule 13—a/an with some phrases</Text>
<Text style={{fontSize:17}}>
Article <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> or An is also used before some typical expressions. The more common of them
are— 

</Text>
</View>

<Text style={styles.text}>
to make <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> noise, to take <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> fancy to, to have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> headache/a pain, to take <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> liking to, to have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> cold, to have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> mind, to have an eye to, to make <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> fire, to be in <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> hurry, to be in <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> temper, to have <BoldTextHelper inputStyle={{fontWeight:"bold"}} text="a"/> taste for.
</Text>




  </View>
  
      </ScrollView>
    </View>
  );
}

function ArticlesStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Indefinite Articles"
        component={StartingScreen}
        options={{ headerTitle: "Indefinite Articles" }}
      />
      <Drawer.Screen
        name="Definite Articles"
        component={DefiniteArticle}
        options={{ headerTitle: "Definite Articles" }}
      />
     
      
      <Drawer.Screen
        name="Omission of the Articles"
        component={OmissionOfTheArticle}
        options={{ headerTitle: "Omission of the Articles" }}
      />
      
    
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    paddingHorizontal:5
  },
  cardStyle: {
    marginVertical: 10,
    width: "95%",
    marginHorizontal: Dimensions.get("screen").width / 50,
    borderRadius: 10,
    elevation: 5,
  },
  contentStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
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

export default ArticlesStartingScreen;
