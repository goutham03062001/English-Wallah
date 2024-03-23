import { StyleSheet, Text, View,TextInput ,Pressable} from 'react-native'
import React,{useState,useEffect,useContext} from 'react';
import { Button ,Card,ActivityIndicator} from 'react-native-paper';
import { AuthContext } from '../../../../context/AuthContext';
import FillInTheBlanksExams from './FillInTheBlanksExams';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
const Stack = createStackNavigator();
const StartingScreen = ({route})=>{

    const FillIntheBlanks = () => {
        const {data} = route.params;
        console.log("current blank type - ",data);
        const authContext = useContext(AuthContext)
        const navigation = useNavigation();
        const[userAnswer,setUserAnswer] = useState("");
        const[buttonClicked,setButtonClicked] = useState(false)
    
        useEffect(()=>{
            authContext.getAllBlankPapersByType(data)
        },[])
    
        const checkFun = ()=>{
            setButtonClicked(true);
            
            function setTimeoutFun(){
                setTimeout(()=>{setButtonClicked(false)},5000)
            }
    
            setTimeoutFun()
        }
      return (
        <View style={styles.rootContainer}>
            <>
               {/* <Text> {authContext && authContext.quizExamsArr.length}</Text> */}
            </>
    
            {authContext.loading ? <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <ActivityIndicator animating={true} color="black" size={35}/>
                <Text style={{marginTop:15}}>Loading...</Text>
            </View> : <ScrollView>
            {
                authContext.quizExamsArr && authContext.quizExamsArr.map((currBlank,index)=>{
                    return(<View style={{marginTop:5}} key={index}>
                        {/* <FillInTheBlanksExams data = {currBlank}/> */}
                        <Pressable onPress={()=>navigation.navigate("FB Exam",{data : currBlank,currentBlankType : data})}>
                        <Card>
                            <Card.Content>
                                <Card.Title title={`${data} ${index+1}`}/>
                            </Card.Content>
                        </Card>
                        </Pressable>
                    </View>)
                })
            }</ScrollView>}
           
        </View>
      )
    }

    return(<>
        <Stack.Navigator>
            <Stack.Screen name ="Fill In the blanks starting" component={FillIntheBlanks} options={{headerShown:false}}/>
            <Stack.Screen name = "Show All Blanks Papers" component={FillIntheBlanks} options={{headerShown:false}}/>
            <Stack.Screen name = "FB Exam" component={FillInTheBlanksExams} options={{headerShown:false}}/>
        </Stack.Navigator>
    </>)
}



export default StartingScreen

const styles = StyleSheet.create({
    rootContainer:{
        // marginTop:25,
        // padding:10
    },
    inputContainer: {
        width: "100%",
        height: 50,
        backgroundColor: "#ffff",
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10,
        padding: 5,
        borderRadius: 5,
        color: "black",
        fontWeight: "bold",
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0
      }
})