import { Dimensions, StyleSheet, Text, View,Image,Alert,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserImage from "../assets/user.png";
import MobileImage from "../assets/phone.png";
import AddressImage from "../assets/address.png";
import EmailImage from "../assets/email.png";
import BestScore from "../assets/bestscore.png";
import {StripeProvider,CardField,useConfirmPayment,useStripe} from "@stripe/stripe-react-native"
import { Button, Card, TextInput } from 'react-native-paper';
import { BACKEND_API_URL } from '../utils/Constants';
import RazorpayCheckout from 'react-native-razorpay';
import { PoppinsLight,PoppinsRegular } from '../utils/FontHelper';
import { List,Avatar ,Chip} from 'react-native-paper';
const PersonalDetails =  () => {  
  const [personalDetails,setPersonalDetails] = useState({
    userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:""
  })
  useEffect(()=>{
    var isAuthenticated,name,email,isAuthorized,mobile,address
    async function getDetails(){
       isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
       name = await AsyncStorage.getItem("name");
       email = await AsyncStorage.getItem("email");
       isAuthorized = await AsyncStorage.getItem("isAuthorized");
       mobile = await AsyncStorage.getItem("mobile");
       address = await AsyncStorage.getItem("address");
       setTimeoutFun();
       updateDetails();
    }
    getDetails();
    function setTimeoutFun(){
      setTimeout(()=>{},2000)
    }
    
    function updateDetails(){
      setPersonalDetails({userName:name, userEmail:email, userMobile:mobile,userIsAuthenticated:isAuthenticated,userIsAuthorized:isAuthenticated,userAddress:address})
    }
  },[])
  return (
    // <StripeProvider publishableKey='pk_live_51OUQghSGAfyPJpXo7TJcz8AUl5bhSg6lW5eoEnbxauwYse0pGej2ZxAl3bLOHbsViDeSdynPA4CPpzHlbtJhiN5h002CyoHHni'>
    //   <StripeApp/>
    // </StripeProvider>
    <View>

{/* <TouchableOpacity onPress={() => {
    var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: 'INR',
    key: 'rzp_test_OeY0kwhCdi2emB',
    amount: '5000',
    name: 'Acme Corp',
    order_id: '',//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'gaurav.kumar@example.com',
      contact: '9191919191',
      name: 'Gaurav Kumar'
    },
    theme: {color: '#53a20e'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    Alert.alert("Error ",error.message)

  });
}}>
<Text>Click</Text>
</TouchableOpacity> */}

  <View style={styles.topContainer}>
  <Image source={require("../assets/avatar.png")} style={{width:50,height:50}}/>
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
        <Text style={styles.text}>Name - {personalDetails.userName}</Text>
        <Text style={styles.text}>Email - {personalDetails.userEmail}</Text>
        <Text style={styles.text}>Mobile - {personalDetails.userMobile}</Text>
        <Text style={styles.text}>Address - {personalDetails.userAddress}</Text>
      </Card.Content>

      <Card.Content>
    
      </Card.Content>
    </Card>
  </View>
    </View>
  )
}



// Stripe API
// const StripeApp = ()=>{
//   const[email,setEmail] = useState();
//   const[cardDetails,setCardDetails] = useState();
//   const[loading,setLoading] = useState(false);
//   // const{confirmPayment,loading} = useConfirmPayment();
//   const {initPaymentSheet,presentPaymentSheet} = useStripe();
//   const fetchPaymentIntentClientSecret = async ()=>{

//     try {
//       console.log("fetch payment intent client triggered");
//       const response = await fetch(`${BACKEND_API_URL}/api/payment/create-payment-intent`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const { clientSecret, error } = await response.json();
      
//       return { clientSecret, error };
//     } catch (error) {
//       console.log("Error Occurred - ", error);
//     }
//     }
//   async function handlePayPress(){
  
//     //1. customer billing information
//     // if(!cardDetails?.complete || !email){
//     //   return Alert.alert("Warning","please fill all the details")
//     // }
//     setLoading(true);
//     const billingDetails = {
//       email : email,
//       name:"Goutham"
//     }

//     //2. fetch intent client and secret from backend
//     try {
     
//       const {clientSecret,error} = await fetchPaymentIntentClientSecret();
//       console.log("client secret - ",clientSecret);
//       setLoading(false);
//       function delayFun(){
//         setTimeout(()=>{
//           console.log("Waiting for 2 seconds")
//         },2000);
//       }
      
//       if(error){
//         Alert.alert("Error ","error occurred while fetching payment intent")
//       }else{
//     //     const {paymentIntent,error} = await confirmPayment(clientSecret,{ paymentMethodType: "Card",paymentMethodData: {
//     //     billingDetails:billingDetails,
//     //   },
    
//     // });
//     //     if(error){
//     //       Alert.alert("error ","error ocurred while fetching payment intent1"+error.message);
//     //       console.log("Error occurred while confirm payment",error);
//     //     }else if(paymentIntent){
//     //       console.log("payment successful - ",paymentIntent)
//     //     }

//         const initSheet = await initPaymentSheet({paymentIntentClientSecret:clientSecret,merchantDisplayName:"EnglishWallah"});
//           console.log("InitPayment Sheet Called")
//         if(initSheet.error){
//           return Alert.alert("Error",initSheet.error.message)
//         }
//         delayFun();
//         const presentSheet = await presentPaymentSheet({clientSecret});
//         console.log("PresentPayment Sheet Called")

//         if(presentSheet.error){
//           return Alert.alert("Error",presentSheet.error.message)
//         }else{
//           const userId = await AsyncStorage.getItem("userId");
//           const webHookResponse = await fetch(BACKEND_API_URL+`/api/payment/webhook`,{
//             method:"POST",
//             headers:{
//               "Content-Type":"application/json",
//               "userId":userId
//             },
            
//           });
//           console.log("webHookResponse",webHookResponse);
//           //  Alert.alert("Success","Payment done successfully");
//         }
//       }
//     } catch (error) {
//       console.log("Error Occurred - ",error)
//     }

//     //3. confirm the payment with card details
//   }
//   return(<>
//     <View>
    

//       <Button onPress={handlePayPress}>{loading?"Loading.. Please Wait":"Pay now"}</Button>
//     </View>
//   </>)
// }

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
    borderRadius:5

  },
  bottomContainer:{
    height:300,
    paddingHorizontal:5,
    gap:10,
    marginTop:30
  },
  cardContent:{
    gap:25,
    marginTop:15
  },
  text:{fontSize:15,fontFamily:PoppinsLight}
  // cardContainer:{
  //   width:Dimensions.get("screen").width-19,
  //   height:300,
  //   backgroundColor:"#7FC7D9",
  //   padding:10,
  //   gap:15,
  //   borderRadius:10
  // },
  // cardInnerContainer:{
  //   display:"flex",
  //   flexDirection:"row",
  //   justifyContent:"flex-start",
  //   alignItems:"center",
  //   gap:20,
  //   paddingTop:10,
  //   paddingLeft:10
  // },
  // card:{
  //   backgroundColor:"#efefefef", 
  // },
  // CardFieldContainer:{
  //   height:50,
  //   marginVertical:20
  // }
})