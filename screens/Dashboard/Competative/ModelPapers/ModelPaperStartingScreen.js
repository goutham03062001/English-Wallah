import { Dimensions, StyleSheet, Text, View ,Image,Pressable} from 'react-native'
import React,{useEffect,useContext} from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import { Card,ActivityIndicator,Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ModelPaperExam from './ModelPaperExam';
import ModelPaperReview from "./ModelPaperReview"
import { PoppinsRegular } from '../../../../utils/FontHelper';
import { ScrollView } from 'react-native-gesture-handler';
import ModelPaperOverView from "./ModelPaperOverView"
const Stack = createStackNavigator();

const ModelPaperExam1 = ({route})=>{
  // console.log("model paper type1 - ",route.params.data);
  return(<>
  <ModelPaperExam ModelPaperType={route.params.data}/>
  </>)
}

const ModelPaperStartingScreen = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  // useEffect(()=>{
  //   // authContext.getAllModelPapers();
  // },[])
  return (
   <ScrollView>
     <View style={styles.rootContainer}>
      {/* {authContext.loading ? <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator animating={true} color="black" size={35}/>
      </View>:<>
      <>
        {authContext.quizExamsArr && authContext.quizExamsArr.length >0 ? <>
           {authContext.quizExamsArr.map((exam,index)=>{
            return(<>
              <View key={index} style={{marginTop:10}}>
              <Pressable onPress={()=>navigation.navigate("Model Exam",{data : exam._id})}>
              <Card style={{width:Dimensions.get("screen").width-20,borderRadius:3,paddingVertical:8}}>
                <Card.Content>
                 <View style={styles.cardContentFlex1}>
                 <Text style={{fontSize:18, fontFamily:PoppinsRegular}}>Model Paper - {index+1}</Text>
                  <Button mode="outlined" style={{borderRadius:1,height:39}}><Text style={{fontFamily:PoppinsRegular}}>Attempt</Text></Button>
                 </View>
                  <View style={styles.cardContentFlex}>
                    <Text style={{color:"brown",fontFamily:PoppinsRegular}}>Attempts - 0</Text>
                    <Text style={{color:"green",fontFamily:PoppinsRegular}}>Best Score - 0/10</Text>
                  </View>
                </Card.Content>
              </Card>
              </Pressable>
            </View>

            </>)
           })}
        </>:<>
          <Text>No model paper found</Text>
        </>}
      </>
      </>} */}

     
       <Pressable onPress={()=>navigation.navigate("Model Exam",{data : "noun"})}>
       <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 9,
    // iOS
    shadowColor: 'red',
        shadowOffset: { width: 10, height: 21 },
    shadowOpacity: 0.8,
    shadowRadius: 10,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Noun"/>
          </Card.Content>
        </Card>
       </Pressable>

       <Pressable onPress={()=>navigation.navigate("Model Exam",{data:"pronoun"})}>
       <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Pronoun"/>
          </Card.Content>
        </Card>
       </Pressable>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Adverbs"/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Prepositions"/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Conjunctions"/>
          </Card.Content>
        </Card>



        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Adjectives"/>
          </Card.Content>
        </Card>



        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Verbs"/>
          </Card.Content>
        </Card>



        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Non-finite Verbs"/>
          </Card.Content>
        </Card>



        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Degrees of Comparison"/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Question Tags"/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Subject-Verb Agreement "/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Active Voice Passive Voice "/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Direct and Indirect Speech"/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Conditional Clause / If Clause:"/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Subject and Predicate "/>
          </Card.Content>
        </Card>

        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Tense and Time "/>
          </Card.Content>
        </Card>


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Phrase"/>
          </Card.Content>
        </Card>
   

        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Clause"/>
          </Card.Content>
        </Card>
   


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Simple, Compound and Complex"/>
          </Card.Content>
        </Card>
   


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Figures of Speech"/>
          </Card.Content>
        </Card>
   


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Odd Sound Out"/>
          </Card.Content>
        </Card>
   

        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Syllables"/>
          </Card.Content>
        </Card>
   

        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Phonetic Transcription"/>
          </Card.Content>
        </Card>
   


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Silent Letters"/>
          </Card.Content>
        </Card>
   


        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Wrongly Spelt Words"/>
          </Card.Content>
        </Card>
        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Correction of Sentences"/>
          </Card.Content>
        </Card>

        <Card 
        style={{width:Dimensions.get("screen").width-30,height:70,marginTop:10,borderRadius:2,elevation: 5,
    // iOS
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,}}
        >
          <Card.Content style={{display:"flex",justifyContent:"center"}}>
            <Card.Title title="Parts of Speech"/>
          </Card.Content>
        </Card>
    </View>
   </ScrollView>
  )
}
const StartingScreen = ()=>{
  return(<>
  <Stack.Navigator> 
        <Stack.Screen
          name="Model Paper"
          component={ModelPaperStartingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Model Exam" component={ModelPaperExam1} options={{headerShown:false}}/>
        <Stack.Screen name = "Model Paper Review" component={ModelPaperReview} options={{headerShown:false}}/>
        <Stack.Screen name="Overview" component={ModelPaperOverView} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Quiz Overview" component={QuizOverView}/> */}
      </Stack.Navigator>
  </>)
}
export default StartingScreen

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    flexDirection:"column",
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    padding:10,
  },
  cardContentFlex:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginLeft:1
  },
  cardContentFlex1:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:15
    // marginLeft:14
  }
})