import { Dimensions, StyleSheet, Text, View,Image,Alert,TouchableOpacity ,ScrollView} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StripeProvider,CardField,useConfirmPayment,useStripe} from "@stripe/stripe-react-native"
import { Button, Card, TextInput ,TouchableRipple,ActivityIndicator} from 'react-native-paper';
import { BACKEND_API_URL } from '../../../../utils/Constants';
import RazorpayCheckout from 'react-native-razorpay';
import { PoppinsRegular,PoppinsLight } from '../../../../utils/FontHelper';
import { List,Avatar ,Chip} from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AuthContext } from '../../../../context/AuthContext';
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
  const payableAmount = thresholdAmount*100;
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

    <Text style={{fontSize:18,fontFamily:PoppinsLight,textAlign:"center",color:"red",marginTop:20}}>Complete Your Payment</Text>
  {/* <View style={styles.topContainer}>
    <View style={{position:"absolute",top:0,right:0}}>
      <TouchableOpacity 
      
      style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"black",borderRadius:2}}>
       {personalDetails.userIsAuthorized ? <>
       <Image source={require("../../../../assets/premium.png")} style={{width:30,height:30}}/>
        <Text style={{color:"white"}}>Premium</Text></> : <>
        <>
       <Image source={require("../../../../assets/subscription.png")} style={{width:30,height:30}}/>
        <Text style={{color:"white"}}>Free Account</Text></>
        </>}
      </TouchableOpacity>
    </View>
  <Image source={require("../../../../assets/avatar.png")} style={{width:50,height:50,marginTop:20}}/>
  <Text style={{marginTop:10,fontSize:18,fontFamily:PoppinsLight}}>
    <Text>Hey, </Text>
    <Text>{personalDetails.userName}</Text>
    <Image source={require("../../../../assets/wave.png")} style={{width:30,height:20}}/>

  </Text>
   
  </View> */}
  <View style={styles.bottomContainer}>
    <Card style={{borderRadius:5,backgroundColor:"white"}}>
    <Chip icon={require("../../../../assets/list.png")} 
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
        <Image source={require("../../../../assets/Name.png")}/>
        <Text> Name  - {personalDetails.userName}</Text>
        </Text>
        <Text style={styles.text}>
        <Image source={require("../../../../assets/email.png")} style={{width:25,height:25}}/>
          <Text> Email - {personalDetails.userEmail}</Text>
        </Text>
        <Text style={styles.text}>
        <Image source={require("../../../../assets/Mobile.png")} style={{width:25,height:25}}/>
        
        <Text> Mobile - {personalDetails.userMobile}</Text>
        </Text>
        <Text style={styles.text}>
        <Image source={require("../../../../assets/address.png")} style={{width:25,height:25}}/>
        
        <Text> Address - {personalDetails.userAddress}</Text>
        {/* <Text> Address - {typeof(personalDetails.userIsAuthorized)}</Text> */}
       
        </Text>
        
        <Text style={styles.text}>
        <Image source={require("../../../../assets/settings.png")} style={{width:25,height:25}}/>
        
        <Text> Account Type - {personalDetails.userIsAuthorized ? "Premium":"Free"}</Text>
        {/* <Text> Address - {typeof(personalDetails.userIsAuthorized)}</Text> */}
       
        </Text>
        
      </Card.Content>
 </>}

    </Card>
  </View>

{personalDetails && !personalDetails.userIsAuthorized?  
<>

<View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  <TouchableRipple
    onPress={() => paymentFunction()}
    rippleColor="rgba(21,21,12,29)"
  >
    <Button mode='elevated' icon={require("../../../../assets/rupee.png")}
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
    marginTop:15,
    paddingVertical:20
  },
  text:{fontSize:15,fontFamily:PoppinsLight},
  subscriptionDetails:{
    height:200,
    justifyContent:"center",
    gap:25
  }
  
})

