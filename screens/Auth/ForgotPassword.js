import { StyleSheet, Text, View,TextInput, Dimensions ,Alert} from 'react-native'
import React,{useState,useContext} from 'react'
import { Button } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
const ForgotPassword = () => {
    const[userEmail,setUserEmail] = useState("");
    const[isButtonClicked,SetIsButtonClicked] = useState(false);
    const[currentOTP,setCurrentOTP] = useState(Number);
    const[isVerified,setIsVerified] = useState("");
    const authContext = useContext(AuthContext);
    const navigation = useNavigation();
    function sendVerificationCodeHandler(){
        authContext.sendEmailOTP(userEmail);
        SetIsButtonClicked(true);
    }
    async function verifyOTPHandler(){
        const currentOTPNumber = parseInt(currentOTP)
        const receivedOTP = authContext.currentOTP;
        console.log("current otp typo - ",typeof(currentOTP));
        console.log("actual otp typo - ",typeof(receivedOTP));
        if(receivedOTP===currentOTPNumber){
             Alert.alert("Verification Success","OTP Verified"+receivedOTP);
             return navigation.navigate("Reset")
        }else{
            return Alert.alert("Verification Failed","OTP not Verified"+receivedOTP)

        }
    }
  return (
    <View>
      <View style={styles.navContainer}>
      <Text style={{fontSize:18}}>Forgot Password</Text>
      </View>

      <View style={styles.mainContainer}>
     
      {isButtonClicked ? <>
        <TextInput placeholder='Enter the OTP your received' style = {styles.inputContainer} placeholderTextColor="white"
        onChangeText={(e)=>setCurrentOTP(e)}
      />
      <Button mode="contained"
      onPress={verifyOTPHandler} style={{marginTop:20,width:Dimensions.get("screen").width-100}}>Verify</Button>
      </> : <>
      <TextInput placeholder='Enter your email' style = {styles.inputContainer} placeholderTextColor="white"
        onChangeText={(e)=>setUserEmail(e)}
      />
      <Button style={{marginTop:20}} mode='contained'
      onPress={sendVerificationCodeHandler}>Send Verification Code</Button>


      </>}
      </View>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    navContainer:{
        marginTop:50,
        paddingLeft:29
    },
    mainContainer:{
        width:Dimensions.get("screen").width,
        height:Dimensions.get("screen").height-140,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:'center'
    },
    inputContainer:{
        width:"90%",
        height:50,
        backgroundColor:"#9D44C0",
        borderWidth:1,
        borderColor:"black",
        padding:10,
        borderRadius:10,
        color:"yellow"
    },
})