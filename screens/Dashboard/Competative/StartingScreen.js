import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useContext } from "react";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../../../context/AuthContext";
import ModelPaperStartingScreen from "./ModelPapers/ModelPaperStartingScreen";
import PreviousPaperStartingScreen from "./PreviousPapers/StartingScreen"
import QuizOverView from "./PreviousPapers/QuizOverView";
import FillInTheBlanksStartingScreen from "./FillInTheBlanks.js/FillInTheBlanksStartingScreen";
import EnglishMethodsStartingScreen from "./Methods/StartingScreen";
import { PoppinsLight,PoppinsRegular } from "../../../utils/FontHelper";
import { TouchableRipple } from "react-native-paper";
const Stack = createStackNavigator();
const RoutingScreen = () => {
  const navigation = useNavigation();

  return (
    <>
    
      <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{width:Dimensions.get("screen").width-30,display:"flex",justifyContent:"flex-start",marginTop:50,paddingHorizontal:20}}>
      <Text style={{fontSize:18,fontFamily:PoppinsLight}}>Competitive</Text>
    </View>
        <View style={styles.rootContainer}>
       
          <Pressable onPress={()=>navigation.navigate("Model Papers")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#31304D" }]}>
              <Text
                style={{ color: "#ECEE81", fontWeight: "600", fontSize: 18 ,fontFamily:PoppinsRegular}}
              >
                Model Papers
              </Text>
            </Card>
          </Pressable>

          <Pressable onPress={()=>navigation.navigate("Previous Papers")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#5F6F52" }]}>
              <Text style={{ color: "#ECEE81", fontSize: 18 ,fontFamily:PoppinsRegular}}>
                Previous Papers
              </Text>
            </Card>
          </Pressable>

          <Pressable onPress={()=>navigation.navigate("Fill In The Blanks")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#0C2D57" }]}>
              <Text style={{ color: "#ECEE81", fontSize: 18,fontFamily:PoppinsRegular }}>
                Fill In The Blanks
              </Text>
            </Card>
          </Pressable>

          <Pressable 
          android_ripple={{color:"#C3DDDD"}}
          onPress={()=>navigation.navigate("English Methods")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#AD88C6" }]}>
              <Text style={{ color: "#ffff", fontSize: 18 ,fontFamily:PoppinsRegular}}>
              CTET / TET

              </Text>
            </Card>
          </Pressable>
        </View>
      </View>
    </>
  );
};




const StartingScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="competitive"
          component={RoutingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Model Papers" component={ModelPaperStartingScreen} />
        <Stack.Screen name="Previous Papers" component={PreviousPaperStartingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Quiz Review" component={QuizOverView}/>
        <Stack.Screen name="Fill In The Blanks" component={FillInTheBlanksStartingScreen}/>
        <Stack.Screen name="English Methods" component={EnglishMethodsStartingScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </>
  );
};

export default StartingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    gap: 25,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    width: Dimensions.get("window").width / 1.08,
    height: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5
  },
});
