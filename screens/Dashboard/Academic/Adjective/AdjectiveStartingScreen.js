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
import PredicativeUse from "./PredicativeUse";
import BoldTextHelper from "../utils/BoldText"
import AdjectiveOfQuality from "./AdjectiveOfQuality";
import AdjectiveOfQuantity from "./AdjectiveOfQuantity";
import AdjectiveOfNumber from "./AdjectiveOfNumber"
import DemonstrativeAdjective from "./DemonstrativeAdjective";
import DistributiveAdjective from "./DistributiveAdjective";
import InterrogativeAdjective from "./InterrogativeAdjective";
import PossessiveAdjective from "./PossessiveAdjective"
import EmphasizingAdjective from "./EmphasizingAdjective";
import ExclamatoryAdjective from "./ExclamatoryAdjective";
import ProperAdjective from "./ProperAdjective";
function StartingScreen() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
      <Text style={{fontSize:16,paddingHorizontal:7,lineHeight:26,marginTop:8}}>
      A word used to express the <BoldTextHelper text= "quality, quantity, number"/> and <BoldTextHelper text="to point out the person or thing"/> is regarded as an Adjective.
      </Text>
      <Text style={{fontSize:17,marginVertical:20,paddingHorizontal:8,color:"#750E21"}}>Two types of uses: There are two uses of every adjective namely:</Text>
          <Text style={{fontSize:17,marginTop:8,paddingHorizontal:8,color:"#610C9F"}}>1. Attributive use</Text>
          <Text style={{fontSize:17,marginTop:8,paddingHorizontal:8,color:"#610C9F"}}>2. Predicative use</Text>
          <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}

      <Text style={{fontSize:18,marginVertical:15,color:"#610C9F"}}>**ATTRIBUTIVE USE**</Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      An adjective used with a noun is known as Attributive use.
      </Text>
   

      <Text style={{fontSize:16,color:"green",marginVertical:8}}>1. This is a <BoldTextHelper text="nice"/> book.</Text>
      <Text style={{fontSize:16,color:"green",marginVertical:8}}>2. He is a <BoldTextHelper text="clever"/> student, </Text>
     
     
      <Text style={{fontSize:16,color:"green",marginVertical:8}}>
    3. This is a <BoldTextHelper text="tall"/> tree, 
    </Text>
      
    <Text style={{fontSize:16,color:"green",marginVertical:8}}>4. Rose is a <BoldTextHelper text="lovely"/> flower, </Text>
    <Text style={{fontSize:16,color:"green",marginVertical:8}}>5. She has a <BoldTextHelper text="fair"/> face.</Text>
    <Text style={{fontSize:16,color:"green",marginVertical:8}}>6. Radha is a <BoldTextHelper text="beautiful"/> woman.</Text>

     
    <Text style={{fontSize:16,color:"green",marginVertical:8,marginVertical:15,color:"#610C9F"}}>**PREDICATIVE  USE**</Text>
      
      <Text style={{fontSize:16,marginVertical:8,marginVertical:15}}>
      An adjective used with a verb is known as Predicative use.  </Text>
   

      <Text style={{fontSize:16,color:"green",marginVertical:8}}>1. She is <BoldTextHelper text="afraid"/></Text>
      <Text style={{fontSize:16,color:"green",marginVertical:8}}>2. They are <BoldTextHelper text="dead"/> </Text>
     
     
      <Text style={{fontSize:16,color:"green",marginVertical:8}}>
      3. He is <BoldTextHelper text="alive"/>
    </Text>
      
    <Text style={{fontSize:16,color:"green",marginVertical:8}}>4. He looked <BoldTextHelper text="happy"/> </Text>
    

    </View>
  </View>

        

        <Text style={{ fontSize: 20, textAlign: "center", marginVertical: 10 }}>
          Kinds of Adjective
        </Text>

        <Pressable onPress={(e) => navigation.navigate("Adjective Of Quality")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Adjective of quality</Text>
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
          onPress={(e) => navigation.navigate("Adjective Of Quantity")}
        >
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Adjective of quantity</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={(e) => navigation.navigate("Adjective Of Number")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Adjective of number</Text>
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
          onPress={(e) => navigation.navigate("Demonstrative Adjective")}
        >
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Demonstrative adjective</Text>
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
          onPress={(e) => navigation.navigate("Distributive Adjective")}
        >
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Distributive adjective</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={(e) => navigation.navigate("Adjective Of Quality")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Adjective of quality</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={(e) => navigation.navigate("Interrogative Adjective")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Interrogative adjective</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={(e) => navigation.navigate("Possessive Adjective")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Possessive adjective</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={(e) => navigation.navigate("Emphasizing Adjective")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Emphasizing adjective</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={(e) => navigation.navigate("Exclamatory Adjective")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Exclamatory adjective </Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={(e) => navigation.navigate("Proper Adjective")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Proper Adjectives</Text>
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

function AdjectiveStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Adjectives"
        component={StartingScreen}
        options={{ headerTitle: "Adjective" }}
      />
      {/* <Drawer.Screen name="Personal Pronoun" component={PersonalPronoun} options={{headerTitle:"Personal Pronoun"}}/> */}
      <Drawer.Screen
        name="Attributive Use"
        component={StartingScreen}
        options={{ headerTitle: "Attributive Use" }}
      />
      <Drawer.Screen
        name="Predicative Use"
        component={PredicativeUse}
        options={{ headerTitle: "Predicative Use" }}
      />
      <Drawer.Screen
        name="Adjective Of Quality"
        component={AdjectiveOfQuality}
        options={{ headerTitle: "Adjective Of Quality" }}
      />
      <Drawer.Screen
        name="Adjective Of Quantity"
        component={AdjectiveOfQuantity}
        options={{ headerTitle: "Adjective Of Quantity" }}
      />
      <Drawer.Screen
        name="Adjective Of Number"
        component={AdjectiveOfNumber}
        options={{ headerTitle: "Adjective Of Number" }}
      />
      <Drawer.Screen
        name="Demonstrative Adjective"
        component={DemonstrativeAdjective}
        options={{ headerTitle: "Demonstrative Adjective" }}
      />
      <Drawer.Screen
        name="Distributive Adjective"
        component={DistributiveAdjective}
        options={{ headerTitle: "Distributive Adjective" }}
      />
      <Drawer.Screen
        name="Interrogative Adjective"
        component={InterrogativeAdjective}
        options={{ headerTitle: "Interrogative Adjective" }}
      />
      <Drawer.Screen
        name="Possessive Adjective"
        component={PossessiveAdjective}
        options={{ headerTitle: "Possessive Adjective" }}
      />
      <Drawer.Screen
        name="Emphasizing Adjective"
        component={EmphasizingAdjective}
        options={{ headerTitle: "Emphasizing Adjective" }}
      />
      <Drawer.Screen
        name="Exclamatory Adjective"
        component={ExclamatoryAdjective}
        options={{ headerTitle: "Exclamatory Adjective" }}
      />
      <Drawer.Screen
        name="Proper Adjective"
        component={ProperAdjective}
        options={{ headerTitle: "Proper Adjective" }}
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

export default AdjectiveStartingScreen;
