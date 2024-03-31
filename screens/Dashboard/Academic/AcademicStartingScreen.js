import { View, Text,ScrollView,StyleSheet,Pressable, Alert,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Classes = () => {
  
  const [personalDetails,setPersonalDetails] = useState({
    userName : "",userEmail: "",userMobile:"",userIsAuthenticated:"",userIsAuthorized:"",userAddress:""
  });
  const navigation = useNavigation();
  useEffect(()=>{
    var isAuthenticated,name,email,isAuthorized,mobile,address
    async function getDetails(){
       isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
       name = await AsyncStorage.getItem("name");
       email = await AsyncStorage.getItem("email");
       isAuthorized = await AsyncStorage.getItem("isAuthorized");
       mobile = await AsyncStorage.getItem("mobile");
       address = await AsyncStorage.getItem("address");
       setTimeoutFun();
       updateDetails();
    }
    getDetails();
    function setTimeoutFun(){
      setTimeout(()=>{},2000)
    }
    
    function updateDetails(){
      setPersonalDetails({userName:name, userEmail:email, userMobile:mobile,userIsAuthenticated:isAuthenticated,userIsAuthorized:isAuthorized,userAddress:address})
    }
  },[])
  return (
   <ScrollView style={{backgroundColor:"#DED0B6"}}>
     <View style={{flex:1,width:"100%",height:"100%",flexDirection:"column",justifyContent:"flex-start"}}>
     
       <View style={styles.rootContainer}>

        <Pressable onPress={()=>personalDetails.userIsAuthorized==="true" ? navigation.navigate("Noun's") : Alert.alert("Unauthorized","Please complete your payment to unlock",[
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>
        </Card.Content>
      </Card>
        </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"?navigation.navigate("Pronoun"):Alert.alert("Unauthorized","Please complete your payment to unlock",[
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized==="true" ? navigation.navigate("Adjective") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized==="true" ? navigation.navigate("Adverb") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>
<Pressable onPress={()=>personalDetails.userIsAuthorized==="true" ? navigation.navigate("Preposition") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
</Pressable>

<Pressable onPress={()=>personalDetails.userIsAuthorized ==="true"? navigation.navigate("Conjunction") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
</Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized ==="true" ? navigation.navigate("Verb") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"? navigation.navigate("Non-Finite Verbs"): 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized==="true" ? navigation.navigate("QuestionTags") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>personalDetails.userIsAuthorized ==="true"? navigation.navigate("Subject-Verb Agreement"): 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
      </Pressable>


     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"? navigation.navigate("Articles") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"? navigation.navigate("Determines") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true" ? navigation.navigate("Modifiers"): 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"? navigation.navigate("Active And Passive Voice"): 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>
      

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"? navigation.navigate("Direct and Indirect Speech"): 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"? navigation.navigate("IfClause"): 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>


     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"?navigation.navigate("Tenses And Time"):
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"?navigation.navigate("Phrase") : 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>


     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true" ? navigation.navigate("Clause"): 
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"?navigation.navigate("Simple Compound Complex"):
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>

        </Card.Content>
      </Card>
     </Pressable>

     <Pressable onPress={()=>personalDetails.userIsAuthorized==="true"?navigation.navigate("Formation of Sentence"):
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
            <>{personalDetails.userIsAuthorized==="false" ? <Image source={require("../../../assets/lock.png")} style={{width:30,height:30}}/>:""}</>
            
        </Card.Content>
      </Card>
     </Pressable>

     
    </View>
       
    </View>
   </ScrollView>
  )
}

export default Classes

const styles = StyleSheet.create({
  rootContainer:{
      padding:10,
      gap:15,
  }
})