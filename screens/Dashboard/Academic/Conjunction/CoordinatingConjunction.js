import { StyleSheet, Text, View,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
import { HighLightColor } from '../utils/Colors';
const CoordinatingConjunction = () => {
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 8 ,marginTop:9}}>
    <Text style={{ lineHeight: 28, fontSize: 16 }}>
    Conjunctions which are used to join together clauses of equal rank are known as coordinating conjunctions. Coordinating conjunctions are divided into four kinds, namely     </Text>
    

    <View style={{marginVertical:15,gap:10}}>
      <Text style={{fontSize:16,lineHeight:35}}>
        <BoldTextHelper text="A. Cumulative or Copulative Conjunctions"
          inputStyle={{color:"green"}}
        />
      </Text>
      <Text style={{fontSize:16,lineHeight:35}}>
        <BoldTextHelper text="B. Adversative Conjunctions" inputStyle={{color:"green"}}/>
      </Text>
      <Text style={{fontSize:16,lineHeight:35}}>
        <BoldTextHelper text="C. Disjunctive or Alternative Conjunctions" inputStyle={{color:"green"}}/>
      </Text>
      <Text style={{fontSize:16,lineHeight:35}}>
        <BoldTextHelper text="D. Illative Conjunctions" inputStyle={{color:"green"}}/>
      </Text>
     
      </View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:16.5,width:Dimensions.get("screen").width-5}}>
      <BoldTextHelper text="A. Cumulative or Copulative Conjunctions:"
        inputStyle={{backgroundColor:"#FFDE7D",color:"black"}}
      />
    </Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:22}}>
    Conjunctions which are <UnderlineTextHelper 
    inputStyle={{color:HighLightColor}}
     text="used to express a choice between two alternatives"/> are known as Cumulative or Copulative conjunctions. 
    </Text>
    <Text style={{textAlign:"center",marginVertical:10}}>Or</Text>

      <Text style={{fontSize:16,lineHeight:35}}>
      Conjunctions which are <UnderlineTextHelper 
    inputStyle={{color:HighLightColor}}
      
      text="used to join statements"/> are known as Cumulative or Copulative conjunctions.
      </Text>

      <BoldTextHelper
        text="Ex: And, so, both and, not only … but also, as well as, etc."
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,lineHeight:29}}>1. She looked <UnderlineTextHelper inputStyle={{color:"red"}} text="and"/> smiled at me.</Text>
        <Text style={{fontSize:16,lineHeight:29}}>2. He is my father <UnderlineTextHelper inputStyle={{color:"red"}} text="so"/>  I respect him.</Text>
        <Text style={{fontSize:16,lineHeight:29}}>3. They <UnderlineTextHelper inputStyle={{color:"red"}} text="both"/>  gave me money <UnderlineTextHelper inputStyle={{color:"red"}} text="and"/>  stood by me in trouble.</Text>
        <Text style={{fontSize:16,lineHeight:29}}>4. <UnderlineTextHelper inputStyle={{color:"red"}} text="As well as"/> writing the letter for me, he posted it.</Text>
        <Text style={{fontSize:16,lineHeight:29}}>5. They <UnderlineTextHelper inputStyle={{color:"red"}} text="not only"/> invited me to the diner but also sent a car for me.</Text>
      </View>
</View>
 

 <View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:16.5,color:"black",fontWeight:600,backgroundColor:"#FFDE7D",fontFamily:PoppinsRegular}}>B. Adversative Conjunctions:</Text>
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
        <Text style={{fontSize:16,lineHeight:35}}>1. She is beautiful <UnderlineTextHelper inputStyle={{color:"red"}} text="but"/> poor.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>2. You are intelligent <UnderlineTextHelper inputStyle={{color:"red"}} text="still"/> you have to work hard.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>3. He beats his wife <UnderlineTextHelper inputStyle={{color:"red"}} text="yet"/> he loves her.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>4. My friend is lazy <UnderlineTextHelper inputStyle={{color:"red"}} text="where as"/> his father is intelligent.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>5. He is a good servant <UnderlineTextHelper inputStyle={{color:"red"}} text="only"/> he has greed for food.</Text>
      </View>
</View>



<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:16.5,backgroundColor:"#FFDE7D",fontFamily:PoppinsRegular}}>C. Disjunctive or Alternative Conjunctions</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:29}}>
    Conjunctions which are used to express a choice between two alternatives are known as Disjunctive or Alternative conjunctions.    
    </Text>
    

      <BoldTextHelper
        text="Ex: Or, nor, either - or, neither- nor, whether – or, else"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,lineHeight:35}}>1. I don’t know <UnderlineTextHelper inputStyle={{color:"red"}} text="whether"/> he has gone or not.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>2. I doubt <UnderlineTextHelper inputStyle={{color:"red"}} text="whether"/> he will help me or not.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="Whether"/> he will help me <UnderlineTextHelper inputStyle={{color:"red"}} text="or"/> not is a doubtful.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>4. I am not sure <UnderlineTextHelper inputStyle={{color:"red"}} text="whether"/> she gets the job or she will have to continue teaching. </Text>
        <Text style={{fontSize:16,lineHeight:35}}>5. You must tell the truth <UnderlineTextHelper inputStyle={{color:"red"}} text="or"/> I can’t help you.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>6. She is <UnderlineTextHelper inputStyle={{color:"red"}} text="neither"/> a teacher <UnderlineTextHelper inputStyle={{color:"red"}} text="nor"/> a typist.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>7. She <UnderlineTextHelper inputStyle={{color:"red"}} text="neither"/> loved him <UnderlineTextHelper inputStyle={{color:"red"}} text="nor"/> liked to marry him.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>8. You must <UnderlineTextHelper inputStyle={{color:"red"}} text="either"/> return my mother <UnderlineTextHelper inputStyle={{color:"red"}} text="or"/> sell your home to me.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>9. You must do the work sincerely <UnderlineTextHelper inputStyle={{color:"red"}} text="else"/> you will lose the job.</Text>
      
      
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:16.5,backgroundColor:"#FFDE7D",fontFamily:PoppinsRegular}}>D. Illative Conjunctions</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:29}}>
    Conjunctions which are used to express an inference are known as Illative conjunctions.    </Text>
    

      <BoldTextHelper
        text="Ex: For, since, so, therefore, consequently"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,lineHeight:35}}>1. I loved Madavi <UnderlineTextHelper inputStyle={{color:"red"}} text="for"/> she is very beautiful.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="Since"/> you have money, you can help him.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>3. He is poor <UnderlineTextHelper inputStyle={{color:"red"}} text="so"/> he cannot visit America.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>4. He is my enemy <UnderlineTextHelper inputStyle={{color:"red"}} text="therefore"/> I dislike him. </Text>
        <Text style={{fontSize:16,lineHeight:35}}>5. I have never seen him <UnderlineTextHelper inputStyle={{color:"red"}} text="since"/> his father died.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>6. You can have apples <UnderlineTextHelper inputStyle={{color:"red"}} text="or"/> grapes.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>7. You can go to Kanpur <UnderlineTextHelper inputStyle={{color:"red"}} text="or"/> luck now.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>8. Many new developments have taken place <UnderlineTextHelper inputStyle={{color:"red"}} text="since"/> I left home.</Text>
        <Text style={{fontSize:16,lineHeight:35}}>9. My father died last year <UnderlineTextHelper inputStyle={{color:"red"}} text="consequently "/> we faced several problems.</Text>
      
      
      </View>
</View>
  </View>
  </ScrollView>
  )
}

export default CoordinatingConjunction

const styles = StyleSheet.create({})