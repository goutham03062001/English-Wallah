import { Dimensions, StyleSheet, Text, View ,Alert} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { Card,Button } from 'react-native-paper';
import { PoppinsBold ,PoppinsLight} from '../../../../utils/FontHelper';
import axios from "axios"
import { BACKEND_API_URL } from '../../../../utils/Constants';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../../context/AuthContext';
const Results = ({route}) => {
    const {correct,wrong,missed,quizId,type} = route.params;
    const authContext = useContext(AuthContext);
    console.log("quiz id - ",quizId);
    const navigation = useNavigation();
    const[loading,setLoading] = useState(false);
    const[currentIndex,setCurrentIndex] = useState(0);
    useEffect(()=>{
        async function getIndex(){
            setLoading(true);
            try {
               if(authContext.indexArr){
                // const index = authContext.indexArr.findIndex(curr=>curr._id.toString() === quizId);
                authContext.indexArr.forEach((curr,index)=>{
                    if(curr._id.toString() === quizId){
                        console.log("Quiz  fount at "+index)
                        setCurrentIndex(index+1)
                    }
                })
                
                setLoading(false)
               }else{
                setCurrentIndex(0)
               }
            } catch (error) {
            setLoading(false);
            setCurrentIndex(0);
                console.log("Error - ",error);
                return Alert.alert("Oops!","Something went wrong, please retry after sometime");
            }
        }
        getIndex();
    },[quizId])
  return (
    <View style={styles.rootContainer}>
    {loading ? <>
        <Text style={{textAlign:'center',fontSize:25}}>Hang on!.. We are Caulculating Your Results</Text>
    </>:<>
    <Text style={{fontFamily:PoppinsLight,fontSize:24,color:"green",textAlign:'center'}}>Your Quiz Results of {type} - {currentIndex}</Text>
        <View style={{width:Dimensions.get("screen").width-30,padding:5}}>
            {/* Top Container */}
            <Card style={{borderRadius:0}}>
                <Card.Title title={`English Pedagogy - ${currentIndex+1}`}
                    titleStyle={{position:"absolute",right:10,top:0}}
                />

                <Card.Content style={styles.cardContentLayout}>
                    <Text style={{fontFamily:PoppinsBold}}>Correct Answers - {correct}</Text>
                    <Text style={{fontFamily:PoppinsBold}}>Wrong Answers - {wrong}</Text>
                    <Text style={{fontFamily:PoppinsBold}}>Missed Questions - {missed}</Text>
                </Card.Content>
            </Card>
        </View>

        <View>
            {/* Bottom Container */}

            <Button mode="outlined" onPress={()=>navigation.navigate("English Pedagogy",{load : true})}>Back To Practice</Button>
        </View>
    </>}
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    rootContainer:{
        padding:10,
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        gap:30
    },
    cardContentLayout:{
        gap:20,
        borderRadius:0,
        marginTop:30
    }
})