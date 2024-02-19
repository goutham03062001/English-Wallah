import { StyleSheet, Text, View ,ScrollView,Pressable,Dimensions} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native';
import FillIntheBlanks from "./FillInTheBlanks"
const BlanksHelper = ()=>{

    const StartingScreen = ()=>{
    const navigation = useNavigation();
  
      return(<>
      <View style={styles.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable
            onPress={() => navigation.navigate("Parts of Speech",{data : "parts of speech"})}
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
                <Card.Title title="Parts Of Speech"/>
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable
            onPress={() => navigation.navigate("Articles",{data : "articles"})}
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
                <Card.Title title="Articles"/>
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable
            onPress={() => navigation.navigate("Prepositions",{data : "prepositions"})}
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
                <Card.Title title="Prepositions"/>
              </Card.Content>
            </Card>
          </Pressable>
  
          <Pressable
            onPress={() => navigation.navigate("Tenses",{data : "tenses"})}
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
                <Card.Title title="Tenses"/>
              </Card.Content>
            </Card>
          </Pressable>
  
  
          <Pressable
            onPress={() => navigation.navigate("Rewrite as Directed",{data : "rewrite as directed"})}
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
                <Card.Title title="Rewrite as Directed"/>
              </Card.Content>
            </Card>
          </Pressable>
  
  
  
          <Pressable
            onPress={() => navigation.navigate("Correction of Sentences",{data  : "correction of sentences"})}
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
                <Card.Title title="Correction of Sentences"/>
              </Card.Content>
            </Card>
          </Pressable>
  
  
  
          <Pressable
            onPress={() => navigation.navigate("Missing Letters",{data : "missing letters"})}
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
                <Card.Title title="Missing Letters"/>
              </Card.Content>
            </Card>
          </Pressable>
  
  
  
          <Pressable
            onPress={() => navigation.navigate("Silent Letters",{data : "silent letters"})}
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
                <Card.Title title="Silent Letters"/>
              </Card.Content>
            </Card>
          </Pressable>
  
  
          <Pressable
            onPress={() => navigation.navigate("Transcriptions - English Words",{data : "transcriptions"})}
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
                <Card.Title title="Transcriptions - English Words"/>
              </Card.Content>
            </Card>
          </Pressable>
  
  
          <Pressable
            onPress={() => navigation.navigate("Odd Sounds",{data : "odd sounds"})}
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
                <Card.Title title="Odd Sounds"/>
              </Card.Content>
            </Card>
          </Pressable>
  
  
          <Pressable
            onPress={() => navigation.navigate("Syllables",{data : "syllables"})}
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
                <Card.Title title="Syllables"/>
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
      {/* <Stack.Screen name = "startingScreen" component={}/> */}
    </Stack.Navigator>
    </>)
  }

export default BlanksHelper

const styles = StyleSheet.create({})