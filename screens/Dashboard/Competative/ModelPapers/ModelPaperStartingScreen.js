import { Dimensions, StyleSheet, Text, View ,Image,Pressable} from 'react-native'
import React,{useEffect,useContext} from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import { Card,ActivityIndicator,Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ModelPaperExam from './ModelPaperExam';
import ModelPaperReview from "./ModelPaperReview"
import { PoppinsRegular } from '../../../../utils/FontHelper';
const Stack = createStackNavigator();

const ModelPaperExam1 = ({route})=>{
  return(<>
  <ModelPaperExam ModelPaperId={route.params.data}/>
  </>)
}

const ModelPaperStartingScreen = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  useEffect(()=>{
    authContext.getAllModelPapers();
  },[])
  return (
    <View style={styles.rootContainer}>
      {/* <Text>ModelPaperStartingScreen</Text> */}
      {authContext.loading ? <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator animating={true} color="black" size={35}/>
      </View>:<>
      <>
        {authContext.quizExamsArr && authContext.quizExamsArr.length >0 ? <>
            {/* <Text>{authContext.quizExamsArr.length}</Text> */}
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
      </>}
    </View>
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
        <Stack.Screen name = "Model Paper Review" component={ModelPaperReview}/>
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