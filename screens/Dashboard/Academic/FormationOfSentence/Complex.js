import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { PoppinsLight, PoppinsRegular } from '../../../../utils/FontHelper'
import BoldTextHelper from '../utils/BoldText'
const Complex = () => {
  return (
    <ScrollView>
     <View style={styles.rootContainer}>
     <View >
          <Text style={styles.mainHeading}>Formation of Complex Sentence:</Text>
      </View>

      <View>
        <Text style={styles.normalText}>1. By using a “Noun Clause”</Text>
        <Text style={styles.normalText}>2. By using a “Adjective Clause”</Text>
        <Text style={styles.normalText}>3. By using a “Adverb Clause”</Text>
      </View>

      {/* 1 */}
      <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>1) By using and, both – and, not only- but also, as well as:</Text>

      <SentenceComponent
      first="1. He is a thief. Everybody knows it."
      second="Everybody knows that he is a thief. (Object)"
      underline="that he is a thief."/>

      <SentenceComponent
      first="2. You are telling a lie. It is known to all."
      second="That you are telling a lie is known to all (subject)"
      underline="That you are telling a lie "
    />

<SentenceComponent
      first="3. I told you that yesterday. You must rely on it.	"
      second="You must rely on what I told you yesterday. (Object to a preposition)"
      underline="what I told you yesterday"
    />

<SentenceComponent
      first="4. He has failed. His reason is his negligent."
      second="The reason of his failure is that he is negligent. (Compliment)"
      underline="that he is negligent"
    />

<SentenceComponent
      first="5. He was innocent. This was his statement. It was wrong."
      second="His statement that he was innocent was wrong. (Case in apposition)"
      underline="that he was innocent "
    />

<SentenceComponent
      first="6. I am interested in photography. It is known to all my friends"
      second="That I am interested in photography is known to all my friends."
      underline="That I am interested in photography "
    />

<SentenceComponent
      first="7. Madavi had loved me. She told me that."
      second="Madavi told me that she had loved me."
      underline="that she had loved me."
    />

<SentenceComponent
      first="8. How can I earn the money? That is the problem."
      second="The problem is how I can earn the money."
      underline="how I can earn the money."
    />

<SentenceComponent
      first="9. She had taken a foolish decision. I was surprised at it."
      second="I was surprised at what she had decided foolishly."
      underline="what she had decided foolishly."
    />

<SentenceComponent
      first="10. She had died in the fire accident. That fact painted me much"
      second="The fact that she had died in the fire accident pained me much."
      underline="that she had died"
    />

    </View>

    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>2) By using an “Adjective Clause”: </Text>
      <Text style={{fontSize:16}}>
      (The relative pronouns like who/which/that or the relative adverbs like where/when/why may be used in the formation of Adjective Clauses.)
      </Text>
      <SentenceComponent
      first="1. The woman was very kind. She helped the poor girl."
      second="The woman who was very kind helped the poor girl."
      underline="who was very kind"/>

      <SentenceComponent
      first="2. I met an old man. He was very poor."
      second="I met an old man who was very poor."
      underline="who was very poor"
    />

<SentenceComponent
      first="3. I saw a fountain-pen. It was black in colour.	"
      second="I saw a fountain-pen which was black in colour."
      underline="which was black in colour."
    />

<SentenceComponent
      first="4. I have purchased a house. It has a big hall. The hall is well furnished."
      second="The house that I have purchased has a big hall which is well furnished."
      underline="which is well furnished."
    />

<SentenceComponent
      first="5. This is the best selling book. You must read it."
      second="This is the best selling book that you must read."
      underline="that you must read."
    />

<SentenceComponent
      first="6. This is the large building. It was built by my uncle."
      second="This is the large building that was built by my uncle."
      underline="that was built by my uncle"
    />

<SentenceComponent
      first="7. The beautiful girl loved me. Her name is Padmaja."
      second="The beautiful girl whose name is Padmaja loved me. "
      underline="whose name is Padmaja"
    />

<SentenceComponent
      first="8. I met your friend. His box was stolen in the train."
      second="I met your friend whose box was stolen in the train."
      underline="friend whose box was stolen in the train."
    />

<SentenceComponent
      first="9. This is the house. I met Madavi here."
      second="This is the house where I met Madavi."
      underline="where I met Madavi."
    />

<SentenceComponent
      first="10. I have seen the park. The murder was committed there."
      second="I have seen the park where the murder was committed."
      underline="where the murder was committed"
    />



<SentenceComponent
      first="11. You went there yesterday. Tell me the hour"
      second="Tell me the hour  when you went there yesterday."
      underline="when you went there yesterday."
    />

    
<SentenceComponent
      first="12. She refused to marry me. I don’t know the reason."
      second="I don’t know the reason why she refused to marry me."
      underline="why she refused to marry me"
    />

    
<SentenceComponent
      first="13. My father died. At that time I was a small boy."
      second="* At the time my father died, I was a small boy."
      underline="At the time my father died."
    />
    </View>


    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>3) By using an Adverb Clause:  </Text>
      <Text style={{fontSize:16}}>
      The subordinating conjunctions like when / where / as / since / if / though / whether / unless / tha t/ lest and whereas can be used in the information of Adverb Clause
      </Text>
      <SentenceComponent
      first="1. I could not come. I was tired."
      second="I could not come because I was tired."
      underline="because I was tired"/>

      <SentenceComponent
      first="2. I have no ready cash. I cannot lend you now"
      second="As I have no ready cash, I cannot lend you now."
      underline="As I have no ready cash"
    />

<SentenceComponent
      first="3. She has no desire to marry me. I don’t like to ask her about it."
      second="Since she has no desire to marry me, I don’t like to ask about it."
      underline="Since she has no desire to marry me"
    />

<SentenceComponent
      first="4. He committed the theft. He has been caught by the police."
      second="He committed the theft, so he has been caught by the police."
      underline="he has been caught by the police."
    />

<SentenceComponent
      first="5. She may come here. I shall talk to Madavi then."
      second="If Madavi comes here, I shall talk to her.."
      underline="If Madavi comes here"
    />

<SentenceComponent
      first="6. You know her name. Then, please tell me."
      second="If you know her name, please tell me."
      underline="If you know her name, "
    />

<SentenceComponent
      first="7. Tell me the truth. I shall pardon you."
      second="I shall pardon you if you tell me the truth."
      underline="if you tell me the truth."
    />

<SentenceComponent
      first="8. She may have been married. I don’t know that.	"
      second="I don’t know whether she has been married."
      underline="whether she has been married."
    />

<SentenceComponent
      first="9. You must show your ticket. Otherwise, I cannot you allow you in"
      second="Unless you show your hall ticket, I can’t allow you in."
      underline="Unless you show your hall ticket"
    />

<SentenceComponent
      first="10. She is beautiful. She is not still married."
      second="Though she is beautiful, she is not married."
      underline="Though she is beautiful, "
    />



<SentenceComponent
      first="11. He is poor. He is honest at the same time."
      second="Though he is poor, he is honest."
      underline="Though he is poor"
    />

    
<SentenceComponent
      first="12. I went there. She was cooking in the kitchen then."
      second="When I went there, she was cooking in the kitchen."
      underline="When I went there"
    />

    
    <SentenceComponent
      first="13. He fled somewhere. The police could not pursue him."
      second="He fled where the police could not pursue him."
      underline="where the police could not pursue him."
    />

    <SentenceComponent
      first="14. My examination is about to be over. Thereafter I shall go to the hills."
      second="I shall go to the hills after my examination is over."
      underline="after my examination is over."
    />
    <SentenceComponent
      first="15. We help others. We want to receive help."
      second="We help others that we may receive help."
      underline="that we may receive help."
    />
    <SentenceComponent
      first="16. I am very happy. Because you have got promotion."
      second="I am very happy that you have got promotion."
      underline="that you have got promotion."
    />
    <SentenceComponent
      first="17. You finish writing the letter. I shall wait for you. "
      second="I shall wait for you, until you finish writing the letter."
      underline="until you finish writing the letter."
    />
    <SentenceComponent
      first="18. Madavi is friendly. Her brother is impolite."
      second="Whereas Madavi is friendly, her brother is impolite."
      underline="Whereas Madavi is friendly"
    />
    <SentenceComponent
      first="19. He saw the film. He did not want to miss the story."
      second="He saw the film lest he should miss the story."
      underline="lest he should miss the story."
    />
    <SentenceComponent
      first="20. The thief saw the police. He took to his heels."
      second="As soon as the thief saw the police, he took to his heels."
      underline="the thief saw the police"
    />
    <SentenceComponent
      first="21. America is a powerful country. Russia is not so powerful country."
      second="Russia is not so powerful as America. (Is)."
      underline="so, as"
    />

    <SentenceComponent
      first="22. He is intelligent. His brother is equally intelligent."
      second="His brother is as intelligent as he (is)."
      underline="as, as"
    />

    </View>


     </View>
    </ScrollView>
  )
}

export default Complex
const SentenceComponent = ({first ,second,underline})=>{
  const words = second.split(" ");

  return(<View style={{marginVertical:16}}>
      {/* <BoldTextHelper text={first} fontSize={16}/>
      <Text style={{fontSize:17}}> {second}</Text> */}
      <BoldTextHelper text={first} fontSize={15}/>
      <Text>
      {words.map((word, index) => {
              const shouldHighlight = underline && underline.includes(word.replace(/[.,]/g, ''));
              return (
                  <Text key={index} style={{ textDecorationLine: shouldHighlight ? "underline" : 'none',fontSize:16 ,color:shouldHighlight?"green":"black",lineHeight:29,marginVertical:6}}>
                      {word}{index !== words.length - 1 && ' '}
                  </Text>
              );
          })}
      </Text>
  </View>)
}
const styles = StyleSheet.create({
  rootContainer:{
    padding:10
  },
  mainHeading:{
    textAlign:"center",
    fontSize:20,
    color:"red",
    fontFamily:PoppinsRegular
  },
  normalText:{
    marginVertical:8,
    fontSize:16
  }
})