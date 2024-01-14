import { Dimensions, StyleSheet, Text, View ,Image} from "react-native";
import React, { useState ,useEffect} from "react";
import { Button, Dialog,Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
const QuizOverView = ({ userAnswers, quizData, finishQuizOverView }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const[trueCount,setTrueCount] = useState(0);
  const[wrongCount,setWrongCount] = useState(0);
  const[skippedCount,setSkippedCount] = useState(0);
  console.log("Insided Quiz Overview - ", userAnswers);
  // userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length - 1] == quizData.Questions[currIndex].answer[0]

  useEffect(() => {
    quizData.Questions.forEach((question, currIndex) => {
      setTrueCount((prevTrueCount) =>
        userAnswers[currIndex].selectedOption[
          userAnswers[currIndex].selectedOption.length - 1
        ] === quizData.Questions[currIndex].answer[0]
          ? prevTrueCount + 1
          : prevTrueCount
      );
  
      setWrongCount((prevWrongCount) =>
        userAnswers[currIndex].selectedOption[
          userAnswers[currIndex].selectedOption.length - 1
        ] !== quizData.Questions[currIndex].answer[0]
          ? prevWrongCount + 1
          : prevWrongCount
      );
  
      setSkippedCount((prevSkippedCount) =>
        userAnswers[currIndex].selectedOption === ""
          ? prevSkippedCount + 1
          : prevSkippedCount
      );
    });
  }, [userAnswers, quizData.Questions]);

  

  function finish() {
    console.log("finish is clicked");
    return finishQuizOverView;
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
         <Text>{skippedCount}</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
      <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:20}}>
      <Image source={require("../../../../assets/done.png")} style={{width:80,height:80}}/>
      </View>
      <Button onPress={finishQuizOverView}>Review Completed </Button>
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
