import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsRegular } from '../../../../utils/FontHelper';
const SubordinatingConjunction = () => {
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 8 ,marginTop:9}}>
    <Text style={{ lineHeight: 29, fontSize: 16 }}>
    Conjunctions which are used to join clauses of <UnderlineTextHelper text="unequal rank"/> are known as Subordinating conjunctions.
        </Text>
 

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,marginVertical:10,fontWeight:600,color:"red",fontFamily:PoppinsRegular}}>A. Time</Text>
    

      <BoldTextHelper
        text="Ex: 
        Before, after, till, until, since, when, while, as, as soon as"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. Madavi had gone <UnderlineTextHelper text="before"/> I spoke to her.		</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. I began my work <UnderlineTextHelper text="after"/> they had gone.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. He retired to bed <UnderlineTextHelper text="after"/> the show was over.		</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. I will wait for you <UnderlineTextHelper text="until"/> you return.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. Don’t go <UnderlineTextHelper text="until"/> I come.				</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>6. I shall wait <UnderlineTextHelper text="till"/> you come.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>7. Wait for me <UnderlineTextHelper text="till"/> I return.	</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>8. I have known him <UnderlineTextHelper text="since"/> he was a child.</Text>
       
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>9. I haven’t seen Rani <UnderlineTextHelper text="since"/> she was married.	</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>10. I shall be happy <UnderlineTextHelper text="when"/> family is with me.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>11. I shall meet you <UnderlineTextHelper text="when"/> you come next.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>12. <UnderlineTextHelper text="While"/> I was in the service, I never saw him.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>13. <UnderlineTextHelper text="While"/> there is life, there is hope.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>14. He woke up <UnderlineTextHelper text="as"/> the clock struck six.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>15. I got up <UnderlineTextHelper text="as soon as"/> he saw me.</Text>
      </View>


      <View style={{marginVertical:15}}>
        <Text style={{marginVertical:10,fontSize:18}}>NOTE - 1</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:30}}>
        If the <BoldTextHelper text="principle clause"/> is in the <BoldTextHelper text="FUTURE TENSE"/>, the <UnderlineTextHelper text="subordinate clauses"/> will beginning with conjunctions of time should be in the <UnderlineTextHelper text="SIMPLE PRESENT"/> or <UnderlineTextHelper text="PRESENT PERFECT"/> (not in SIMPLE FUTURE)
        </Text>
      </View>


      <View style={{marginVertical:15}}>
        <Text style={{marginVertical:8,fontSize:18}}>NOTE - 2</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>
        The clause following <UnderlineTextHelper text="after"/> is usually in the <UnderlineTextHelper text="Present Perfect "/> (not in simple present)
        </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29,marginTop:10}}>EX: He will return <UnderlineTextHelper text="after"/> the train has left.</Text>
      </View>
</View>
 

 <View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontFamily:PoppinsRegular,color:"red"}}>B. Cause / Reason</Text>
   
      <BoldTextHelper
        text="Because, since, as, for, that, considering that, seeing that, now that, in that, in as much as, noun + that, adjective + that"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. I must go <UnderlineTextHelper text="because"/> my mother is ill.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. He failed <UnderlineTextHelper text="because"/> he didn’t work hard.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. <UnderlineTextHelper text="Since"/> it is raining, I can’t go.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. <UnderlineTextHelper text="Since"/> it is dark, take the torch with you.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. <UnderlineTextHelper text="As"/> she is my sister, I like her.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>6. <UnderlineTextHelper text="As"/> it is raining, I can’t go.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>7. We started late <UnderlineTextHelper text="for"/> morning was very cold. (reason / cause)</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>8. He can’t be trusted <UnderlineTextHelper text="for"/> he takes everything casually.</Text>
      </View>

      <View style={{marginVertical:10}}>
        <Text style={{fontSize:18,fontWeight:700,marginBottom:8}}>Advanced Examples</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>9. <UnderlineTextHelper text="Considering that"/> it was very cold, he did not go for swimming.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>10. <UnderlineTextHelper text="Seeing that"/> the morning was very foggy, we started late.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>11. <UnderlineTextHelper text="Now that"/> you have come, I can take a little rest.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>12. He deserves praise <UnderlineTextHelper text="in that"/> he has secured first position.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>13. I am glad <UnderlineTextHelper text="that"/> he has passed. (reason / cause)</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>14. He must suffer <UnderlineTextHelper text="in as much as"/> he is so lazy.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>15. A <UnderlineTextHelper text="fool that"/> he is, he must suffer.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>16. <UnderlineTextHelper text="Foolish that"/> his actions are, he must suffer.</Text>

      </View>
</View>



<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,marginVertical:10,color:"red",fontFamily:PoppinsRegular}}>C. Purpose</Text>
    
    

      <BoldTextHelper
        text="Ex: That, lest "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. We eat <UnderlineTextHelper text="that"/> we may live.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. He walked quietly <UnderlineTextHelper text="lest"/> he <UnderlineTextHelper text="should"/> disturb his mother.</Text> 
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontFamily:PoppinsRegular,color:"red"}}>D. Result / Consequence</Text>
    
      <BoldTextHelper
        text="Ex: That "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. She sang so beautifully <UnderlineTextHelper text="that"/> we were impressed very much. </Text>
        
      
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontFamily:PoppinsRegular,color:"red"}}>E. Condition</Text>
    
      <BoldTextHelper
        text="Ex: If, unless, until, provided, provided that, in case, supposing that "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. <UnderlineTextHelper text="If"/> you are honest, you will be responsible. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. <UnderlineTextHelper text="If"/> you start early, you will reach in time. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. <UnderlineTextHelper text="If"/> she comes here, I shall talk to her. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. I shall fail <UnderlineTextHelper text="unless"/> you help me.  </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. <UnderlineTextHelper text="Unless"/> you ask me, I can’t teach you. </Text>
        
        <View style={{marginVertical:10}}>
        <Text style={{fontSize:18,fontWeight:700,fontFamily:PoppinsRegular,marginVertical:8}}>Advanced Examples</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>6. You can take the book <UnderlineTextHelper text="provided"/> you return it by tomorrow.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>7. You will succeed <UnderlineTextHelper text="provided"/> you are honest.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>8. He will succeed <UnderlineTextHelper text="provided that"/> he deals honestly.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>9. I will go alone <UnderlineTextHelper text="in case"/> he doesn’t come.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>10. <UnderlineTextHelper text="Supposing that"/> he is honest, he will succeed.</Text>


      </View>
      
      </View>
</View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontFamily:PoppinsRegular,color:"red"}}>F. Concession</Text>
    
      <BoldTextHelper
        text="Though, although, however, even if, whatever, no matter, for all, adjectives / adverbs + as "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. <UnderlineTextHelper text="Although"/> he has a lot of money, he doesn’t spend it. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. <UnderlineTextHelper text="However"/> hard he tried, he failed in the exam. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. <UnderlineTextHelper text="Even if"/> he is selfish, I will help him. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. <UnderlineTextHelper text="For all"/> they say about him, he is good man.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. <UnderlineTextHelper text="No matter"/> what you say, I will go ahead. </Text>
        
        
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>6. <UnderlineTextHelper text="Whatever"/> be the case, he will remain my friend.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>7. <UnderlineTextHelper text="Simple as"/> he is, he is not a fool.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>8. <UnderlineTextHelper text="Roughly as"/> he behaves, he is not a cruel man.</Text>
        

      
      </View>
</View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,fontFamily:PoppinsRegular,color:"red",marginVertical:10}}>G. Comparison</Text>
    
      <BoldTextHelper
        text="Ex: Ex: As – as, no so/as — as, than (with comparative degree adjectives) "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>1. She respected me more <UnderlineTextHelper text="than"/> I thought.	 </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>2. Ramya walks <UnderlineTextHelper text="as"/> beautiful <UnderlineTextHelper text="as"/> a film star. </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>3. This book is <UnderlineTextHelper text="as"/> good <UnderlineTextHelper text="as"/> that.			 </Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>4. This book is <UnderlineTextHelper text="not so (as) "/> good as that.</Text>
        <Text style={{fontSize:16,marginVertical:5,lineHeight:29}}>5. This book is better <UnderlineTextHelper text="than"/> that.</Text>
        
        
      
      </View>
</View>
  </View>
  </ScrollView>
  )
}

export default SubordinatingConjunction

const styles = StyleSheet.create({})