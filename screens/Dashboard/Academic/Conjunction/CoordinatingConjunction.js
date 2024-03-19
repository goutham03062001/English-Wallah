import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const CoordinatingConjunction = () => {
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 8 ,marginTop:9}}>
    <Text style={{ lineHeight: 28, fontSize: 16 }}>
    Conjunctions which are used to join together clauses of equal rank are known as coordinating conjunctions. Coordinating conjunctions are divided into four kinds, namely     </Text>
    

    <View style={{marginVertical:15,gap:10}}>
      <Text style={{fontSize:16,lineHeight:35}}>
        <BoldTextHelper text="A. Cumulative or Copulative Conjunctions"/>
      </Text>
      <Text style={{fontSize:16,lineHeight:35}}>
        <BoldTextHelper text="B. Adversative Conjunctions"/>
      </Text>
      <Text style={{fontSize:16,lineHeight:35}}>
        <BoldTextHelper text="C. Disjunctive or Alternative Conjunctions"/>
      </Text>
      <Text style={{fontSize:16,lineHeight:35}}>
        <BoldTextHelper text="D. Illative Conjunctions"/>
      </Text>
     
      </View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>
      <BoldTextHelper text="A. Cumulative or Copulative Conjunctions:"/>
    </Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:22}}>
    Conjunctions which are <UnderlineTextHelper text="used to express a choice between two alternatives"/> are known as Cumulative or Copulative conjunctions. 
    </Text>
    <Text style={{textAlign:"center",marginVertical:10}}>Or</Text>

      <Text style={{fontSize:16,lineHeight:35}}>
      Conjunctions which are <UnderlineTextHelper text="used to join statements"/> are known as Cumulative or Copulative conjunctions.
      </Text>

      <BoldTextHelper
        text="Ex: And, so, both and, not only … but also, as well as, etc."
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,lineHeight:35}}>1. She looked <UnderlineTextHelper text="and"/> smiled at me.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>2. He is my father <UnderlineTextHelper text="so"/>  I respect him.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>3. They <UnderlineTextHelper text="both"/>  gave me money <UnderlineTextHelper text="and"/>  stood by me in trouble.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>4. <UnderlineTextHelper text="As well as"/> writing the letter for me, he posted it.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>5. They <UnderlineTextHelper text="not only"/> invited me to the diner but also sent a car for me.</Text>
      </View>
</View>
 

 <View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,color:"green",fontWeight:600}}>B. Adversative Conjunctions:</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:28,marginVertical:5}}>
    Conjunctions which are used to express a contrast between two statements are known as Adversative conjunctions.    </Text>
    {/* <Text style={{textAlign:"center",marginVertical:10}}>Or</Text>

      <Text style={{fontSize:16,lineHeight:35}}>
      Conjunctions which are used to join statements are known as Cumulative or Copulative conjunctions.
      </Text> */}

      <BoldTextHelper
        text="Ex: But, yet, still, only, whereas, nevertheless"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,lineHeight:35}}>1. She is beautiful <UnderlineTextHelper text="but"/> poor.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>2. You are intelligent <UnderlineTextHelper text="still"/> you have to work hard.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>3. He beats his wife <UnderlineTextHelper text="yet"/> he loves her.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>4. My friend is lazy <UnderlineTextHelper text="where as"/> his father is intelligent.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>5. He is a good servant <UnderlineTextHelper text="only"/> he has greed for food.</Text>
      </View>
</View>



<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>C. Disjunctive or Alternative Conjunctions</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:29}}>
    Conjunctions which are used to express a choice between two alternatives are known as Disjunctive or Alternative conjunctions.    
    </Text>
    

      <BoldTextHelper
        text="Ex: Or, nor, either - or, neither- nor, whether – or, else"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,lineHeight:35}}>1. I don’t know <UnderlineTextHelper text="whether"/> he has gone or not.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>2. I doubt <UnderlineTextHelper text="whether"/> he will help me or not.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>3. <UnderlineTextHelper text="Whether"/> he will help me <UnderlineTextHelper text="or"/> not is a doubtful.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>4. I am not sure <UnderlineTextHelper text="whether"/> she gets the job or she will have to continue teaching. </Text>
        <Text style={{fontSize:16,lineHeight:35}}>5. You must tell the truth <UnderlineTextHelper text="or"/> I can’t help you.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>6. She is <UnderlineTextHelper text="neither"/> a teacher <UnderlineTextHelper text="nor"/> a typist.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>7. She <UnderlineTextHelper text="neither"/> loved him <UnderlineTextHelper text="nor"/> liked to marry him.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>8. You must <UnderlineTextHelper text="either"/> return my mother <UnderlineTextHelper text="or"/> sell your home to me.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>9. You must do the work sincerely <UnderlineTextHelper text="else"/> you will lose the job.</Text>
      
      
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontWeight:700,color:"green"}}>D. Illative Conjunctions</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:29}}>
    Conjunctions which are used to express an inference are known as Illative conjunctions.    </Text>
    

      <BoldTextHelper
        text="Ex: For, since, so, therefore, consequently"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,lineHeight:35}}>1. I loved Madavi <UnderlineTextHelper text="for"/> she is very beautiful.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>2. <UnderlineTextHelper text="Since"/> you have money, you can help him.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>3. He is poor <UnderlineTextHelper text="so"/> he cannot visit America.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>4. He is my enemy <UnderlineTextHelper text="therefore"/> I dislike him. </Text>
        <Text style={{fontSize:16,lineHeight:35}}>5. I have never seen him <UnderlineTextHelper text="since"/> his father died.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>6. You can have apples <UnderlineTextHelper text="or"/> grapes.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>7. You can go to Kanpur <UnderlineTextHelper text="or"/> luck now.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>8. Many new developments have taken place <UnderlineTextHelper text="since"/> I left home.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>9. My father died last year <UnderlineTextHelper text="consequently "/> we faced several problems.</Text>
      
      
      </View>
</View>
  </View>
  </ScrollView>
  )
}

export default CoordinatingConjunction

const styles = StyleSheet.create({})