import { StyleSheet, Text, View ,ScrollView, Dimensions} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Alert } from 'react-native';
import axios from "axios"
import { BACKEND_API_URL } from '../../utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RecentAttempts = () => {
  const authContext = useContext(AuthContext);
  const[loading,setLoading] = useState(false);
  const[data,setData] = useState(null)
  useEffect(()=>{
    async function getRecentAttempts(){
      try {
        setLoading(true);
        const userId = await AsyncStorage.getItem("userId");
        const response = await axios.get(BACKEND_API_URL+"/Auth/getRecentAttempts/"+userId);
        if(response.data){
          setLoading(false);
          setData(response.data);
        }
      } catch (error) {
        return Alert.alert("Oops!!","Something went wrong, try again later")
      }
    }
    getRecentAttempts();
  },[]);
  return (
    <View style={{marginTop:50}}>
      {loading? <><Text>Loading</Text></> : <>
      <ScrollView>
       <View style={styles.innerContainer}>
       <Text>Your Recent Attempts</Text>
       {data && data.map((item,index)=>(<View key={index}>
        <View style={[{width:Dimensions.get("screen").width-10,
        height:90,
        backgroundColor:"#A084E8",
        borderRadius:10,
        marginTop:8},styles.cardContent]}>
          {/* card */}
          {item && item.quiz && (<>
            <Text style={{color:'white'}}>{item.quiz.quizId}</Text>
            <Text style={{color:"white",fontSize:20}}>Score - {item.quiz.scoresArr[item.quiz.scoresArr.length-1]}</Text>
          </>)}
        </View>
       </View>))}
       </View>
      </ScrollView>
      </>}
    </View>
  )
}

export default RecentAttempts

const styles = StyleSheet.create({
  innerContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  cardContent:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
})