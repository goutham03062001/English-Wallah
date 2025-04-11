// paymentService.js

import RazorpayCheckout from 'react-native-razorpay';
import { useState } from 'react';
const thresholdAmount = 2;
  const payableAmount = thresholdAmount*1;
async function paymentFunction(createOrderFunction,updateAuthorization, userInformation) {
  const [successData, setSuccessData] = useState(null); // State for success data
  
  createOrderFunction(); // Call the function passed as an argument to create an order
  // Rest of your paymentFunction logic here...

  var options = {
    description: 'English Wallah App Subscription',
    image: require("../assets/icon.png"),
    currency: 'INR',
    key: 'rzp_live_J89zrEvhSQ2i1m',
    amount: thresholdAmount*100, // Making it as 200
    name: 'English Wallah | Xenicx',
    order_id: userInformation.currentOrderId,//Replace this with an order_id created using Orders API.
    prefill: {
      email:userInformation.userEmail,
      contact: userInformation.userMobile,
      name: userInformation.userName,
      address : userInformation.userAddress
    },
    theme: {color: '#53a20e'}
  }
 const response = await RazorpayCheckout.open(options);
 if(response.data){
  let currentOrderId = userInformation.currentOrderId

    alert(`Success: ${response.data.razorpay_payment_id}`);
    alert(`OrderId : ${currentOrderId}`)
    //send this payment id to backend to store
    function executeFunction(){
      setTimeout(()=>{
        setSuccessData(response.data);
      },2000)
    }
   executeFunction();
    setTimeout(()=>{
    updateAuthorization(response.data.razorpay_payment_id,userInformation.userEmail,userInformation.userId,userInformation.userMobile,successData,userInformation.userName,response.data.razorpay_order_id,currentOrderId)
    },2000);
    return {successData}
 }else{
//   return Alert.alert("Failed to activate","Failed to activate your subscription")
alert("Activation Failed","Failed to activate your subscription")
 }
}

export { paymentFunction };
