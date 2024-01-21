// src/QuizApp.js
import React, { useState, useEffect,useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button ,Image, Alert} from 'react-native';
import { BACKEND_API_URL } from '../../../../utils/Constants';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import QuizReview from './QuizReview';
import { useNavigation } from '@react-navigation/native';
import QuizOverView from "./QuizOverView"
import { AuthContext } from '../../../../context/AuthContext';
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const QuizApp = ({quizId}) => {
  const navigation = useNavigation();
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const[viewAnalytics,setViewAnalytics] = useState(false);
  const[myScore,setMyScore] = useState(0);
  const[index,setIndex] = useState(0);
  const [minutes, setMinutes] = useState(11);
  const [seconds, setSeconds] = useState(0);
  const [selectedOptionsByQuestion, setSelectedOptionsByQuestion] = useState({});
  const authContext = useContext(AuthContext);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BACKEND_API_URL+"/api/Quiz/upload/getQuizDetails/"+quizId);
        const data = await response.json();
       
        setQuizData(data);

      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchData();
    console.log("Quiz ",quizData)
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        // Timer has reached 0, handle quiz completion or timeout
        clearInterval(timer);
        // Add your logic for quiz completion or timeout here
        setQuizCompleted(true);
      } else {
        // Update the timer every second
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [minutes, seconds]);
  const formatTime = (value) => (value < 10 ? `0${value}` : value);
 const nextBtn = ()=>{
  return setIndex(index+1);
 }

 const prevBtn = ()=>{
  return setIndex(index-1);
 }

  const handlePrevQuestion = () => {
    // Implement logic to handle moving to the previous question
    if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
  
        // Retrieve the user's selected option for the previous question
        // const prevAnswer = userAnswers.find(answer => answer.questionId === currentQuestion);
        // setSelectedOption(prevAnswer ? prevAnswer.selectedOption : null);

        const prevAnswer = userAnswers.find((answer) => answer.questionId === currentQuestion);
        setSelectedOption(
          prevAnswer ? prevAnswer.selectedOption : selectedOptionsByQuestion[currentQuestion - 1]
        );
      }
      // setSelectedOption(null);

  };

  const renderButtons = () => {
    if (currentQuestion === 0) {
      return (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={{color:"white",fontFamily:PoppinsRegular}}>Next <Image source={{uri:"https://img.icons8.com/ios/50/right--v1.png"}} style={{width:20,height:10}}/></Text>
        </TouchableOpacity>
      );
    } else if (currentQuestion === quizData.Questions.length - 1) {
      // Show "Previous" and "Finish Quiz" buttons on the last question
      return (
        <>
         <View style={styles.buttonStyle}>
         <TouchableOpacity style={styles.prevButton} onPress={handlePrevQuestion}>
            <Text style={{fontFamily:PoppinsRegular}}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={{color:"white"}}>Finish Quiz  <Image source={{uri:"https://img.icons8.com/ios/50/right--v1.png"}} style={{width:24,height:16}}/></Text>

          </TouchableOpacity>
         </View>
        </>
      );
    } else {
      // Show "Previous" and "Next" buttons for other questions
      return (
        <View style={styles.buttonStyle}>
          <Pressable style={styles.prevButton} onPress={handlePrevQuestion}>
          <Text style={{color:"white",fontFamily:PoppinsRegular}}><Image source={{uri:"https://img.icons8.com/ios/50/left--v1.png"}} style={{width:20,height:16}}/> Previous</Text>

          </Pressable>
          <Pressable style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={{color:"white",fontFamily:PoppinsRegular}}>Next  <Image source={{uri:"https://img.icons8.com/ios/50/right--v1.png"}} style={{width:24,height:16}}/></Text>

          </Pressable>
        </View>
      );
    }
  };

  function finishQuizOverView(){}
  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setUserAnswers([...userAnswers, { questionId: currentQuestion + 1, selectedOption }]);
    setSelectedOptionsByQuestion({
      ...selectedOptionsByQuestion,
      [currentQuestion]: selectedOption,
    });
    setSelectedOption(null);
    if (currentQuestion + 1 < quizData.Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let myScore1 = calculateScore();
      console.log("Your quiz Score is - ",myScore1)
      setQuizCompleted(true);
      authContext.updateQuizAttempt(quizData._id,myScore1);
      // navigation.navigate("Quiz Overview",{userAnswers:userAnswers})
     
    }
  };

  const handleRetryQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setQuizCompleted(false);
    setIndex(0);  
  };

  const finishReview = ()=>{
    Alert.alert("Review Completed","Cross checked?",[
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', 
      
      onPress: () => {
        console.log("Press go back to return to quiz screen");
        setViewAnalytics(true);
        return;
      }},
    ])
    
  }

  const calculateScore =  () => {
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
  
      return answer.selectedOption[6] === question.answer[0];
    });
    console.log("Correct answer - ",correctAnswers.length);
    const TotalScore = correctAnswers.length;
     setMyScore(TotalScore);
    return TotalScore;
  };

  const renderOptions1 = (options,answer,selectedOption) => {
    return Object.entries(options).map(([key, value], index) => (
      <>
        {answer===value &&answer===selectedOption ? <>
          <TouchableOpacity
        key={index}
        style={[
          styles.option,
          selectedOption === key && styles.selectedOption,
          {backgroundColor:"#65B741",borderColor:"#F2F1EB"},
          {width:Dimensions.get("screen").width-55}
        ]}
        onPress={() => handleOptionPress(key)}
        disabled={quizCompleted}
      >
        <Text style={{color:"black"}}>
          {/* {value === answer ? "true":value} */}
          {value}
        </Text>
      </TouchableOpacity>
        </> : <>
      {value === selectedOption ? <>
        <TouchableOpacity
        key={index}
        style={[
          styles.option,
          selectedOption === key && styles.selectedOption,
          {backgroundColor:"red"},
          {width:Dimensions.get("screen").width-55}
        ]}
        onPress={() => handleOptionPress(key)}
        disabled={quizCompleted}
      >
        <Text style={{color:"white"}}>
          {/* {value === answer ? "true":value} */}
          {value}
        </Text>
      </TouchableOpacity>
      </> : <>
      <TouchableOpacity
        key={index}
        style={[
          styles.option,
          selectedOption === key && styles.selectedOption,
          {width:Dimensions.get("screen").width-55}
         
        ]}
        onPress={() => handleOptionPress(key)}
        disabled={quizCompleted}
      >
        <Text>
          {/* {value === answer ? "true":value} */}
          {value}
        </Text>
      </TouchableOpacity>
      </>}
        </>}
      </>
    ));
  };
  const renderOptions = (options,year) => {
    return Object.entries(options).map(([key, value], index) => (
     <>
     {index ===0 ? <>
      <View  style={{width:"100%",display:"flex",flexDirection:"row-reverse",justifyContent:"flex-start",marginLeft:35}}>
      <Text style={{marginRight:0,marginVertical:5,backgroundColor:"#0275d8",color:"white",paddingHorizontal:10,paddingVertical:3}}>
        {year}
        </Text>
      </View>
     </> : <></>}
       <TouchableOpacity
        key={index}
        style={[
          styles.option,
          selectedOption === key && styles.selectedOption,
        ]}
        onPress={() => handleOptionPress(key)}
        disabled={quizCompleted}
      >
        <Text style={[selectedOption === key ? styles.selectedOptionText : styles.optionText,{fontFamily:PoppinsRegular}]}>
          {/* {value === answer ? "true":value} */}
          {value}
        </Text>
      </TouchableOpacity>
     </>
    ));
  };

  if (!quizData) {
    return (
      <View style={styles.container}>
        <Text>Loading quiz data...</Text>
      </View>
    );
  }
  if(viewAnalytics){
    return <QuizOverView userAnswers={userAnswers} quizData = {quizData}/>
  }
  if (quizCompleted) {
    // const score = calculateScore();
    // console.log("quiz answers - ",userAnswers)
    return (
     <>
         <View style={styles.container}>
        {/* <Text style={{fontSize:22,marginVertical:15}}>Quiz Completed!</Text>
        <Text style={[{fontSize:20},score>=60 ?{color:"green"}:{color:"red"}]}>Your Score: {score.toFixed(2)}% {score>=60 ? "Good 👏":"☹️"}</Text>
                */}
        <QuizReview index={index}  userAnswers={userAnswers} nextBtn = {nextBtn} prevBtn={prevBtn}
        finishReview={finishReview}
        quizData={quizData}/>
       {index === quizData.length-1 ? <>
        <Button title="Retry Quiz" onPress={handleRetryQuiz} />
       </> : <></>}
        
      </View>
     </>
    );
  } else {
    const currentQuestionData = quizData && quizData.Questions && quizData.Questions[currentQuestion];
    return (
    <ScrollView>
        <View style={styles.container}>
       <View style={styles.questionContainer}>
       {/* <Text>{timer}</Text> */}
      <View style={styles.timerContainer}>
      <Text style={{marginRight:"70%",fontSize:18,backgroundColor:"black",width:35,height:25,color:"white",textAlign:"center"}}>{currentQuestion+1}</Text>
      <Text style={{fontSize:24,fontFamily:"Poppins-Light"}}>{`${formatTime(minutes)}:${formatTime(seconds)}`}</Text>
      </View>
       <Text style={styles.question}>{currentQuestionData.questionName}</Text>
        
       </View>
        {renderOptions(currentQuestionData.options,currentQuestionData.year)}
        
        {renderButtons()}
        {/* <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text>{currentQuestion + 1 < quizData.Questions.length ? 'Next Question' : 'Finish Quiz'}</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    questionContainer:{
      display:"flex",
      position:"relative"
    },
    question:{
      fontSize: 18,
      // fontWeight: 'bold',
      marginBottom: 45,
      marginVertical:14,
      fontFamily:"Poppins-Regular"
    },
    option: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#e0e0e0', // Unique color for selected option,
      width:"90%"
    },
    selectedOption: {
      backgroundColor: '#a0a0a0', // Another unique color for selected option
    },
    nextButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#7A9D54',
      borderRadius: 5,

    },
    prevButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
      },
    resultContainer: {
      marginVertical: 10,
    },
    correctText: {
      color: 'green',
    },
    wrongText: {
      color: 'green',
      fontSize:15
    },
    buttonStyle:{
        flexDirection:"row",                                                                     
        gap:50,
        marginTop:30
    },
    selectedOptionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white', // Highlight the selected option text,
        fontFamily:PoppinsRegular
      },
      timerContainer:{
        width:"100%",
        height:50,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingRight:8,
        

       
      }
  });

export default QuizApp;
