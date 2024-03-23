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
const PersonalDetails =  () => {  
  const authContext = useContext(AuthContext);
  const[successData,setSuccessData] = useState(null);
  const [personalDetails,setPersonalDetails] = useState({
    userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:"",userId:""
  })
  useEffect(()=>{
    var isAuthenticated,name,email,isAuthorized,mobile,address,currentUserId,currentOrderId,currentOrderId1;
    async function getDetails(){
      currentUserId = await AsyncStorage.getItem("userId");
       isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
       name = await AsyncStorage.getItem("name");
       email = await AsyncStorage.getItem("email");
       isAuthorized = await AsyncStorage.getItem("isAuthorized");
       mobile = await AsyncStorage.getItem("mobile");
       address = await AsyncStorage.getItem("address");
       currentOrderId = await AsyncStorage.getItem("currentOrderId")
       currentOrderId1 = await AsyncStorage.getItem("currentOrderId")
       setTimeoutFun();
       updateDetails();
    }
    getDetails();
    function setTimeoutFun(){
      setTimeout(()=>{},2000)
    }
    
    function updateDetails(){
      setPersonalDetails({userName:name, userEmail:email, userMobile:mobile,userIsAuthenticated:isAuthenticated,userIsAuthorized:isAuthorized,userAddress:address,userId:currentUserId})
    }
  },[]);

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
  {authContext.loading ? <>
    <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator animating={true} color="black" size={35}/>

    </View> 
  </>:<>

  <View style={styles.topContainer}>
    <View style={{position:"absolute",top:0,right:0}}>
      <TouchableOpacity 
      
      style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"black",borderRadius:2}}>
       {personalDetails.userIsAuthorized==="false" ? <>
       <Image source={require("../assets/subscription.png")} style={{width:30,height:30}}/>
        <Text style={{color:"white"}}>Free Account</Text></> : <>
        <>
       <Image source={require("../assets/premium.png")} style={{width:30,height:30}}/>
        <Text style={{color:"white"}}>Premium</Text></>
        </>}
      </TouchableOpacity>
    </View>
  <Image source={require("../assets/avatar.png")} style={{width:50,height:50,marginTop:20}}/>
  <Text style={{marginTop:10,fontSize:18,fontFamily:PoppinsLight}}>
    <Text>Hey, </Text>
    <Text>{personalDetails.userName}</Text>
    <Image source={require("../assets/wave.png")} style={{width:30,height:20}}/>

  </Text>
    {/* <Text style={{color:"white"}}>{personalDetails.userEmail}</Text>
    <Text style={{color:"white"}}>{personalDetails.userMobile}</Text>
    <Text style={{color:"white"}}>{personalDetails.userAddress}</Text> */}

  </View>
  <View style={styles.bottomContainer}>
    <Card style={{borderRadius:5,backgroundColor:"white"}}>
    <Chip icon={require("../assets/list.png")} 
    textStyle={{fontFamily:PoppinsRegular}}
    onPress={() => console.log('Pressed')}>Personal Info</Chip>

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
        <Text> OrderID-1 - {personalDetails.currentOrderId1}</Text>
        <Text> OrderID - {personalDetails.currentOrderId}</Text>
        </Text>
        

        <Button mode="contained" onPress={()=>authContext.logout()}>
          <Text>LOGOUT   </Text>
          <Image source={require("../assets/logout.png")} style={{width:25,height:25}}/>
        </Button>
      </Card.Content>

      <Card.Content>
    
      </Card.Content>
    </Card>
  </View>

{personalDetails.userIsAuthorized==="false"?  
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
    height:350,
    paddingHorizontal:5,
    gap:10,
    marginTop:30
  },
  cardContent:{
    gap:25,
    marginTop:15
  },
  text:{fontSize:15,fontFamily:PoppinsLight}
  
})

