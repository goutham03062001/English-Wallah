import { StyleSheet, Text, View ,Image,Alert} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../../../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { BACKEND_API_URL } from '../../../../utils/Constants';
const AttemptsCount = ({isButton,currentQuizId,isBestScore,isModelPaper,index,isAuthorized}) => {
    const authContext = useContext(AuthContext);
    const[loading,setLoading] = useState(false)
    let attemptCount = 0;
    let bestScore = 0;
    const [personalDetails,setPersonalDetails] = useState({
      userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:"",userId:""
    });
    useEffect(()=>{
      async function getCurrentPersonDetails(){
        try {
          setLoading(true);
          // console.log("Getting current person details");
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
      // console.log("USER STATUS - "+personalDetails.userIsAuthorized)
     
    },[])
    // {authContext.currentLoggedPerson && authContext.currentLoggedPerson.quizAttempts.map((currentQuiz,index)=>{return currentQuiz.quiz.quizId === exam._id ? currentQuiz.quiz.count : ''})}
    if(authContext.currentLoggedPerson){
      if(authContext.currentLoggedPerson.quizAttempts){
        for(let i=0; i<authContext.currentLoggedPerson.quizAttempts.length; i++){
          if(currentQuizId === authContext.currentLoggedPerson.quizAttempts[i].quiz.quizId){
              // console.log("Current quiz attempt counts are - ",authContext.currentLoggedPerson.quizAttempts[i].quiz.count);
              attemptCount = authContext.currentLoggedPerson.quizAttempts[i].quiz.count;
      
              let currentBestScore = Math.max(...authContext.currentLoggedPerson.quizAttempts[i].quiz.scoresArr);
              // console.log("current attempt best score - ",currentBestScore);
              bestScore = currentBestScore;
      
          }
         }
      }
    }
  return (
    
      <>
        {isButton? <>{attemptCount >7? "7 attempts only":<Text>
          <Text>{attemptCount>0 ? "Reattempt":"Attempt"}</Text>
          {index==0? <></>:<>
            {personalDetails.userIsAuthorized ? <></>:<>
            <Image source={require("../../../../assets/lock.png")} style={{width:20,height:20}}/>
            </>}
          </>}
          </Text>}</> : isBestScore ? <>{bestScore}</> : <Text> {attemptCount}</Text>}
      </>
   
  )
}

export default AttemptsCount

const styles = StyleSheet.create({})