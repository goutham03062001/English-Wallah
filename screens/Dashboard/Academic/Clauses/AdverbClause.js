import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
import UnderlineTextHelper from '../utils/UnderlineText';
const AdverbClause = () => {
  return (
    <ScrollView>
      <View style={{padding:10}}>
      <View>
      <Text style={{textAlign:"center",fontSize:20,color:"red"}}>Adverb Clause</Text>
    </View>

    <View>
      <Text style={{marginVertical:8,lineHeight:29,fontSize:16}}>
      A group of words which contains a subject and a predicate of its own and does the work of an adverb is called an Adverb Clause.
      </Text>
    </View>

    <Text style={{fontSize:18,textAlign:"center"}}>Kinds of Adverb Clauses:</Text>
      <Text style={{fontSize:16,marginTop:10}}>Adverb Clauses may be classified into eight kinds, namely:	</Text>
      <Text style={{fontSize:16,marginVertical:8,fontWeight:"bold"}}>(a) Adverb Clause of Time</Text>
      <Text style={{fontSize:16,marginVertical:8,fontWeight:"bold"}}>(b) Adverb Clause of Place</Text>
      <Text style={{fontSize:16,marginVertical:8,fontWeight:"bold"}}>(c) Adverb Clause of Purpose</Text>
      <Text style={{fontSize:16,marginVertical:8,fontWeight:"bold"}}>(d) Adverb Clause of Cause</Text>
      <Text style={{fontSize:16,marginVertical:8,fontWeight:"bold"}}>(e) Adverb Clause of Condition</Text>
      <Text style={{fontSize:16,marginVertical:8,fontWeight:"bold"}}>(f) Adverb Clause of Result</Text>
      <Text style={{fontSize:16,marginVertical:8,fontWeight:"bold"}}>(g) Adverb Clause of Comparison</Text>
      <Text style={{fontSize:16,marginVertical:8,fontWeight:"bold"}}>(h) Adverb Clause of Supposition or Concession</Text>
      
<View>
  <Text style={{fontSize:18,textDecorationLine:"underline"}}>(A) Adverb Clause of Time: </Text>
  <Text style={{fontSize:16,marginVertical:8,textAlign:"justify",lineHeight:29}}>
  A clause which is used to indicate time is called an Adverb Clause of Time.
An Adverb Clause of Time is introduced by conjunctions like <BoldTextHelper text="when / whenever / before / after / as / since / till / once and now that."/>

  </Text>

  <Text style={{fontSize:16,marginVertical:8}}>1. I felt very happy <BoldTextHelper text="when I saw Rani."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>2.<UnderlineTextHelper text=" Whenever you want to marry"/>, please remember me.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. I had never thought of marriage <UnderlineTextHelper text="before I saw Uma."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. He lost his happiness in life <UnderlineTextHelper text="after his wife had died."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>5. <UnderlineTextHelper text="As he began to sing,"/> we stopped talking.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>6. I haven’t seen Uma <UnderlineTextHelper text="since she was married."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>7. I shall wait for you <UnderlineTextHelper text="until you have written the letter."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>8. Don’t talk <UnderlineTextHelper text="while I am teaching."/></Text>
</View>      

<View>
  <Text style={{fontSize:18,textDecorationLine:"underline"}}>(B) Adverb Clause of Place:  </Text>
  <Text style={{fontSize:16,marginVertical:8,textAlign:"justify",lineHeight:29}}>
  A clause which is used to indicate place is called an Adverb Clause of Place. 

A clause of place is introduced by <BoldTextHelper text="where / or wherever."/>


  </Text>

  <Text style={{fontSize:16,marginVertical:8}}>1. <UnderlineTextHelper text="Wherever we went,"/> we were insulted. </Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. <UnderlineTextHelper text="Where there is a will,"/> there is a way.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3.<UnderlineTextHelper text=" Wherever you go,"/> I will continue to love you.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. I visited the place <UnderlineTextHelper text="where she built a school for children."/></Text>
</View> 


<View>
  <Text style={{fontSize:18,textDecorationLine:"underline"}}>(C) Adverb Clause of Purpose: </Text>
  <Text style={{fontSize:16,marginVertical:8,textAlign:"justify",lineHeight:29}}>
  A clause which is used to indicate purpose is called Adverb Clause of Purpose. 

A clause of purpose is introduced by words like <BoldTextHelper text="that / in order that / so that and lest."/>


  </Text>

  <Text style={{fontSize:16,marginVertical:8}}>1. We read <BoldTextHelper text="that we may understand the world."/> </Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. He worked hard to earn money <BoldTextHelper text="in order that he might make his wife happy."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. He came to India <BoldTextHelper text="so that he might marry an Indian girl."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. He filled the petrol tank <BoldTextHelper text="so that he might avoid any trouble in his journey."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>5. She started early <BoldTextHelper text="lest she should avoid dely."/></Text>
</View>

<View>
  <Text style={{fontSize:18,textDecorationLine:"underline"}}>(D) Adverb Clause of Cause:</Text>
  <Text style={{fontSize:16,marginVertical:8,textAlign:"justify",lineHeight:29}}>
  A clause which is used to indicate cause or reason  is called an Adverb Clause of Cause or Reason.
  Adverb Clause of Cause is introduced by words like <BoldTextHelper text="because / since / as / as much as and that."/>
  </Text>

  <Text style={{fontSize:16,marginVertical:8}}>1. I stopped the work <BoldTextHelper text="because I was tired."/> </Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. <BoldTextHelper text="As I love you,"/> I can do anything for you.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. <BoldTextHelper text="Since she has a desire to marry,"/> she discontinued her studies.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. I loved Rani because <BoldTextHelper text="she was very beautiful."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>5. I am glad <BoldTextHelper text="that she has got promotion."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>6. We were sad <BoldTextHelper text="that he has lost his son."/></Text>
</View>


<View>
  <Text style={{fontSize:18,textDecorationLine:"underline"}}>(E) Adverb Clause of Condition: </Text>
  <Text style={{fontSize:16,marginVertical:8,textAlign:"justify",lineHeight:29}}>
  A clause which is used to indicate condition is called an Adverb Clause of Condition. 
A clause of condition is introduced by words like <BoldTextHelper text="if / unless / whether / provided that and  so long as."/>

  </Text>

  <Text style={{fontSize:16,marginVertical:8}}>1. <BoldTextHelper text="If you help me,"/> I shall be happy. </Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. <BoldTextHelper text="If I go there,"/> I can see Rajini.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. <BoldTextHelper text="Unless you tell her about your love,"/> she won’t know it.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. <BoldTextHelper text="Unless you try hard,"/> you won’t get the job.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>5. I can help you provided <BoldTextHelper text="that you must follow my advice."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>6. <BoldTextHelper text="So as long as you work hard,"/> you have no problem with me.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>7. You must do this <BoldTextHelper text="whether you like it or not."/></Text>
</View>


<View>
  <Text style={{fontSize:18,textDecorationLine:"underline"}}> (F) Adverb Clause of Result / consequence: </Text>
  <Text style={{fontSize:16,marginVertical:8,textAlign:"justify",lineHeight:29}}>
  A clause which is used to indicate result or consequence is called an Adverb Clause of Result or Consequence. An Adverb Clause of Result is introduced by words like <BoldTextHelper text="so that / such that."/>
  </Text>

  <Text style={{fontSize:16,marginVertical:8}}>1. Rani was <UnderlineTextHelper text="so"/> beautiful <UnderlineTextHelper text="that"/> <BoldTextHelper text="I loved her at first sight."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. She sang <UnderlineTextHelper text="so"/> beautifully <UnderlineTextHelper text="that"/> <BoldTextHelper text="we were impressed very much."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. I spoke to her in <UnderlineTextHelper text="such"/> a way <UnderlineTextHelper text="that"/> <BoldTextHelper text="she wanted to see me again."/></Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. <UnderlineTextHelper text="Such"/> was his ability in mathematics <UnderlineTextHelper text="that"/> <BoldTextHelper text="all were amazed at it."/></Text>
</View>


<View>
  <Text style={{fontSize:18,textDecorationLine:"underline"}}> (G) Adverb Clause of Comparison:  </Text>
  <Text style={{fontSize:16,marginVertical:8,textAlign:"justify",lineHeight:29}}>
  A clause which is used to indicate comparison is called an Adverb Clause of Comparison. 

An Adverb Clause of Comparison is introduced by words like <BoldTextHelper text="as / as – as / so – as and than."/>

  </Text>

  <Text style={{fontSize:16,marginVertical:8}}>1. Rani is <BoldTextHelper text="as"/> beautiful <BoldTextHelper text="as"/> Ramya.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. India is not <BoldTextHelper text="so"/> rich <BoldTextHelper text="as"/> America.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. She was much happier <BoldTextHelper text="than"/> I imagined.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. We are not <BoldTextHelper text="so"/> foolish <BoldTextHelper text="as"/> they think.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>5. Water is <BoldTextHelper text="as"/> essential <BoldTextHelper text="as"/> food.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>6. He speaks better <BoldTextHelper text="than"/> his sister.</Text>
</View>


<View>
  <Text style={{fontSize:18,textDecorationLine:"underline"}}> (H) Adverb Clause of Supposition or Concession:   </Text>
  <Text style={{fontSize:16,marginVertical:8,textAlign:"justify",lineHeight:29}}>
  A clause which is used to indicate supposition or concession is called an Adverb Clause of Supposition or Concession. 
  An Adverb Clause of Supposition or Concession is introduced by words like <BoldTextHelper text="though / although / even though / even if / while / and whereas."/>
  </Text>

  <Text style={{fontSize:16,marginVertical:8}}>1. <UnderlineTextHelper text="Though she is clever,"/> she is not proud.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>2. <UnderlineTextHelper text="Although I tried hard,"/> I could not succeed in my attempt.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>3. <UnderlineTextHelper text="Even if you were a beauty queen,"/> I can’t marry you.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>4. <UnderlineTextHelper text="Even though you my brother,"/> I can’t allow you to do such a cruel act.</Text>
  <Text style={{fontSize:16,marginVertical:8}}>5. <UnderlineTextHelper text="Whereas Rani is friendly,"/> her friend is impolite.</Text>
</View>
      </View>
    </ScrollView>
  )
}

export default AdverbClause

const styles = StyleSheet.create({})