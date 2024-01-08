import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserImage from "../assets/user.png";
import MobileImage from "../assets/phone.png";
import AddressImage from "../assets/address.png";
import EmailImage from "../assets/email.png";
import BestScore from "../assets/bestscore.png"
const PersonalDetails = () => {
  const[name,setName] = useState("");
  const[mobile,setMobile] = useState("");
  const[email,setEmail] = useState("");
  const[address,setAddress] = useState("");
  const[currentUserId,setCurrentUserId] = useState("");
  async function loadLocalItemDetails(){
      let currname = await AsyncStorage.getItem("name");
      let curremail = await AsyncStorage.getItem("email");
      let currmobile = await AsyncStorage.getItem("mobile");
      let curraddress = await AsyncStorage.getItem("address");
      let currUserId = await AsyncStorage.getItem("userId");
      setName(currname);
      setEmail(curremail);
      setMobile(currmobile);
      setAddress(curraddress);
      setCurrentUserId(currUserId);
  }
  loadLocalItemDetails();



  return (
    <View style={styles.rootContainer}>
     <View style={styles.cardContainer}>

     
     <View style={{display:"flex",
      flexDirection:"row-reverse",
      justifyContent:"flex-start",
      alignItems:"center",
      paddingTop:0,
      paddingLeft:10}}>
        <Image source={BestScore} style={{width:30,height:30}}/>
        <Text style={{color:"white",fontWeight:"bold"}}>Subscribed</Text>
        
      </View>

      <View style={styles.cardInnerContainer}>
        <Image source={UserImage} style={{width:30,height:30}}/>
        <Text style={{color:"white",fontWeight:"bold"}}>{name}</Text>
        
      </View>


      <View style={styles.cardInnerContainer}>
        <Image source={EmailImage} style={{width:30,height:30}}/>
        <Text style={{color:"white",fontWeight:"bold"}}>{email}</Text>
        
      </View>


      <View style={styles.cardInnerContainer}>
        <Image source={MobileImage} style={{width:30,height:30}}/>
        <Text style={{color:"white",fontWeight:"bold"}}>{mobile}</Text>
        
      </View>


      <View style={styles.cardInnerContainer}>
        <Image source={AddressImage} style={{width:30,height:30}}/>
        <Text style={{color:"white",fontWeight:"bold"}}>{address}</Text>
        
      </View>

{/*       
      <View style={styles.cardInnerContainer}>
        <Image source={AddressImage} style={{width:30,height:30}}/>
        <Text style={{color:"white",fontWeight:"bold"}}>{currentUserId}</Text>
        
      </View> */}
     </View>
    </View>
  )
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
  }
})