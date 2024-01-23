import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { Card, ActivityIndicator, Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import ModelPaperExam from "./ModelPaperExam";
import ModelPaperReview from "./ModelPaperReview";
import { PoppinsRegular } from "../../../../utils/FontHelper";
import { ScrollView } from "react-native-gesture-handler";
import ModelPaperOverView from "./ModelPaperOverView";
const Stack = createStackNavigator();
const ModelPaperExam1 = ({ route }) => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  // console.log("model paper type1 - ",route.params.data);
  const ModelPaperType = route.params.data;
  console.log("Current Model Paper Type - ",ModelPaperType)
  useEffect(()=>{
    authContext.getAllModelPapersByType(ModelPaperType);
  },[]);
  function capitalizeString(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
  }
  return (
    <View style={{marginTop:10}}>
      {/* <ModelPaperExam ModelPaperType={route.params.data} /> */}
      {/* {authContext && authContext.quizExamsArr && <Text>{authContext.quizExamsArr.length}</Text>} */}
      <Text style={{textAlign:"center",fontSize:20,color:"green",fontFamily:PoppinsRegular}}>{capitalizeString(ModelPaperType)}</Text>
      <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:10}}>
        
       {authContext && authContext.loading ? <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",marginBottom:10}}>
        <ActivityIndicator size={40} color="blue"/>
       </View>:<>

        {authContext && authContext.quizExamsArr.length<=0 ? <>
          <Text>No Model Paper Found</Text>
        </> : <>
        {authContext && authContext.quizExamsArr && authContext.quizExamsArr.map((currentModelPaper,index)=>{
          return(<>
           <Pressable onPress={()=>navigation.navigate("Model Exam",{data : currentModelPaper._id})}>
           <Card key={index} style={{width:Dimensions.get("screen").width-20,borderRadius:10,height:120,position:"relative"}}>
          <Card.Content style={{position:"relative",width:"100%",height:'100%'}}>
            <View style={{width:"100%",height:40,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text style={{fontSize:17,fontFamily:PoppinsRegular}}>Model Paper - {index+1}</Text>
            <Button mode="contained" style={{borderRadius:8, width:100}}>Attempt</Button>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"absolute",bottom:20,right:15}}>
            <View>
              <Text style={{fontSize:14,fontFamily:PoppinsRegular}}>Best Score - 0/10</Text>
            </View>
            </View>

            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"absolute",bottom:20,left:15}}>
            <View>
              <Text style={{fontSize:14,fontFamily:PoppinsRegular}}>Attempts - 0</Text>
            </View>
            </View>
          </Card.Content>
        </Card>
           </Pressable>
          </>)
        })}
        </>}
       </>}

      </View>
    </View>
  );
};

const CardHelperComponent = ({title,data})=>{
  const navigation = useNavigation();
  return(<>
    <Pressable
          onPress={() => navigation.navigate("Model Exam1", { data: data })}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 30,
              height: 70,
              marginTop: 10,
              borderRadius: 2,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title={title}/>
            </Card.Content>
          </Card>
        </Pressable>
  </>)
}

const ModelPaperStartingScreen = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        {/* <Pressable
          onPress={() => navigation.navigate("Model Exam1", { data: "noun" })}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 30,
              height: 70,
              marginTop: 10,
              borderRadius: 2,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Noun" />
            </Card.Content>
          </Card>
        </Pressable> */}

        <CardHelperComponent title="Noun" data="noun"/>
        <CardHelperComponent title="Pronoun" data="pronoun"/>
        <CardHelperComponent title="Adverbs" data="adverb"/>
        <CardHelperComponent title="Prepositions" data="prepositions"/>
        <CardHelperComponent title="Conjunctions" data="conjunction"/>
        <CardHelperComponent title="Adjective" data="adjective"/>
        <CardHelperComponent title="Verbs" data="verbs"/>
        <CardHelperComponent title="Non-Finite Verbs" data="non-finite verbs"/>
        <CardHelperComponent title="Degrees of Comparison" data="degrees of comparison"/>
        <CardHelperComponent title="Question Tags" data="question tags"/>
        <CardHelperComponent title="Subject-Verb Agreement " data="subject-verb agreement"/>
        <CardHelperComponent title="Active Voice Passive Voice " data="active voice passive voice"/>
        <CardHelperComponent title="Direct and Indirect Speech" data="direct and indirect speech"/>
        <CardHelperComponent title="Conditional Clause / If Clause" data="conditional clause"/>
        <CardHelperComponent title="Subject and Predicate" data="subject and predicate"/>
        <CardHelperComponent title="Tense and Time" data="tense and time"/>
        <CardHelperComponent title="Phrase" data="phrase"/>
        <CardHelperComponent title="Clause" data="clause"/>
        <CardHelperComponent title="Simple, Compound and Complex" data="simple, compound and complex"/>
        <CardHelperComponent title="Figures of Speech" data="figures of speech"/>
        <CardHelperComponent title="Odd Sound Out" data="odd sound out"/>
        <CardHelperComponent title="Syllables" data="syllables"/>
        <CardHelperComponent title="Phonetic Transcription" data="phonetic transcription"/>
        <CardHelperComponent title="Silent Letters" data="silent letters"/>
        <CardHelperComponent title="Wrongly Spelt Word" data="wrongly spelt word"/>
        <CardHelperComponent title="Correction of Sentences" data="correction of sentences"/>

        {/* <Pressable
          onPress={() => navigation.navigate("Model Exam", { data: "pronoun" })}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 30,
              height: 70,
              marginTop: 10,
              borderRadius: 2,
              elevation: 5,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Pronoun" />
            </Card.Content>
          </Card>
        </Pressable> */}
{/* 
        <Pressable onPress={()=>navigation.navigate("Model Paper",{data : "adverb"})}>
        <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Adverbs" />
          </Card.Content>
        </Card>
        </Pressable> */}

          {/* <Pressable onPress={()=>navigation.navigate("Model Paper",{data : "prepositions"})}>
          <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Prepositions" />
          </Card.Content>
        </Card>
          </Pressable> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Conjunctions" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Adjectives" />
          </Card.Content>
        </Card> */}
{/* 
        <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Verbs" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Non-finite Verbs" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Degrees of Comparison" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Question Tags" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Subject-Verb Agreement " />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Active Voice Passive Voice " />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Direct and Indirect Speech" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Conditional Clause / If Clause:" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Subject and Predicate " />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Tense and Time " />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Phrase" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Clause" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Simple, Compound and Complex" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Figures of Speech" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Odd Sound Out" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Syllables" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Phonetic Transcription" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Silent Letters" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Wrongly Spelt Words" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Correction of Sentences" />
          </Card.Content>
        </Card> */}

        {/* <Card
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 70,
            marginTop: 10,
            borderRadius: 2,
            elevation: 5,
            // iOS
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Card.Content style={{ display: "flex", justifyContent: "center" }}>
            <Card.Title title="Parts of Speech" />
          </Card.Content>
        </Card> */}
        
      </View>
    </ScrollView>
  );
};
const StartingScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Model Paper"
          component={ModelPaperStartingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Model Exam1"
          component={ModelPaperExam1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Model Exam"
          component={ModelPaperExam}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Model Paper Review"
          component={ModelPaperReview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Overview"
          component={ModelPaperOverView}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Quiz Overview" component={QuizOverView}/> */}
      </Stack.Navigator>
    </>
  );
};
export default StartingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  cardContentFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 1,
  },
  cardContentFlex1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    // marginLeft:14
  },
});
