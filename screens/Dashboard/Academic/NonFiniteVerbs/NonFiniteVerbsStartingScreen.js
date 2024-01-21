import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native-paper";
import BoldTextHelper from "../utils/BoldText";
import { useNavigation } from "@react-navigation/native";
import Infinitive from "./Infinitive";
import Gerund from "./Gerund";
import Participle from "./Participle"
const Drawer = createDrawerNavigator();

// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';

import { Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
function StartingScreen() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={{ padding: 2 }}>
          <View style={{ height: "10%" }}>
            <Text style={{ textAlign: "center", fontSize: 18, color: "red" }}>
              Reading
            </Text>
          </View>

          <View
            style={{
              padding: 3,
              justifyContent: "flex-start",
              alignContent: "stretch",
            }}
          >
            <View style={{ marginVertical: 20, gap: 10 ,paddingLeft:10}}>
              <Text style={{ fontSize: 16 }}>
                <Text>1.The Infinitive</Text>
              </Text>
              <Text style={{ fontSize: 16 }}>2. The Gerund</Text>
              <Text style={{ fontSize: 16 }}>3. The Participle</Text>
            </View>

            <View style={{ marginVertical: 20 }}>
              <Text
                style={{
                  lineHeight: 27,
                  textAlign: "justify",
                  fontSize: 16,
                  padding: 5,
                }}
              >
                All these Non-Finite Verbs are Independent verbs. They are
                called independent because they are not governed by the Number
                and Person of the Subject like other verbs. They are independent
                of the subject. Let us consider the rules governing the
                Non-Finite Verbs one by one.
              </Text>
            </View>
            <View style={{ marginVertical: 18 }}>
              <Text
                style={{
                  fontSize: 18,
                  marginBottom: 10,
                  color: "brown",
                  textAlign: "center",
                }}
              >
                Types of Verbs
              </Text>

              <Pressable
                onPress={() => navigation.navigate("The Infinitive")}
              >
                <Card
                  style={[{ backgroundColor: "#FFDE7D" }, styles.cardStyle]}
                >
                  <Card.Content style={styles.contentStyle}>
                    <Text style={{ color: "black", fontSize: 15 }}>
                    The Infinitive                    </Text>
                    {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}
                  </Card.Content>
                </Card>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate("The Gerund")}
              >
                <Card
                  style={[{ backgroundColor: "#435585" }, styles.cardStyle]}
                >
                  <Card.Content style={styles.contentStyle}>
                    <Text style={{ color: "white", fontSize: 15 }}>
                    The Gerund
                    </Text>
                    {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}
                  </Card.Content>
                </Card>
              </Pressable>

              <Pressable
                onPress={() =>
                  navigation.navigate("The Participle")
                }
                style={{marginBottom:40}}
              >
                <Card
                  style={[{ backgroundColor: "#735085" }, styles.cardStyle]}
                >
                  <Card.Content style={styles.contentStyle}>
                    <Text style={{ color: "white", fontSize: 15 }}>
                    The Participle
                    </Text>
                    {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}
                  </Card.Content>
                </Card>
              </Pressable>

              
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

function NonFiniteVerbsStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="The Non-Finite Verbs" component={StartingScreen} />
      <Drawer.Screen name = "The Infinitive" component={Infinitive}/>
      <Drawer.Screen name = "The Gerund" component={Gerund}/> 
      <Drawer.Screen name="The Participle" component={Participle} />
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

export default NonFiniteVerbsStartingScreen;
