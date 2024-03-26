import { View, StyleSheet, Image, Dimensions, ScrollView,Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, Divider } from "react-native-paper";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
import AdverbsOfTime from "./AdverbsOfTime";
import { useNavigation } from "@react-navigation/native";
import AdverbsOfPlace from "./AdverbsOfPlace";
import AdverbsOfManner from "./AdverbsOfManner";
import AdverbsOfQuantityOrDegree from "./AdverbsOfQuantityOrDegree";
import InterrogativeAdverbs from "./InterrogativeAdverbs";
import RelativeAdverbs from "./RelativeAdverbs";
import AdverbsOfFrequency from "./AdverbOfFrequency";
import AdverbsOfCertainty from "./AdverbOfCertainty";
import AdverbsOfReason from "./AdverbOfReason";
import AdverbOfAffirmation from "./AdverbOfAffirmation";
import {HighLightColor} from "../utils/Colors"
const Drawer = createDrawerNavigator();
// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';
// import PersonalPronoun from "./PersonalPronoun";
import { Card } from "react-native-paper";
function StartingScreen() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        {/* This is for intro */}
        <View>
          
        </View>
        <View style={{ padding: 5, gap: 13 }}>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            1. Rama runs <BoldTextHelper text="quickly" />
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            2. This is a <BoldTextHelper text="very" /> sweet mango
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            3. Raju reads <BoldTextHelper text="quite" /> clearly
          </Text>
        </View>

        <View style={{ marginVertical: 20, padding: 5 }}>
          <Text style={{ marginVertical: 10, fontSize: 16, lineHeight: 25 }}>
            In this sentence 1, <BoldTextHelper text="quickly" /> shows how (or
            what manner) Rama runs; that is quickly modifies the verb runs.
          </Text>
          <Text style={{ marginVertical: 10, fontSize: 16, lineHeight: 25 }}>
            In sentence 2, <BoldTextHelper text="very" /> shows how much (or in
            what degree) the mango is sweet; very modifies the adjective sweet.
          </Text>
          <Text style={{ marginVertical: 10, fontSize: 16, lineHeight: 25 }}>
            In sentence 3, <BoldTextHelper text="very" /> shows how far (or to
            what extent) Raju reads clearly; that is quite modifies the adverb
            clearly.{" "}
          </Text>
        </View>

        <View style={{ marginVertical: 19, padding: 4 }}>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            <BoldTextHelper
              text="A word which modifies the meaning of a"
              fontSize={16}
              inputStyle={{color:HighLightColor}}

            />{" "}
            <UnderlineTextHelper inputStyle={{color:"red"}} text="verb" />,{" "}
            <BoldTextHelper text="an" fontSize={16}  
              inputStyle={{color:HighLightColor}}

            />{" "}
            <UnderlineTextHelper inputStyle={{color:"red"}} text="adjective" />{" "}
            <BoldTextHelper text="or another" fontSize={16} 
              inputStyle={{color:HighLightColor}}

            />{" "}
            <UnderlineTextHelper inputStyle={{color:"red"}} text="adverb" />. It tells{" "}
            <BoldTextHelper text="how" fontSize={16} 
              inputStyle={{color:HighLightColor}}

            />,{" "}
            <BoldTextHelper text="when" fontSize={16} 
              inputStyle={{color:HighLightColor}}

            />,{" "}
            <BoldTextHelper text="where" fontSize={16} 
              inputStyle={{color:HighLightColor}}

            /> something{" "}
            <BoldTextHelper text="why" fontSize={16} 
              inputStyle={{color:HighLightColor}}

            /> happens.
          </Text>
        </View>
        
      <Pressable onPress={()=>navigation.navigate("Adverbs of Time")}>
      <Card style={[{ backgroundColor: "#FFDE7D" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "black",textAlign:"center"}}>
              Adverbs of Time
            </Text>

            
          </Card.Content>
        </Card>
      </Pressable>
        

        <Pressable onPress={()=>navigation.navigate("Adverbs of Place")}>
        <Card style={[{ backgroundColor: "#435585" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white",textAlign:"center"}}>
              Adverbs of Place
            </Text>
            
          </Card.Content>
        </Card>

        </Pressable>


       <Pressable onPress={()=>navigation.navigate("Adverbs of Manner")}>
       <Card style={[{ backgroundColor: "#6C5B7B" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white",textAlign:"center"}}>
              Adverbs of Manner
            </Text>
            
          </Card.Content>
        </Card>
       </Pressable>

       <Pressable onPress={()=>navigation.navigate("Adverbs of Quantity or Degree")}>
       <Card style={[{ backgroundColor: "#A084E8" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white",textAlign:"center"}}>
              Adverbs of Quantity or Degree
            </Text>
            
          </Card.Content>
        </Card>
       </Pressable>

      <Pressable onPress={()=>navigation.navigate("Interrogative Adverbs")}>
      <Card style={[{ backgroundColor: "#00ADB5" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white",textAlign:"center"}}>
              Interrogative Adverbs
            </Text>
            
          </Card.Content>
        </Card>

      </Pressable>


      <Pressable onPress={()=>navigation.navigate("Relative Adverbs")}>
      <Card style={[{ backgroundColor: "#6A2C70" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white",textAlign:"center"}}>
              Relative Adverbs
            </Text>
            
          </Card.Content>
        </Card>
      </Pressable>

       <Pressable onPress={()=>navigation.navigate("Adverb of Frequency")}>
       <Card style={[{ backgroundColor: "#0F4C75" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white", fontWeight: "500" }}>
              Adverb of Frequency
            </Text>
            
          </Card.Content>
        </Card>
       </Pressable>

      <Pressable onPress={()=>navigation.navigate("Adverb of Certainty")}>
          <Card style={[{ backgroundColor: "#594545" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white", fontWeight: "500" }}>
              Adverb of Certainty
            </Text>
            
          </Card.Content>
        </Card>
      </Pressable>

       <Pressable onPress={()=>navigation.navigate("Adverb of reason")}>
       <Card style={[{ backgroundColor: "#40514E" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white",fontSize:16,textAlign:"center"}}>
              Adverb of reason
            </Text>
            
          </Card.Content>
        </Card>
       </Pressable>

        <Pressable onPress={()=>navigation.navigate("Adverb of Affirmation")}>
        <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ fontSize:16,color: "white",fontSize:16,textAlign:"center"}}>
              Adverb of Affirmation / Negation
            </Text>
            
          </Card.Content>
        </Card>
        </Pressable>
      </ScrollView>
    </>
  );
}

function AdverbStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Adverbs"
        component={StartingScreen}
        options={{ headerTitle: "Adverb" }}
      />
      {/* <Drawer.Screen name="Personal Pronoun" component={PersonalPronoun} options={{headerTitle:"Personal Pronoun"}}/> */}
      <Drawer.Screen
        name="Adverbs of Time"
        component={AdverbsOfTime}
        options={{ headerTitle: "Adverbs of Time" }}
      />
      <Drawer.Screen
        name="Adverbs of Place"
        component={AdverbsOfPlace}
        options={{ headerTitle: "Adverbs of Place" }}
      />
      <Drawer.Screen
        name="Adverbs of Manner"
        component={AdverbsOfManner}
        options={{ headerTitle: "Adverbs of Manner" }}
      />
      <Drawer.Screen
        name="Adverbs of Quantity or Degree"
        component={AdverbsOfQuantityOrDegree}
        options={{ headerTitle: "Adverbs of Quantity or Degree" }}
      />
      <Drawer.Screen
        name="Interrogative Adverbs"
        component={InterrogativeAdverbs}
        options={{ headerTitle: "Interrogative Adverbs" }}
      />
      <Drawer.Screen
        name="Relative Adverbs"
        component={RelativeAdverbs}
        options={{ headerTitle: "Relative Adverbs" }}
      />
      <Drawer.Screen
        name="Adverb of Frequency"
        component={AdverbsOfFrequency}
        options={{ headerTitle: "Adverb of Frequency" }}
      />
      <Drawer.Screen
        name="Adverb of Certainty"
        component={AdverbsOfCertainty}
        options={{ headerTitle: "Adverb of Certainty" }}
      />
      <Drawer.Screen
        name="Adverb of reason"
        component={AdverbsOfReason}
        options={{ headerTitle: "Adverb of reason" }}
      />
      <Drawer.Screen
        name="Adverb of Affirmation"
        component={AdverbOfAffirmation}
        options={{ headerTitle: "Adverb of Affirmation / Negation" }}
      />
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
  contentStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 11,
  },
});

export default AdverbStartingScreen;
