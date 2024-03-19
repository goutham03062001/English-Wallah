import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { PoppinsLight, PoppinsRegular } from '../../../../utils/FontHelper'
import BoldTextHelper from '../utils/BoldText'
const Simple = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
      <Text style={styles.mainHeading}>Formation of Simple Sentences:</Text>
    
      {/*  */}
      <View>
        <Text style={styles.normalText}>1) By using an infinitive:</Text>
        <Text style={styles.normalText}>2) By using an adverb / adverb phrase:</Text>
        <Text style={styles.normalText}>3) By using a participle: </Text>
        <Text style={styles.normalText}>4) By using an absolute phrase:</Text>
        <Text style={styles.normalText}>5) By using a preposition with noun or gerund:</Text>
        <Text style={styles.normalText}>6) By using a Noun or Phrase in apposition:</Text>
        <Text style={styles.normalText}>7) By using TOO + Adjective/Adverb: </Text>
        <Text style={styles.normalText}>8) Adjective/Adverb + Enough:</Text>
      </View>

      <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>1) By using an infinitive:</Text>

      <SentenceComponent
      first="1. I have some letters. I must write them today.	"
      second="I have some letters to write."
      underline="to write"/>

      <SentenceComponent
      first="2. I am going to Delhi. I have to purchase a car.	"
      second="I am going to Delhi to purchase a car.	"
      underline="to purchase "
    />

<SentenceComponent
      first="3. I have some work. I must do it tonight."
      second="I have some work to do tonight."
      underline="to do"
    />

<SentenceComponent
      first="*4.  I have only one servant. He cooks my food. He washes the utensils."
      second="I have only one servant to cook my food and wash the utensils."
      underline="to cook"
    />

<SentenceComponent
      first="5. You should love and understand your wife. It is your duty.		"
      second="It is your duty to love and understand your wife."
      underline="to love, understand"
    />

<SentenceComponent
      first="6. You must help your brother. It is your duty.	"
      second="It is your duty to help your brother."
      underline="to help"
    />


<SentenceComponent
      first="7. I knew about Padma’s marriage. I was delighted."
      second="I was delighted to know about Padma’s marriage."
      underline="to know"
    />

<SentenceComponent
      first="8. There are still three questions left. I have to solve them.		"
      second="I have still three more questions to solve."
      underline="to solve"
    />

<SentenceComponent
      first="9. This poem is very difficult. I cannot explain it to you."
      second="This poem is too difficult for me to explain to you."
      underline="too difficult, to explain"
    />

<SentenceComponent
      first="10. He is very much tired. He cannot work.		"
      second="He is too tired to work."
      underline="too, to work"
    />

<SentenceComponent
      first="11. He is very weak. He cannot pass this year.	"
      second="He is too weak to pass this year."
      underline="too, to pass"
    />
    </View>

    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>2) By using an adverb / adverb phrase:</Text>
      <SentenceComponent
      first="1. Rani is very beautiful. It is very evident.			"
      second="Rani is evidently beautiful."
      underline="evidently"/>

      <SentenceComponent
      first="2. He will get first rank. It is certain."
      second="He will get first rank certainly."
      underline="certainly"
    />

<SentenceComponent
      first="3. She is punished. It is unjust."
      second="She is punished unjustly."
      underline="unjustly"
    />

<SentenceComponent
      first="4. She convinced her husband. It was clever of her."
      second="She convinced her husband cleverly."
      underline="cleverly"
    />

<SentenceComponent
      first="5. Padma described her adventures in the forest. She did fascinatingly."
      second="Padma described her adventures in the forest fascinatingly."
      underline="fascinatingly"
    />

<SentenceComponent
      first="6. He accepted my proposal. He did it with happiness."
      second="He accepted my proposal happily."
      underline="happily"
    />


<SentenceComponent
      first="7. He has been punished. The punishment was unjust."
      second="He has been unjustly punished."
      underline="unjustly"
    />

<SentenceComponent
      first="8. The thief was flogged by the police. The flagging was very severe."
      second="The thief was very severely flogged by the police."
      underline="severely "
    />

<SentenceComponent
      first="9. He was dismissed from service. His dismissal was underserved."
      second="He was undeservedly dismissed from service."
      underline="undeservedly"
    />

<SentenceComponent
      first="10. He has passed in the first division. It was very creditable."
      second="He has very creditably passed in the first division."
      underline="creditably"
    />

<SentenceComponent
      first="11. It was morning. The train had not reached by that time."
      second="The train had not reached by morning."
      underline="by morning."
    />

<SentenceComponent
      first="12. *It was evening. He did not type the letter."
      second="He did not type the letter by (adv) evening."
      underline="by (adv) evening."
    />
    </View>

    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>3) By using a participle:</Text>
      <Text style={{textAlign:"center",fontSize:16}}>(This is possible only when the sentences have a common subject.)</Text>
     <SentenceComponent
      first="1. He saw a lion. He fled away."
      second="Seeing a lion, he fled away."
      underline="Seeing"/>

      <SentenceComponent
      first="2. He jumped up. He ran away."
      second="Jumping up, he ran away."
      underline="Jumping"
    />

<SentenceComponent
      first="3. Turn to the left. You will reach the hospital."
      second="Turning to the left, you will reach the hospital."
      underline="Turning"
    />

<SentenceComponent
      first="4. He sat on the sofa. He took his pen. He wrote a letter."
      second="Sitting on the sofa and taking his pen, he wrote a letter."
      underline="Sitting, taking"
    />

<SentenceComponent
      first="5. The farmer jumped on his horse. He rode to the market."
      second="Jumping on his horse, the former rode to the market."
      underline="Jumping"
    />

<SentenceComponent
      first="6. He opened the gate. He took the dog out for a run."
      second="Opening the gate, he took the dog out for a run."
      underline="Opening"
    />


<SentenceComponent
      first="7. I passed M.A. with distinction. I applied for civil services."
      second="Having passed M.A. with distinction, I applied for civil services."
      underline="Having passed"
    />

<SentenceComponent
      first="8. I read the book. I returned it to the Library."
      second="Having read the book, I returned it to the Library."
      underline="Having read "
    />

<SentenceComponent
      first="*9. Henry planted a rose. He watered it. He manured it."
      second="Having planted a rose, and watered and manured it."
      underline="Having planted"
    />

<SentenceComponent
      first="*10. I was tired of walking. I wanted to take rest.	"
      second="Being tired of walking, I wanted to take rest."
      underline="Being tired"
    />

<SentenceComponent
      first="11. He was tired of reading. He retired to bed.		"
      second="Being tired (tired) of reading he retired to bed."
      underline="Being tired "
    />


    </View>

    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>4) By using an “Absolute Phrase”:</Text>
      <Text style={{textAlign:"center",fontSize:16}}>(This is done when the sentence has different subjects)</Text>
     <SentenceComponent
      first="1. His wife left him. He brought up the child with love and care."
      second="His wife having left, he brought up the child with love and care."
      underline="having left"/>

      <SentenceComponent
      first="2. The house caught fire. All the furniture was burnt to ashes. "
      second="The house having caught fire, all the furniture was burnt to ashes."
      underline="having caught "
    />

<SentenceComponent
      first="3. The president took his seat on the dais. The meeting began."
      second="The president having taken his seat on the dais, the meeting began."
      underline="having taken "
    />

<SentenceComponent
      first="4. The storm subsided. We began our march again."
      second="The storm having subsided, we began our march again."
      underline="having subsided"
    />

<SentenceComponent
      first="5. The monsoon started. The village roads became muddy."
      second="The monsoon having started, the village roads became muddy."
      underline="having started"
    />

<SentenceComponent
      first="*6 . The deer was caught in the net. He struggled hard for escape. (PV)"
      second="Having been caught in the net, the deer struggled hard for escape."
      underline="Having been caught"
    />


<SentenceComponent
      first="*7 . The thieves were caught by the police. They surrounded the stolen property.(PV)"
      second="Having been caught by the police, the thieves surrounded the stolen property."
      underline="Having been caught"
    />

<SentenceComponent
      first="*8. It was very cold. We stayed at home."
      second="It being very cold, we stayed at home."
      underline="being"
    />

<SentenceComponent
      first="9. The examinations were over. All the students left the college."
      second="The examinations being over, all the students left the college."
      underline="being"
    />

<SentenceComponent
      first="* 10. Rains have been plentiful this year. The crop of sugarcane has been rich."
      second="Rains having been plentiful this year, the crop of sugarcane has been rich."
      underline="having"
    />

<SentenceComponent
      first="11. The examination was over. The collage was closed. The students left for their homes. The campus looked deserted."
      second="The examination being over, the college being closed and students having left for their homes, the campus looked deserted."
      underline="being, having left"
    />


    </View>

    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>5) By using a preposition with noun or gerund:</Text>
      {/* <Text style={{textAlign:"center",fontSize:16}}>(This is done when the sentence has different subjects)</Text> */}
     <SentenceComponent
      first="1. He read the poem several times. He did not learnt by heart."
      second="Inspite of reading the poem several times, he didn’t learn it by heart."
      underline="Inspite of reading "/>

      <SentenceComponent
      first="2. He was a physically handicapped person. He was highly educated person."
      second="Inspite of being a physically handicapped person, he was highly educated person."
      underline="Inspite of being"
    />

<SentenceComponent
      first="*3. He has failed many times. He still hopes to get success at last."
      second="In spite of (in spite of having many failures) many failures, he still hopes to get success at last."
      underline="In spite of "
    />

<SentenceComponent
      first="4. He had many faults. But he was a good man at heart."
      second="In spite of having (in spite of having many faults) many faults, he was a good man at heart."
      underline="In spite of having"
    />

<SentenceComponent
      first="5. His daughter died in the air-crash. He heard it. He broke down."
      second="On hearing the death of his daughter in the air-crash, he broke down."
      underline="On hearing "
    />

<SentenceComponent
      first="6. He failed at the examination. He heard the news. He disappeared."
      second="On hearing the news of his failure at the examination, he disappeared."
      underline="On hearing"
    />


<SentenceComponent
      first="7. He saw an advertisement in the paper. He applied for the post. It was the post of an accountant."
      second="On seeing an advertisement for the post of an accountant, he applied for it."
      underline="On seeing"
    />

<SentenceComponent
      first="8. The magistrate examined the statement. He found it full of grass errors."
      second="On examining the statement, the magistrate found it full of gross errors."
      underline="On examining"
    />

<SentenceComponent
      first="9. He sells newspapers. He earns money in this way."
      second="He earns money by selling newspapers."
      underline="by selling"
    />

<SentenceComponent
      first="10. He had a sweet dream. He married Padma in it."
      second="He had a sweet dream of marrying Padma."
      underline="of marrying "
    />

<SentenceComponent
      first="11. They came to the end of the street. They stopped there."
      second="They stopped at the end of the street."
      underline="at the end"
    />

<SentenceComponent
      first="*12. The servant swept the room. He found a rupee. The rupee was lying in the corner."
      second="While sweeping the room, the servant found a rupee lying in the corner."
      underline="While sweeping"
    />


<SentenceComponent
      first="*13. We reached the station. The train had left by that time."
      second="Before we reaching the station, the train had left."
      underline="Before we reaching"
    />

<SentenceComponent
      first="14. Raju is a teacher. He is also an artist.			"
      second="Besides being a teacher, Raju is also an artist."
      underline="Besides being"
    />
    </View>


    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}> 6) By using a Noun or Phrase in apposition:</Text>
      {/* <Text style={{textAlign:"center",fontSize:16}}>(This is done when the sentence has different subjects)</Text> */}
     <SentenceComponent
      first="1. Rani is a school teacher. She lives in Warangal. It is an industrial city."
      second="Rani, a school teacher, lives in Warangal, an industrial city."
      underline="a school teacher"/>

      <SentenceComponent
      first="2. Raju is my tenant. He pays the rent regularly."
      second="Raju, my tenant, pays the rent regularly."
      underline="my tenant"
    />

<SentenceComponent
      first="3. Agra was once the capital of Mughal Empire. It is now a very backward city."
      second="Agra, once the capital of Mughal Empire, is now a very backward city."
      underline="once the capital of Mughal Empire"
    />

<SentenceComponent
      first="4. I saw the famous wrestler. His name was Dara Singh."
      second="I saw, the famous wrestler, Dara Singh."
      underline="the famous wrestler"
    />

<SentenceComponent
      first="5. Rama defeated Ravana. Ravana was the king of Lanka."
      second="Rama defeated Ravana, king of Lanka."
      underline="king of Lanka"
    />

<SentenceComponent
      first="6. I love Mohan very much. He is my friend."
      second="I love, my friend ,Mohan very much."
      underline="my"
    />


<SentenceComponent
      first="7. Sarojini Naidu is a poet. People called her Barat Kokil. She wrote the poem 
      Bangle Sellers."
      second="The poet Sarojini Naidu, Barat Kokil, wrote the poem Bangle Sellers."
      underline="Barat"
    />

<SentenceComponent
      first="8. R.K. Narayan is a Novelist. Be is an Indian. He wrote The Guide."
      second="R.K. Narayan, the Indian Novelist , wrote The Guide."
      underline="the Indian Novelist "
    />

<SentenceComponent
      first="9. Shakespeare died in 1616. He was the greatest English poet and dramatist."
      second="Shakespeare, the greatest English poet and dramatist , died in 1616. "
      underline="the greatest English poet and dramatist "
    />


    </View>


    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}> 7) By using “TOO + Adjective/Adverb”:</Text>
      <Text style={{textAlign:"center",fontSize:16}}>(NOTE:  such sentences always express a NEGATIVE sense.)</Text>
     <SentenceComponent
      first="1. He is tired. He cannot run."
      second="He is too tired to run."
      underline="too, to"/>

      <SentenceComponent
      first="2. He is weak. He cannot stand."
      second="He is too weak to stand."
      underline="too, to"
    />

<SentenceComponent
      first="3. He is poor he cannot have a new dress."
      second="He is too poor to have a new dress."
      underline="too, to"
    />



<SentenceComponent
      first="4. I am old. I cannot drive a car."
      second="I am too old to drive a car."
      underline="too, to"
    />

    </View>

    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}> 8) “Adjective/Adverb + Enough”:</Text>
     <SentenceComponent
      first="1. He is rich. He can buy a car."
      second="He is rich enough to buy a car."
      underline="rich enough "/>

      <SentenceComponent
      first="2. He is intelligent. He can solve this problem."
      second="He is intelligent enough to solve this problem."
      underline="intelligent enough"
    />

<SentenceComponent
      first="3. This hall is large. Two hundred persons can sit in it."
      second="This hall is large enough for two hundred persons to sit."
      underline="large enough"
    />



<SentenceComponent
      first="4. He has much time. He can complete the book."
      second="He has time enough to complete the book."
      underline="time enough"
    />

    </View>

    </View>

    
    </ScrollView>
  )
}

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
export default Simple

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