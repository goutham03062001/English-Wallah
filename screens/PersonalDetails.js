import { Dimensions, StyleSheet, Text, View,Image,Alert } from 'react-native'
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
const PersonalDetails = () => {


  return (
    <StripeProvider publishableKey='pk_test_51OUQghSGAfyPJpXobHMlWtoWUU4qzKEet45ExByPc4wnVGyYKoeNpxKGQhBscB1LlnSjgL8X8DdFHoXmFnxvdwjX00yoLf9hDX'>
      <StripeApp/>
    </StripeProvider>
  )
}




const StripeApp = ()=>{
  const[email,setEmail] = useState();
  const[cardDetails,setCardDetails] = useState();
  const{confirmPayment,loading} = useConfirmPayment();
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

    const billingDetails = {
      email : email,
      name:"Goutham"
    }

    //2. fetch intent client and secret from backend
    try {
     
      const {clientSecret,error} = await fetchPaymentIntentClientSecret();
      console.log("client secret - ",clientSecret)
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
        if(initSheet.error){
          return Alert.alert("Error",initSheet.error.message)
        }
        const presentSheet = await presentPaymentSheet({clientSecret});
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
    

      <Button onPress={handlePayPress}>Pay now</Button>
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