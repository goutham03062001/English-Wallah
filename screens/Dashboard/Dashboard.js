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

        <View style={{position:"absolute",top:3,right:5}}>
            {/* <Text>Your Status -</Text> */}
            {loading ? <Text>
            <Text>Your Account Status</Text>
                <Text>Loading..</Text>
            </Text>:<>
                <Text style={{position:"absolute",top:0,right:0}}>{personalDetails && personalDetails.userIsAuthenticated ? "":<View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
                <Text style={{fontSize:16}}>Free Account</Text>
                <Button onPress={()=>{return navigation.navigate("Personal Details")}}>Upgrade</Button>
                </View>}</Text>
            </>}
        </View>
        <Pressable
        onPress={AcademicNavFun}>
        <Card style={styles.cardStyle}>
            <Card.Content style={styles.cardInnerStyle}>
            <Image source={require("../../assets/academic.jpg")}
                    style={{width:"99%",height:"99%",borderRadius:10}}
                />
            </Card.Content>
        </Card>
        </Pressable>

       <Pressable
       onPress={CompetitiveNavFun}>
       <Card style={[styles.cardStyle,{backgroundColor:"#662549"}]}>
            <Card.Content style={styles.cardInnerStyle}>
                <Image source={require("../../assets/Competitive.jpg")}
                    style={{width:"99%",height:"99%",borderRadius:10}}
                />
            </Card.Content>
        </Card>
       </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        gap:30,
        position:"relative"
    },
    cardStyle:{
        width:(Dimensions.get('window').width - 20),
        height:200,
        backgroundColor:"#27005D"
    },
    cardInnerStyle:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Dashboard