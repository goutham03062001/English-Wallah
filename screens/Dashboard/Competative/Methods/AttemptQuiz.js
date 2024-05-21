import { StyleSheet, Text, View,Dimensions, Pressable, Alert } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import { Button ,Card} from 'react-native-paper';
import { PoppinsBold, PoppinsLight } from '../../../../utils/FontHelper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
const AttemptQuiz = ({route}) => {
    const authContext = useContext(AuthContext);
    const navigation = useNavigation();
    const {data,type} = route.params;
    const[currentIndex,setCurrentIndex] = useState(0);
    const[answers,setAnswers] = useState([]);
    const[currentQuestion,setCurrentQuestion] = useState([{
        question_id : '',answer : ''
    }])
    useEffect(()=>{
        console.log("type - "+type + "id - "+data);
        if(type==="General English"){
            console.log("Loading... General English")
            authContext.getGeneralEnglishPaperById(data);
        }else{
            console.log("Loading... English Pedagogy")

            authContext.getEnglishPedagogyById(data);
        }
    },[]);
    
    const handleAnswers = (answer, questionId) => {
        const updatedAnswers = [...answers];
        const answerIndex = updatedAnswers.findIndex(ans => ans.question_id === questionId);
        
        if (answerIndex !== -1) {
            // Update answer if it exists
            updatedAnswers[answerIndex].answer = answer;
        } else {
            // Add new answer entry if it doesn't exist
            updatedAnswers.push({
                question_id: questionId,
                answer: answer
            });
        }
    
        // Update the answers state
        setAnswers(updatedAnswers);
    
        // Update the current question state array
        const updatedCurrentQuestions = [...currentQuestion];
        const currentQuestionIndex = updatedCurrentQuestions.findIndex(
            cq => cq.question_id === questionId
        );
    
        if (currentQuestionIndex !== -1) {
            // Update existing question if it exists
            updatedCurrentQuestions[currentQuestionIndex].answer = answer;
        } else {
            // Add new current question entry if it doesn't exist
            updatedCurrentQuestions.push({
                question_id: questionId,
                answer: answer
            });
        }
    
        setCurrentQuestion(updatedCurrentQuestions);
    };
    
    
    function finishQuizHandler(){
        Alert.alert("Finish Test","Are you sure you want to submit the test",[
            {
                text : "Cancel",
                style : "cancel",
                onPress:()=>console.log("Not Finished Quiz")
            },
            {
                text : 'Ok',
                onPress:()=>{

        return navigation.navigate("Finish Quiz",{userAnswers : answers,actualQuestion:authContext.quizExamsArr.Questions,type:type});

                }
            }
        ]);
        console.log("user answers - ",answers);
    }
   
    function answerHandler(){
        console.log('answers --',answers);
    }
    function checkCurrentQuestion(questionId){
        const question = answers.find((ans)=>ans.question_id === questionId);
        console.log()
        console.log("current question id is - ",question.question_id);
        setCurrentQuestion({question_id : question.question_id,answer : question.answer})
    }
    const QuestionsComponent = ({ currentQuestionIndex, nextQuestion, prevQuestion }) => {
        // Find the current question based on the current index
         
        const currentQuestionObj = currentQuestion.find(
            cq => cq.question_id === authContext.quizExamsArr.Questions[currentQuestionIndex]._id
        );
    
        // Safely access the question ID and answer using optional chaining
        const questionId = currentQuestionObj?.question_id;
        const answer = currentQuestionObj?.answer;
    
        return (
           <ScrollView>
             <View style={{ paddingHorizontal: 10, width: Dimensions.get("screen").width - 10, flexDirection: "column", justifyContent: "center" }}>
                <Text style={{ fontFamily: PoppinsBold, fontSize: 18, marginVertical: 30, textAlign: "right" }}>
                    Q- {currentQuestionIndex + 1}
                </Text>
                
                <Card style={{ padding: 5, width: Dimensions.get("screen").width - 30, flexDirection: "row", justifyContent: "center", backgroundColor: "#CDE8E5" }}>
                    <Card.Content>
                        <Text style={{ lineHeight: 28, fontFamily: PoppinsLight, fontSize: 16 }}>
                            {authContext.quizExamsArr.Questions[currentQuestionIndex].questionName.richText[0].text !== "undefined" &&
                                authContext.quizExamsArr.Questions[currentQuestionIndex].questionName.richText[0].text}
                        </Text>
                    </Card.Content>
                </Card>
    
                {/* Display the current question answer or a default message */}
                <View style={{ marginVertical: 20, marginTop: 30 }}>
                    {/* {currentQuestionObj ? (
                        <Text>Current question answer: {answer}</Text>
                    ) : (
                        <Text>No current question</Text>
                    )} */}
                    
                    {/* Display options and handle answer selection */}
                    <Pressable onPress={() => handleAnswers(1, authContext.quizExamsArr.Questions[currentQuestionIndex]._id)}>
                    {currentQuestionObj && answer===1? (
                        <Card style={styles.isSelected}>
                            <Card.Content>
                                <Text style={styles.cardContent}>
                                    {authContext.quizExamsArr.Questions[currentQuestionIndex].options.option1}
                                </Text>
                            </Card.Content>
                        </Card>
                    ) : (
                        <Card style={styles.cardOptionsLayout}>
                            <Card.Content>
                                <Text style={styles.cardContent}>
                                    {authContext.quizExamsArr.Questions[currentQuestionIndex].options.option1}
                                </Text>
                            </Card.Content>
                        </Card>
                    )}
                    </Pressable>
    
                    {/* Similarly handle other options (2, 3, 4) */}
                    <Pressable onPress={() => handleAnswers(2, authContext.quizExamsArr.Questions[currentQuestionIndex]._id)}>
                    {currentQuestionObj && answer===2? (
                        <Card style={styles.isSelected}>
                            <Card.Content>
                                <Text style={styles.cardContent}>
                                    {authContext.quizExamsArr.Questions[currentQuestionIndex].options.option2}
                                </Text>
                            </Card.Content>
                        </Card>
                    ) : (
                        <Card style={styles.cardOptionsLayout}>
                            <Card.Content>
                                <Text style={styles.cardContent}>
                                    {authContext.quizExamsArr.Questions[currentQuestionIndex].options.option2}
                                </Text>
                            </Card.Content>
                        </Card>
                    )}
                    </Pressable>
    
                    <Pressable onPress={() => handleAnswers(3, authContext.quizExamsArr.Questions[currentQuestionIndex]._id)}>
                    {currentQuestionObj && answer===3? (
                        <Card style={styles.isSelected}>
                            <Card.Content>
                                <Text style={styles.cardContent}>
                                    {authContext.quizExamsArr.Questions[currentQuestionIndex].options.option3}
                                </Text>
                            </Card.Content>
                        </Card>
                    ) : (
                        <Card style={styles.cardOptionsLayout}>
                            <Card.Content>
                                <Text style={styles.cardContent}>
                                    {authContext.quizExamsArr.Questions[currentQuestionIndex].options.option3}
                                </Text>
                            </Card.Content>
                        </Card>
                    )}
                    </Pressable>
    
                    <Pressable onPress={() => handleAnswers(4, authContext.quizExamsArr.Questions[currentQuestionIndex]._id)}>
                    {currentQuestionObj && answer===4? (
                        <Card style={styles.isSelected}>
                            <Card.Content>
                                <Text style={styles.cardContent}>
                                    {authContext.quizExamsArr.Questions[currentQuestionIndex].options.option4}
                                </Text>
                            </Card.Content>
                        </Card>
                    ) : (
                        <Card style={styles.cardOptionsLayout}>
                            <Card.Content>
                                <Text style={styles.cardContent}>
                                    {authContext.quizExamsArr.Questions[currentQuestionIndex].options.option4}
                                </Text>
                            </Card.Content>
                        </Card>
                    )}
                    </Pressable>
                </View>
    
                {/* Control buttons for next and previous question */}
               
                <View style={styles.buttonLayout}>
                   {authContext.quizExamsArr.Questions.length-1>currentIndex ? <>
                    <Button onPress={currentQuestionIndex+1 < authContext.quizExamsArr.Questions.length && nextQuestion} mode="elevated" buttonColor='#7ABA78' style={{ borderRadius: 1 }}>
                        <Text style={{ color: 'white' }}>Next</Text>
                    </Button>
                   </>:<>
                   {currentQuestionIndex===9 &&<Button mode="elevated" buttonColor='#7ABA78' style={{ borderRadius: 1 }}
                   onPress={finishQuizHandler}>
                        <Text style={{ color: 'white' }}>Finish</Text>
                    </Button>}
                   </>}
    
                    <Button onPress={currentQuestionIndex > 0 && prevQuestion} mode="elevated" buttonColor='#E65C19' style={{ borderRadius: 1 }}>
                        <Text style={{ color: 'white' }}>Prev</Text>
                    </Button>
    
                </View>
            </View>
           </ScrollView>
        );
    };
    
    
  return (
    <View>
      {authContext.loading ? <>
        <Text>Loading...</Text>
      </> : <>
        {authContext.quizExamsArr && authContext.quizExamsArr.Questions && (<>

            <View>
                
                        <QuestionsComponent
                        currentQuestionIndex = {currentIndex}
                        nextQuestion = { ()=>setCurrentIndex(currentIndex+1)}
                        prevQuestion = {()=>setCurrentIndex(currentIndex-1)}
                        />

                    
                
            </View>
        </>)}
      </>}
    </View>
  )
}

export default AttemptQuiz

const styles = StyleSheet.create({
    cardOptionsLayout:{
        marginTop:5,
        backgroundColor:"#7469B6",
        borderRadius:5
    },
    cardContent:{
        color:"white",
        fontFamily:PoppinsLight
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
    }
})