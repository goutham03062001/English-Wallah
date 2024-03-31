import { StyleSheet, Text, View ,ScrollView,Pressable,Dimensions,Image, Alert} from 'react-native'
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native';
import FillIntheBlanks from "./FillInTheBlanks";
import axios from 'axios';
import { BACKEND_API_URL } from '../../../../utils/Constants';
import Paynow from "./Paynow"
const BlanksHelper = ()=>{

    const StartingScreen = ()=>{
    const navigation = useNavigation();
    const[loading,setLoading] = useState(false);
    const [personalDetails,setPersonalDetails] = useState({
      userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:"",userId:""
    });
    useEffect(()=>{
      async function getCurrentPersonDetails(){
        try {
          setLoading(true);
          console.log("Getting current person details");
          const id = await AsyncStorage.getItem("userId");
          const response = await axios.get(BACKEND_API_URL+"/Auth/currentPerson/"+id);
          if(response.data){
            console.log("Response data - ",response.data);
          setLoading(false);
  
            setTimeoutFun();
         updateDetails();
          }else{
            return Alert.alert("Failed","You are not at all a subscribed person")
          }
  
  
          function setTimeoutFun(){
            setTimeout(()=>{},3000)
          }
          
          function updateDetails(){
            console.log(
              "USER AUTH STATUS =============================="+response.data.isAuthenticated
            )
            setPersonalDetails({userName:response.data.name, 
              userEmail:response.data.email, 
              userMobile:response.data.mobile,
              userIsAuthorized:response.data.isAuthenticated,
              userAddress:response.data.address,
              userIsAuthenticated:response.data.isAuthenticated,
              userId:response.data._id})
          }
        } catch (error) {
          setLoading(false);
  
          return Alert.alert("Error Occurred","Get personal details error")
        }
      }
      getCurrentPersonDetails();
      console.log("USER STATUS - "+personalDetails.userIsAuthorized)
     
    },[])
  
      return(<>
      <View style={styles.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable
            onPress={() => personalDetails.userIsAuthorized?  navigation.navigate("Parts of Speech",{data : "parts of speech"}):  Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Parts Of Speech"
                right={(props) => personalDetails && !personalDetails.userIsAuthorized ?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}
                />
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized ? navigation.navigate("Articles",{data : "articles"}):
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Articles"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized ?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized ? navigation.navigate("Prepositions",{data : "prepositions"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])
            }
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Prepositions"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized ?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized ? navigation.navigate("Tenses",{data : "tenses"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Tenses"
                                right={(props) =>personalDetails && !personalDetails.userIsAuthorized?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized ? navigation.navigate("Rewrite as Directed",{data : "rewrite as directed"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Rewrite as Directed"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
  
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized? navigation.navigate("Correction of Sentences",{data  : "correction of sentences"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Correction of Sentences"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized ?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
  
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized? navigation.navigate("Missing Letters",{data : "missing letters"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Missing Letters"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized ?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
  
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized ? navigation.navigate("Silent Letters",{data : "silent letters"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Silent Letters"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized ?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized ? navigation.navigate("Transcriptions - English Words",{data : "transcriptions"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Transcriptions - English Words"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized ?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized ? navigation.navigate("Odd Sounds",{data : "odd sounds"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Odd Sounds"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
  
          <Pressable
            onPress={() => personalDetails.userIsAuthorized ? navigation.navigate("Syllables",{data : "syllables"}) : 
            Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}
            style={{marginBottom:3}}
          >
            <Card
              style={{
                width: Dimensions.get("screen").width - 5,
                height: 70,
                marginTop: 10,
                borderRadius: 5,
                elevation: 9,
                // iOS
                shadowColor: "red",
                shadowOffset: { width: 10, height: 21 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
  
              }}
            >
              <Card.Content style={{ display: "flex", justifyContent: "center" }}>
                <Card.Title title="Syllables"
                                right={(props) => personalDetails && !personalDetails.userIsAuthorized?(<Image source={require("../../../../assets/lock.png")} style={{width:30,height:30}}/>):""}

                />
              </Card.Content>
            </Card>
          </Pressable>
  
  
  </ScrollView>
    
    </View>
      </>)
    }
  
    return (<>
    
    
  
    <Stack.Navigator>
      <Stack.Screen name = "startingScreen" component={StartingScreen} options={{headerShown:false}}/>
      <Stack.Screen name = "Parts of Speech" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Articles" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Prepositions" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Tenses" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Rewrite as Directed" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Correction of Sentences" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Missing Letters" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Silent Letters" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Transcriptions - English Words" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Odd Sounds" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "Syllables" component={FillIntheBlanks} options={{headerShown:false}}/>
      <Stack.Screen name = "paynow" component={Paynow} options={{headerShown:false}}/>
      {/* <Stack.Screen name = "startingScreen" component={}/> */}
    </Stack.Navigator>
    </>)
  }

export default BlanksHelper

const styles = StyleSheet.create({})