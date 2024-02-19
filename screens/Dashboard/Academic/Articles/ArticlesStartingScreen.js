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
import BoldTextHelper from "../utils/BoldText"
import DefiniteArticle from "./DefiniteArticle";
import IndefiniteArticle from "./IndefiniteArticle";
import OmissionOfTheArticle from "./OmissionOfTheArticle";
function StartingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
      <Text style={{fontSize:19,paddingHorizontal:7,lineHeight:26,marginTop:8,textAlign:"center"}}>
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
      
      Indefinite Article (A/An) shows indefiniteness and Definite Article (The) shows definiteness. Articles (A, An, The) are used before Nouns under some rules. When a Singular Countable Noun is used for the first time, Article A or An is used before it. But when a Countable Noun, whether Singular or Plural, is used for a definite thing, or refers to a thing or person that has already been referred to earlier, Article The is used before it. Thus when a Singular Countable Noun is used for the first time, Article a or an is used before it, but when the same noun is repeated in the same sentence or in the subsequent sentences, Article The is used before it because then it becomes a definite thing already referred to earlier. As—
      </Text>
   

     
    </View>

    <View>
      <Text style={{fontSize:16,marginTop:8}}>1. I have a book. The book is very informative.</Text>
      <Text style={{fontSize:16,marginTop:8}}>2. I have a book, though the book is not very informative.</Text>
      <Text style={{fontSize:16,marginTop:8}}>3. There was a house. The house was very large.</Text>
      <Text style={{fontSize:16,marginTop:8}}>4. There was a house and the house was very large.</Text>
    </View>
    <Text style={styles.text}>Note:</Text>
    <Text style={styles.text}>Singular Indefinite Noun A or An</Text>
    <Text style={styles.text}>Singular/Plural Definite Noun The</Text>
  </View>

  <View>
  <Text style={{fontSize:20,marginTop:8,textAlign:"center"}}>Forms of Indefinite Article</Text>
  <Text style={styles.text}>
  Indefinite Article has two forms—A and An. Which one of these two forms will be used before a certain Noun depends upon the spellings, sound or pronunciation of the Noun under reference. The following are its rules—
  </Text>

  <Text style={styles.text}>
  (i) Article A is used before Nouns of which the spellings begin with a consonant. As—
A boy, a table, a house, a book.

  </Text>
  <Text style={styles.text}>
  (ii) Article A is also used before words which begin with a vowel but are pronounced as with a consonant. As—
  </Text>
  <Text style={styles.text}>
  A European, a unique chance, a one-rupee note, a usual sight, a universal truth, a uniform, a union, a unique person, a united action, a university student, a usage, a useful thing, a one-eyed man, a one-rupee note, a one-sided decision, a one-sided game, etc.
  </Text>

  <Text style={styles.text}>1. My brother is a university student.</Text>
  <Text style={styles.text}>2. I have a European friend.</Text>
  <Text style={styles.text}>3. I have bought a uniform.</Text>
  <Text style={styles.text}>4. He is professor in a university.</Text>
  <Text style={styles.text}>5. We have a one-rupee note.</Text>
  <Text style={styles.text}>6. I saw a one-eyed man crossing the bridge.</Text>
  <Text style={styles.text}>7 This is a one-sided game.</Text>
  <Text style={styles.text}>Note:You will see that all these words begin with the sound of y or w (which are consonants) and not with the sound of any vowel.</Text>
  <Text style={styles.text}>
  (iii) Article An is used before those words which begin with a vowel (a, e, i, o, u). As—
an apple, an archer, an inkpot, an orange, an umbrella, an ox, an ostrich, an egg an element, an interviw etc..

  </Text>

  <Text style={styles.text}>1. An ostrich has two toed feet.</Text>
  <Text style={styles.text}>2. I have an umbrella.</Text>
  <Text style={styles.text}>3. He eats an egg daily.</Text>
  <Text style={styles.text}>4. He is an actor.</Text>

  <Text style={styles.text}>(iv) Article An is also used before those words which begin with silent / mute h. As—
an hour, an hourly meeting, an honest person, an honesty an honour, an honorary an honourable man, an honorarium, heir, heiress, heirloom
</Text>

<Text style={styles.text}>Note— Earlier humble, humility, hotel, hostel, hospital were also supposed to begin with silent h, and article an was used before them. But now these words are pronounced with the consonant sound of h, and therefore article a is used before them.
a hut, a history teacher, a hotel, a hospital, etc

</Text>



<Text style={styles.text}>(v) Some Abbreviations are there which are pronounced with a Vowel sound and therefore article an is used before them. As—
an M. A.; an M. P.; an M. L. A.; an F. I. R; an S. D. O.; an H. M. T.; an R. T. O. 
an F.S.O., an IAS, an IPS, an SP, an M.Sc./ M.com., an FIR, an NCC officer, an x-ray machine, etc

1. He is an N. C. C. officer.
2. His brother is an M. P.
3. I want to purchase an H. M. T. watch.
4. He is an M. A. in English.
5. Shyam is an S.P.

</Text>

<Text style={styles.text}>
Note—If the above noted Abbreviations are used in their full form, they take article a. As—
A Member of Parliament (an M. P.) A Master of Arts (an M. A.)

</Text>


  </View>

  <View>
    <Text style={styles.sideHeading}> (i) Use of Indefinite Article—‘A’/ ‘An’</Text>
    <Text style={styles.text}>The following are the rules of correct use of Indefinite Article A or An :—</Text>

    <Text style={styles.text}>Rule 1—Singular Countable Noun</Text>
    <Text style={styles.text}>When a Singular Countable Noun is used for the first time, Article A or An is used before it.
As—
</Text>
    
    <Text style={styles.text}>1. A peacock is a bird.</Text>
    <Text style={styles.text}>2. A man went out with the dog.</Text>
    <Text style={styles.text}>3. A child needs love.</Text>
    <Text style={styles.text}>4. A car must be insured.</Text>
    <Text style={styles.text}>5. I have a book.</Text>
    <Text style={styles.text}>6. He is a boy.</Text>
    <Text style={styles.text}>7. There is an eagle.</Text>
    <Text style={styles.text}>8. Delhi is a city.</Text>

    <Text style={styles.text}>
Rule 2—When a Singular Countable Noun represents a whole class, Article A, or An
is used before it. As—
</Text>

<Text style={styles.text}>1. A cow has horns. (i.e., All cows have horns.)</Text>
<Text style={styles.text}>2. An eagle flies very high. (i.e., All eagles fly very high.)</Text>
<Text style={styles.text}>3. A dog is a faithful animal.</Text>
<Text style={styles.text}>4. A rose smells very sweet.</Text>
<Text style={styles.text}>Rule 3—Article A or An is used before a Noun Complement. As—</Text>
<Text style={styles.text}>1. He is a lawyer.</Text>
<Text style={styles.text}>2. He became a great sportsman.</Text>
<Text style={styles.text}>3. She is an expert in this field.</Text>
<Text style={styles.text}>4. You are a good companion.</Text>

<Text style={styles.text}>
  
Rule 4—a/an + Adjective/Adverb + Noun 
If an Adjective /Adverb comes before a Noun, Article A or A n is used before the Adjective / Adverb, and its form is determined by the nearest word. As—

</Text>

<Text style={styles.text}>1. She is a beautiful girl.</Text>
<Text style={styles.text}>2. He is an honest man.</Text>
<Text style={styles.text}>3. He is a very honest man.</Text>
<Text style={styles.text}>4. This is an old rare book.</Text>

<Text style={styles.text}>
Rule 5—a/an + more than one Noun
(a) When more than one Noun or Adjective points to one Person or Thing only, Article A or An is used before the first word only, and its form is also determined by the same first word.
</Text>
<Text style={styles.text}>
(b) But if they point to different Persons or Things, Article A or An is used before each word, and its form is determined by each word separately. As—

</Text>

<Text style={styles.text}>1. He gave me a red and blue pencil. (Only one pencil)</Text>
<Text style={styles.text}>2. He gave me a red and a blue pencil. (Two pencils)</Text>
<Text style={styles.text}>3. Here is an ugly and foolish man. (One person)</Text>
<Text style={styles.text}>4. Here is an ugly and a foolish man. (Two persons)</Text>

<Text style={styles.text}>
Rule 6—Such + a/an
When such is used with a Countable Noun, Article A or An is used after such. As—
</Text>

<Text style={styles.text}>1. I have never seen such a beautiful picture. (not a such beautiful)</Text>
<Text style={styles.text}>2. Such a thing has never happened before.</Text>
<Text style={styles.text}>3. It was such a fine show.</Text>
<Text style={styles.text}>4. He gave us such a pleasant surprise.</Text>

<Text style={styles.text}>
Rule 7—So + Adjective + a/an + Noun 
When so comes before an Adjective, Article A or An is used between the Noun and Adjective.
As—
</Text>

<Text style={styles.text}>1. I have never seen so beautiful a picture. (not a so beautiful picture)</Text>
<Text style={styles.text}>2. It was so fine a show.</Text>
<Text style={styles.text}>3. He gave us so pleasant a surprise.</Text>
<Text style={styles.text}>4. I have never read so interesting a novel.</Text>

<Text style={styles.text}>
Rule 8—Exclamations
Article A or An is used before a Singular Countable Noun in Exclamatory sentences also.
As—

</Text>

<Text style={styles.text}>1. What a hot day !</Text>
<Text style={styles.text}>2. What a cruel act !</Text>
<Text style={styles.text}>3. What a pretty child !</Text>
<Text style={styles.text}>4. What a good chance !</Text>
<Text style={styles.text}>5. What a pretty girl !</Text>
<Text style={styles.text}>6. What a grand building !</Text>
<Text style={styles.text}>7. Such a long queue !</Text>

<Text style={styles.text}>
Rule 9—Numerical expressions 
Article A or An is used before some Numerical Expressions also. The more common of such expressions are—
a couple, a dozen, a score, a hundred, a thousand, a million, a lot of, a great many of, etc.
As—
</Text>


<Text style={styles.text}>1. A couple of people were there.</Text>
<Text style={styles.text}>2. He gave me a thousand rupees.</Text>
<Text style={styles.text}>3. A great many visitors had turned up.</Text>
<Text style={styles.text}>4. A score of houses had been damaged.</Text>

<Text style={styles.text}>
Rule 10—Expressions of price, speed, ratio, etc.
Article A or An is also used with expressions of price, speed, ratio, etc. As—
</Text>

<Text style={styles.text}>1. The train is running at ninety kilometers an hour.</Text>
<Text style={styles.text}>2. Bananas are available at ten rupees a dozen.</Text>
<Text style={styles.text}>3. Sugar sells at ten rupees a kilogram.</Text>
<Text style={styles.text}>4. Colour and water are mixed at a ratio of one to five.</Text>
<Text style={styles.text}>5. Take this medicine three times a day.</Text>

<Text style={styles.text}>
Rule 11—a/an + Mr. /Mrs./Miss + Surname
If we know only the surname of a person, and know nothing more, we use Article A or An
before the surname. As—
</Text>

<Text style={styles.text}>1. A Mr. Sharma came in the morning.</Text>
<Text style={styles.text}>2. I met a Mrs. Peters in the train.</Text>
<Text style={styles.text}>3. A Miss Renick is a regular visitor here.</Text>
<Text style={styles.text}>4. A Ms. Puri is waiting for you.</Text>
<Text style={styles.text}>5. A Mr. Verma saw me yesterday.</Text>


<Text style={styles.text}>
Rule 12—A few/a little
We should use a few for a small number, and a little for small quantity. As—

</Text>

<Text style={styles.text}>1. Here is a little milk.</Text>
<Text style={styles.text}>2. Here are a few pencils.</Text>
<Text style={styles.text}>3. He is a little tired.</Text>
<Text style={styles.text}>4. There is a little time left.</Text>


<Text style={styles.text}>
Rule 13—a/an with some phrases
Article A or An is also used before some typical expressions. The more common of them
are— 

</Text>

<Text style={styles.text}>
to make a noise, to take a fancy to, to have a headache/a pain, to take a liking to, to have a cold, to have a mind, to have an eye to, to make a fire, to be in a hurry, to be in a temper, to have a taste for.
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
