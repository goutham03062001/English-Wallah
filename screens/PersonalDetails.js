import { Dimensions, StyleSheet, Text, View,Image,Alert,TouchableOpacity ,ScrollView} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserImage from "../assets/user.png";
import MobileImage from "../assets/phone.png";
import AddressImage from "../assets/address.png";
import EmailImage from "../assets/email.png";
import BestScore from "../assets/bestscore.png";
import {StripeProvider,CardField,useConfirmPayment,useStripe} from "@stripe/stripe-react-native"
import { Button, Card, TextInput ,TouchableRipple,ActivityIndicator} from 'react-native-paper';
import { BACKEND_API_URL } from '../utils/Constants';
import RazorpayCheckout from 'react-native-razorpay';
import { PoppinsLight,PoppinsRegular } from '../utils/FontHelper';
import { List,Avatar ,Chip} from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const PersonalDetails =  () => {  
  const authContext = useContext(AuthContext);
  const[successData,setSuccessData] = useState(null);
  const[btnClicked,setBtnClicked] = useState(false);
  const[loading,setLoading] = useState(false);
  const[subscriptionDetails,setSubscriptionDetails] = useState(null);
  const navigation = useNavigation();
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
          setPersonalDetails({userName:response.data.name, userEmail:response.data.email, userMobile:response.data.mobile,userIsAuthorized:response.data.isAuthenticated,userAddress:response.data.address,userId:response.data._id})
        }
      } catch (error) {
        setLoading(false);

        return Alert.alert("Error Occurred","Get personal details error")
      }
    }
    getCurrentPersonDetails();
   
  },[])

  //   var isAuthenticated,name,email,isAuthorized,mobile,address,currentUserId,currentOrderId,currentOrderId1;
  //   async function getDetails(){
  //     currentUserId = await AsyncStorage.getItem("userId");
  //      isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
  //      name = await AsyncStorage.getItem("name");
  //      email = await AsyncStorage.getItem("email");
  //      isAuthorized = await AsyncStorage.getItem("isAuthorized");
  //      mobile = await AsyncStorage.getItem("mobile");
  //      address = await AsyncStorage.getItem("address");
  //      currentOrderId = await AsyncStorage.getItem("currentOrderId")
  //      currentOrderId1 = await AsyncStorage.getItem("currentOrderId")
  //      setTimeoutFun();
  //      updateDetails();
  //   }
  //   getDetails();
  //   function setTimeoutFun(){
  //     setTimeout(()=>{},2000)
  //   }
    
  //   function updateDetails(){
  //     setPersonalDetails({userName:name, userEmail:email, userMobile:mobile,userIsAuthenticated:isAuthenticated,userIsAuthorized:isAuthorized,userAddress:address,userId:currentUserId})
  //   }
  // },[]);
 //fetch person subscription details
async function checkSubscriptionDetails(userId){
  console.log("Button clicked")
  try {
    setBtnClicked(true)
    setLoading(true);
    console.log("Getting data")
    const response = await axios.get(BACKEND_API_URL+"/Auth/getInfo/"+userId);
    if(response.data){
      console.log('response data - ',response.data);
      setLoading(false);
      function setTimeOutFunction(){
        setTimeout(()=>{
          setSubscriptionDetails(response.data)
        },3000)
      }
      setTimeOutFunction();
    }
  } catch (error) {
    return Alert.alert("Error Occurred ","Failed to fetch your subscription Details")
  }
}
  //razorpay payment integration
  const thresholdAmount = 10;
  const payableAmount = thresholdAmount*1;
  async function paymentFunction(){

    authContext.createOrder(personalDetails.userName,personalDetails.userEmail,personalDetails.userMobile,personalDetails.userAddress,personalDetails.userId);
    
  }
 return (
    
    <View>
<ScrollView>
  


<View>
{loading ? <>
  <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator animating={true} color="black" size={35}/>

    </View>

</>:<>
{loading ? <>
    <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator animating={true} color="black" size={35}/>

    </View> 
  </>:<>

  <View style={styles.topContainer}>
    <View style={{position:"absolute",top:0,right:0}}>
      <TouchableOpacity 
      
      style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"black",borderRadius:2}}>
       {personalDetails.userIsAuthorized ? <>
       <Image source={require("../assets/premium.png")} style={{width:30,height:30}}/>
        <Text style={{color:"white"}}>Premium</Text></> : <>
        <>
       <Image source={require("../assets/subscription.png")} style={{width:30,height:30}}/>
        <Text style={{color:"white"}}>Free Account</Text></>
        </>}
      </TouchableOpacity>
    </View>
  <Image source={require("../assets/avatar.png")} style={{width:50,height:50,marginTop:20}}/>
  <Text style={{marginTop:10,fontSize:18,fontFamily:PoppinsLight}}>
    <Text>Hey, </Text>
    <Text>{personalDetails.userName}</Text>
    <Image source={require("../assets/wave.png")} style={{width:30,height:20}}/>

  </Text>
   
  </View>
  <View style={styles.bottomContainer}>
    <Card style={{borderRadius:5,backgroundColor:"white"}}>
    <Chip icon={require("../assets/list.png")} 
    textStyle={{fontFamily:PoppinsRegular}}
    onPress={() => console.log('Pressed')}>Personal Info</Chip>
 {btnClicked?<>
  <Card.Content style={styles.subscriptionDetails}>
 {loading?<>
  <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator animating={true} color="black" size={35}/>

    </View>
 </>:<>
 {subscriptionDetails && (<>
    <Text style={styles.text}>Your subscription details</Text>
    <Text style={[styles.text,{color:"green",fontFamily:PoppinsRegular}]}>Activated - {new Date(subscriptionDetails.createdAt).toLocaleDateString()}</Text>
    <Text style={[styles.text,{color:"red"}]}>Valid Upto - {new Date(subscriptionDetails.validUpto).toLocaleDateString()}</Text>
    <Button onPress={()=>setBtnClicked(false)} buttonColor='black'>
      <Text style={{color:"white"}}>Cancel</Text>
    </Button>
   </>)}
 </>}
   
  </Card.Content>
 </>:<>
 <Card.Content style={styles.cardContent}>
        <Text style={styles.text}>
        <Image source={require("../assets/Name.png")}/>
        <Text> Name  - {personalDetails.userName}</Text>
        </Text>
        <Text style={styles.text}>
        <Image source={require("../assets/email.png")} style={{width:25,height:25}}/>
          <Text> Email - {personalDetails.userEmail}</Text>
        </Text>
        <Text style={styles.text}>
        <Image source={require("../assets/Mobile.png")} style={{width:25,height:25}}/>
        
        <Text> Mobile - {personalDetails.userMobile}</Text>
        </Text>
        <Text style={styles.text}>
        <Image source={require("../assets/address.png")} style={{width:25,height:25}}/>
        
        <Text> Address - {personalDetails.userAddress}</Text>
        {/* <Text> Address - {typeof(personalDetails.userIsAuthorized)}</Text> */}
        
        </Text>
        
    {personalDetails.userIsAuthorized ? <>
    <Button mode="contained" buttonColor='black' style={{borderRadius:0}}
    onPress={(e)=>checkSubscriptionDetails(personalDetails.userId)}>View Your Subscription Details</Button>

    </>:<></>}
        <Button mode="contained" onPress={()=>authContext.logout()}>
          <Text>LOGOUT   </Text>
          <Image source={require("../assets/logout.png")} style={{width:25,height:25}}/>
        </Button>
      </Card.Content>
 </>}

    </Card>
  </View>

{personalDetails.userIsAuthorized==="true"?  
<>

<View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  <TouchableRipple
    onPress={() => paymentFunction()}
    rippleColor="rgba(21,21,12,29)"
  >
    <Button mode='elevated' icon={require("../assets/rupee.png")}
    style={{borderRadius:2,}}
    buttonColor='gold'
    >
      Pay now {payableAmount}
    </Button>
  </TouchableRipple>
    <Text style={[styles.text,{marginTop:10}]}>Pay now to unlock all the features</Text>
  </View>

{/* Payment Details */}
  <View>


  </View>
</>
: <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>


  </View>}
  </>}
</>}
</View>
</ScrollView>
    </View>
  )
}




export default PersonalDetails

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    padding:15,
   
  },
  topContainer:{
    height:150,
    width:Dimensions.get("screen").width-10,
    backgroundColor:"#B7C9F2",
    paddingHorizontal:5,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:5,
    borderRadius:5,
    position:"relative"

  },
  bottomContainer:{
    height:400,
    paddingHorizontal:5,
    gap:10,
    marginTop:30
  },
  cardContent:{
    gap:25,
    marginTop:15
  },
  text:{fontSize:15,fontFamily:PoppinsLight},
  subscriptionDetails:{
    height:200,
    justifyContent:"center",
    gap:25
  }
  
})

