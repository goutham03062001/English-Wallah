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
import PossessivePronoun from "./PossessivePronoun";
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
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Personal Pronoun</Text>

              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Reflexive Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Reflexive Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Emphatic Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Emphatic Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Demonstrative Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Demonstrative Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Indefinite Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Indefinite Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Interrogative Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Interrogative Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Distributive Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Distributive Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Reciprocal Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Reciprocal Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Relative Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Relative Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Relative Compound Pronoun")}
        >
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Relative Compound Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Possessive Pronoun")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Possessive Pronoun</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
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
