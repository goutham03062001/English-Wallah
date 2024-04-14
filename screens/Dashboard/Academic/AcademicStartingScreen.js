import { View, Text,ScrollView,StyleSheet,Pressable, Alert,Image } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import { Card ,ActivityIndicator} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { BACKEND_API_URL } from '../../../utils/Constants';
import { AuthContext } from '../../../context/AuthContext';
const Classes = () => {
  
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);
  const [personalDetails,setPersonalDetails] = useState({
    userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:"",userId:""
  });
  const[loading,setLoading] = useState(false);
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
  return (
  <>
    {authContext.loading ? <>
      <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator animating={true} color="black" size={35}/>

    </View>

    </> : <>
    <ScrollView style={{backgroundColor:"#DED0B6"}}>
     <View style={{flex:1,width:"100%",height:"100%",flexDirection:"column",justifyContent:"flex-start"}}>
     
       <View style={styles.rootContainer}>

        <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Noun's") : Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
        <Card style={{backgroundColor:"#FFDE7D"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}} >
            <Text style={{color:"black",fontSize:16,textAlign:"center",textAlign:"center"}}>Noun</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>
        </Card.Content>
      </Card>
        </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized?navigation.navigate("Pronoun"):Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#435585"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Pronoun</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Adjective") : 
      Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
      <Card style={{backgroundColor:"#6C5B7B"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Adjective</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Adverb") : 
      Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
      <Card style={{backgroundColor:"#A084E8"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Adverb</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>
<Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Preposition") : 
Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
  
<Card style={{backgroundColor:"#00ADB5"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Preposition</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
</Pressable>

<Pressable onPress={()=>personalDetails.userIsAuthorized ? navigation.navigate("Conjunction") : 
Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
  
<Card style={{backgroundColor:"#6A2C70"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Conjunction</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
</Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized ? navigation.navigate("Verb") : 
      Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
      <Card style={{backgroundColor:"#0F4C75"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Verb</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Non-Finite Verbs"): 
      Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
      <Card style={{backgroundColor:"#594545"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Non-Finite Verbs</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("QuestionTags") : 
      Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
      <Card style={{backgroundColor:"#40514E"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Question Tags</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized ? navigation.navigate("Subject-Verb Agreement"): 
      Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
      <Card style={{backgroundColor:"#2B2E4A"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Subject-Verb Agreement</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized ? navigation.navigate("Figures Of Speech"): 
      Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
      <Card style={{backgroundColor:"#435585"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Figures Of Speech</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Articles") : 
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#903749"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Articles</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Determines") : 
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
          <Card style={{backgroundColor:"#53354A"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Determines</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Modifiers"): 
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#6C5B7B"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Modifiers</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Active And Passive Voice"): 
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#FFDE7D"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"black",textAlign:"center",fontSize:16}}>Active Voice Passive Voice</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>
      

     <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Direct and Indirect Speech"): 
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#435585"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Direct and Indirect Speech</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("IfClause"): 
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#00ADB5"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>IfClause</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>


     <Pressable onPress={()=>personalDetails.userIsAuthorized?navigation.navigate("Tenses And Time"):
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#6A2C70"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Tenses And Time</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized?navigation.navigate("Phrase") : 
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#594545"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Phrase</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>


     <Pressable onPress={()=>personalDetails.userIsAuthorized? navigation.navigate("Clause"): 
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#40514E"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Clause</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized?navigation.navigate("Simple Compound Complex"):
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>
     <Card style={{backgroundColor:"#903749"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Simple Compound Complex</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized?navigation.navigate("Formation of Sentence"):
     Alert.alert("Unauthorized","Please complete your payment to unlock",[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>{return navigation.navigate("paynow")}}
      ])}>

     <Card style={{backgroundColor:"#2B2E4A"}}>
        <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:50}}>
            <Text style={{color:"white",textAlign:"center",fontSize:16}}>Formation Of Sentence</Text>
            <>{!personalDetails.userIsAuthorized ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>
            
        </Card.Content>
      </Card>
     </Pressable>

     
    </View>
       
    </View>
   </ScrollView>
    </>}
  </>
  )
}

export default Classes

const styles = StyleSheet.create({
  rootContainer:{
      padding:10,
      gap:15,
  }
})