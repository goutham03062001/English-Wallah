import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'

const Exclamatory = () => {
  return (
    <View style={styles.rootContainer}>
    <ScrollView>
      <Text style={styles.mainHeading}>Exclamatory Sentences:</Text>

      <View>
        <Text style={styles.text}>The reporting verb is changed into the following manner:</Text>
        <Text style={styles.text}>1. Exclaimed + joy / sorrow / fear / anger / wonder / surprise / pain / applaud / regret / curse / cry out</Text>
        <Text style={styles.text}>2. Reporting verb in optative sentences may be changed like this wish / pray / long for / desire</Text>
        <Text style={styles.text}>3. That is used in reported speech.</Text>
        <Text style={styles.text}>4. Words like what / how are omitted in Reported Speech.</Text>
        <Text style={styles.text}>5. Interjections / Exclamations like hurrah / alas / bravo are replaced by adverbs.</Text>
        <Text style={styles.text}>6. for salutations at the time of meeting you may use:</Text>
        <Text style={styles.text}>   Wish + good morning / evening / night / good luck</Text>
        <Text style={styles.text}>  And at the time of departure you may use:</Text>
        <Text style={styles.text}>      Bid + good bye + to + Object</Text>



      </View>

      <View>
        <Helper first = "72. “What a beautiful girl Rani is!” I said." second="I exclaimed with wonder that Rani is really a very beautiful girl."/>
        <Helper first = "73. “What a great fool I am to believe her words! “I said. " second="I exclaimed with regret that I was indeed a great fool to believe her words.	"/>
        <Helper first = "74. “What a tragedy that she has died in the accident! “He said.	" second="He exclaimed with sorrow that he had died in the accident."/>
        <Helper first = "75. “How kind of you to help me in my distress,” she said to me.	" second="She exclaimed with gratefulness that I was very kind to help her in her distress. "/>
        <Helper first = "76. “What a foolish thing you have done!” I said to Ramya." second="I exclaimed with regret that Ramya had really done a foolish thing."/>
        <Helper first = "77. “What a grave mistake I have committed!” he said. " second="He exclaimed with regret that he had committed a grave mistake.	"/>
        <Helper first = "78. “Wish you all the best,” I said to Madhura .	" second="I wished Madhura all the best.	"/>
        <Helper first = "79. “Congratulations! You are selected in the written test,” I said to Kumari." second="I congratulated Kumari on her being selected in the written test."/>
        <Helper first = "80. “Wish you a happy journey,” Rani said to me." second="Rani wished me a happy journey.	"/>
        <Helper first = "81. “Good night! See you again,” I said to Jamuna." second="I wished Jamuna good night and told her to see you again."/>
        <Helper first = "82. “Many happy returns of the day, my friend,” Ramu said to me.	" second="Ramu called me his friend and wished me many happy returns of the day."/>
        <Helper first = "83. “Oh! What an excellent idea you have got!” he said to me.		" second="He exclaimed with wonder that I had got an excellent idea."/>
        <Helper first = "84. “What a handsome face you have!” Raju said to me. " second="Raju exclaimed with surprise that I had a handsome face.	"/>
        <Helper first = "85. “How long I have waited for Kumari and how much I loved her,” I said to myself.	" second="exclaimed with disappointment and sadness that I had waited long for kumari and I loved her very much."/>
        <Helper first = "86. “How gracefully Rani smiled and looked at me!” I said to myself.	" second="I exclaimed with happiness that Rani had smiled and looked at me very gracefully."/>
      </View>
    </ScrollView>
    </View>
  )
}

export default Exclamatory;
const Helper = ({first,second})=>{
  return(<>
<View style={styles.view}>
  <Text style={styles.text}>{first}</Text>
  <Text style={styles.text}>{second}</Text>
</View>
  </>)
}

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
  },
  mainHeading:{
    textAlign:"center",
    fontSize:20
  }
})