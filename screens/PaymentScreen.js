import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import {RAZORPAY_API_KEY_ID} from "@env"
import RazorpayCheckout from 'react-native-razorpay';
function handlePayment(){
    console.log("RAZORKEY - ",RAZORPAY_API_KEY_ID)
    var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.jpg',
        currency: 'INR',
        key: "rzp_test_PUie0ma6rIEWlW",
        amount: '5000',
        name: 'Acme Corp',
        order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
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
        console.log("Error Occurred !",error);
        alert(`Error: ${error.code} | ${error.description}`);
      });
}

const PaymentScreen = () => {
  return (
    <View style={{marginTop:100}}>
      <Text>PaymentScreen</Text>
      <Button mode="contained"
      onPress={handlePayment}>Pay now</Button>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})