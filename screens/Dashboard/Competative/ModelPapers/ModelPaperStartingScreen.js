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
import axios from 'axios';
import Paynow from "./Paynow"
import { BACKEND_API_URL } from '../../../../utils/Constants';

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
  const[loading,setLoading] = useState(false);

  const [personalDetails,setPersonalDetails] = useState({
    userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:"",userId:""
  });
  useEffect(()=>{
    async function getCurrentPersonDetails(){
      try {
        setLoading(true);
        console.log("Getting current person details");
        const id = await AsyncStorage.getItem("userId");
        const response = await axios.get(BACKEND_API_URL+"/Auth/currentPerson/"+id);
        if(response.data){
          console.log("Response data - ",response.data);
        setLoading(false);

          setTimeoutFun();
       updateDetails();
        }else{
          return Alert.alert("Failed","You are not at all a subscribed person")
        }


        function setTimeoutFun(){
          setTimeout(()=>{},3000)
        }
        
        function updateDetails(){
          console.log(
            "USER AUTH STATUS =============================="+response.data.isAuthenticated
          )
          setPersonalDetails({userName:response.data.name, 
            userEmail:response.data.email, 
            userMobile:response.data.mobile,
            userIsAuthorized:response.data.isAuthenticated,
            userAddress:response.data.address,
            userIsAuthenticated:response.data.isAuthenticated,
            userId:response.data._id})
        }
      } catch (error) {
        setLoading(false);

        return Alert.alert("Error Occurred","Get personal details error")
      }
    }
    getCurrentPersonDetails();
    console.log("USER STATUS - "+personalDetails.userIsAuthorized)
   
  },[])

  function checkIsAuthorized(){
    if(personalDetails.userIsAuthorized){ 
      return navigation.navigate("Model Exam1", { data: data })
    }
    else{
      return Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])
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
              right={(props) => !personalDetails.userIsAuthorized ?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}
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
        

        <CardHelperComponent title="Articles" data="articles"/>
        <CardHelperComponent title="Active voice and Passive voice" data="active voice and passive voice"/>
        <CardHelperComponent title="Direct and Indirect Speech" data="direct and indirect speech"/>
        <CardHelperComponent title="Question Tags" data="question tags"/>
        <CardHelperComponent title="Degrees of Comparison" data="degrees of comparison"/>
        <CardHelperComponent title="Correction of Sentences" data="correction of sentences"/>
        <CardHelperComponent title="Tenses" data="tenses"/>
        <CardHelperComponent title="Simple, Compound and Complex" data="simple,compound and complex"/>
        <CardHelperComponent title="Parts of Speech" data="parts of speech"/>
        <CardHelperComponent title="Syllables" data="syllables"/>
        <CardHelperComponent title="Phrase" data="phrase"/>
        <CardHelperComponent title="Clause" data="clause"/>
        <CardHelperComponent title="Wrongly Spelt Word" data="wrongly spelt word"/>
        <CardHelperComponent title="Odd Sounds Out" data="odd sounds out"/>
        <CardHelperComponent title="Figures of Speech" data="figures of speech"/>
        <CardHelperComponent title="Homophones & Homonyms" data="homophones & homonyms"/>
        <CardHelperComponent title="Spelling" data="spelling"/>

  
        
      </View>
    </ScrollView>
  );
};
const StartingScreen = () => {
  return (
    <>
      <Stack.Navigator
      screenOptions={{headerShown:false}}>
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
        <Stack.Screen
          name="paynow"
          component={Paynow}
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
