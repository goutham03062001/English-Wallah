import React, { useState, useContext,useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions ,Linking,Modal,Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./context/AuthContext";
import * as Font from "expo-font";
import Signup from "./screens/Auth/Signup";
import Login from "./screens/Auth/Login";
import DashboardHandler from "./screens/Dashboard/DashboardHandler";
import PersonalDetails from "./screens/PersonalDetails";
import { AuthContext } from "./context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForgotPassword from "./screens/Auth/ForgotPassword";
import ResetPassword from "./screens/Auth/ResetPassword";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
import axios from "axios"
import AnimatedSplash from "react-native-animated-splash-screen";
import StartingScreen from "./screens/NotificationScreen";
import { BACKEND_API_URL } from "./utils/Constants";
import Constants from 'expo-constants';


// Call the function when the app starts or at regular intervals


function AuthStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={ForgotPassword} options={{headerShown:false}}/>
        <Stack.Screen name="Reset" component={ResetPassword} options={{headerShown:false}}/>
      </Stack.Navigator>
    </>
  );
}
function Authenticated() {
  return (
    <>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="dashboard"
          component={DashboardHandler}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("./assets/Home.png")}
                style={{ width: 25, height: 28 }}
              />
            ),
            headerShown: false,
            tabBarActiveBackgroundColor: "#BC7AF9",
            tabBarInactiveBackgroundColor: "#ffff",
            tabBarActiveTintColor: "white",
            tabBarItemStyle: {
              borderRadius: 1,
              padding: 2,
              borderBottomRightRadius: 25,
              borderTopRightRadius: 1,
            },
          }}
        />

        <BottomTab.Screen
          name="Notifications"
          component={StartingScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("./assets/Notifications.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
            headerShown: false,
            tabBarActiveBackgroundColor: "#191D88",
            tabBarActiveTintColor: "white",
            tabBarItemStyle: {
              borderRadius: 1,
              padding: 2,
              borderBottomRightRadius: 25,
              borderTopRightRadius: 1,
            },
          }}
        />
        <BottomTab.Screen
          name="Personal Details"
          component={PersonalDetails}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("./assets/account.png")}
                style={{ width: 30, height:  30}}
              />
            ),
            tabBarActiveBackgroundColor: "#BC7AF9",
            tabBarActiveTintColor: "white",
            tabBarItemStyle: {
              borderRadius: 1,
              padding: 2,
              borderBottomRightRadius: 25,
              borderTopRightRadius: 1,
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}

async function isAuthenticatedFun() {
  const authContext = useContext(AuthContext);
  let isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
  let name = await AsyncStorage.getItem("name");
  let email = await AsyncStorage.getItem("email");
  let isAuthorized = await AsyncStorage.getItem("isAuthorized");
  let mobile = await AsyncStorage.getItem("mobile");
  // console.log("isAuthKey :",isAuth);
  // console.log("role",currentRole);
  // console.log("Id",currentStudentId);
  console.log("name - ", name);
  console.log("email - ", email);
  console.log("isAuthorized - ", isAuthenticated);
  console.log("mobile - ", mobile);

  if (isAuthenticated !== null) {
    authContext.authenticateFun();
    authContext.updateCurrentStatus(email, isAuthorized);
  } else {
    authContext.removeAuthenticate();
  }
}
function NavigationComponent() {
  const authContext = useContext(AuthContext);
  isAuthenticatedFun();
  return (
    <NavigationContainer>
      {!authContext.authenticated && <AuthStack />}
      {authContext.authenticated && <Authenticated />}
    </NavigationContainer>
  );
}

function App() {
  const authContext = useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const [latestVersion, setLatestVersion] = useState(null);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const[showModal,setShowModal] = useState(false);
  useEffect(() => {
    const checkForUpdate = async () => {
      try {
        // if (Constants.types.releaseChannel === 'production') {
        //   // Production environment
        // } else {
        //   // Development environment
        // }
        const response = await axios.get(BACKEND_API_URL+"/api/appVersion/getAppVersion");
        const data =  response.data;
      const currentVersion = Constants.expoConfig.version;
        const latestVersion = data[0].version;
        const shouldShow = data[0].show;

        function setTimeOutFunction(){
          setTimeout(()=>{
            setLatestVersion(latestVersion);
            console.log("Is shown --- ",data[0].show);
            setShowModal(data[0].show);
          console.log("data",latestVersion);
          },3000)
        }
        setTimeOutFunction();
        console.log("Current Version ------------------"+currentVersion);
        console.log("Latest Version ------------------"+latestVersion);
        if (latestVersion !== currentVersion) {
          setUpdateAvailable(true);

        }
      } catch (error) {
        console.error('Error checking for update: ', error);
      }
    };

    checkForUpdate();
  }, []);
  const handleUpdatePress = () => {
    Linking.openURL("https://play.google.com/store/apps/details?id=com.goutham0306.EnglishWallah");
  };
  setTimeout(() => {
    setLoading(true);
  }, 5000);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
        'Poppins-Regular':require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold':require("./assets/fonts/Poppins-Bold.ttf"),
        'Poppins-Medium':require("./assets/fonts/Poppins-Medium.ttf")
        // Add more fonts as needed
      });
    }

    loadFonts();
    authContext.loadCurrentPersonDetails();
  }, []);
  return (
    <>
        <AuthContextProvider>
      <View style={styles.container}>
          <AnimatedSplash
            translucent={true}
            isLoaded={loading}
            logoImage={require("./assets/SplashAnimated.gif")}
            backgroundColor={"#1cccad"}
            logoHeight={Dimensions.get("window").width}
            logoWidth={Dimensions.get("window").height}
          >
           
            <NavigationComponent />
            <Modal
        visible={updateAvailable && showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Required</Text>
            <Text style={styles.modalText}>
              A new version of the app is available. Please update to continue using the app.
            </Text>
            <Button title="Update Now" onPress={handleUpdatePress} />
            
          </View>
        </View>
      </Modal>
          </AnimatedSplash>
      </View>
        </AuthContextProvider>

      
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 20,
  },
});

export default App;
