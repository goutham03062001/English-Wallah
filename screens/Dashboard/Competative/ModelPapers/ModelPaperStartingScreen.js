import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Alert
} from "react-native";
import React, { useEffect, useContext ,useState} from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { Card, ActivityIndicator, Button,TouchableRipple } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import ModelPaperExam from "./ModelPaperExam";
import ModelPaperReview from "./ModelPaperReview";
import { PoppinsRegular } from "../../../../utils/FontHelper";
import ModelPaperOverView from "./ModelPaperOverView";
import AttemptsCount from "./AttemptsCount";
import FillIntheBlanks from "./FillIntheBlanks";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  <>
    
     <View style={{marginTop:10,marginBottom:70}}>
      <Text style={{textAlign:"center",fontSize:20,color:"green",fontFamily:PoppinsRegular}}>{capitalizeString(ModelPaperType)}</Text>
      <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:10}}>
        
       {authContext && authContext.loading ? <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",marginBottom:10}}>
        <ActivityIndicator size={40} color="blue"/>
       </View>:<>

        {authContext && authContext.quizExamsArr.length<=0 ? <>
          <Text>No Model Paper Found</Text>
        </> : <>
 
        {
          authContext && authContext.quizExamsArr && (
            <ScrollView showsVerticalScrollIndicator={false}>
            {authContext && authContext.quizExamsArr && authContext.quizExamsArr.map((currentModelPaper,index)=>(<View key={index}>
              {currentModelPaper && (<>
                <Pressable onPress={()=>navigation.navigate("Model Exam",{data : currentModelPaper._id})} style={{marginVertical:5}}>
           <Card key={index} style={{width:Dimensions.get("screen").width-20,borderRadius:10,height:120,position:"relative"}}>
          <Card.Content style={{position:"relative",width:"100%",height:'100%'}}>
            <View style={{width:"100%",height:40,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text style={{fontSize:17,fontFamily:PoppinsRegular}}>Model Paper - {index+1}</Text>
            <Button mode="contained" style={{borderRadius:8, width:130}}> 
            Attempt 
             </Button>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"absolute",bottom:20,right:15}}>
            
            </View>

            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"absolute",bottom:20,left:15}}>
            <View>
            </View>
            </View>
          </Card.Content>
        </Card>
           </Pressable>
              </>)}
             </View>))}
            </ScrollView>
          )
        }
        </>}
       </>}

      </View>
    </View>
   </>
  
  );
};

const BlanksHelper = ()=>{

  const StartingScreen = ()=>{
  const navigation = useNavigation();

    return(<>
    <View style={styles.rootContainer}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Pressable
          onPress={() => navigation.navigate("Parts of Speech",{data : "Parts of Speech"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Parts Of Speech"/>
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Articles",{data : "Articles"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Articles"/>
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Prepositions",{data : "prepositions"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Prepositions"/>
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Tenses",{data : "tenses"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Tenses"/>
            </Card.Content>
          </Card>
        </Pressable>


        <Pressable
          onPress={() => navigation.navigate("Rewrite as Directed",{data : "rewrite as directed"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Rewrite as Directed"/>
            </Card.Content>
          </Card>
        </Pressable>



        <Pressable
          onPress={() => navigation.navigate("Correction of Sentences",{data  : "correction of sentences"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Correction of Sentences"/>
            </Card.Content>
          </Card>
        </Pressable>



        <Pressable
          onPress={() => navigation.navigate("Missing Letters",{data : "missing letters"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Missing Letters"/>
            </Card.Content>
          </Card>
        </Pressable>



        <Pressable
          onPress={() => navigation.navigate("Silent Letters",{data : "silent letters"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Silent Letters"/>
            </Card.Content>
          </Card>
        </Pressable>


        <Pressable
          onPress={() => navigation.navigate("Transcriptions - English Words",{data : "transcriptions - english words"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Transcriptions - English Words"/>
            </Card.Content>
          </Card>
        </Pressable>


        <Pressable
          onPress={() => navigation.navigate("Odd Sounds",{data : "odd sounds"})}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Odd Sounds"/>
            </Card.Content>
          </Card>
        </Pressable>


        <Pressable
          onPress={() => navigation.navigate("Syllables",{data : "syllables"})}
          style={{marginBottom:3}}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,

            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title="Syllables"/>
            </Card.Content>
          </Card>
        </Pressable>


</ScrollView>
  
  </View>
    </>)
  }

  return (<>
  
  

  <Stack.Navigator>
    <Stack.Screen name = "startingScreen" component={StartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Parts of Speech" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Articles" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Prepositions" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Tenses" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Rewrite as Directed" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Correction of Sentences" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Missing Letters" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Silent Letters" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Transcriptions - English Words" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Odd Sounds" component={FillIntheBlanks} options={{headerShown:false}}/>
    <Stack.Screen name = "Syllables" component={FillIntheBlanks} options={{headerShown:false}}/>
    {/* <Stack.Screen name = "startingScreen" component={}/> */}
  </Stack.Navigator>
  </>)
}

const CardHelperComponent = ({title,data})=>{
//  navigation.navigate("Model Exam1", { data: data })
  const navigation = useNavigation();
  const [personalDetails,setPersonalDetails] = useState({
    userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:""
  })
  useEffect(()=>{
    var isAuthenticated,name,email,isAuthorized,mobile,address
    async function getDetails(){
       isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
       name = await AsyncStorage.getItem("name");
       email = await AsyncStorage.getItem("email");
       isAuthorized = await AsyncStorage.getItem("isAuthorized");
       mobile = await AsyncStorage.getItem("mobile");
       address = await AsyncStorage.getItem("address");
       setTimeoutFun();
       updateDetails();
    }
    getDetails();
    function setTimeoutFun(){
      setTimeout(()=>{},2000)
    }
    
    function updateDetails(){
      setPersonalDetails({userName:name, userEmail:email, userMobile:mobile,userIsAuthenticated:isAuthenticated,userIsAuthorized:isAuthorized,userAddress:address})
    }
  },[])
  function checkIsAuthorized(){
    if(personalDetails.userIsAuthorized==="true"){ 
      return navigation.navigate("Model Exam1", { data: data })
    }
    else{
      return Alert.alert("Unauthorized","Please complete your payment to unlock")
    }
  }
  return( <>
 <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
 <Pressable
          onPress={checkIsAuthorized}
        >
          <Card
            style={{
              width: Dimensions.get("screen").width - 20,
              height: 70,
              marginTop: 10,
              borderRadius: 5,
              elevation: 9,
              // iOS
              shadowColor: "red",
              shadowOffset: { width: 10, height: 21 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Card.Content style={{ display: "flex", justifyContent: "center" }}>
              <Card.Title title={title}
              right={(props) => personalDetails.userIsAuthorized === "false"?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}
              />
            </Card.Content>
          </Card>
        </Pressable>
 </TouchableRipple>
        </>)
  
}

const ModelPaperStartingScreen = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        

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
        <CardHelperComponent title="Silent Letters" data="silent letters"/>
        <CardHelperComponent title="Wrongly Spelt Word" data="wrongly spelt word"/>
        <CardHelperComponent title="Correction of Sentences" data="correction of sentences"/>
        <CardHelperComponent title="Fill in the blanks" data="Fill in the blanks"/>

  
        
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
          <Stack.Screen
          name="Fill in the blanks"
          component={BlanksHelper}
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
