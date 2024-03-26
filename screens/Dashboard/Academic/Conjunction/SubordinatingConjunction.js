import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsRegular } from '../../../../utils/FontHelper';
import { HighLightColor } from '../utils/Colors';
const SubordinatingConjunction = () => {
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 8 ,marginTop:9}}>
    <Text style={{ lineHeight: 29, fontSize: 16 }}>
    Conjunctions which are used to join clauses of <UnderlineTextHelper 
    inputStyle={{color:HighLightColor}}
    text="unequal rank"/> are known as Subordinating conjunctions.
        </Text>
 

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:16.5,marginVertical:10,fontWeight:600,color:"black",fontFamily:PoppinsRegular,backgroundColor:"#FFDE7D"}}>A. Time</Text>
    

      <BoldTextHelper
        text="Ex: 
        Before, after, till, until, since, when, while, as, as soon as"
        fontSize={16}
        inputStyle={{color:HighLightColor}}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. Madavi had gone <UnderlineTextHelper inputStyle={{color:"red"}} text="before"/> I spoke to her.		</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. I began my work <UnderlineTextHelper inputStyle={{color:"red"}} text="after"/> they had gone.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. He retired to bed <UnderlineTextHelper inputStyle={{color:"red"}} text="after"/> the show was over.		</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. I will wait for you <UnderlineTextHelper inputStyle={{color:"red"}} text="until"/> you return.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. Don’t go <UnderlineTextHelper inputStyle={{color:"red"}} text="until"/> I come.				</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>6. I shall wait <UnderlineTextHelper inputStyle={{color:"red"}} text="till"/> you come.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>7. Wait for me <UnderlineTextHelper inputStyle={{color:"red"}} text="till"/> I return.	</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>8. I have known him <UnderlineTextHelper inputStyle={{color:"red"}} text="since"/> he was a child.</Text>
       
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>9. I haven’t seen Rani <UnderlineTextHelper inputStyle={{color:"red"}} text="since"/> she was married.	</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>10. I shall be happy <UnderlineTextHelper inputStyle={{color:"red"}} text="when"/> family is with me.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>11. I shall meet you <UnderlineTextHelper inputStyle={{color:"red"}} text="when"/> you come next.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>12. <UnderlineTextHelper inputStyle={{color:"red"}} text="While"/> I was in the service, I never saw him.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>13. <UnderlineTextHelper inputStyle={{color:"red"}} text="While"/> there is life, there is hope.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>14. He woke up <UnderlineTextHelper inputStyle={{color:"red"}} text="as"/> the clock struck six.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>15. I got up <UnderlineTextHelper inputStyle={{color:"red"}} text="as soon as"/> he saw me.</Text>
      </View>


      <View style={{marginVertical:15}}>
        <Text style={{marginVertical:10,fontSize:18,backgroundColor:"#FFDE7D"}}>NOTE - 1</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:30}}>
        If the <BoldTextHelper text="principle clause"
        inputStyle={{color:HighLightColor}}

        /> is in the <BoldTextHelper text="FUTURE TENSE"
        inputStyle={{color:HighLightColor}}

        />, the <UnderlineTextHelper         inputStyle={{color:HighLightColor}}
 text="subordinate clauses"/> will beginning with conjunctions of time should be in the <UnderlineTextHelper         inputStyle={{color:HighLightColor}}
 text="SIMPLE PRESENT"/> or <UnderlineTextHelper         inputStyle={{color:HighLightColor}}
 text="PRESENT PERFECT"/> (not in SIMPLE FUTURE)
        </Text>
      </View>


      <View style={{marginVertical:15}}>
        <Text style={{marginVertical:8,fontSize:18,backgroundColor:"#FFDE7D"}}>NOTE - 2</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>
        The clause following <UnderlineTextHelper         inputStyle={{color:HighLightColor}}
 text="after"/> is usually in the <UnderlineTextHelper         inputStyle={{color:HighLightColor}}
 text="Present Perfect "/> (not in simple present)
        </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29,marginTop:10}}>EX: He will return <UnderlineTextHelper inputStyle={{color:"red"}} text="after"/> the train has left.</Text>
      </View>
</View>
 

 <View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontFamily:PoppinsRegular,color:"black",backgroundColor:"#FFDE7D"}}>B. Cause / Reason</Text>
   
      <BoldTextHelper
        text="Because, since, as, for, that, considering that, seeing that, now that, in that, in as much as, noun + that, adjective + that"
        fontSize={16}
        inputStyle={{marginTop:8,color:HighLightColor}}
      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. I must go <UnderlineTextHelper inputStyle={{color:"red"}} text="because"/> my mother is ill.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. He failed <UnderlineTextHelper inputStyle={{color:"red"}} text="because"/> he didn’t work hard.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="Since"/> it is raining, I can’t go.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. <UnderlineTextHelper inputStyle={{color:"red"}} text="Since"/> it is dark, take the torch with you.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. <UnderlineTextHelper inputStyle={{color:"red"}} text="As"/> she is my sister, I like her.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>6. <UnderlineTextHelper inputStyle={{color:"red"}} text="As"/> it is raining, I can’t go.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>7. We started late <UnderlineTextHelper inputStyle={{color:"red"}} text="for"/> morning was very cold. (reason / cause)</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>8. He can’t be trusted <UnderlineTextHelper inputStyle={{color:"red"}} text="for"/> he takes everything casually.</Text>
      </View>

      <View style={{marginVertical:10}}>
        <Text style={{fontSize:18,fontWeight:400,paddingVertical:5,paddingLeft:5,marginBottom:8,backgroundColor:"#435585",color:"white"}}>Advanced Examples</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>9. <UnderlineTextHelper inputStyle={{color:"red"}} text="Considering that"/> it was very cold, he did not go for swimming.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>10. <UnderlineTextHelper inputStyle={{color:"red"}} text="Seeing that"/> the morning was very foggy, we started late.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>11. <UnderlineTextHelper inputStyle={{color:"red"}} text="Now that"/> you have come, I can take a little rest.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>12. He deserves praise <UnderlineTextHelper inputStyle={{color:"red"}} text="in that"/> he has secured first position.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>13. I am glad <UnderlineTextHelper inputStyle={{color:"red"}} text="that"/> he has passed. (reason / cause)</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>14. He must suffer <UnderlineTextHelper inputStyle={{color:"red"}} text="in as much as"/> he is so lazy.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>15. A <UnderlineTextHelper inputStyle={{color:"red"}} text="fool that"/> he is, he must suffer.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>16. <UnderlineTextHelper inputStyle={{color:"red"}} text="Foolish that"/> his actions are, he must suffer.</Text>

      </View>
</View>



<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:16.5,marginVertical:10,color:"black",fontFamily:PoppinsRegular,backgroundColor:"#FFDE7D"}}>C. Purpose</Text>
    
    

      <BoldTextHelper
        text="Ex: That, lest "
        fontSize={16}
        inputStyle={{color:HighLightColor}}
      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. We eat <UnderlineTextHelper inputStyle={{color:"red"}} text="that"/> we may live.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. He walked quietly <UnderlineTextHelper inputStyle={{color:"red"}} text="lest"/> he <UnderlineTextHelper inputStyle={{color:"red"}} text="should"/> disturb his mother.</Text> 
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontFamily:PoppinsRegular,color:"black",backgroundColor:"#FFDE7D"}}>D. Result / Consequence</Text>
    
      <BoldTextHelper
        text="Ex: That "
        fontSize={16}
        inputStyle={{color:HighLightColor}}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. She sang so beautifully <UnderlineTextHelper inputStyle={{color:"red"}} text="that"/> we were impressed very much. </Text>
        
      
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:16.5,fontFamily:PoppinsRegular,color:"black",backgroundColor:"#FFDE7D"}}>E. Condition</Text>
    
      <BoldTextHelper
        text="Ex: If, unless, until, provided, provided that, in case, supposing that "
        fontSize={16}
        inputStyle={{color:HighLightColor,marginTop:8}}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="If"/> you are honest, you will be responsible. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="If"/> you start early, you will reach in time. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="If"/> she comes here, I shall talk to her. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. I shall fail <UnderlineTextHelper inputStyle={{color:"red"}} text="unless"/> you help me.  </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. <UnderlineTextHelper inputStyle={{color:"red"}} text="Unless"/> you ask me, I can’t teach you. </Text>
        
        <View style={{marginVertical:10}}>
        <Text style={{fontSize:18,fontWeight:400,paddingVertical:5,paddingLeft:5,marginBottom:8,backgroundColor:"#435585",color:"white"}}>Advanced Examples</Text>

        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>6. You can take the book <UnderlineTextHelper inputStyle={{color:"red"}} text="provided"/> you return it by tomorrow.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>7. You will succeed <UnderlineTextHelper inputStyle={{color:"red"}} text="provided"/> you are honest.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>8. He will succeed <UnderlineTextHelper inputStyle={{color:"red"}} text="provided that"/> he deals honestly.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>9. I will go alone <UnderlineTextHelper inputStyle={{color:"red"}} text="in case"/> he doesn’t come.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>10. <UnderlineTextHelper inputStyle={{color:"red"}} text="Supposing that"/> he is honest, he will succeed.</Text>


      </View>
      
      </View>
</View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontFamily:PoppinsRegular,color:"black",backgroundColor:"#FFDE7D"}}>F. Concession</Text>
    
      <BoldTextHelper
        text="Though, although, however, even if, whatever, no matter, for all, adjectives / adverbs + as "
        fontSize={16}
        inputStyle={{color:HighLightColor,marginTop:8}}
      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="Although"/> he has a lot of money, he doesn’t spend it. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="However"/> hard he tried, he failed in the exam. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="Even if"/> he is selfish, I will help him. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. <UnderlineTextHelper inputStyle={{color:"red"}} text="For all"/> they say about him, he is good man.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. <UnderlineTextHelper inputStyle={{color:"red"}} text="No matter"/> what you say, I will go ahead. </Text>
        
        
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>6. <UnderlineTextHelper inputStyle={{color:"red"}} text="Whatever"/> be the case, he will remain my friend.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>7. <UnderlineTextHelper inputStyle={{color:"red"}} text="Simple as"/> he is, he is not a fool.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>8. <UnderlineTextHelper inputStyle={{color:"red"}} text="Roughly as"/> he behaves, he is not a cruel man.</Text>
        

      
      </View>
</View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:16.5,fontFamily:PoppinsRegular,color:"black",marginVertical:10,backgroundColor:"#FFDE7D"}}>G. Comparison</Text>
    
      <BoldTextHelper
        text="Ex: Ex: As – as, no so/as — as, than (with comparative degree adjectives) "
        fontSize={16}
        inputStyle={{color:HighLightColor,marginTop:8}}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. She respected me more <UnderlineTextHelper inputStyle={{color:"red"}} text="than"/> I thought.	 </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. Ramya walks <UnderlineTextHelper inputStyle={{color:"red"}} text="as"/> beautiful <UnderlineTextHelper inputStyle={{color:"red"}} text="as"/> a film star. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. This book is <UnderlineTextHelper inputStyle={{color:"red"}} text="as"/> good <UnderlineTextHelper inputStyle={{color:"red"}} text="as"/> that.			 </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. This book is <UnderlineTextHelper inputStyle={{color:"red"}} text="not so (as) "/> good as that.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. This book is better <UnderlineTextHelper inputStyle={{color:"red"}} text="than"/> that.</Text>
        
        
      
      </View>
</View>
  </View>
  </ScrollView>
  )
}

export default SubordinatingConjunction

const styles = StyleSheet.create({})