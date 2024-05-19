import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { PoppinsRegular } from '../../../../utils/FontHelper';
import EnglishPedagogy from './EnglishPedagogy';
import GeneralEnglish from './GeneralEnglish';
import Home from './Home';
import AttemptQuiz from './AttemptQuiz';
import { createStackNavigator } from '@react-navigation/stack';
import FinishQuiz from './FinishQuiz';
import Results from "./Results"
const Stack = createStackNavigator();

const StartingScreen = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name = "home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name = "English Pedagogy" component={EnglishPedagogy} options={{headerMode:"float"}}/>
    <Stack.Screen name = "Quiz" component={AttemptQuiz} options={{headerMode:"float"}}/>
    <Stack.Screen name = "Finish Quiz" component={FinishQuiz} options={{headerMode:"float"}}/>
    <Stack.Screen name = "Quiz Results" component={Results} options={{headerMode:"float"}}/>
   </Stack.Navigator>
  )
}

export default StartingScreen

const styles = StyleSheet.create({
  rootContainer:{
    padding:10,
    marginTop:30
  }
})