import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const PostModifiers = () => {
  return (
    <View style={styles.rootContainer}>
     <ScrollView>
          <View>
            <Text style={styles.text}>
            Other parts of a noun phrase go after the noun. These are called postmodifiers.
            </Text>

            <Text style={{textAlign:'center',fontSize:18}}>Postmodifiers can be:</Text>
          
            <Text style={styles.sideHeading}>Prepositional Phrases:</Text>
            <Text style={styles.text}>Ex:</Text>
            <Text style={styles.text}>a man with a gun</Text>
            <Text style={styles.text}>the boy in the blue shirt</Text>
            <Text style={styles.text}>the house on the corner</Text>



            <View>
          
          <Text style={styles.sideHeading}>–ing phrases :</Text>
          <Text style={styles.text}>Ex:</Text>
          <Text style={styles.text}>the man standing over there</Text>
          <Text style={styles.text}>the boy talking to Angela</Text>
            </View>

            <View>
          
          <Text style={styles.sideHeading}>Relative Clauses :</Text>
          <Text style={styles.text}>Ex:</Text>
          <Text style={styles.text}>the man we met yesterday</Text>
          <Text style={styles.text}>the house that Jack built</Text>
          <Text style={styles.text}>the woman who discovered radium</Text>
          <Text style={styles.text}>an eight-year-old boy who attempted to rob a sweet shop</Text>
            </View>

            <View>
          
          <Text style={styles.sideHeading}>That clauses. These are very common after nouns like idea, fact, belief, suggestion:</Text>
          <Text style={styles.text}>Ex:</Text>
          <Text style={styles.text}>He's still very fit, in spite of the fact that he's over eighty.</Text>
          <Text style={styles.text}>She got the idea that people didn't like her.</Text>
          <Text style={styles.text}>There was a suggestion that the children should be sent home.</Text>
            </View>


            
            <View>
          
          <Text style={styles.sideHeading}>To infinitives :</Text>
          <Text style={styles.text}>Ex:</Text>
          <Text style={styles.text}>I've got no decent shoes to wear.</Text>
          <Text style={styles.text}>You should take something to read.</Text>
          <Text style={styles.text}>I need somewhere to sleep.</Text>
            </View>

            <View>
          
          <Text style={styles.sideHeading}>There may be more than one postmodifier:</Text>
          <Text style={styles.text}>Ex:</Text>
          <Text style={styles.text}>an eight-year old boy with a gun   who tried to rob a sweet shop </Text>
          <Text style={styles.text}>that girl over there   in a green dress   drinking a Coke</Text>
          <Text style={styles.text}>I need somewhere to sleep.</Text>
            </View>
          </View>
      </ScrollView>
    </View>
  )
}

export default PostModifiers

const styles = StyleSheet.create({
  text:{
    fontSize:16,
    marginVertical:5,
    textAlign:"justify",
    lineHeight:28
  },
  sideHeading:{
    fontSize:16,
    textDecorationLine:"underline",
    fontWeight:"bold",
    marginVertical:15,
    lineHeight:28
  },
  rootContainer:{
    paddingHorizontal:5
  }
})