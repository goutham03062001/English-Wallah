import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
import { ScrollView } from 'react-native-gesture-handler';
import { PoppinsRegular } from '../../../../utils/FontHelper';
const SimpleCompundComplexStartingScreen = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
      <Text style={styles.mainHeading}>Structural Classification of Sentences</Text>
    
        <View style={{marginTop:20}}>
            <Text style={{fontSize:16,lineHeight:29}}>It may be pointed out here that sentences can be divided into four classes from structural point of view. They are:	</Text>
            <Text style={{fontSize:16,lineHeight:29}}>1.	Simple sentence</Text>
            <Text style={{fontSize:16,lineHeight:29}}>2.	Compound sentence</Text>
            <Text style={{fontSize:16,lineHeight:29}}>3.	Complex sentence	</Text>
        </View>

        <View>
          {/* simple */}

          <Text style={{fontSize:16,marginTop:15}}>
            <UnderlineTextHelper text="1. Simple Sentence:"
          />
          </Text>
          <Text style={{fontSize:16,lineHeight:28}}>
          A sentence which has only one <UnderlineTextHelper text="subject"/> ad one <UnderlineTextHelper text="predicate"/> is called a Simple Sentence.
          </Text>

          <Text style={{fontSize:16,lineHeight:28,marginTop:10}}>Ex: 1. I saw Rani at the bus stop.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>2. Revenge is a kind of wild justice.</Text>
        </View>

      <View>
        {/* compound */}
        <Text style={{fontSize:16,marginTop:15}}>
            <UnderlineTextHelper text="2. Compound Sentence:"
          />
          </Text>

          <Text style={{fontSize:16,lineHeight:28}}>
          A sentence which consists of <UnderlineTextHelper text="two or more  co-ordinate clauses"/> is called a compound sentence.
          </Text>


          <Text style={{fontSize:16,lineHeight:28,marginTop:10}}>EX: 1. I went to Agra <UnderlineTextHelper text="and"/> visited the Taj Mahal.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>2. Madavi told me about her marriage <UnderlineTextHelper text="and"/> I was glad of it.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>3. He tried hard <UnderlineTextHelper text="but"/> failed in his attempt. </Text>
          <Text style={{fontSize:16,lineHeight:28}}>4. The doctor examined the patient <UnderlineTextHelper text="and"/> cured him.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>5. The film ended <UnderlineTextHelper text="and"/> the audience went away.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>6. I looked at Ramya <UnderlineTextHelper text="and"/> she smiled at me.</Text>
      </View>

      <View>
        {/* Complex */}
        <Text style={{fontSize:16,marginTop:15}}>
            <UnderlineTextHelper text="3.Complex Sentence: "
          />
          </Text>

          <Text style={{fontSize:16,lineHeight:28}}>
          A sentence which consists of one main clause and one or more subordinate clauses is called a Complex Sentence.
          </Text>

          <Text style={{fontSize:16,lineHeight:28,marginTop:10}}>1. <UnderlineTextHelper text="When"/> I went there, I found that Padmaja was cooking.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>2. I saw Padma <UnderlineTextHelper text="when"/> she was talking to her brother.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>3. She got a job <UnderlineTextHelper text="after"/>  she had completed her studies.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>4. I did not know what had happened <UnderlineTextHelper text="when"/> I was away.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>5. I talked to Madavi <UnderlineTextHelper text="before"/>  she went to Delhi.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>6. <UnderlineTextHelper text="If"/>  you know about it, please tell me.</Text>
      </View>


      <View>
        {/* compound complex */}
        <Text style={{fontSize:16,marginTop:15}}>
            <UnderlineTextHelper text="4. Compound Complex Sentence:"
          />
          </Text>
          <Text style={{fontSize:16,lineHeight:28}}>
          A sentence which consists of <UnderlineTextHelper text="two or more main clauses"/> and at least one <UnderlineTextHelper text="subordinate clause"/> is called a compound-complex or double sentence.
          </Text>

          <Text style={{fontSize:16,lineHeight:28,marginTop:10}}>1. <UnderlineTextHelper text="While"/> the chief guest went on speech, the audience laughed at him <BoldTextHelper text="and"/> threw stones at him.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>2. I knew that Madavi had loved me <UnderlineTextHelper text="but"/> I did not have any idea <BoldTextHelper text="whether"/> she was interested in marriage.</Text>
          <Text style={{fontSize:16,lineHeight:28}}>3. My friend believes <UnderlineTextHelper text="that"/> he can do anything <UnderlineTextHelper text="if"/> he has a lot of money, <UnderlineTextHelper text="but"/> I can’t agree with him.</Text>
      </View>

    </View>
    </ScrollView>
  )
}

export default SimpleCompundComplexStartingScreen

const styles = StyleSheet.create({
  rootContainer:{
    marginTop:50,
    padding:10
  },
  mainHeading:{
    textAlign:"center",
    fontSize:20,
    color:"red",
    fontFamily:PoppinsRegular
  }
})