import { Dimensions, StyleSheet, Text, View ,TextInput, Alert,Image, Pressable} from 'react-native'
import React,{useState} from 'react'
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
import { Button} from 'react-native-paper';

const QuestionComponent = ({currQuestion,incomingIndex,data,nextQuestion,prevQuestion})=>{
  const[userInput,setUserInput] = useState('');
  const[btnClicked,setBtnClicked] = useState(false)
  const[showAnswer,handleShowAnswer] = useState(false);
  function inputFun(e){
    let inputText = e.toLowerCase();
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

  const checkAnswer = ()=>{
    if(userInput.length<1){
      return Alert.alert("Warning","Your answer must be non-empty, write something")
    }
    setBtnClicked(true);
    function setTimeFun(){
      setTimeout(()=>{
        setBtnClicked(false)
      },3000)
    }
    setTimeFun();
  }
  return(<>
          <View>
            {/* Question area */}
            <View style={{display:"flex",width:"90%",height:100,flexDirection:"row-reverse",justifyContent:'space-between', alignItems:"center",position:"relative"}}>
             
            <Pressable onPress={setPressHandler}>

            {showAnswer ? <>
              <Image source={require("../../../../assets/view.png")} style={{width:30,height:30}}
             
             />
            </> : <>
            <Image source={require("../../../../assets/view60.png")} style={{width:30,height:30}}
             
             />
            </>}
            </Pressable>
              <Text></Text>
           {showAnswer ? <>
            <View style={{position:"absolute",marginRight:100}}>

<Text style={{fontSize:18,color:"green"}}>Answer : {data.Questions[incomingIndex].answer}</Text>
</View>
           </>: <></>}
             
             </View>
            <View style={{height:90}}>
              {/* <Text>{currQuestion && currQuestion.questionName.richText[0].text}</Text> */}
             {/* <Text>{data && data.Questions[incomingIndex].questionName.richText[0].text}</Text> */}
            
             <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <>{userInput.length>0 && btnClicked && userInput === data.Questions[incomingIndex].answer ? <>
              <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:20}}>Correct</Text>
              <Image source={require("../../../../assets/True.png")} style={{width:50,height:50}}/>
              </View>
             </> : <>
                 { userInput!==data.Questions[incomingIndex].answer && btnClicked? <>
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
                  <Text style={{fontSize:18,paddingHorizontal:4,lineHeight:26,marginBottom:20,fontFamily:PoppinsLight,marginLeft:5}}>{currentQn && currentQn.questionName.richText[0].text}</Text>

                    {/* input area */}
             <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
             
             <TextInput placeholder='Enter your answer' style={[styles.inputContainer,{fontSize:18}]}
             
             onChangeText={e=>inputFun(e)}/>
            
            </View>  
           {/* status areas */}
            <View>
           
             {/* <Text>{currentQn.answer}</Text> */}

            <View style={{width:"100%",justifyContent:"center",alignItems:"center",marginTop:30}}>
            <Button mode='contained' style={{width:150,borderRadius:1}} buttonColor={btnClicked ? userInput===currentQn.answer ? "green":"red":"black"} onPress={checkAnswer}>{userInput===currentQn.answer &&userInput.length >0 && btnClicked ? "Correct":userInput.length>0 && btnClicked?"Wrong":"Check Answer"}</Button>
            </View>
            </View>
             {/* <Text>{currQuestion && currQuestion.answer}</Text> */}

             <View style={{width:"100%",height:40,marginTop:100,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:15}}>
             {incomingIndex === 0 ?<>
               <View style={{marginLeft:"auto",marginRight:15}}>
             <Button
              mode='contained' style={{width:Dimensions.get("screen").width/4,borderRadius:0}} onPress={nextQuestion}>Next</Button>
             </View>
             </>:<>
             {incomingIndex === data.Questions.length-1 ? <>
              <View style={{marginLeft:'auto'}}>
              <Button
              mode='contained' style={{width:Dimensions.get("screen").width/4,borderRadius:0}}>Finish</Button>
              </View>
             </> : <>
             <View style={{width:"100%",height:40,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:15}}>
             <Button mode='contained' style={{width:Dimensions.get("screen").width/4,borderRadius:0}} onPress={prevQuestion}>Prev</Button>
             <Button
              mode='contained' style={{width:Dimensions.get("screen").width/4,borderRadius:0}} onPress={nextQuestion}>Next</Button>
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
  const { data } = route.params;
  const[currIndex,setCurrentIndex] = useState(0);
  function nextQuestion(){
    setCurrentIndex(currIndex+1)
  }
  function prevQuestion(){
    setCurrentIndex(currIndex-1)
  }
  return (
    <View style={styles.rootContainer}>
      
       
          <QuestionComponent incomingIndex={currIndex}
          data = {data}
       
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}/>
        </View>)
    
 
  
}

export default FillInTheBlanksExams

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    // justifyContent: 'center',

    marginTop:50
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