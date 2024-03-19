import {View,StyleSheet,Dimensions,Pressable} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import BoldTextHelper from "../utils/BoldText";
import { useNavigation } from "@react-navigation/native";
import Imaginary from "./Imaginary";
import OpenConditional from "./OpenConditional";
import PracticeBits from "./PracticeBits";
import Unfulfilled from "./Unfulfilled";
import Unless from "./Unless"
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
       
        <Pressable onPress={()=>navigation.navigate("open conditional clause")}>
        <Card style={[{backgroundColor:"#FFDE7D"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"black",fontSize:15}}>open conditional clause</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>

        </Pressable>
     

        <Pressable onPress={()=>navigation.navigate("Imaginary improbable conditional clause")}>
        <Card style={[{backgroundColor:"#435585"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Imaginary improbable conditional clause</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>



        <Pressable onPress={()=>navigation.navigate("Unfulfilled condition")}>
        <Card style={[{backgroundColor:"#735085"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Unfulfilled condition</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>


        <Pressable onPress={()=>navigation.navigate("Unless")}>
        <Card style={[{backgroundColor:"#123085"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Unless</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Practice bits")}>
        <Card style={[{backgroundColor:"#6499E9"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Practice bits</Text>
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
      <Drawer.Screen name="Imaginary improbable conditional clause" component={Imaginary} />
      <Drawer.Screen name="open conditional clause" component={OpenConditional} />
      <Drawer.Screen name="Practice bits" component={PracticeBits} />
      <Drawer.Screen name="Unfulfilled condition" component={Unfulfilled} />
      <Drawer.Screen name="Unless" component={Unless} />
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