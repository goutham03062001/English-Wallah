import {View,StyleSheet,Dimensions,Pressable} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import BoldTextHelper from "../utils/BoldText";
import { useNavigation } from "@react-navigation/native";
import Assertive from "./Assertive";
import  Interrogative from "./Interrogative";
import Imperative from "./Imperative";
import Exclamatory from "./Exclamatory";
import AdvancedPoints from "./Advanced";
const Drawer = createDrawerNavigator();

// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';

import { Card } from 'react-native-paper';
function StartingScreen(){
    const navigation = useNavigation();
    return(<>
      <View style={{padding:2}}>
      <View style={{height:"10%"}}>
        <Text style={{textAlign:'center',fontSize:18,color:"red"}}>Reading</Text>
      </View>

      <View style={{padding:3,justifyContent:"flex-start",alignContent:"stretch"}}>
        

        


        <View style={{marginVertical:18}}>
       
        <Pressable onPress={()=>navigation.navigate("Assertive Sentence")}>
        <Card style={[{backgroundColor:"#FFDE7D"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"black",fontSize:15}}>Assertive Sentence</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>

        </Pressable>
     

        <Pressable onPress={()=>navigation.navigate("Imperative Sentence")}>
        <Card style={[{backgroundColor:"#435585"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Imperative Sentence</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>



        <Pressable onPress={()=>navigation.navigate("Exclamatory Sentence")}>
        <Card style={[{backgroundColor:"#735085"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Interrogative Sentence</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>


        <Pressable onPress={()=>navigation.navigate("Interrogative Sentence")}>
        <Card style={[{backgroundColor:"#123085"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Exclamatory Sentence</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Advanced Points")}>
        <Card style={[{backgroundColor:"#6499E9"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Advanced Points</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>
        </View>
      </View>
      </View>
    </>)
}

function  DirectAndIndirectStarting() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Reading" component={StartingScreen} />
      <Drawer.Screen name="Assertive Sentence" component={Assertive} />
      <Drawer.Screen name="Imperative Sentence" component={Imperative} />
      <Drawer.Screen name="Exclamatory Sentence" component={Exclamatory} />
      <Drawer.Screen name="Interrogative Sentence" component={Interrogative} />
      <Drawer.Screen name="Advanced Points" component={AdvancedPoints} />
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

export default DirectAndIndirectStarting;