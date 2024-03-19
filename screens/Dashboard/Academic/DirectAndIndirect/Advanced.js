import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const Advanced = () => {
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <Text style={styles.mainHeading}>Advanced points:</Text>

        <View>
          <Text style={styles.text}>1. Reporting verb in the present or future tense remains unchanged:</Text>
        
          <Helper first="1. Padma says, “I shall go to Delhi tomorrow.”" second="Padma says that she will go to Delhi tomorrow."/>
          <Helper first="2. He says, “I am not feeling well today.”" second="He says that he is not feeling well today."/>
          <Helper first="3. He will say to me, “You are not kind to me.”" second="He will tell me that I am not kind to him. "/>
          <Helper first="4. Ramya will say, “I shall be back soon.”" second="Ramya will tell (say) that she will be back soon."/>
            <Text style={styles.text}>2. If the reported speech refers to some universal truth or habitual action, no change is made in the tense of the Reported Verb, even if the Reporting verb is in the Past Tense. </Text>
          <Helper first="1. The teacher said in the class, “The sun rises in the east.”	" second="The teacher said in the class that the sun rises in the east."/>
          
          <Helper first="2. He said, “Man lives by bread.”" second="He said that man lives by bread."/>
          <Helper first="3. John Keats said, A thing of beauty is a joy forever.”" second="John keats said that a thing of beauty is a joy forever.” "/>
          <Helper first="4. My father said, “Honesty is the best policy.”	" second="My father said that honesty is the best policy."/>
          <Helper first="5. “I prefer hot coffee,” m friend said." second="My friend said that he prefers hot coffee."/>
          <Helper first="6. “I love watching films,” Padma said to me." second="Padma told me that she loves watching films."/>

          <Text style={styles.text}>3. The past Indefinite Tense and the Past Continuous Tense are not changed in the following cases:</Text>
        <View>
        <Text style={styles.sideHeading}>A) Past historical event:</Text>
            <Helper first="1. My brother said, “India got freedom in 1947.”	" second="My brother said that India got freedom in 1947."/>
            <Helper first="2. “The first world war took place in 1914,” he said." second="He said that the First World War took place in 1914."/>
            <Helper first="3. My teacher said, “Shahjahan built the Taj Mahal.	" second="My teacher said that Shahjahan built the Taj Mahal."/>
        </View>

        <View>
        <Text style={styles.sideHeading}>B) An improbable condition:</Text>
        <Helper first="1. “If Rani were a film star, I would ask her photograph,” I said to my friend." second=" I told my friend that if Rani were a film star, I would ask her autograph."/>
        <Helper first="2. “If you were my wife, I would be happy,” Raju said to Rani." second=" Raju told Rani that if she were his wife, he would be happy."/>
        <Helper first="3.  “If I had money, I could lend you,” he said to me." second=" He told me that if he had money, he could lend me."/>
        </View>

        <View>
        <Text style={styles.sideHeading}>C) A past habit or custom:</Text>
        <Helper first="1. “I always waited for buses,” she said to me.	" second="She told me that she always waited for buses."/>
        <Helper first="2. Hindus worshipped nature as God,” she said to me." second="Our teacher told us that Hindus worshipped nature as God."/>
        </View>

        <View>
        <Text style={styles.sideHeading}>D) Time Clauses:</Text>
        <Helper first="1. “When I went there, Rani was writing a letter,” Murthy said to his friend." second="Murthy told his friend that when he went there, Rani was writing a letter."/>
        <Helper first="2.” when I was reading a novel, the postman knocked at the door,” Padma said to me." second="Padma told me that when she was reading a novel, the post man knocked at the door."/>
        <Helper first="3. “She had left the office before I went there,” Raju said to him." second=" Raju told him that she had left the office before he went there."/>
        </View>

        </View>

        <View>
        <Text style={styles.text}>4) Interrogative Question Tags:</Text>
        <Helper first="1. He said, “You are a good sports man, aren’t you?”	" second="He asked whether I was a good sportsman."/>
        <Helper first="2. I said, “Ramu has secured first division, hasn’t he?" second="I asked if Ramu had secured first division."/>

        </View>

        <View>
        <Text style={styles.text}>5) Imperative question Tags:</Text>
        <Helper first="1. He said to me, “Bring me a cup of tea, will you?”" second="He requested me to bring him a cup of tea."/>
        <Helper first="2. He said, “Go away from here, will you?”" second="He asked me to go from there."/>

        </View>

        <View>
        <Text style={styles.text}>6) Sentences beginning with “LET”:</Text>
        <Text style={styles.text}>
        Sentences beginning with ‘Let’ express the sense of order, wish, proposal, imagining, condition, etc. They are converted into Indirect Narration according to their sense. The reporting verb is changed into order, requested, proposed, wished, supposed, etc. according to the sense. In all such sentences ‘Let’ is removed and connective ‘that’ is used. Other changes are made according to normal rules.
        </Text>
        <Text style={styles.text}>A) LET : Order :     Sometimes Let suggests order. In such sentences ordered, asked, or directed are used for the reporting Verb. In the place of Let we use should.Connective that is used.</Text>

       <Helper first="1. The Principal said, “Let no student stand here.”" second="The principal ordered that no student should stand there."/>

       <Text style={styles.text}>
       B)  LET : Proposal : Sometimes LET suggests Proposal. In these sentences  the following Rules apply —
       </Text>

       <Text style={styles.text}>1) Proposed or suggested is used for Reporting Verb.</Text>
       <Text style={styles.text}>2) Connective that is used.</Text>
       <Text style={styles.text}>3) Let is removed, and ‘should’ is used in its place.</Text>


       <Text style={styles.text}>
       C) LET : Wish:     Sometimes “LET” suggests wish or desire. In such sentences requested, wished, or desired are used for Reporting Verb. In the place of Let we use should. Connective that is used.     
         </Text>

        <Helper first="1. The boy said, “Let me go out to play.”" second="The boy wished that he should go out to play."/>
        <Helper first="2. The man said, “Let me have the first choice.”	" second="The man wished that he should have the first choice."/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Advanced;

const Helper = ({first,second})=>{
  return(<>
<View style={styles.view}>
  <Text style={styles.text}>
    <BoldTextHelper text={first}/>
  </Text>
  <Text style={styles.text}>{second}</Text>
</View>
  </>)
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 10,
  },
  view:{
    marginVertical:10
  },
  text:{
    fontSize:17,
    lineHeight:28
  },
  mainHeading:{fontSize:20,textAlign:"center"},
  sideHeading:{
    fontSize:16,
    textDecorationLine:"underline",
    fontWeight:"bold",
    marginVertical:15,
    lineHeight:28
  },
})