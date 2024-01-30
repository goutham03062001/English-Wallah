import { StyleSheet, Text, View,ScrollView,Dimensions,Image,Pressable } from 'react-native'
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
  useEffect(()=>{
    authContext.getAllQuizzes();
    authContext.loadCurrentPersonDetails();
    if (authContext.currentLoggedPerson && authContext.currentLoggedPerson.quizAttempts) {
      authContext.currentLoggedPerson.quizAttempts.forEach((attempt) => {
        let intVal = parseInt(attempt.score);
        quizScore.push(intVal);
        console.log("Score - ", attempt.score);
      });
      setQuizScore(quizScore)
      // Calculate maxScore
      quizScore.forEach((currentScore) => {
        if (currentScore > maxScore1) {
          maxScore1 = currentScore;
        }
      });
      setMaxScore(maxScore1);
      console.log("quizScore", quizScore);
      // console.log("length - ",quizScore.length);
      console.log("type - ",typeof(quizScore));
      console.log("isArr - ",Array.isArray(quizScore))
    }
  },[])
  return (
    <>
 
    {authContext && authContext.loading ? 
    <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator animating={true} color="black" size={35}/>

    </View> : <>
    
    {authContext && authContext.quizExamsArr && (
      <ScrollView>
       {authContext && authContext.quizExamsArr && authContext.quizExamsArr.map((exam,index)=>(<>
        {exam && (<Pressable key={index} style={styles.cardStyle} onPress={()=>{navigation.navigate("Quiz",{data : exam._id})}}>
          <View style={styles.dayCard}>
          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Text key={index} style={{fontSize:16}}>Day - {index+1}</Text>
          <Button mode='outlined' style={{borderRadius:1}}><AttemptsCount currentQuizId={exam._id} isButton={true}/></Button>
          </View>
          <View style={styles.dayCardStyle}>
          <Text style={{fontWeight:"bold"}}>
          <Image source={AttemptImage} style={{width:20,height:20}}/>
          Attempts - <AttemptsCount currentQuizId ={exam._id} isButton={false}/>
          {/* {authContext.currentLoggedPerson && authContext.currentLoggedPerson.quizAttempts && authContext.currentLoggedPerson.quizAttempts.length} */}
          </Text>
          <Text style={{fontWeight:"bold"}}>
          <Image source={BestScoreImage} style={{width:20,height:20}}/>
           Best Score - <AttemptsCount isBestScore={true} currentQuizId={exam._id}/>/10 
          </Text>
          </View>
          </View>
        </Pressable>)}
       </>))}
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