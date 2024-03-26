import { StyleSheet, Text, View ,ScrollView,Image, Alert, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import {HighLightColor,SideHeadingColor} from "../utils/Colors";
import BoldTextHelper from "../utils/BoldText";
import UnderLineTextHelper from "../utils/UnderlineText";
import ImageView from 'react-native-image-viewing';
import ImageComponent from '../utils/ImageComponent';
import { PoppinsRegular } from '../../../../utils/FontHelper';
import UnderlineTextHelper from '../utils/UnderlineText';
const PreModifiers = () => {
  
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
      <Text style={{fontSize:20,textAlign:"center"}}>PreModifiers</Text>

        <View>
          <Text style={styles.text}>But noun phrases can also include:</Text>

            <Text style={styles.text}>•	<BoldTextHelper text="Determiners:" inputStyle={{color:HighLightColor}}/>   <UnderLineTextHelper text="Those" inputStyle={{color:'red'}}/> houses are very expensive.</Text>
            <Text style={styles.text}>• <BoldTextHelper text="Quantifiers:" inputStyle={{color:HighLightColor}}/>   I've lived in <UnderLineTextHelper text="a lot of" inputStyle={{color:"red"}}/> houses.</Text>
            <Text style={styles.text}>•	<BoldTextHelper text="Numbers:" inputStyle={{color:HighLightColor}}/>        My brother owns <UnderLineTextHelper text="two" inputStyle={{color:"red"}}/> houses.</Text>
            <Text style={styles.text}>•	<BoldTextHelper text="Adjectives:" inputStyle={{color:HighLightColor}}/>           I love <UnderLineTextHelper text="old" inputStyle={{color:"red"}}/> houses.      </Text>
        <Text style={styles.text}>
        These parts of the noun phrase are called <BoldTextHelper text="premodifiers" inputStyle={{color:HighLightColor}}/> because they go <BoldTextHelper text="before the noun" inputStyle={{color:HighLightColor}}/>.
        </Text>

        <Text style={styles.text}>
        We use premodifiers in this order:
        </Text>

        <Text style={[styles.text,{backgroundColor:SideHeadingColor}]}>
        determiners and quantifiers	>	numbers	>	adjectives + NOUNS
        </Text>

        
        <Text style={styles.text}>
        For example:
        </Text>
    <View style={{marginVertical:20,display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    
     <ImageComponent inputImage={require("../../../../assets/premodifiers.png")}/>
    </View>


        </View>


        <View>
          <Text style={{fontSize:20,textAlign:"center",backgroundColor:SideHeadingColor}}>Determiners</Text>
          <Text style={styles.text}>Determiners are words we use in front of nouns. We use determiners to identify things (this book, my sister).</Text>

          <Text style={styles.text}>
          Determiners include the following common types:
          </Text>

          <View>
          <Text style={{fontSize:16,marginVertical:5}}><BoldTextHelper text = "Articles:" inputStyle={{color:HighLightColor}}/> a, an, the</Text>
<Text style={{fontSize:16,marginVertical:5}}> <BoldTextHelper text="Demonstrative Pronouns:" inputStyle={{color:HighLightColor}}/>	this, that, these, those</Text>
<Text style={{fontSize:16,marginVertical:5}}><BoldTextHelper text="Possessives:	" inputStyle={{color:HighLightColor}}/>		my, your, his, her, etc.</Text>
<Text style={{fontSize:16,marginVertical:5}}><BoldTextHelper text="Quantifiers:	" inputStyle={{color:HighLightColor}}/>		(a) few, some, many, etc.</Text>
<Text style={{fontSize:16,marginVertical:5}}><BoldTextHelper text = "Numbers:	" inputStyle={{color:HighLightColor}}/>		one, two, three, etc.</Text>

          </View>
        </View>

    <View>

    <Text style={{fontSize:20,textAlign:"center",marginVertical:20,backgroundColor:SideHeadingColor}}>Demonstrative Pronouns</Text>
<Text style={styles.text}><BoldTextHelper text="Demonstrate (verb):" inputStyle={{color:HighLightColor}}/> to show; to indicate; to point to</Text>
<Text style={styles.text}>A demonstrative pronoun represents a thing or things:</Text>
<Text style={styles.text}>•	near in distance or time <BoldTextHelper text="(this, these)" inputStyle={{color:HighLightColor}}/></Text>
<Text style={styles.text}>•	far in distance or time <BoldTextHelper text="(that, those)" inputStyle={{color:HighLightColor}}/></Text>

<Text style={styles.text}>1.	<BoldTextHelper text="This" inputStyle={{color:"red"}}/> tastes good.</Text>
<Text style={styles.text}>2.	Have you seen <BoldTextHelper text="this" inputStyle={{color:"red"}}/>?</Text>
<Text style={styles.text}>3.	<BoldTextHelper text="These" inputStyle={{color:"red"}}/> are bad times.</Text>
<Text style={styles.text}>4.	Do you like <BoldTextHelper text="these" inputStyle={{color:"red"}}s/>?</Text>
<Text style={styles.text}>5.	<BoldTextHelper text="That" inputStyle={{color:"red"}}/> is beautiful.   </Text>
<Text style={styles.text}>6.	Look at <BoldTextHelper text="that" inputStyle={{color:"red"}}/>!</Text>
<Text style={styles.text}>7.	<BoldTextHelper text="Those" inputStyle={{color:"red"}}/> were the days!</Text>
<Text style={styles.text}>8.	Can you see <BoldTextHelper text="those" inputStyle={{color:"red"}}/>?</Text>
<Text style={styles.text}>9.	<BoldTextHelper text="This" inputStyle={{color:'red'}}/> is heavier than that.</Text>
<Text style={styles.text}>10.	These are bigger than <BoldTextHelper text="those" inputStyle={{color:'red'}}/>.</Text>


    </View>


    <View>

<Text style={{fontSize:20,textAlign:"center",marginVertical:20,backgroundColor:SideHeadingColor}}>Possessives: Adjectives</Text>
<View>
  <ImageComponent inputImage={require("../../../../assets/premodifiers2.png")}/>
  <Text style={{color:"#31363F",fontSize:12,fontFamily:PoppinsRegular}}>Click view image</Text>
</View>


</View>


<View>
  <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>We use possessive adjectives:</Text>

  <Text style={[styles.text,{backgroundColor:SideHeadingColor}]}>To show something belongs to somebody:</Text>
  <Text style={styles.text}>1. That's <BoldTextHelper text="our house." inputStyle={{color:"red"}}/>
</Text>
<Text style={styles.text}> 
2. <BoldTextHelper text="My car"/> is very old.

</Text>

<Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>For relations and friends:</Text>
  <Text style={styles.text}> 
  1. <BoldTextHelper text="My mother" inputStyle={{color:"red"}}/> is a doctor.
  </Text>

  <Text style={styles.text}>
2. How old is <BoldTextHelper text="your sister?" inputStyle={{color:'red'}}/>

  </Text>

<Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>For parts of the body:</Text>
<Text style={styles.text}>1. He's broken <BoldTextHelper text="his arm."/></Text>
<Text  style={styles.text}> 2. She's washing <BoldTextHelper text="her hair."/></Text>
<Text  style={styles.text}>
3. I need to clean <BoldTextHelper text="my teeth."/>
   
</Text>
</View>

<View>
  <Text style={{fontSize:20,textAlign:"center",marginVertical:20,backgroundColor:SideHeadingColor}}>Quantifiers (How much / how many)</Text>
  <Text style={{fontSize:20,textAlign:"center",backgroundColor:SideHeadingColor}}>Level : Beginner</Text>

    <Text style={styles.text}>Sometimes we use a quantifier in the place of a determiner:</Text>
    <Text style={styles.text}>1. <BoldTextHelper text="Most children" inputStyle={{color:'red'}}/> start school at the age of five.</Text>
    <Text style={styles.text}>2. We ate <BoldTextHelper text="some bread and butter." inputStyle={{color:"red"}}/></Text>
    <Text style={styles.text}>3. We saw <BoldTextHelper text="lots of birds" inputStyle={{color:"red"}}/></Text>

</View>

<View>
  <Text style={styles.sideHeading}>Quantifiers with countable and uncountable nouns:</Text>
  <Text style={styles.text}>We can use these quantifiers with both <BoldTextHelper inputStyle={{color:HighLightColor}} text="count"/> and <BoldTextHelper inputStyle={{color:HighLightColor}} text="uncount"/> nouns:</Text>

<View>
  <ImageComponent
    inputImage={require("../../../../assets/premodifiers3.png")}
  />
</View>

  <Text style={styles.text}>1. We have <BoldTextHelper text="lots of" inputStyle={{color:"red"}}/> <UnderlineTextHelper text="time" inputStyle={{color:"red"}}/>.</Text>
  <Text style={styles.text}>2. Raju has <BoldTextHelper text="lots of" inputStyle={{color:"red"}}/> <UnderLineTextHelper text="friends" inputStyle={{color:"red"}}/>.</Text>
  <Text style={styles.text}>3. I can't go out. I've got <BoldTextHelper text="no" inputStyle={{color:"red"}}/> <UnderLineTextHelper text="money" inputStyle={{color:"red"}}/>.</Text>
  <Text style={styles.text}>4. There was a lot of food but <BoldTextHelper text="no" inputStyle={{color:"red"}}/> <UnderLineTextHelper text="drinks" inputStyle={{color:"red"}}/>.</Text>

</View>

<View>
  <Text style={{fontSize:20,textAlign:"center",marginVertical:30,backgroundColor:SideHeadingColor}}>Level: Intermediate</Text>
  <Text style={styles.text}>These more colloquial forms are also used with both count and uncount nouns:</Text>
  <Text style={styles.text}>plenty of	heaps of 	a load of 	loads of 	tons of</Text>
 
  <Text style={styles.text}>1. We have <BoldTextHelper text="loads of" inputStyle={{color:"red"}}/> <UnderLineTextHelper text="time" inputStyle={{color:"red"}}/>.</Text>
  <Text style={styles.text}>2. Joe has <BoldTextHelper text="plenty of" inputStyle={{color:"red"}}/> <UnderLineTextHelper text="friends" inputStyle={{color:"red"}}/>.</Text>
  <Text style={styles.text}>3. There was <BoldTextHelper text="heaps of" inputStyle={{color:"red"}}/> <UnderLineTextHelper inputStyle={{color:"red"}} text="food"/>.</Text>
</View>


<View>
  <Text style={styles.sideHeading}>Some and any:</Text>
  <Text style={styles.text}>We do not normally use the quantifier <BoldTextHelper text="some" inputStyle={{color:HighLightColor}}/> in negative and interrogative sentences. We normally use any:</Text>
 
  <Text style={styles.text}>1. <BoldTextHelper text="Do" inputStyle={{color:"red"}}/> you have <BoldTextHelper text="any" inputStyle={{color:"red"}}/> children?</Text>
  <Text style={styles.text}>2. <BoldTextHelper text="Did" inputStyle={{color:"red"}}/> you see <BoldTextHelper text="any" inputStyle={{color:"red"}}/> friends?</Text>
  <Text style={styles.text}>3. We <BoldTextHelper text="don't" inputStyle={{color:"red"}}/> have <BoldTextHelper text="any" inputStyle={{color:"red"}}/> children.</Text>
  <Text style={styles.text}>4. I <BoldTextHelper text="didn't" inputStyle={{color:"red"}}/> see <BoldTextHelper text="any" inputStyle={{color:"red"}}/> friends.</Text>
  <Text style={styles.text}>5. We saw <BoldTextHelper text="some" inputStyle={{color:"red"}}/> lions at the zoo, but we <BoldTextHelper text="didn't" inputStyle={{color:"red"}}/> see <BoldTextHelper text="any" inputStyle={{color:"red"}}/> tigers.</Text>
  
  <Text style={styles.text}>But we can use some for offers and requests:</Text>
  <Text style={styles.text}>1. Would you like <BoldTextHelper text="some" inputStyle={{color:"red"}}/> tea?</Text>
  <Text style={styles.text}>2. I want <BoldTextHelper text="some" inputStyle={{color:"red"}}/> apples, please.</Text>


</View>


<View>
  <Text style={styles.sideHeading}>Quantifiers with countable nouns:</Text>
  <Text style={styles.text}>Some quantifiers can be used only with count nouns:</Text>
  <View>
    <ImageComponent inputImage={require("../../../../assets/premodifier5.png")}/>
  </View>

  

  <Text style={styles.text}>
1. I’ll be back <BoldTextHelper text="in a couple of minutes" inputStyle={{color:"red"}}/>.
</Text>
  <Text style={styles.text}>2. There were <BoldTextHelper text="hundreds of people" inputStyle={{color:"red"}}/> at the meeting.</Text>

</View>


<View>
  <Text style={styles.sideHeading}>Quantifiers with uncount nouns:</Text>
   <Text style={styles.text}>Some quantifiers can be used only with uncount nouns:</Text> 
    <View>
      <ImageComponent inputImage={require("../../../../assets/premodifiers7.png")}/>
    </View>

  <Text style={styles.text}>1. Would you like <BoldTextHelper text="a little wine" inputStyle={{color:'red'}}/>?</Text>
  <Text style={styles.text}>2. Could I have a <BoldTextHelper text="bit of butter" inputStyle={{color:"red"}}/>, please?</Text>
  <Text style={styles.text}>These quantifiers are used particularly with abstract nouns such as time, money and trouble:</Text>
    <View>
      <ImageComponent inputImage={require('../../../../assets/premodifiers8.png')}/>
    </View>
  <Text style={styles.text}>1. It will probably cost <BoldTextHelper text="a great deal of money." inputStyle={{color:'red'}}/></Text>
  <Text style={styles.text}>2. He spent a good deal of time watching television.</Text>

</View>


<View>
  <Text style={{fontSize:20,textAlign:"center",backgroundColor:SideHeadingColor,marginVertical:20}}>Level: Intermediate:</Text>
    <Text style={styles.text}>
    We put a noun directly after a quantifier when we are talking about members of a group in general:
    </Text>
  <Text style={styles.text}>
1. <BoldTextHelper text="Few" inputStyle={{color:'red'}}/> <UnderLineTextHelper text="snakes" inputStyle={{color:'red'}}/> are dangerous.</Text>
  <Text style={styles.text}>2. <BoldTextHelper text="Most" inputStyle={{color:'red'}}/> <UnderLineTextHelper text="children" inputStyle={{color:'red'}}/> like chocolate.</Text>
  <Text style={styles.text}>3. I never have <BoldTextHelper text="enough" inputStyle={{color:'red'}}/> <UnderLineTextHelper text="money" inputStyle={{color:'red'}}/>.</Text>
  <Text style={styles.text}>But if we are talking about members of a specific group, we use of the as well:</Text>

  
  <Text style={styles.text}>1. <BoldTextHelper text="Few of the" inputStyle={{color:'red'}}/> <UnderLineTextHelper text="snakes in this zoo" inputStyle={{color:'red'}}/> are dangerous.</Text>
  <Text style={styles.text}>2. <BoldTextHelper text="Most of the" inputStyle={{color:'red'}}/> <UnderLineTextHelper text="boys at my school" inputStyle={{color:'red'}}/> play football.</Text>
  <Text style={styles.text}>3. He’s spent the <BoldTextHelper inputStyle={{color:"red"}} text="all (of)"/> <UnderLineTextHelper text="money that we gave him." inputStyle={{color:"red"}}/></Text>
  <Text style={styles.text}>4. Both (of) <BoldTextHelper text=" all (of) the2" inputStyle={{color:'red'}}/>  <UnderLineTextHelper inputStyle={{color:'red'}} text="chairs in my office"/> are broken.</Text>
  <Text style={styles.text}>Note: with all and both, we don’t need to use of. We can say <UnderLineTextHelper text="all the"/> … and <UnderLineTextHelper text="both the"/> …. <BoldTextHelper text="Both, either and neither"/></Text>
  
  <Text style={styles.text}>If we are talking about <BoldTextHelper text="two people or things"/>, we use the quantifiers <UnderLineTextHelper text="both, either and neither"/>:</Text>

    <View>
      <ImageComponent inputImage={require("../../../../assets/premodifiers9.png")}/>
    </View>

<Text style={styles.text}>Note that nouns with both have a plural verb but nouns with either and neither have a singular verb.</Text>



</View>


<View>
  <Text style={styles.sideHeading}>Every and each:</Text>
  <Text style={styles.text}>We use the quantifiers every and each with singular nouns to mean all:</Text>
  
  <Text style={styles.text}>1. There was a party in <BoldTextHelper text="every street."/> (= There were parties in all the streets.)</Text>
  <Text style={styles.text}>2. <BoldTextHelper text="Every shop"/> was decorated with flowers. (= All the shops were decorated with flowers.)</Text>
  <Text style={styles.text}>3. <BoldTextHelper text="Each child"/> was given a prize. (= All the children were given a prize.)</Text>
  <Text style={styles.text}>4. There was a prize in <BoldTextHelper text="each competition"/>. (= There were prizes in all the competitions.)</Text>
  <Text style={styles.text}>5. We often use every to talk about times like <BoldTextHelper text="days, weeks and years:"/></Text>
  <Text style={styles.text}>6. When we were children, we had holidays at our grandmother's <BoldTextHelper text="every year."/></Text>
  <Text style={styles.text}>7. When we stayed at my grandmother's house, we went to the beach <BoldTextHelper text="every day."/></Text>
  <Text style={styles.text}>8. We visit our daughter <BoldTextHelper text="every Christmas."/></Text>
  <Text style={styles.text}>9. We do not use a determiner with <BoldTextHelper text="every and each"/>.</Text>
  <Text style={styles.text}>10. <BoldTextHelper text="Every shop "/> was decorated with flowers. (NOT The every shop)</Text>
  <Text style={styles.text}>11. <BoldTextHelper text="Each child"/> was given a prize. (NOT The each child)</Text>
  
</View>

      </ScrollView>
    </View>
  )
}

export default PreModifiers

const styles = StyleSheet.create({
  text:{
    fontSize:16,
    marginVertical:5,
    textAlign:"justify",
    lineHeight:28
  },
  sideHeading:{
    fontSize:16,
    marginVertical:15,
    lineHeight:28,
    fontFamily:PoppinsRegular,
    paddingLeft:5,
    backgroundColor:SideHeadingColor
  },
  rootContainer:{
    paddingHorizontal:5
  }
})