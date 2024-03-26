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
  import BoldTextHelper from "../utils/BoldText"
  import CoordinatingConjunction from "./CoordinatingConjunction";
  import SubordinatingConjunction from "./SubordinatingConjunction";
  import CorelativeConjunction from "./CorelativeConjunction";
  import CompoundConjunction from "./CompoundConjunction";
  function StartingScreen() {
    const navigation = useNavigation();
    return (
      <>
        <ScrollView>
        <Text style={{fontSize:16,paddingHorizontal:7,lineHeight:26,marginTop:8}}>
        A word which joins two sentences or words and clauses is known as Conjunction. 
        </Text>
        <Text style={{fontSize:16,textAlign:"center"}}>Or</Text>
        <Text style={{fontSize:16,marginTop:8,paddingHorizontal:8}}>
        Conjunction joins two words or sentences. <BoldTextHelper text="They have no other function except joining."/>
        </Text>
            <View style={{paddingHorizontal:7}}>
      <View>
        {/* collective noun */}
  
        <Text style={{fontSize:18,marginVertical:15, backgroundColor: "#FFDE7D",padding:5,width:210}}>
          <BoldTextHelper text="Kinds of conjunctions"
            inputStyle={{color:"black"}}
          />
        </Text>
        
        <Text style={{fontSize:16,marginVertical:15}}>
        Conjunctions are divided into four kinds, namely.
        </Text>
     
  
        <Text style={{fontSize:16,marginVertical:8,color:"green"}}>1. Correlative conjunctions.</Text>
        <Text style={{fontSize:16,marginVertical:8,color:"green"}}>2. Compound conjunctions. </Text>
       
       
        <Text style={{fontSize:16,marginVertical:8,color:"green"}}>
        3. Coordinating conjunctions.		
      </Text>
        
      <Text style={{fontSize:16,marginVertical:8,color:"green"}}>4. Subordinating conjunctions.</Text>
      
  
      </View>
    </View>
  
  
         <View style={{marginVertical:15}}>
         <Pressable onPress={(e) => navigation.navigate("Correlative")}>
            <Card style={[{ backgroundColor: "#FFDE7D" }, styles.cardStyle]}>
              <Card.Content style={styles.contentStyle}>
                <Text style={{fontSize:16, color: "black" }}>Correlative Conjunction</Text>
                
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable
            onPress={(e) => navigation.navigate("Compound")}
          >
            <Card style={[{ backgroundColor: "#435585" }, styles.cardStyle]}>
              <Card.Content style={styles.contentStyle}>
                <Text style={{fontSize:16, color: "white" }}>Compound Conjunction</Text>
                
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable onPress={(e) => navigation.navigate("Coordinating")}>
            <Card style={[{ backgroundColor: "#6C5B7B" }, styles.cardStyle]}>
              <Card.Content style={styles.contentStyle}>
                <Text style={{fontSize:16, color: "white" }}>Coordinating conjunction</Text>
                
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable
            onPress={(e) => navigation.navigate("Subordinating")}
          >
            <Card style={[{ backgroundColor: "#A084E8" }, styles.cardStyle]}>
              <Card.Content style={styles.contentStyle}>
                <Text style={{fontSize:16, color: "white" }}>Subordinating conjunctions</Text>
                
              </Card.Content>
            </Card>
          </Pressable>
         </View>
  
        
          
        </ScrollView>
      </>
    );
  }
  
  function ConjunctionStartingScreen() {
    return (
      <Drawer.Navigator>
       <Drawer.Screen
          name="Conjunctions - Reading"
          component={StartingScreen}
          options={{ headerTitle: "Conjunction" }}
        />
        <Drawer.Screen
          name="Correlative"
          component={CorelativeConjunction}
          options={{ headerTitle: "Correlative Conjunction" }}
        />
        
        {/* <Drawer.Screen name="Personal Pronoun" component={PersonalPronoun} options={{headerTitle:"Personal Pronoun"}}/> */}
        <Drawer.Screen
          name="Compound"
          component={CompoundConjunction}
          options={{ headerTitle: "Compound conjunction" }}
        />

        <Drawer.Screen
          name="Coordinating"
          component={CoordinatingConjunction}
          options={{ headerTitle: "Coordinating conjunction" }}
        />


        <Drawer.Screen
          name="Subordinating"
          component={SubordinatingConjunction}
          options={{ headerTitle: "Subordinating conjunction" }}
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
  
  export default ConjunctionStartingScreen;
  