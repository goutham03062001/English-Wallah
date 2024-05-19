import { Dimensions, StyleSheet, Text, View ,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import { Card,Button } from 'react-native-paper';
import { PoppinsBold ,PoppinsLight} from '../../../../utils/FontHelper';
import axios from "axios"
import { BACKEND_API_URL } from '../../../../utils/Constants';
import { useNavigation } from '@react-navigation/native';
const Results = ({route}) => {
    const {correct,wrong,missed,quizId} = route.params;
    console.log("quiz id - ",quizId);
    const navigation = useNavigation();
    const[loading,setLoading] = useState(false);
    const[currentIndex,setCurrentIndex] = useState("");
    useEffect(()=>{
        async function getIndex(){
            setLoading(true);
            try {
                const response = await axios.get(BACKEND_API_URL+"/api/Quiz/upload/getEnglishPedagogyIndex/"+quizId);
                if(response.data){
                    setLoading(false);
                    setCurrentIndex(response.data.index);
                }
            } catch (error) {
            setLoading(false);
            setCurrentIndex("");

                return Alert.alert("Oops!","Something went wrong, please retry after sometime");
            }
        }
        getIndex();
    },[quizId])
  return (
    <View style={styles.rootContainer}>
    {loading ? <>
        <Text style={{textAlign:'center',fontSize:25}}>Loading.. Please Wait</Text>
    </>:<>

    <Text style={{fontFamily:PoppinsLight,fontSize:24,color:"green",textAlign:'center'}}>Your Quiz Results of English Pedagogy - {currentIndex+1}</Text>
        <View style={{width:Dimensions.get("screen").width-30,padding:5}}>
            {/* Top Container */}
            <Card style={{borderRadius:0}}>
                <Card.Title title={`English Pedagogy - ${currentIndex+1}`}
                    titleStyle={{position:"absolute",right:10,top:0}}
                />

                <Card.Content style={styles.cardContentLayout}>
                    <Text style={{fontFamily:PoppinsBold}}>Correct Answers - {correct}</Text>
                    <Text style={{fontFamily:PoppinsBold}}>Wrong Answers - {wrong}</Text>
                    <Text style={{fontFamily:PoppinsBold}}>Missed Questions - {missed}</Text>
                </Card.Content>
            </Card>
        </View>

        <View>
            {/* Bottom Container */}

            <Button mode="outlined" onPress={()=>navigation.navigate("English Pedagogy",{load : true})}>Back To Practice</Button>
        </View>
    </>}
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    rootContainer:{
        padding:10,
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        gap:30
    },
    cardContentLayout:{
        gap:20,
        borderRadius:0,
        marginTop:30
    }
})