import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../../../../context/AuthContext'
const AttemptsCount = ({isButton,currentQuizId,isBestScore,isModelPaper}) => {
    const authContext = useContext(AuthContext)
    let attemptCount = 0;
    let bestScore = 0;
    let isFound = false;
    if(authContext.currentLoggedPerson)
    {
      if(authContext.currentLoggedPerson.modelPaperAttempts){
         for(let i=0; i<authContext.currentLoggedPerson.modelPaperAttempts.length; i++){
    if(currentQuizId === authContext.currentLoggedPerson.modelPaperAttempts[i].modelPaper.modelPaperId){
        console.log("Current model attempt counts are - ",authContext.currentLoggedPerson.modelPaperAttempts[i].modelPaper.modelPaperId);
        attemptCount = authContext.currentLoggedPerson.modelPaperAttempts[i].modelPaper.count;

        let currentBestScore = Math.max(...authContext.currentLoggedPerson.modelPaperAttempts[i].modelPaper.scoresArr);
        console.log("current attempt best score - ",currentBestScore);
        bestScore = currentBestScore;
        isFound = true;
    }
   }
      }
    }
   
  return (
    
      <>
      <Text>
        {authContext.currentLoggedPerson && authContext.currentLoggedPerson.modelPaperAttempts.length}
      </Text>
      </>
   
  )
}

export default AttemptsCount

const styles = StyleSheet.create({})