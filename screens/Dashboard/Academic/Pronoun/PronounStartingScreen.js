import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native-paper";
const Drawer = createDrawerNavigator();
// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';
import PersonalPronoun from "./PersonalPronoun";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReflexivePronoun from "./ReflexivePronoun";
import EmphaticPronoun from "./EmphaticPronoun";
import DemonstrativePronoun from "./DemonstrativePronoun";
import IndefinitePronoun from "./IndefinitePronoun";
import InterrogativePronoun from "./InterrogativeScreen";
import ReciprocalPronoun from "./ReciprocalPronoun";
import RelativePronoun from "./RelativePronoun";
import DistributivePronoun from "./DistributivePronoun";
import RelativeCompound from "./RelativeCompoundPronoun";
import BoldTextHelper from "../utils/BoldText"
function StartingScreen() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View>
          <Text style={{fontSize:18,textAlign:"center",marginVertical:20}}>PRONOUN</Text>
          <Text style={{fontSize:16,padding:6}}>A word which is used in the place of noun is known as a “pronoun”.</Text>
          <BoldTextHelper text="EX: I, We You, He, She, It, They" fontSize={16} styling={{padding:8}}/>
          <Text style={{fontSize:18,marginVertical:15,padding:8}}>**Kinds of Pronouns**</Text>
        </View>
        
        <Pressable onPress={() => navigation.navigate("Personal Pronoun")}>
          <Card style={[{ backgroundColor: "#FFDE7D" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "black" ,fontSize:16}}>Personal Pronoun</Text>

              
            </Card.Content>
          </Card>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Reflexive Pronoun")}>
          <Card style={[{ backgroundColor: "#435585" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Reflexive Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Emphatic Pronoun")}>
          <Card style={[{ backgroundColor: "#6C5B7B" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Emphatic Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Demonstrative Pronoun")}>
          <Card style={[{ backgroundColor: "#A084E8" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Demonstrative Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Indefinite Pronoun")}>
          <Card style={[{ backgroundColor: "#00ADB5" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Indefinite Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Interrogative Pronoun")}>
          <Card style={[{ backgroundColor: "#6A2C70" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Interrogative Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Distributive Pronoun")}>
          <Card style={[{ backgroundColor: "#0F4C75" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Distributive Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Reciprocal Pronoun")}>
          <Card style={[{ backgroundColor: "#594545" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Reciprocal Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Relative Pronoun")}>
          <Card style={[{ backgroundColor: "#40514E" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Relative Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Relative Compound Pronoun")}
        >
          <Card style={[{ backgroundColor: "#2B2E4A" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Relative Compound Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Possessive Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" ,fontSize:16}}>Possessive Pronoun</Text>
              
            </Card.Content>
          </Card>
        </Pressable>
      </ScrollView>
    </>
  );
}

function PronounStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Pronouns"
        component={StartingScreen}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Personal Pronoun"
        component={PersonalPronoun}
        options={{ headerTitle: "Personal Pronoun" }}
      />
      <Drawer.Screen
        name="Reflexive Pronoun"
        component={ReflexivePronoun}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Emphatic Pronoun"
        component={EmphaticPronoun}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Demonstrative Pronoun"
        component={DemonstrativePronoun}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Indefinite Pronoun"
        component={IndefinitePronoun}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Interrogative Pronoun"
        component={InterrogativePronoun}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Distributive Pronoun"
        component={DistributivePronoun}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Reciprocal Pronoun"
        component={ReciprocalPronoun}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Relative Pronoun"
        component={RelativePronoun}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Relative Compound Pronoun"
        component={StartingScreen}
        options={{ headerTitle: "Pronoun" }}
      />
      <Drawer.Screen
        name="Possessive Pronoun"
        component={RelativeCompound}
        options={{ headerTitle: "Pronoun" }}
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
    justifyContent: "space-around",
  },
});

export default PronounStartingScreen;
