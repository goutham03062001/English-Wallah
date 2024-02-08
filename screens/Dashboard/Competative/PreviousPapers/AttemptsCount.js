import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../../../../context/AuthContext';
const AttemptsCount = ({isButton,currentQuizId,isBestScore,isModelPaper}) => {
    const authContext = useContext(AuthContext)
    let attemptCount = 0;
    let bestScore = 0;
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
        {isButton? <>{attemptCount>0 ? "Reattempt":"Attempt"}</> : isBestScore ? <>{bestScore}</> : <Text> {attemptCount}</Text>}
      </>
   
  )
}

export default AttemptsCount

const styles = StyleSheet.create({})