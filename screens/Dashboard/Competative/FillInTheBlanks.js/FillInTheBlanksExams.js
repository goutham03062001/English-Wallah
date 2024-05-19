import { Dimensions, StyleSheet, Text, View ,TextInput, Alert,Image, Pressable,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
import { Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const QuestionComponent = ({currQuestion,incomingIndex,data,nextQuestion,prevQuestion,currentBlankType})=>{
  const navigation = useNavigation();
  const[userInput,setUserInput] = useState('');
  const[btnClicked,setBtnClicked] = useState(false)
  const[showAnswer,handleShowAnswer] = useState(false);
  const[isChecked,setIsChecked] = useState(false);
  function inputFun(e){
  
    let inputText = e.toLowerCase().trim();   
    console.log("After lowercase - ",inputText);
    // let currentInput = e.toLower()     
    setTimeout(()=>{

    },500)                                                                             
    setUserInput(inputText);
  }

  function setPressHandler(){
    handleShowAnswer(!showAnswer);
    function setTimeFun(){
      setTimeout(()=>{
        handleShowAnswer(false)
      },3000)
    }
    setTimeFun();
  }
  const HelperObj = {
    "parts of speech":"Identify the parts of speech of the following underlined words.",
    "articles":"Fill in the following blanks with an, an or the.",
    "prepositions":"Fill in the following words with suitable prepositions.",
    "tenses":"Fill in the following blanks with suitable forms of the verbs given in brackets",
    "rewrite as directed":"Rewrite the following sentences as directed.",
    "rewrite as directed":"Active device and passive device.",
    "missing letters":"Supply the missing letters of the following words.",
    "transcriptions":"Write the following transcriptions using ordinary English spelling.",
    "syllables":"Mention the number of syllables of the following words",
  }
  const checkAnswer = ()=>{
    setIsChecked(true);
    if(userInput.length<1){
      return Alert.alert("Warning","Your answer must be non-empty, write something")
    }
    setBtnClicked(true);
    function setTimeFun(){
      setTimeout(()=>{
        setBtnClicked(false);
      },3000)
    }
    setTimeFun();
   
  }
  return(<>
          <View style={{position:'relative'}}>
            {/* Question area */}

            <View style={{position:"absolute",marginTop:0,backgroundColor:"#FFF67E",marginVertical:20,width:"98%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",borderTopRightRadius:30,borderBottomRightRadius:30}}>
             <Text style={{fontSize:13,paddingHorizontal:6,textAlign:"justify",color:"black",lineHeight:25}}>{HelperObj[currentBlankType]!==null ? HelperObj[currentBlankType]:""}</Text>
             </View>
            <View style={{display:"flex",width:"90%",height:100,flexDirection:"row-reverse",justifyContent:'space-between', alignItems:"center",position:"relative",marginTop:50}}>
             
            <Pressable onPress={setPressHandler}>

            {showAnswer ? <>
              <Image source={require("../../../../assets/view.png")} style={{width:30,height:30}}
             
             />
            </> : <>
            <Image source={require("../../../../assets/view60.png")} style={{width:30,height:30}}
             
             />
            </>}
            </Pressable>
       
           {showAnswer ? <>
            <View style={{position:"absolute",marginRight:10,width:Dimensions.get("screen").width-50,height:150}}>

<Text style={{fontSize:18,color:"green"}}>Answer : {data.Questions[incomingIndex].answer}</Text>
</View>
           </>: <></>}
             
             </View>
            <View style={{height:90}}>
              {/* <Text>{currQuestion && currQuestion.questionName.richText[0].text}</Text> */}
             {/* <Text>{data && data.Questions[incomingIndex].questionName.richText[0].text}</Text> */}
             <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <>{userInput.length>0 && btnClicked && userInput === data.Questions[incomingIndex].answer.toLowerCase() ? <>
              <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:20}}>Correct</Text>
              <Image source={require("../../../../assets/True.png")} style={{width:50,height:50}}/>
              </View>
             </> : <>
                 { userInput!==data.Questions[incomingIndex].answer.toLowerCase() && btnClicked? <>
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:20}}>Wrong</Text>
              <Image source={require("../../../../assets/wrong.png")} style={{width:50,height:50}}/>
              </View>
                 </> : <>
               </>}
              </>}</>
                  </View>
             {data && data.Questions.map((currentQn,currIndex)=>{
              return(<>
               
                {currIndex === incomingIndex ?<>
                  <Text style={{paddingHorizontal:4,marginBottom:20,fontSize:18,marginLeft:6}}>{incomingIndex+1}</Text>

<View style={{height:100}}>
<ScrollView>
<Text style={{fontSize:18,paddingHorizontal:4,lineHeight:26,marginBottom:20,fontFamily:PoppinsLight,marginLeft:5}}>{currentQn && currentQn.questionName.richText[0].text}</Text>

</ScrollView>
</View>
                    {/* input area */}
             <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
             
             <TextInput placeholder='Enter your answer' style={[styles.inputContainer,{fontSize:18}]}
             onChangeText={e=>inputFun(e)}/>
            
            </View>  
           {/* status areas */}
            <View>
           
             {/* <Text>{currentQn.answer}</Text> */}

            <View style={{width:"100%",justifyContent:"center",alignItems:"center",marginTop:30}}>
            <Button mode='contained' style={{width:150,borderRadius:1}} 
            
            buttonColor={btnClicked ? userInput===data.Questions[incomingIndex].answer.toLowerCase() ? "green":"red":"black"} onPress={checkAnswer}>{userInput===currentQn.answer.toLowerCase() &&userInput.length >0 && btnClicked ? "Correct":userInput.length>0 && btnClicked?"Wrong":"Check Answer"}</Button>
            </View>
            </View>
             {/* <Text>{currQuestion && currQuestion.answer}</Text> */}

             <View style={{width:"100%",height:40,marginTop:100,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:15}}>
             {incomingIndex === 0 ?<>
               <View style={{marginLeft:"auto",marginRight:15}}>
             <Button
              mode='contained' style={{width:Dimensions.get("screen").width/4,borderRadius:0}} onPress={nextQuestion}
              >Next</Button>
             </View>
             </>:<>
             {incomingIndex === data.Questions.length-1 ? <>
              <View style={{marginLeft:'auto'}}>
              <Button
              onPress={()=>navigation.navigate("Show All Blanks Papers")}
              mode='contained' style={{width:Dimensions.get("screen").width/4,borderRadius:0}}>Finish</Button>
              </View>
             </> : <>
             <View style={{width:"100%",height:40,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:15}}>
             <Button mode='contained' style={{width:Dimensions.get("screen").width/4,borderRadius:0}} onPress={prevQuestion}>Prev</Button>
             <Button
              mode='contained' style={{width:Dimensions.get("screen").width/4,borderRadius:0}} onPress={nextQuestion}
             >Next</Button>
             </View></>}
            </>
             }
             
             
       
             </View>
                </> : <></>}
              </>)
             })}

             
            </View>
          

            
          </View>
  </>)
}

const FillInTheBlanksExams = ({route}) => {
  const { data ,currentBlankType} = route.params;
  const[currIndex,setCurrentIndex] = useState(0);
  function nextQuestion(){
    setCurrentIndex(currIndex+1);
  }
  function prevQuestion(){
    setCurrentIndex(currIndex-1)
  }
  return (
    <View style={styles.rootContainer}>
      
       
          <QuestionComponent incomingIndex={currIndex}
          data = {data}
          currentBlankType={currentBlankType}
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}/>
        </View>)
    
 
  
}

export default FillInTheBlanksExams

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    // justifyContent: 'center',

    marginTop:10
  },
  inputContainer:{
    width:"90%",
    height:50,
    
    borderBottomWidth:2,
    borderColor:"black",
    marginTop:20,
    padding:10,
    borderRadius:10,
    
}
})