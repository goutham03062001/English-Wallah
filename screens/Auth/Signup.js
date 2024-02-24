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
          <TextInput
            placeholder="Enter your name"
            style={styles.inputContainer}
            placeholderTextColor="white"
            onChangeText={(e) => {
              setName(e);
            }}
          />

          <TextInput
            placeholder="Enter your email"
            style={styles.inputContainer}
            placeholderTextColor="white"
            onChangeText={(e) => {
              setEmail(e);
            }}
          />

          <TextInput
            placeholder="Enter your mobile number"
            style={styles.inputContainer}
            placeholderTextColor="white"
            onChangeText={(e) => {
              setMobile(e);
            }}
          />

          <TextInput
            placeholder="Create your password"
            style={styles.inputContainer}
            placeholderTextColor="white"
            onChangeText={(e) => {
              setPassword(e);
            }}
          />

          <TextInput
            placeholder="Enter your address"
            style={styles.inputContainer}
            placeholderTextColor="white"
            onChangeText={(e) => {
              setAddress(e);
            }}
          />

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
              marginVertical: 18,
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
    backgroundColor: "#C3DDDD",
  },
  topContainer: {
    width: "100%",
    height: "35%",
    backgroundColor: "white",
    borderBottomRightRadius: Dimensions.get("screen").width / 2,
  },
  bottomContainer: {
    width: "100%",
    height: "55%",
    padding: 18,
  },
  inputContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#9D44C0",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    color: "yellow",
    fontWeight: "bold",
  },
  btn: {
    width: "100%",
    marginTop: 20,
    padding: 5,
  },
});

export default Signup;
