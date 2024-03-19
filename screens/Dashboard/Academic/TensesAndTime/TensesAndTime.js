import {View,StyleSheet,Dimensions,Pressable,ScrollView} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import BoldTextHelper from "../utils/BoldText";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';

import { Card } from 'react-native-paper';
import SimplePresent from "./SimplePresent";
import SimplePast from "./SimplePast";
import SimpleFuture from "./SimpleFuture";
import PresentContinuous from "./PresentContinuousTense";
import PastContinuous from "./PastContinuous";
import FutureContinuous from "./FutureContinuous";
import PresentPerfect from "./PresentPerfect";
import PastPerfect from "./PastPerfect";
import FuturePerfect from "./FuturePerfect";
import PresentPerfectContinuous from "./PresentPerfectContinuous";
import FuturePerfectContinuous from "./FuturePerfectContinuous";
import PastPerfectContinuous from "./PastPerfectContinuous";
function StartingScreen(){
    const navigation = useNavigation();
    return(<>
      <ScrollView>
      <View style={{padding:2}}>
      
      <View style={{padding:3,justifyContent:"flex-start",alignContent:"stretch"}}>
        <View style={{marginVertical:0}}>
       
        <Pressable onPress={()=>navigation.navigate("Simple Present")}>
        <Card style={[{backgroundColor:"#FFDE7D"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"black",fontSize:15}}>Simple Present</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>

        </Pressable>
     

        <Pressable onPress={()=>navigation.navigate("Simple Past")}>
        <Card style={[{backgroundColor:"#435585"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Simple Past</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>



        <Pressable onPress={()=>navigation.navigate("Simple Future")}>
        <Card style={[{backgroundColor:"#735085"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Simple Future</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Present Continuous Tense")}>
        <Card style={[{backgroundColor:"#6C5B7B"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Present Continuous Tense</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Past Continuous")}>
        <Card style={[{backgroundColor:"#A084E8"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Past Continuous</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Future Continuous")}>
        <Card style={[{backgroundColor:"#00ADB5"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Future Continuous</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Present Perfect")}>
        <Card style={[{backgroundColor:"#0F4C75"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Present Perfect</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Past Perfect")}>
        <Card style={[{backgroundColor:"#594545"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Past Perfect</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Future Perfect")}>
        <Card style={[{backgroundColor:"#40514E"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Future Perfect</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Present Perfect Continuous")}>
        <Card style={[{backgroundColor:"#2B2E4A"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Present Perfect Continuous</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>


        <Pressable onPress={()=>navigation.navigate("Past Perfect Continuous")}>
        <Card style={[{backgroundColor:"#903749"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Past Perfect Continuous</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Future Perfect Continuous")}>
        <Card style={[{backgroundColor:"#53354A"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Future Perfect Continuous</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        
        </View>
      </View>
      </View>
      </ScrollView>
    </>)
}

function  TensesAndTime() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Reading" component={StartingScreen} />
      <Drawer.Screen name="Simple Present" component={SimplePresent} />
      <Drawer.Screen name="Simple Past" component={SimplePast} />
      <Drawer.Screen name="Simple Future" component={SimpleFuture} />
      <Drawer.Screen name="Present Continuous" component={PresentContinuous} />
      <Drawer.Screen name="Past Continuous" component={PastContinuous} />
      <Drawer.Screen name="Future Continuous" component={FutureContinuous} />
      <Drawer.Screen name="Present Perfect" component={PresentPerfect} />
      <Drawer.Screen name="Past Perfect" component={PastPerfect} />
      <Drawer.Screen name="Future Perfect" component={FuturePerfect} />
      <Drawer.Screen name="Present Perfect Continuous" component={PresentPerfectContinuous} />
      <Drawer.Screen name="Past Perfect Continuous" component={PastPerfectContinuous} />
      <Drawer.Screen name="Future Perfect Continuous" component={FuturePerfectContinuous} />
      
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

export default TensesAndTime;