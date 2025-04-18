import { StyleSheet, Text, View,ScrollView,Dimensions,Image,Pressable, Alert } from 'react-native'
import React,{useContext,useEffect,useState} from 'react';
import { Card,ActivityIndicator, Button } from 'react-native-paper';
import { AuthContext } from '../../../../context/AuthContext';
import QuizModel from './QuizModel';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import AttemptImage from "../../../../assets/Attempt.png";
import BestScoreImage from "../../../../assets/bestscore.png"
import QuizOverView from './QuizOverView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AttemptsCount from './AttemptsCount';
import Paynow from "./Paynow";
import axios from "axios";
import { BACKEND_API_URL } from '../../../../utils/Constants';
const Stack = createStackNavigator();
const QuizExam = ({route})=>{
  const navigation = useNavigation();
  return(<>
    <QuizModel quizId={route.params.data}/>
  </>)
}
  
const DisplayQuizNames = ()=>{
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  const [quizScore, setQuizScore] = useState([]);
  const[maxScore,setMaxScore] = useState(0);
  // const quizScore = [];
  let maxScore1 = 0;
  let userId=""
 async function getCurrentPersonDetails(){
  userId = await  AsyncStorage.getItem("userId")
 }
 getCurrentPersonDetails()
 const [personalDetails,setPersonalDetails] = useState({
  userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:"",userId:""
});
const[loading,setLoading] = useState(false);
useEffect(()=>{
  async function getCurrentPersonDetails(){
    try {
      setLoading(true);
      console.log("Getting current person details");
      const id = await AsyncStorage.getItem("userId");
      const response = await axios.get(BACKEND_API_URL+"/Auth/currentPerson/"+id);
      if(response.data){
        // console.log("Response data - ",response.data);
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


  useEffect(()=>{
    authContext.getAllQuizzes();
    authContext.loadCurrentPersonDetails();
    if (authContext.currentLoggedPerson && authContext.currentLoggedPerson.quizAttempts) {
      authContext.currentLoggedPerson.quizAttempts.forEach((attempt) => {
        let intVal = parseInt(attempt.score);
        quizScore.push(intVal);
        // console.log("Score - ", attempt.score);
      });
      setQuizScore(quizScore)
      // Calculate maxScore
      quizScore.forEach((currentScore) => {
        if (currentScore > maxScore1) {
          maxScore1 = currentScore;
        }
      });
      setMaxScore(maxScore1);
      // console.log("quizScore", quizScore);
      // console.log("length - ",quizScore.length);
      // console.log("type - ",typeof(quizScore));
      // console.log("isArr - ",Array.isArray(quizScore))
    }
  },[]);
  function checkIsAuthorized(exam,index){
    if(personalDetails.userIsAuthorized){
     return  navigation.navigate("Quiz",{data : exam._id})
    }
    else{
      if(index===0){
        return navigation.navigate("Quiz",{data : exam._id})

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
  }
  return (
    <>
 
    {authContext && authContext.loading ? 
    <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator animating={true} color="black" size={35}/>

    </View> : <>
    
    {authContext && authContext.quizExamsArr && (
      <ScrollView>
       {authContext && authContext.quizExamsArr && authContext.quizExamsArr.map((exam,index)=>(<View key={index}>
        {exam && (<Pressable key={index} style={styles.cardStyle} onPress={()=>{checkIsAuthorized(exam,index)}}>
          <View style={styles.dayCard}>
          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Text key={index} style={{fontSize:16}}>Day - {index+1} </Text>
          <Button mode='outlined' style={{borderRadius:1}}><AttemptsCount  index={index}
           currentQuizId={exam._id} isButton={true} isModelPaper={false} isAuthorized={personalDetails.userIsAuthorized}/></Button>
          </View>
          <View style={styles.dayCardStyle}>
          <Text style={{fontWeight:"bold"}}>
          <Image source={AttemptImage} style={{width:20,height:20}}/>
          Attempts - <AttemptsCount currentQuizId ={exam._id} isButton={false} isAuthorized={personalDetails.userIsAuthorized}
            index={index}
          />
          {/* {authContext.currentLoggedPerson && authContext.currentLoggedPerson.quizAttempts && authContext.currentLoggedPerson.quizAttempts.length} */}
          </Text>
          <Text style={{fontWeight:"bold"}}>
          <Image source={BestScoreImage} style={{width:20,height:20}}/>
           Best Score - <AttemptsCount isBestScore={true} currentQuizId={exam._id}  index={index} isAuthorized={personalDetails.userIsAuthorized}/>/10 
          </Text>
          </View>
          </View>
        </Pressable>)}
       </View>))}
       </ScrollView>
      )}
    </>}
  
    </>
  
  )
}
const StartingScreen = () => {
return(<>
  <Stack.Navigator> 
        <Stack.Screen
          name="Previous Paper"
          component={DisplayQuizNames}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Quiz" component={QuizExam}/>
        <Stack.Screen name="Quiz Overview" component={QuizOverView}/>
        <Stack.Screen name="Paynow" component={Paynow}/>
      </Stack.Navigator>
</>)
}

export default StartingScreen

const styles = StyleSheet.create({
  cardStyle:{
    marginVertical:10,
    width:"95%",
    marginHorizontal:(Dimensions.get("screen").width)/50,
    borderRadius:1,
    elevation:1,
    padding:10,
    borderBottomColor:'green',
    borderBottomWidth:2
},
contentStyle:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"center"
},
dayCard:{
  width:"100%",
  display:"flex",
  height:80,
  flexDirection:"column",
  justifyContent:"space-between",
  gap:16

},
dayCardStyle:{
  width:"100%",
  display:"flex",
  flexDirection:"row",
  justifyContent: 'space-between',
}
})