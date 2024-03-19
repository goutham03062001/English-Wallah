import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { PoppinsLight, PoppinsRegular } from '../../../../utils/FontHelper'
import BoldTextHelper from '../utils/BoldText'
const Compound = () => {
  return (
   <ScrollView>
     <View style={styles.rootContainer}>
          <Text style={styles.mainHeading}>Formation of Simple Sentences:</Text>
      <View>
        <Text style={{lineHeight:29,fontSize:16}}>
        Co-ordinating Conjunctions: 
        </Text>

        <Text style={{lineHeight:29,fontSize:16}}>
        and, both – and, not only- but also, as well as, but, yet, whereas, nevertheless, or, nor, neither – nor, either – or, else, otherwise, for, so
        </Text>
      </View>


      <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>1) By using and, both – and, not only- but also, as well as:</Text>

      <SentenceComponent
      first="1. I went to the market. I saw a beautiful watch.	"
      second="I went to the market and saw a beautiful watch."
      underline="and "/>

      <SentenceComponent
      first="2. Rani woke up early. She prepared lunch for the guests.	"
      second="Rani woke up early and prepared lunch for the guests."
      underline="and"
    />

<SentenceComponent
      first="3. Padma has beauty. Padma has intelligence."
      second="Padma has both beauty and intelligence."
      underline="both"
    />

<SentenceComponent
      first="4. I speak English. I speak Hindi."
      second="I speak not only English but also Hindi."
      underline="not only"
    />

<SentenceComponent
      first="5. He is industrious. He is intelligent"
      second="He is not only industrious but also intelligent."
      underline="not only"
    />

<SentenceComponent
      first="6. Madavi loved me. Rani loved me."
      second="Madavi as well as Rani loved me."
      underline="as well as"
    />

    </View>


    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>2) By using but, yet, whereas, nevertheless:</Text>

      <SentenceComponent
      first="1. He is poor. He is happy."
      second="He is poor but he is happy."
      underline="but "/>

      <SentenceComponent
      first="2. He is slow. He is regular."
      second="He is slow but (he is) regular"
      underline="but"
    />

<SentenceComponent
      first="3. The poem is simple. He does not understand it."
      second="The poem is simple but he does not understand it."
      underline="but"
    />

<SentenceComponent
      first="4. He is uneducated. He is clever."
      second="He is uneducated yet he is clever."
      underline="yet"
    />

<SentenceComponent
      first="5. Ramya is hostile. Her friend is cooperative and considerate."
      second="Ramya is hostile whereas her friend is cooperative and considerate."
      underline="whereas"
    />

<SentenceComponent
      first="6. There is little chance of recovery. The doctor has tried his best."
      second="There is little chance of her recovery; nevertheless, the doctor tried his best."
      underline="nevertheless"
    />

    </View>

    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>3) By using or, nor, neither – nor, either – or, else, otherwise:</Text>

      <SentenceComponent
      first="1. You may answer in English. Your answer may in your mother tongue.	"
      second="You may answer in English or in your mother tongue."
      underline="or"/>

      <SentenceComponent
      first="2. Get in. you catch cold."
      second="Get in or you may catch cold."
      underline="or"
    />

<SentenceComponent
      first="3. I love music. I love poetry."
      second="I love music or poetry."
      underline="or"
    />

<SentenceComponent
      first="4. He is a politician. He is a social worker."
      second="He is either a politician or a social worker."
      underline="either, or"
    />

<SentenceComponent
      first="5. Madavi does not like teaching. Madavi doesn’t like typing.	"
      second="Madavi likes neither teaching nor typing."
      underline="neither, nor"
    />

<SentenceComponent
      first="6. He does not earn money. He does not save money."
      second="He neither earns money nor saves money."
      underline="neither, nor"
    />

<SentenceComponent
      first="*7. Don’t be borrower. Don’t be a lender either.	"
      second="Neither a lender be nor a borrower be."
      underline="Neither, nor"
    />
<SentenceComponent
      first="8. You must work hard. If not, you will fail in the exam."
      second="You must work hard; otherwise you will fail in the exam."
      underline="otherwise"
    />
    </View>

    <View>
      {/* infinitive */}
      <Text style={{textAlign:"center",fontSize:18}}>4) By using “for” and “so”:</Text>

      <SentenceComponent
      first="1. She must be a teacher. She explains the poem very clearly."
      second="She must be a teacher for she explains the poem very clearly."
      underline="for"/>

      <SentenceComponent
      first="2. He has been working hard. He will get promotion."
      second="He has been working hard, so he will get promotion."
      underline="so"
    />


    </View>

    </View>
   </ScrollView>
  )
}

export default Compound

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