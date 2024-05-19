import { View, Text,StyleSheet,Image,Pressable,Alert } from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import {Card} from "react-native-paper"
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_API_URL } from '../../utils/Constants';
import { Button } from 'react-native-paper';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { PoppinsLight, PoppinsRegular } from '../../utils/FontHelper';
const Dashboard = () => {
    const navigation = useNavigation();
    const authContext = useContext(AuthContext);
  const[loading,setLoading] = useState(false);

    const [personalDetails,setPersonalDetails] = useState({
        userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:"",userId:""
      });
      useEffect(()=>{
        async function getCurrentPersonDetails(){
          try {
            setLoading(true);
            console.log("Getting current person details");
            const id = await AsyncStorage.getItem("userId");
            const response = await axios.get(BACKEND_API_URL+"/Auth/currentPerson/"+id);
            if(response.data){
              console.log("Response data - ",response.data);
            setLoading(false);
    
              setTimeoutFun();
           updateDetails();
            }else{
              return Alert.alert("Failed","You are not at all a subscribed person")
            }
    
    
            function setTimeoutFun(){
              setTimeout(()=>{},2000)
            }
            
            function updateDetails(){
              setPersonalDetails({userName:response.data.name, 
                userEmail:response.data.email, 
                userMobile:response.data.mobile,
                userIsAuthorized:response.data.isAuthenticated,
                userAddress:response.data.address,
                userId:response.data._id})
            }
          } catch (error) {
            setLoading(false);
    
            return Alert.alert("Error Occurred","Get personal details error")
          }
        }
        getCurrentPersonDetails();
       
      },[])
    function CompetitiveNavFun(){
        navigation.navigate("Competitive")
    }
    function AcademicNavFun(){
        navigation.navigate("Academic")
    }
  return (
    <View style={styles.rootContainer}>
       <ScrollView>

       <View style={{position:"absolute",right:5}}>
            {/* <Text>Your Status -</Text> */}
            {loading ? <Text>
            <Text>Your Account Status</Text>
                <Text>Loading..</Text>
            </Text>:<>
                <Text style={{position:"absolute",top:0,right:0}}>{personalDetails && personalDetails.userIsAuthorized ? "":<View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
                <Text style={{fontSize:16}}>Free Account</Text>
                <Button onPress={()=>{return navigation.navigate("Personal Details")}}>Upgrade</Button>
                </View>}</Text>
            </>}
        </View>
       <View style={styles.bottom}>
        <View style={styles.topContainer}>
        <Pressable
        onPress={AcademicNavFun}>
        <Card style={[styles.cardStyle,{backgroundColor:"#6A82FE"}]}>
            <Card.Content style={styles.cardInnerStyle}>
            {/* <Image source={require("../../assets/academic.jpg")}
                    style={{width:"99%",height:"99%",borderRadius:10}}
                /> */}
                <Text style={{fontSize:17,fontFamily:PoppinsRegular,color:"white"}}>English Grammar</Text>
            </Card.Content>
        </Card>
        </Pressable>

       <Pressable
       onPress={CompetitiveNavFun}>
       <Card style={[styles.cardStyle,{backgroundColor:"#B9DDFE"}]}>
            <Card.Content style={styles.cardInnerStyle}>
                {/* <Image source={require("../../assets/Competitive.jpg")}
                    style={{width:"99%",height:"99%",borderRadius:10}}
                /> */}
                <Text style={{fontSize:17,fontFamily:PoppinsRegular,color:"black"}}>Practice Tests</Text>

            </Card.Content>
        </Card>
       </Pressable>
        </View>
        <View style={styles.bottomContainer}>
          <Pressable onPress={()=>navigation.navigate("RecentAttempts")}>
          <Card  style={[{width:Dimensions.get("screen").width/2.2,height:100,backgroundColor:"#FFDE7D"},styles.bottomCardContainer]}>
                <Text style={{fontFamily:PoppinsLight,fontSize:14}}>Recent Attempts</Text>
          </Card>
          </Pressable>
         <Pressable onPress={()=>navigation.navigate("Analytics")}>
         <Card style={[{width:Dimensions.get("screen").width/2.2,height:100,backgroundColor:"#6A2C70"},styles.bottomCardContainer]}>
                <Text style={{fontFamily:PoppinsLight,color:"white",fontSize:14}}>Your Analytics</Text>
          </Card>
         </Pressable>
          <Pressable onPress={()=>navigation.navigate("LeaderBoard")}>
          <Card style={[{width:Dimensions.get("screen").width/2.2,height:100,backgroundColor:"#92E3F5"},styles.bottomCardContainer]}>
                <Text style={{fontFamily:PoppinsLight,fontSize:14}}>Leader Board</Text>
          </Card>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate("Metrics")}>
          <Card style={[{width:Dimensions.get("screen").width/2.2,height:100,backgroundColor:"#A6BBE4"},styles.bottomCardContainer]}>
                <Text style={{fontFamily:PoppinsLight,fontSize:14}}>Metrics</Text>
          </Card>
          </Pressable>
        </View>
       </View>
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        position:"relative",
        paddingHorizontal:10,
    },
    cardStyle:{
        width:(Dimensions.get('window').width - 20),
        height:130,
        backgroundColor:"#27005D"
    },
    cardInnerStyle:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    bottom:{
      height:Dimensions.get("screen").height-180,
      display:"flex",
      flexDirection:"column",
      justifyContent: 'center',
      gap:50
    },
    topContainer:{
      gap:10
    },
    bottomContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      flexWrap:'wrap',
      gap:8
    },
    bottomCardContainer:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }
})
export default Dashboard