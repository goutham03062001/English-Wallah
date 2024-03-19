import {View,StyleSheet,Dimensions,Pressable} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import BoldTextHelper from "../utils/BoldText";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';

import { Card } from 'react-native-paper';
import NounPhrase from "./NounPhrase";
import AdjectivePhrase from "./AdjectivePhrase";
import AdverbPhrase from "./Adverb"
function StartingScreen(){
    const navigation = useNavigation();
    return(<>
      <View style={{padding:2}}>
      <View style={{height:"10%"}}>
        <Text style={{textAlign:'center',fontSize:18,color:"red"}}>Reading</Text>
      </View>

      <View style={{padding:3,justifyContent:"flex-start",alignContent:"stretch"}}>
        

        


        <View style={{marginVertical:18}}>
       
        <Pressable onPress={()=>navigation.navigate("Noun Phrase")}>
        <Card style={[{backgroundColor:"#FFDE7D"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"black",fontSize:15}}>Noun Phrase</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>

        </Pressable>
     

        <Pressable onPress={()=>navigation.navigate("Adjective Phrase")}>
        <Card style={[{backgroundColor:"#435585"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Adjective Phrase</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>



        <Pressable onPress={()=>navigation.navigate("Adverb Phrase")}>
        <Card style={[{backgroundColor:"#735085"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Adverb Phrase</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>


        
        </View>
      </View>
      </View>
    </>)
}

function  PhraseStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Reading" component={StartingScreen} />
      <Drawer.Screen name="Noun Phrase" component={NounPhrase} />
      <Drawer.Screen name="Adjective Phrase" component={AdjectivePhrase} />
      <Drawer.Screen name="Adverb Phrase" component={AdverbPhrase} />
      
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

export default PhraseStartingScreen;