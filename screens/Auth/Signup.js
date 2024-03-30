import React, { useState, useContext ,useEffect} from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { Button as PaperButton, ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import * as Device from 'expo-device';
import { PoppinsRegular,PoppinsLight } from "../../utils/FontHelper";

const Signup = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const [deviceInfo, setDeviceInfo] = useState(null);
  const authContext = useContext(AuthContext);
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
    
  }, []);

  async function signupHandler() {
    if(name==="" || email === "" || password === "" || address === "" || mobile === "" ){
      return Alert.alert("Registration Failed","Please fill all the required fields");    }
    authContext.signup(name, email, password, address, mobile,deviceInfo);
  }
  function LoginComponentHandler() {
    navigation.navigate("Login");
  }
  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.topContainer}>
          {/* <Text style={{textAlign:'center',paddingVertical:10,fontSize:18,color:"#8338ec"}}>CREATE NEW ACCOUNT </Text> */}
          <Image
            source={require("../../assets/SignupImage.png")}
            style={{ width: "90%", height: "95%" }}
          />
        </View>
        <View style={styles.bottomContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
          
         <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:8}}>
          <Text style={{fontSize:12,fontFamily:PoppinsLight,marginLeft:5,color:"red"}}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.inputContainer}
            placeholderTextColor="#332D2D"
            
            onChangeText={(e) => {
              setName(e);
            }}
          />
         </View>

         <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:8}}>
         <Text style={{fontSize:12,fontFamily:PoppinsRegular,marginLeft:5,color:"red"}}>Email</Text>

         <TextInput
            placeholder="Enter your email"
            style={styles.inputContainer}
            placeholderTextColor="#332D2D"
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
         </View>

         <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:8}}>
         <Text style={{fontSize:12,fontFamily:PoppinsLight,marginLeft:5,color:"red"}}>Mobile</Text>

          <TextInput
            placeholder="Enter your mobile number"
            style={styles.inputContainer}
            placeholderTextColor="#332D2D"
            onChangeText={(e) => {
              setMobile(e);
            }}
          />
          </View>

          <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:8}}>
          <Text style={{fontSize:12,fontFamily:PoppinsLight,marginLeft:5,color:"red"}}>Password</Text>

          <TextInput
            placeholder="Create your password"
            style={styles.inputContainer}
            placeholderTextColor="#332D2D"
            onChangeText={(e) => {
              setPassword(e);
            }}
          />
          </View>
        
          <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:8}}>
          <Text style={{fontSize:12,fontFamily:PoppinsLight,marginLeft:5,color:"red"}}>Address</Text>

         <TextInput
            placeholder="Enter your address"
            style={styles.inputContainer}
            placeholderTextColor="#332D2D"
            onChangeText={(e) => {
              setAddress(e);
            }}
          />
         </View>

          <View style={styles.btn}>
            {authContext.loading ? (
              <>
                <ActivityIndicator animating={true} color="brown" />
              </>
            ) : (
              <Button title="Signup" onPress={signupHandler} color="#504099" />
            )}
          </View>

          <View
            style={{
              marginVertical:1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text>Already have an account ?</Text>
            </View>
            <PaperButton onPress={LoginComponentHandler}>
              Login here
            </PaperButton>
          </View>
  
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // padding: 18,
    backgroundColor:"#C3DDDD"
  },
  topContainer: {
    width: "100%",
    height: "35%",
    backgroundColor: "#FFFFFF",
    borderBottomRightRadius: Dimensions.get("screen").width / 2,
  },
  bottomContainer: {
    width: "100%",
    height: "65%",
    padding: 10,
    display:"flex",
    justifyContent: "center",
    alignItems:"center"
  },
  inputContainer: {
    width: Dimensions.get("screen").width-30,
    height: 50,
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily:PoppinsRegular,
    color:"black",
    
  },
  btn: {
    width: "100%",
    marginTop: 5,
    padding: 5,
    borderRadius:10,
     
     },
});

export default Signup;
