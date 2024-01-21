import {View,StyleSheet,Dimensions,Pressable} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import BoldTextHelper from "../utils/BoldText";
import { useNavigation } from "@react-navigation/native";
// import UseOfPreposition from "./UseOfPreposition";
// import FunctionalTypesOfPreposition from "./FunctionalTypesOfPreposition";
// import OmissionOfPreposition from "./OmissionOfPreposition";
// import WrongUseOfPreposition from "./WrongUseOfPreposition";
// import FormsOfPreposition from "./FormsOfPreposition"
import PreModifiers from "./PreModifiers";
const Drawer = createDrawerNavigator();

// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';

import { Card } from 'react-native-paper';
import PostModifiers from "./PostModifiers";
function StartingScreen(){
    const navigation = useNavigation();
    return(<>
      <View style={{padding:2}}>
      <View style={{height:"10%"}}>
        <Text style={{textAlign:'center',fontSize:18,color:"red"}}>Reading</Text>
      </View>

      <View style={{padding:3,justifyContent:"flex-start",alignContent:"stretch"}}>

        <View style={{marginVertical:18}}>
       
        <Pressable onPress={()=>navigation.navigate("Pre Modifiers")}>
        <Card style={[{backgroundColor:"#FFDE7D"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"black",fontSize:15}}>Pre Modifiers</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>

        </Pressable>
     

        <Pressable onPress={()=>navigation.navigate("Post Modifiers")}>
        <Card style={[{backgroundColor:"#435585"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Post Modifiers</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>


        </View>
      </View>
      </View>
    </>)
}

function  ModifiersStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Prepositions" component={StartingScreen} />
      <Drawer.Screen name="Pre Modifiers" component={PreModifiers} />
      <Drawer.Screen name="Post Modifiers" component={PostModifiers} />
      {/* <Drawer.Screen name="Use Of Pronoun" component={UseOfPreposition} /> */}
      {/* <Drawer.Screen name="Functional Types of Prepositions" component={FunctionalTypesOfPreposition} /> */}
      {/* <Drawer.Screen name="Omission of Preposition" component={OmissionOfPreposition} /> */}
      {/* <Drawer.Screen name="Wrong Use of Prepositions" component={WrongUseOfPreposition} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    cardStyle:{
        marginVertical:10,
        width:"95%",
        marginHorizontal:(Dimensions.get("screen").width)/50,
        borderRadius:10,
        elevation:5
    }
})

export default ModifiersStartingScreen;