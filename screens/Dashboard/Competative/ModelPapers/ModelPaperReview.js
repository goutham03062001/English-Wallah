import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import { Button } from "react-native-paper";
  import { PoppinsLight, PoppinsRegular } from "../../../../utils/FontHelper";
  import { useNavigation } from "@react-navigation/native";
  const QuizReview = ({
    index,
    questionName,
    userAnswers,
    nextBtn,
    prevBtn,
    quizData,
    finishReview,
  }) => {
    // console.log("user answers - ", userAnswers);
    const navigation = useNavigation();
    // let isCorrect = userAnswers[index].selectedOption[userAnswers[index].selectedOption.length - 1] == quizData.Questions[index].answer[0];
    const renderOptions = (options, currIndex, userAnswer, actualAnswer) => {
      return Object.entries(options).map(([key, value], index) => (
        <>
          <TouchableOpacity
            key={index}
            style={[
              styles.optionsStyle,
              key[6] === userAnswer[6] && userAnswer[6] == actualAnswer
                ? { backgroundColor: "green" }
                : key[6] === userAnswer[6] && userAnswer[6] != actualAnswer
                ? { backgroundColor: "red" }
                : key[6] === actualAnswer
                ? { backgroundColor: "green" }
                : {},
            ]}
          >
            <Text
              style={[
                key[6] === userAnswer[6] && userAnswer[6] == actualAnswer
                  ? { color: "white" }
                  : key[6] === userAnswer[6] && userAnswer[6] != actualAnswer
                  ? { color: "white" }
                  : key[6] === actualAnswer
                  ? { color: "white" }
                  : {},
              ]}
            >
              {/* {value === answer ? "true":value} */}
              {value}
              {key[6] === userAnswer[6] && userAnswer[6] == actualAnswer ? (
                <Text></Text>
              ) : key[6] === userAnswer[6] && userAnswer[6] != actualAnswer ? (
                <Text></Text>
              ) : (
                <Text></Text>
              )}
            </Text>
          </TouchableOpacity>
        </>
      ));
    };
    const [currIndex, setCurrentIndex] = useState(0);
  
    function nextBtn() {
      return setCurrentIndex(currIndex + 1);
    }
  
    function prevBtn() {
      return setCurrentIndex(currIndex - 1);
    }
    // userAnswers.map((obj, currIndex) => {
    //   console.log(
    //     "user answer - ",
    //     userAnswers[currIndex].selectedOption[
    //       userAnswers[currIndex].selectedOption.length - 1
    //     ]
    //   );
    // console.log(
    //   "actual answer - ",
    //   quizData.Questions[currIndex].answer[0]
    // );
    // {renderOptions(
    //   quizData.Questions[currIndex].options,
    //   currIndex,
    //   obj.selectedOption,
    //   quizData.Questions[currIndex].answer[0]
    // )}
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* {Array.isArray(userAnswers) && userAnswers.length > 0?  
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
                {currIndex === index && quizData && quizData.Questions ? (
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
                 
                      <View style={styles.options}>
                       
                        {renderOptions(
                          quizData.Questions[currIndex].options,
                          currIndex,
                          obj.selectedOption,
                          quizData.Questions[currIndex].answer[0]
                        )}
  
                        
                      </View>
                      <View style={styles.btnContainer}>
                        {quizData && quizData.Questions &&quizData.Questions.length - 1 === index ? (
                          <>
                            <Button onPress={finishReview} mode="outlined">View Analytics</Button>
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
                              Next
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
                                 
                                  Previous
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
          }) : <>
  
          <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:17}}>
            
              <Image source={require("../../../../assets/Oops.png")} style={{width:100,height:100}}/>
          
            <Text style={{fontFamily:PoppinsRegular}}>You have not answered any question.</Text>
  
            <Text style={{fontFamily:PoppinsRegular}}>Go back and Reattempt the quiz!</Text>
            
          </View>
  
          </>} */}
  
          {/* <Text>{quizData.Questions[currIndex].questionName}</Text>
                {renderOptions(
                          quizData.Questions[currIndex].options,
                          currIndex,
                         userAnswers[currIndex].selectedOption,
                          quizData.Questions[currIndex].answer[0]
                        )} */}
          <HelperComponent
            currIndex={currIndex}
            quizData={quizData}
            userAnswers={userAnswers}
            nextBtn={nextBtn}
            prevBtn={prevBtn}
          />
        </View>
      </ScrollView>
    );
  };
  
  export default QuizReview;
  const HelperComponent = ({
    currIndex,
    quizData,
    userAnswers,
    nextBtn,
    prevBtn,
  }) => {
    const navigation = useNavigation();
  
    const renderOptions = (options, currIndex, userAnswer, actualAnswer) => {
      return Object.entries(options).map(([key, value], index) => (
       <>
        {userAnswer == null ? <>
        <TouchableOpacity 
        key={index}
        style={[styles.optionsStyle,key[6] === actualAnswer ? {backgroundColor:'brown'}:{}]}
        >
           <Text style={key[6] === actualAnswer ? {color:'white'}:{}}>{value}</Text> 
  
        </TouchableOpacity>
          
         </> :<>
        <>
          <TouchableOpacity
            key={index}
            style={[
              styles.optionsStyle,
              key[6] === userAnswer[6] && userAnswer[6] == actualAnswer
                ? { backgroundColor: "green" }
                : key[6] === userAnswer[6] && userAnswer[6] != actualAnswer
                ? { backgroundColor: "red" }
                : key[6] === actualAnswer
                ? { backgroundColor: "green" }
                : {},
            ]}
          >
            <Text
              style={[
                key[6] === userAnswer[6] && userAnswer[6] == actualAnswer
                  ? { color: "white" }
                  : key[6] === userAnswer[6] && userAnswer[6] != actualAnswer
                  ? { color: "white" }
                  : key[6] === actualAnswer
                  ? { color: "white" }
                  : {},
                { fontFamily: PoppinsRegular },
              ]}
            >
              {/* {value === answer ? "true":value} */}
              {value}
              {key[6] === userAnswer[6] && userAnswer[6] == actualAnswer ? (
                <Text></Text>
              ) : key[6] === userAnswer[6] && userAnswer[6] != actualAnswer ? (
                <Text></Text>
              ) : (
                <Text></Text>
              )}
            </Text>
          </TouchableOpacity>
        </>
  
        </>}
       </>
      ));
    };
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "black",
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "left", color: "white" }}>
            {currIndex + 1}
          </Text>
        </View>
        <Text
          style={{ marginVertical: 17, fontSize: 16, fontFamily: PoppinsLight }}
        >
          {quizData.Questions[currIndex].questionName.richText && quizData.Questions[currIndex].questionName.richText[0].text}
        </Text>
        {renderOptions(
          quizData.Questions[currIndex].options,
          currIndex,
          userAnswers[currIndex].selectedOption === null?null : userAnswers[currIndex].selectedOption,
          quizData.Questions[currIndex].answer[0]
        )}
        <View style={styles.btnContainer}>
          {currIndex === quizData.Questions.length - 1 ? (
            <>
           
              <Pressable style={styles.finishBtn} onPress={()=>{return navigation.navigate("Overview",{quizData:quizData,userAnswers:userAnswers})}}>
                <Text style={{ color: "white", fontFamily: PoppinsRegular }}>
                  
                  Finish Review
                </Text>
              </Pressable>
  
              <Pressable style={styles.prevButton} onPress={prevBtn}>
                  <Text style={{ color: "white", fontFamily: PoppinsRegular }}>
                    <Image
                      source={{
                        uri: "https://img.icons8.com/ios/50/left--v1.png",
                      }}
                      style={{ width: 20, height: 16 }}
                    />{" "}
                    Previous
                  </Text>
                </Pressable>
            </>
          ) : (
            <>
              <Pressable style={styles.nextButton} onPress={nextBtn}>
                <Text style={{ color: "white", fontFamily: PoppinsRegular }}>
                  Next{" "}
                  <Image
                    source={{
                      uri: "https://img.icons8.com/ios/50/right--v1.png",
                    }}
                    style={{ width: 24, height: 16 }}
                  />
                </Text>
              </Pressable>
              {currIndex === 0 ? (
                <></>
              ) : (
                <Pressable style={styles.prevButton} onPress={prevBtn}>
                  <Text style={{ color: "white", fontFamily: PoppinsRegular }}>
                    <Image
                      source={{
                        uri: "https://img.icons8.com/ios/50/left--v1.png",
                      }}
                      style={{ width: 20, height: 16 }}
                    />{" "}
                    Previous
                  </Text>
                </Pressable>
              )}
            </>
          )}
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      marginTop: 40,
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
      gap: 69,
    },
    options: {
      gap: 10,
    },
    optionsStyle: {
      borderColor: "black",
      borderWidth: 1,
      width: Dimensions.get("screen").width - 20,
      height: 60,
      padding: 17,
      marginTop: 7,
    },
    btnStyles: {
      gap: 10,
      flexDirection: "row-reverse",
      marginTop: 40,
    },
    nextButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: "#7A9D54",
      borderRadius: 5,
    },
    prevButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: "orange",
      borderRadius: 5,
    },
    finishBtn:{
      marginTop: 20,
      padding: 10,
      backgroundColor: "blue",
      borderRadius: 5,
    }
  });
  