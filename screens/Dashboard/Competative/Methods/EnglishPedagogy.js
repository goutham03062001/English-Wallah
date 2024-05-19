import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useEffect,useState,useContext,useLayoutEffect} from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { Card ,Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const EnglishPedagogy = ({route}) => {
    const authContext = useContext(AuthContext);
    const navigation = useNavigation();
    console.log("load - ",route.params.load);
    
    
      useEffect(()=>{
       if(route.params.load){
        authContext.getAllEnglishPedagogyQuiz();
       }else{
        authContext.getAllEnglishPedagogyQuiz();

       }
    },[])
    

  
  return (
    <View>
      {authContext.loading ? <>
        <Text>Loading..</Text>
      </> : <>
        {authContext.quizExamsArr && authContext.quizExamsArr.length>0 ? (<ScrollView>

            {authContext.quizExamsArr.map((exam,index)=>{
                return(<>
                    <View>
                {/*  */}
                <Card style={{height:60,marginTop:8}}>
                  <Card.Content style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                  <Text>{`English Pedagogy - `+(index+1)}</Text>
                  <Button  mode="contained" onPress={() => navigation.navigate("Quiz",{data : exam._id})}
                  style={{width:110,height:40,borderRadius:2}}>
    Attempt
  </Button>
                  </Card.Content>
                </Card>
            </View>
                </>)
            })}
        </ScrollView>) : (<View style={[styles.center,{marginTop:100}]}>
          <Text>No Quizzes Found</Text>
             <Button mode="contained" 
             style={{marginTop:50,width:100}}
             onPress={()=>authContext.getAllEnglishPedagogyQuiz()}>Reload</Button>

        </View>)}
      </>}
    </View>
  )
}

export default EnglishPedagogy

const styles = StyleSheet.create({
    cardTitle:{
        textAlign:"left"
    },
    center:{
      justifyContent: 'center',
      alignItems:'center'
    }
})