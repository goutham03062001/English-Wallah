import { StyleSheet, Text, View,TextInput, Dimensions ,Alert,Image} from 'react-native'
import React,{useState,useContext} from 'react'
import { Button,ActivityIndicator } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ForgotPassword = () => {
    const authContext = useContext(AuthContext)
   const[currentPassword,setCurrentPassword] = useState('');
   const[repeatPassword,setRepeatPassword] = useState("");
   function resetButtonHandler(){
    //
    authContext.resetPassword(currentPassword);
   }
  return (
    <View>
      <View style={styles.navContainer}>
      <Text style={{fontSize:18}}>Reset Password</Text>
      </View>

      <View style={styles.mainContainer}>
      <TextInput placeholder='Enter new password'
      keyboardType="visible-password"
       style = {styles.inputContainer} placeholderTextColor="white"
        onChangeText={(e)=>setCurrentPassword(e)}
      />
         <TextInput placeholder='Enter the password again' style = {styles.inputContainer} placeholderTextColor="white"
        onChangeText={(e)=>setRepeatPassword(e)}
      />

   {authContext.loading ?<>
    {/* <Image source={require("../../assets/LoginImage.png")} style = {{width : "90%",height:"95%"}}/> */}
    <ActivityIndicator animating={true} color="brown" />
   </>:<>
   <Button mode='contained' style={{marginTop:25}}
      onPress={resetButtonHandler}>Reset Now</Button>
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
        color:"yellow",
        marginTop:15,
    },
})