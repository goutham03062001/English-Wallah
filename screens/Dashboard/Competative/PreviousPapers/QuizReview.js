import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const QuizReview = ({
  index,
  questionName,
  userAnswers,
  nextBtn,
  prevBtn,
  quizData,
  finishReview,
}) => {
  console.log("user answers - ", userAnswers);
  let isCorrect =
    userAnswers[index].selectedOption[
      userAnswers[index].selectedOption.length - 1
    ] == quizData.Questions[index].answer[0];
  const renderOptions = (options, currIndex, userAnswer, actualAnswer) => {
    return Object.entries(options).map(([key, value], index) => (
      <>
      
        <TouchableOpacity
          key={index}
          style={[
            styles.optionsStyle,
            key[6] === userAnswer[6] && userAnswer[6] == actualAnswer
              ? { backgroundColor: "green" }
              : 
                key[6] === userAnswer[6] && userAnswer[6] != actualAnswer ? {backgroundColor:"red"}:
                 key[6] === actualAnswer ? {backgroundColor:"green"}:{}
              
          ]}
        >
          <Text style={[
            key[6] === userAnswer[6] && userAnswer[6] == actualAnswer
              ? { color: "white" }
              : 
                key[6] === userAnswer[6] && userAnswer[6] != actualAnswer ? {color:"white"} :
                 key[6] === actualAnswer ? {color:"white"}:{}
              
          ]}>
            {/* {value === answer ? "true":value} */}
            {value} 
            {key[6] === userAnswer[6] && userAnswer[6] == actualAnswer
              ? <Text></Text>
              : 
                key[6] === userAnswer[6] && userAnswer[6] != actualAnswer ? <Text></Text> : <Text></Text>}
          </Text>
        </TouchableOpacity>
      </>
    ));
  };

  return (
    <View style={styles.container}>
      {userAnswers &&
        userAnswers.map((obj, currIndex) => {
          console.log(
            "user answer - ",
            userAnswers[currIndex].selectedOption[
              userAnswers[currIndex].selectedOption.length - 1
            ]
          );
          console.log(
            "actual answer - ",
            quizData.Questions[currIndex].answer[0]
          );
          console.log(
            "is corrects - ",
            userAnswers[currIndex].selectedOption[
              userAnswers[currIndex].selectedOption.length - 1
            ] == quizData.Questions[currIndex].answer[0]
          );
          console.log("\n");
          return (
            <>
              {currIndex === index ? (
                <>
                  <View style={{ marginVertical: 140 }}>
                    <View
                      style={{
                        padding: 10,
                        backgroundColor: "black",
                        width: "20%",
                      }}
                    >
                      <Text style={{ color: "white" }}>Q - {index + 1}</Text>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                      <Text style={{ fontSize: 16 }}>
                        {quizData.Questions[index].questionName}
                      </Text>
                    </View>
                    {/* <Text>{index}</Text> */}
                    <View style={styles.options}>
                      {/* <Text>S1 - {quizData.Questions[index].options.option1[0]}</Text>
                    <Text>S2 - {quizData.Questions[index].options.option2[0]}</Text>
                    <Text>S3 - {quizData.Questions[index].options.option3[0]}</Text>
                    <Text>S4 - {quizData.Questions[index].options.option4[0]}</Text>  */}
                      {renderOptions(
                        quizData.Questions[currIndex].options,
                        currIndex,
                        obj.selectedOption,
                        quizData.Questions[currIndex].answer[0]
                      )}

                      {/* <Text style={[styles.optionsStyle, userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] ===quizData.Questions[index].options.option1[0] ?{backgroundColor:""}:{},quizData.Questions[currIndex].answer[0] == userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option1[0] ? {backgroundColor:"#3cb371",color:"yellow",position:"relative"}:quizData.Questions[currIndex].answer[0] != userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option1[0] ? {backgroundColor:"red",color:"white"}:{}]} >
                    
                    <Text>

                    {quizData.Questions[index].options.option1}
                    </Text>
                    <Text style={{marginRight:0}}>
                    {quizData.Questions[currIndex].answer[0] != userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option1[0] ? "❎":""}

                    </Text> 
                    
                </Text>

                <Text  style={[styles.optionsStyle, quizData.Questions[currIndex].answer[0] == userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option2[0] ? {backgroundColor:"#3cb371",color:"yellow",position:"relative"}:quizData.Questions[currIndex].answer[0] != userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option2[0] ? {backgroundColor:"red",color:"white"}:{}]} >
                    <Text>{quizData.Questions[index].options.option2}</Text>

                    <Text style={{marginRight:0}}>
                    {quizData.Questions[currIndex].answer[0] != userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option2[0] ? "❎":""}

                    </Text> 
                    
                </Text>

                <Text  style={[styles.optionsStyle, quizData.Questions[currIndex].answer[0] == userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option3[0] ? {backgroundColor:"#3cb371",color:"yellow",position:"relative"}:quizData.Questions[currIndex].answer[0] != userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option3[0] ? {backgroundColor:"red",color:"white"}:{}]}>
                   <Text> {quizData.Questions[index].options.option3}</Text>

                    <Text style={{marginRight:0}}>
                    {quizData.Questions[currIndex].answer[0] != userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option3[0] ? "❎":""}

                    </Text> 
                    
                </Text>

                <Text  style={[styles.optionsStyle,quizData.Questions[currIndex].answer[0] == userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option4[0] ? {backgroundColor:"#3cb371",color:"yellow",position:"relative"}:quizData.Questions[currIndex].answer[0] != userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option4[0] ? {backgroundColor:"red",color:"white"}:{}]}>
                    <Text>{quizData.Questions[index].options.option4}</Text>

                   <Text style={{marginRight:0}}>
                   {quizData.Questions[currIndex].answer[0] != userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1]&& userAnswers[currIndex].selectedOption[userAnswers[currIndex].selectedOption.length-1] == quizData.Questions[index].options.option4[0] ? "❎":""}

                    </Text> 
                </Text> */}
                      {/* <Text>{quizData.Questions[currIndex].answer[0]}</Text> */}
                      {/* {isCorrect ? (
                        <Text></Text>
                      ) : (
                        <Text>
                          <Text>
                            Correct - {quizData.Questions[currIndex].answer[0]}
                          </Text>
                        </Text>
                      )} */}
                    </View>
                    <View style={styles.btnContainer}>
                      {quizData.Questions.length - 1 === index ? (
                        <>
                          <Button onPress={finishReview}>Finish Review</Button>
                        </>
                      ) : (
                        <View style={styles.btnStyles}>
                          <Button
                            onPress={nextBtn}
                            mode="outlined"
                            style={{
                              borderRadius: 0,
                              backgroundColor: "#C3DDDD",
                              borderColor: "green",
                            }}
                          >
                            {" "}
                            Next{" "}
                          </Button>
                          {index === 0 ? (
                            <></>
                          ) : (
                            <>
                              <Button
                                onPress={prevBtn}
                                mode="outlined"
                                style={{
                                  borderRadius: 0,
                                  backgroundColor: "#DC84F3",
                                }}
                              >
                                {" "}
                                Previous{" "}
                              </Button>
                            </>
                          )}
                        </View>
                      )}
                    </View>
                  </View>
                </>
              ) : (
                <></>
              )}
            </>
          );
        })}
    </View>
  );
};

export default QuizReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    padding: 4,
  },
  box: {
    width: 200,
    height: 200,
  },
  btnContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  options: {
    gap: 10,
  },
  optionsStyle: {
    borderColor: "black",
    borderWidth: 1,
    width: Dimensions.get("screen").width - 30,
    height: 60,
    padding: 13,
  },
  btnStyles: {
    gap: 10,
    flexDirection: "row-reverse",
    marginTop: 40,
  },
});
