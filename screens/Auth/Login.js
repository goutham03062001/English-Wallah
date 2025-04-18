import React,{useState,useContext,useEffect} from 'react';
import {View, StyleSheet,Text,TextInput,Button,Alert,Image,Dimensions} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import {Button as PaperButton,ActivityIndicator} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import { PoppinsLight, PoppinsRegular } from '../../utils/FontHelper';
import * as Device from 'expo-device';

const Login = () => {
    const[mobile,setMobile] = useState('');
    const[password,setPassword] = useState('');
  const [role, setRole] = useState("Student");
  const [deviceInfo, setDeviceInfo] = useState(null);

    const navigation = useNavigation();
    const authContext = useContext(AuthContext);
    function RestPasswordFunctionHandler(){
      return navigation.navigate("Forgot")
    }
    useEffect(() => {

      // ...
      
      const getDeviceInfo = async () => {
        try {
          // Get the device ID
          // const deviceId = await Device.getDeviceIdAsync();
          // console.log('Device ID:', deviceId);
      
          // You can also retrieve other device information
          const brand = Device.brand;
          // const modelId = Device.modelId;
          const modelName = Device.modelName;
          const deviceType = Device.deviceType;
      
          console.log('Brand:', brand);
          console.log('Model Name:', modelName);
          console.log('Device Type:', deviceType);
          console.log("Device Type typo - ",typeof(deviceType))
          function setTimeOutFunction(){
            setTimeout(()=>{},2000);
          }
          setTimeOutFunction();
         let deviceObj = { 
          brand:brand,modelName:modelName,deviceType:deviceType
         }
          setDeviceInfo(deviceObj)
        } catch (error) {
          console.error('Error fetching device information:', error);
        }
      };
      
      // Call the function to get device information
      getDeviceInfo();
      console.log("Device Info",deviceInfo)
    }, []);
   async function loginHandler(){
      console.log("Login handler function ");
      console.log(deviceInfo);
            authContext.studentLogin(mobile,password,deviceInfo);
        
       
     
       
        // Alert.alert("Your credentials",name + " "+mobile+" "+age)
        // await AsyncStorage.setItem("mobile",mobile);
        // authContext.signup(mobile);
    }
    function LoginComponentHandler(){
        navigation.navigate("Signup")
    }
    return (
        <View style={styles.rootContainer}>
            <View style={styles.topContainer}>
            {/* <Text style={{textAlign:'center',paddingVertical:10,fontSize:18,color:"#8338ec"}}>LOGIN</Text> */}
      <Image source={require("../../assets/LoginImage.png")} style = {{width : "90%",height:"95%"}}/>
            </View>

            <View style={styles.bottomContainer}>
            {/* <Picker
        style={styles.inputContainer}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        selectedValue={role}
      >
      </Picker> */}
             {role === "Student" && <>
            <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
            <Text style={{fontSize:12,fontFamily:PoppinsLight,marginLeft:5}}>Mobile Number</Text>
             <TextInput placeholder='Enter your  mobile number' style = {styles.inputContainer}
                onChangeText={ (e)=>{setMobile(e)}}
                placeholderTextColor="#332D2D"
            />
            </View>
             
             <View style={{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:20}}>
             <Text style={{fontSize:12,fontFamily:PoppinsLight,marginLeft:5}}>Password</Text>

            
            <TextInput placeholder='Enter your password' style = {styles.inputContainer}
                onChangeText={ (e)=>{setPassword(e)}}
                placeholderTextColor="#332D2D"

                />
             </View>

           
             </>}
            
            
            <View style={styles.btn}>
            {
          authContext.loading ?           <ActivityIndicator animating={true} color="brown" />
 : <Button title="Login" style={styles.btn} onPress={loginHandler} color="#504099"/>
        }
            </View>

            <View style={{marginVertical:2,flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
                <View>
                    <Text>Forgot Password?</Text>
                </View>
                <PaperButton onPress= {RestPasswordFunctionHandler}>Reset now</PaperButton>
            </View>

            <View style={{marginVertical:2,flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
                <View>
                    <Text>Don't have an account ?</Text>
                </View>
                <PaperButton onPress= {LoginComponentHandler}>Signup here</PaperButton>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        flexDirection:"column",
        justifyContent: "flex-start",
        alignItems:"center",
        // padding: 18,
        backgroundColor:"#C3DDDD"
      },
      topContainer:{
        width:"100%",
        height:"40%",
        backgroundColor:"white",
        padding:10,
        borderBottomRightRadius:Dimensions.get("screen").width/1.2
      },
      bottomContainer:{
        width:"100%",
        height:"50%",
        padding:18
      },
      inputContainer: {
        width: "100%",
        height: 53,
        backgroundColor: "#F5F5F5",
        borderWidth: 1,
        borderColor: "black",
        marginTop: 1,
        padding: 5,
        borderRadius: 10,
        fontFamily:PoppinsRegular,
        color:"black"
      },
    btn:{
        width:"100%",
        marginTop:25,
        padding:2
    }
})

export default Login;
