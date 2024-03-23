import { StyleSheet, Text, View ,Image} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../../../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AttemptsCount = ({isButton,currentQuizId,isBestScore,isModelPaper,index,isAuthorized}) => {
    const authContext = useContext(AuthContext);
    const [personalDetails,setPersonalDetails] = useState({
      userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:""
    })
    let attemptCount = 0;
    let bestScore = 0;
  
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
    // {authContext.currentLoggedPerson && authContext.currentLoggedPerson.quizAttempts.map((currentQuiz,index)=>{return currentQuiz.quiz.quizId === exam._id ? currentQuiz.quiz.count : ''})}
    if(authContext.currentLoggedPerson){
      if(authContext.currentLoggedPerson.quizAttempts){
        for(let i=0; i<authContext.currentLoggedPerson.quizAttempts.length; i++){
          if(currentQuizId === authContext.currentLoggedPerson.quizAttempts[i].quiz.quizId){
              console.log("Current quiz attempt counts are - ",authContext.currentLoggedPerson.quizAttempts[i].quiz.count);
              attemptCount = authContext.currentLoggedPerson.quizAttempts[i].quiz.count;
      
              let currentBestScore = Math.max(...authContext.currentLoggedPerson.quizAttempts[i].quiz.scoresArr);
              console.log("current attempt best score - ",currentBestScore);
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
            {isAuthorized ? <></>:<>
            <Image source={require("../../../../assets/lock.png")} style={{width:20,height:20}}/>
            </>}
          </>}
          </Text>}</> : isBestScore ? <>{bestScore}</> : <Text> {attemptCount}</Text>}
      </>
   
  )
}

export default AttemptsCount

const styles = StyleSheet.create({})