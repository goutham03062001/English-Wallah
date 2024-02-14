import { Dimensions, StyleSheet, Text, View,Image,Alert,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserImage from "../assets/user.png";
import MobileImage from "../assets/phone.png";
import AddressImage from "../assets/address.png";
import EmailImage from "../assets/email.png";
import BestScore from "../assets/bestscore.png";
import {StripeProvider,CardField,useConfirmPayment,useStripe} from "@stripe/stripe-react-native"
import { Button, TextInput } from 'react-native-paper';
import { BACKEND_API_URL } from '../utils/Constants';
import RazorpayCheckout from 'react-native-razorpay';
const PersonalDetails = () => {


  return (
    // <StripeProvider publishableKey='pk_live_51OUQghSGAfyPJpXo7TJcz8AUl5bhSg6lW5eoEnbxauwYse0pGej2ZxAl3bLOHbsViDeSdynPA4CPpzHlbtJhiN5h002CyoHHni'>
    //   <StripeApp/>
    // </StripeProvider>
    <View>

<TouchableOpacity onPress={() => {
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
</TouchableOpacity>
    </View>
  )
}




const StripeApp = ()=>{
  const[email,setEmail] = useState();
  const[cardDetails,setCardDetails] = useState();
  const[loading,setLoading] = useState(false);
  // const{confirmPayment,loading} = useConfirmPayment();
  const {initPaymentSheet,presentPaymentSheet} = useStripe();
  const fetchPaymentIntentClientSecret = async ()=>{

    try {
      console.log("fetch payment intent client triggered");
      const response = await fetch(`${BACKEND_API_URL}/api/payment/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const { clientSecret, error } = await response.json();
      
      return { clientSecret, error };
    } catch (error) {
      console.log("Error Occurred - ", error);
    }
    }
  async function handlePayPress(){
  
    //1. customer billing information
    // if(!cardDetails?.complete || !email){
    //   return Alert.alert("Warning","please fill all the details")
    // }
    setLoading(true);
    const billingDetails = {
      email : email,
      name:"Goutham"
    }

    //2. fetch intent client and secret from backend
    try {
     
      const {clientSecret,error} = await fetchPaymentIntentClientSecret();
      console.log("client secret - ",clientSecret);
      setLoading(false);
      function delayFun(){
        setTimeout(()=>{
          console.log("Waiting for 2 seconds")
        },2000);
      }
      
      if(error){
        Alert.alert("Error ","error occurred while fetching payment intent")
      }else{
    //     const {paymentIntent,error} = await confirmPayment(clientSecret,{ paymentMethodType: "Card",paymentMethodData: {
    //     billingDetails:billingDetails,
    //   },
    
    // });
    //     if(error){
    //       Alert.alert("error ","error ocurred while fetching payment intent1"+error.message);
    //       console.log("Error occurred while confirm payment",error);
    //     }else if(paymentIntent){
    //       console.log("payment successful - ",paymentIntent)
    //     }

        const initSheet = await initPaymentSheet({paymentIntentClientSecret:clientSecret,merchantDisplayName:"EnglishWallah"});
          console.log("InitPayment Sheet Called")
        if(initSheet.error){
          return Alert.alert("Error",initSheet.error.message)
        }
        delayFun();
        const presentSheet = await presentPaymentSheet({clientSecret});
        console.log("PresentPayment Sheet Called")

        if(presentSheet.error){
          return Alert.alert("Error",presentSheet.error.message)
        }else{
          const userId = await AsyncStorage.getItem("userId");
          const webHookResponse = await fetch(BACKEND_API_URL+`/api/payment/webhook`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
              "userId":userId
            },
            
          });
          console.log("webHookResponse",webHookResponse);
          //  Alert.alert("Success","Payment done successfully");
        }
      }
    } catch (error) {
      console.log("Error Occurred - ",error)
    }

    //3. confirm the payment with card details
  }
  return(<>
    <View>
    

      <Button onPress={handlePayPress}>{loading?"Loading.. Please Wait":"Pay now"}</Button>
    </View>
  </>)
}

export default PersonalDetails

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    padding:15
  },
  cardContainer:{
    width:Dimensions.get("screen").width-19,
    height:300,
    backgroundColor:"#7FC7D9",
    padding:10,
    gap:15,
    borderRadius:10
  },
  cardInnerContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:20,
    paddingTop:10,
    paddingLeft:10
  },
  card:{
    backgroundColor:"#efefefef", 
  },
  CardFieldContainer:{
    height:50,
    marginVertical:20
  }
})