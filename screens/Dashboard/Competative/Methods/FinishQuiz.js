import { StyleSheet, Text, View, Dimensions, Pressable ,ScrollView} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-native-paper";
import { AuthContext } from "../../../../context/AuthContext";
import { PoppinsLight, PoppinsBold } from "../../../../utils/FontHelper";
import { useNavigation } from "@react-navigation/native";
const FinishQuiz = ({ route }) => {
  const { userAnswers ,actualQuestion,type} = route.params;
  console.log("ACTUAL QUESTIONS--- ",actualQuestion);
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  

  function finishQuiz() {
    console.log("User answers: ", userAnswers);

    let correctAnswerScore = 0;
    let wrongAnswerScore = 0;
    let missed = 0;

    // Create a map of questions using the common property
    const questionMap = new Map();
    console.log("Actual keys \n\n\n\n")
    authContext.quizExamsArr.Questions.forEach((question) => {
        const key = question._id; // Replace 'questionNumber' with your common property
        questionMap.set(key, question);
        console.log("quiz id - ",question._id)
    });
    console.log("Actual End \n\n\n\n")

    // Loop through each user answer
    userAnswers.forEach((userAnswer) => {
        // Check if user answer exists
    console.log("user keys \n\n\n\n")
      console.log(userAnswer.question_id);
    console.log("user keys end \n\n\n\n")

        if (!userAnswer) {
            missed++;
            return; // Skip to the next iteration
        }

        // Find the matching question using the common property
        const key = userAnswer.question_id; // Replace 'questionNumber' with your common property
        const matchingQuestion = questionMap.get(key);
        console.log("matching qn - ",matchingQuestion);
        // Check if matching question is found
        if (matchingQuestion) {
            const userResponse = parseInt(userAnswer.answer);
            const correctAnswer = parseInt(matchingQuestion.answer);
            console.log("\n\n");
            console.log("user response - ",userResponse);
            console.log("correct response - ",correctAnswer);
            // Compare user answer with the correct answer
            if (userResponse === correctAnswer) {
                correctAnswerScore++;
            } else {
                wrongAnswerScore++;
            }
        } else {
            // If no matching question found, consider it missed
            missed++;
        }
    });

    // Log final scores
    console.log(`Final scores - Correct: ${correctAnswerScore}, Wrong: ${wrongAnswerScore}, Missed: ${missed}`);

    // Navigate to the quiz results screen with scores
    navigation.navigate("Quiz Results", {
        correct: correctAnswerScore,
        wrong: wrongAnswerScore,
        missed : (authContext.quizExamsArr.Questions.length - userAnswers.length),
        quizId: authContext.quizExamsArr._id,
        type:type
    });
}


  

  const QuestionsComponent = ({
    currentQuestionIndex,
    nextQuestion,
    prevQuestion,
  }) => {
    // Find the current question based on the current index
    const currentQuestionObj = userAnswers.find(
        cq => cq.question_id === authContext.quizExamsArr.Questions[currentQuestionIndex]._id
    );
    const currentQuestion = actualQuestion.find(currentQn=>currentQn._id === authContext.quizExamsArr.Questions[currentQuestionIndex]._id);
    console.log("current question - ",currentQuestion);
    // Safely access the question ID and answer using optional chaining
    // const questionId = currentQuestionObj?.question_id;
    // const answer = currentQuestionObj?.answer;

    return (
     <ScrollView>
       <View
        style={{
          paddingHorizontal: 10,
          width: Dimensions.get("screen").width - 10,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: PoppinsBold,
            fontSize: 18,
            marginVertical: 30,
            textAlign: "right",
          }}
        >
          Q- {currentQuestionIndex + 1}
        </Text>
       {!currentQuestionObj ? <>
        <Card
          style={{
            padding: 5,
            width: Dimensions.get("screen").width - 30,
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "grey",
          }}
        >
          <Card.Content>
            <Text
              style={{ lineHeight: 28, fontFamily: PoppinsLight, fontSize: 16 }}
            >
              {authContext.quizExamsArr.Questions[currentQuestionIndex]
                .questionName.richText[0].text !== "undefined" &&
                authContext.quizExamsArr.Questions[currentQuestionIndex]
                  .questionName.richText[0].text}
            </Text>
          </Card.Content>
        </Card>
       </>:<>
       <Card
          style={{
            padding: 5,
            width: Dimensions.get("screen").width - 30,
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#CDE8E5",
          }}
        >
          <Card.Content>
            <Text
              style={{ lineHeight: 28, fontFamily: PoppinsLight, fontSize: 16 }}
            >
              {authContext.quizExamsArr.Questions[currentQuestionIndex]
                .questionName.richText[0].text !== "undefined" &&
                authContext.quizExamsArr.Questions[currentQuestionIndex]
                  .questionName.richText[0].text}
            </Text>
          </Card.Content>
        </Card>
       </>}

        {/* Display the current question answer or a default message */}
        <View style={{ marginVertical: 20, marginTop: 30 }}>
          {/* {currentQuestionObj ? (
                        <Text>Current question answer: {answer}</Text>
                    ) : (
                        <Text>No current question</Text>
                    )} */}

          {/* Display options and handle answer selection */}
          <Pressable>
           <>
    
            <Card style= {
                  ((currentQuestionObj && currentQuestionObj.answer) == 1) && (currentQuestion && currentQuestion.answer==1) ? styles.correctAnswer:
                ((currentQuestionObj && currentQuestionObj.answer) != 1) && (currentQuestion && currentQuestion.answer==1) ? styles.wrongAnswer: styles.cardOptionsLayout
                }>
              <Card.Content>
                <Text style={styles.cardContent}>
                  {
                    authContext.quizExamsArr.Questions[currentQuestionIndex]
                      .options.option1
                  }
                
               
                </Text>
              </Card.Content>
            </Card>
            </>
            
          </Pressable>

          {/* Similarly handle other options (2, 3, 4) */}
          <Pressable>
         <>
            <Card 
              style= {
                  ((currentQuestionObj && currentQuestionObj.answer) == 2) && (currentQuestion && currentQuestion.answer==2) ? styles.correctAnswer:
                ((currentQuestionObj && currentQuestionObj.answer) != 2) && (currentQuestion && currentQuestion.answer==2) ? styles.wrongAnswer: styles.cardOptionsLayout
                }
            >
              <Card.Content>
                <Text style={styles.cardContent}>
                  {
                    authContext.quizExamsArr.Questions[currentQuestionIndex]
                      .options.option2
                  }
                 
                </Text>
              </Card.Content>
            </Card>
            </>
          </Pressable>

          <Pressable>
            <>
            <Card style= {
                  ((currentQuestionObj && currentQuestionObj.answer) == 3) && (currentQuestion && currentQuestion.answer==3) ? styles.correctAnswer:
                ((currentQuestionObj && currentQuestionObj.answer) != 3) && (currentQuestion && currentQuestion.answer==3) ? styles.wrongAnswer: styles.cardOptionsLayout
                }
                
                >
              <Card.Content>
                <Text style={styles.cardContent}>
                  {
                    authContext.quizExamsArr.Questions[currentQuestionIndex]
                      .options.option3
                  }

                 

                </Text>
              </Card.Content>
            </Card>
            </>
          </Pressable>

          <Pressable>
            <>
            <Card 
            
            style= {
                  ((currentQuestionObj && currentQuestionObj.answer) == 4) && (currentQuestion && currentQuestion.answer==4) ? styles.correctAnswer:
                ((currentQuestionObj && currentQuestionObj.answer) != 4) && (currentQuestion && currentQuestion.answer==4) ? styles.wrongAnswer: styles.cardOptionsLayout
                }
            >
              <Card.Content>
                <Text style={styles.cardContent}>
                  {
                    authContext.quizExamsArr.Questions[currentQuestionIndex]
                      .options.option4
                  }

                
                </Text>
              </Card.Content>
            </Card>
            </>
          </Pressable>
        </View>

        {/* Control buttons for next and previous question */}

        <View style={styles.buttonLayout}>
          {authContext.quizExamsArr.Questions.length - 1 > currentIndex ? (
            <>
              <Button
                onPress={
                  currentQuestionIndex + 1 <
                    authContext.quizExamsArr.Questions.length && nextQuestion
                }
                mode="elevated"
                buttonColor="#7ABA78"
                style={{ borderRadius: 1 }}
              >
                <Text style={{ color: "white" }}>Next</Text>
              </Button>
            </>
          ) : (
            <>
              <Button
                mode="elevated"
                buttonColor="#7ABA78"
                style={{ borderRadius: 1 }}
                onPress={finishQuiz}
              >
                <Text style={{ color: "white" }}>Finish</Text>
              </Button>
            </>
          )}

          <Button
            onPress={currentQuestionIndex > 0 && prevQuestion}
            mode="elevated"
            buttonColor="#E65C19"
            style={{ borderRadius: 1 }}
          >
            <Text style={{ color: "white" }}>Prev</Text>
          </Button>
        </View>
      </View>
     </ScrollView>
    );
  };
  return (
    <View>
      {authContext.quizExamsArr && authContext.quizExamsArr.Questions && (
        <>
          <View>
            <QuestionsComponent
              currentQuestionIndex={currentIndex}
              nextQuestion={() => setCurrentIndex(currentIndex + 1)}
              prevQuestion={() => setCurrentIndex(currentIndex - 1)}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default FinishQuiz;

const styles = StyleSheet.create({
  cardOptionsLayout: {
    marginTop: 5,
    backgroundColor: "#7469B6",
    borderRadius: 5,
  },
  cardContent: {
    color: "white",
    fontFamily: PoppinsLight,
  },
  buttonLayout:{
    marginTop:40,
    display:"flex",
    flexDirection:"row-reverse",
    justifyContent:"space-around",
    alignItems:"center"
},
isSelected:{
    backgroundColor:"#FFAF61",
    marginTop:5
},
wrongAnswer:{
  marginTop: 5,
    backgroundColor: "red",
    borderRadius: 5,
},
correctAnswer:{
  marginTop: 5,
    backgroundColor: "green",
    borderRadius: 5,
},
notSelected:{
  marginTop: 5,
  backgroundColor: "grey",
  borderRadius: 5,
}
});
