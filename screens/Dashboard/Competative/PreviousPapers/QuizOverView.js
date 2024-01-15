import { Dimensions, StyleSheet, Text, View ,Image} from "react-native";
import React, { useState ,useEffect} from "react";
import { Button, Dialog,Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
const QuizOverView = ({ route }) => {

  const {userAnswers,quizData} = route.params;
  const [currIndex, setCurrIndex] = useState(0);
  const[trueCount,setTrueCount] = useState(0);
  const[wrongCount,setWrongCount] = useState(0);
  const[skippedCount,setSkippedCount] = useState(0);
  console.log("Insided Quiz Overview - ", userAnswers);
  // userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length - 1] == quizData.Questions[currIndex].answer[0]
  const calculateCorrectAnswer = () => {
    if (!quizData || !quizData.Questions || !Array.isArray(quizData.Questions) || quizData.Questions.length === 0) {
      console.error('Invalid or empty questions array');
      return 0;
    }
  
    const correctAnswers = userAnswers.filter(answer => {
      const questionId = answer.questionId - 1;
      const question = quizData.Questions[questionId];
  
      // Check if the question and its answer property exist
      if (!question || typeof question.answer !== 'string') {
        console.error('Invalid question or answer property');
        return false;
      }
      
      return question.options[answer.selectedOption] === question.answer;
    });
    if(correctAnswers.length>=0){
      return setTrueCount(correctAnswers.length);
    }
    return (correctAnswers.length / quizData.Questions.length) * 100;
  };

  const calculateWrongAnswers = () => {
    if (!quizData || !quizData.Questions || !Array.isArray(quizData.Questions) || quizData.Questions.length === 0) {
      console.error('Invalid or empty questions array');
      return 0;
    }
  
    const wrongAnswers = userAnswers.filter(answer => {
      const questionId = answer.questionId - 1;
      const question = quizData.Questions[questionId];
  
      // Check if the question and its answer property exist
      if (!question || typeof question.answer !== 'string') {
        console.error('Invalid question or answer property');
        return false;
      }
      
      return answer.selectedOption!==null && question.options[answer.selectedOption] !== question.answer;
    });
    if(wrongAnswers.length>=0){
      return setWrongCount(wrongAnswers.length);
    }
    return (wrongAnswers.length / quizData.Questions.length) * 100;
  };

  // const calculateSkippedQuestions = async () => {
  //   if (!quizData || !quizData.Questions || !Array.isArray(quizData.Questions) || quizData.Questions.length === 0) {
  //     console.error('Invalid or empty questions array');
  //     return 0;
  //   }
  
  //   const skippedQuestions = userAnswers.filter(answer => console.log("answer - ",answer));
  
  //   setSkippedCount(prevSkippedCount => prevSkippedCount + skippedQuestions.length);
  // };
  
  useEffect(() => {
    calculateCorrectAnswer();
    calculateWrongAnswers();
    // calculateSkippedQuestions();
    
    // quizData.Questions.forEach((question, currIndex) => {
    //   console.log("User chosen option - ",userAnswers[currIndex].selectedOption) 
    //   setSkippedCount((prevSkippedCount) =>
    //     userAnswers[currIndex].selectedOption === null
    //       ? prevSkippedCount + 1
    //       : prevSkippedCount
    //   );
    // });
  }, []);

  

  function finish() {
    console.log("finish is clicked");
    
  }
  return (
    <>
    <View style={styles.rootContainer}>
      <Card>
      <Text style={{textAlign:"center",marginVertical:20}}>Your Analytics</Text>
        <Card.Content style={styles.cardContentStyle}>
          <View style={styles.cardInnerContent}>
         <View style={{width:200,height:50,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:7}}>
         <Image source={require("../../../../assets/True.png")}
            style={{width:25,height:25}}
          />
          <Text style={{fontWeight:"400",fontSize:16}}>Correct Answers</Text>
         </View>
            <Text>{trueCount}</Text>
          </View>
          <View style={styles.cardInnerContent}>
         <View style={{width:200,height:50,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:7}}>
           <Image source={require("../../../../assets/wrong.png")}
            style={{width:25,height:25}}
          />
          <Text style={{fontWeight:"400",fontSize:16}}>Wrong Answers</Text>
         </View>
         <Text>{wrongCount}</Text>
          </View>
          <View style={styles.cardInnerContent}>
         <View style={{width:200,height:50,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:7}}>
           <Image source={require("../../../../assets/skip.png")}
            style={{width:25,height:25}}
          />
          <Text style={{fontWeight:"400",fontSize:16}}>Skipped Questions</Text>
         </View>
         <Text>{quizData && quizData.Questions.length - (trueCount+wrongCount)}</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
      <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:20}}>
      <Image source={require("../../../../assets/done.png")} style={{width:80,height:80}}/>
      </View>
      <Button >Review Completed </Button>
    </>
  );
};

export default QuizOverView;

const styles = StyleSheet.create({
rootContainer:{
  padding:10,
  height:300

},
cardInnerContent:{
  width:"100%",
  height:60,
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
},
cardContentStyle:{

padding:10
},
  cardInnerStyle:{
    width:Dimensions.get("screen").width-30,
    height:50,
    padding:8,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
  }

});
