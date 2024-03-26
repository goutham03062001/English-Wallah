import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
import UnderlineTextHelper from '../utils/UnderlineText'
import { PoppinsRegular } from '../../../../utils/FontHelper';
import { HighLightColor,SideHeadingColor } from '../utils/Colors';
const Participle = () => {
  return (
    <View style={styles.rootContainer}>
     <ScrollView>
      <Text style={styles.mainHeading}>Present Participle</Text>
   
      <View>
        <Text style={[styles.text,{fontWeight:"bold",backgroundColor:SideHeadingColor}]}>What are the three uses of present participle?</Text>
        <Text style={styles.text}>( a ) When two actions happen simultaneously.</Text>
        <Text style={styles.text}>( b ) As adjectives.</Text>
        <Text style={styles.text}>( c ) We also use present participles to explain a reason.</Text>
      </View>

      
      <View>
        <Text style={[styles.text,{fontWeight:"bold",backgroundColor:SideHeadingColor}]}>What are the three uses of present participle?</Text>
        <Text style={styles.text}>( a ) When two actions happen simultaneously.</Text>
        <Text style={styles.text}>( b ) As adjectives.</Text>
        <Text style={styles.text}>( c ) We also use present participles to explain a reason.</Text>
      </View>

      <View>
        <Text style={[styles.text,{fontWeight:"bold",backgroundColor:SideHeadingColor}]}>What is the difference between a gerund and a present participle?</Text>
        <Text style={styles.text}>A gerund is a <UnderlineTextHelper text="noun" inputStyle={{color:HighLightColor}}/> whereas a <UnderlineTextHelper text="present participle" inputStyle={{color:HighLightColor}}/> acts like a verb or an adjective.</Text>
        
      </View>


      <View>
        <Text style={[styles.text,{fontWeight:"bold",backgroundColor:SideHeadingColor}]}>What is present participle?</Text>
        <Text style={styles.text}>A present participle is nothing, but it’s the form of the verb ending with ing.</Text>
        
      </View>

      <View>
        <Text style={[styles.text,{fontWeight:"bold"}]}>For example</Text>
    
        <Text style={styles.text}>( 1 ) <BoldTextHelper text="Crying"/> loudly, he went home.</Text>
        <Text style={styles.text}>( 2 ) I have been <BoldTextHelper text="working"/> since last night.</Text>
        <Text style={styles.text}>( 3 ) Abhishek is <BoldTextHelper text="beating"/> him.</Text>
        <Text style={styles.text}>( 4 ) I saw Shivani <BoldTextHelper text="scolding"/> her daughter.</Text>
        <Text style={styles.text}>( 5 ) Many workers are trapped inside <BoldTextHelper text="the burning"/> factory.</Text>
        <Text style={styles.text}>
        Where <BoldTextHelper 
        inputStyle={{color:HighLightColor}}
        text="crying, working, beating, scolding and burning are present participle"/> examples.
        </Text>
      </View>

    <View>
      <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor}]}>Kinds of Participle</Text>
      <Text style={[styles.text]}>Participles are of three kinds—</Text>
  
      <Text style={styles.sideHeading}>1. Present Participle (Verb + ‘ing’)</Text>
      <Text style={[styles.text,{color:HighLightColor}]}>
      Eg: running, dancing, singing, crying, etc.
      </Text>
    
      <Text style={styles.sideHeading}>2. Past Participle (third form of the verb usually ending in—ed, –d, –t, –en, –n)</Text>
      <Text style={[styles.text,{color:HighLightColor}]}>
      Eg: tired, learned, burnt, broken, hurt, etc.      </Text>

      <Text style={styles.sideHeading}>3. Perfect Participle (having + Past Participle)</Text>
      <Text style={[styles.text,{color:HighLightColor}]}>
      Eg: having done, having completed, having seen, etc.
      </Text>


    </View>
      <Text style={styles.text}>Forms of Participles—Participles have the following forms—</Text>
      <View style={styles.view}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                Active Voice
              </Text>
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                Passive Voice
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              
              <Text style={styles.text}>Loving </Text>
              <Text style={styles.text}>Being loved</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
         
              <Text style={styles.text}>Having loved </Text>
              <Text style={styles.text}>Having been loved</Text>
            </View>
          </View>
    <View>
          
          <View>
            <Text style={styles.sideHeading}>Uses of the Participle</Text>
              <Text style={styles.text}>
              Since the Participle performs the same functions as the Adjective, it can be used in three ways like the Adjective—
              </Text>

              <View>
                <Text style={styles.sideHeading}>I. Attributive Use :</Text>

                <Text style={styles.text}>1. He jumped off <BoldTextHelper text="a"/> <UnderlineTextHelper text="running" inputStyle={{color:"red"}}/> <BoldTextHelper text="train"/>.</Text>
                <Text style={styles.text}>2. The river has <UnderlineTextHelper text="flowing" inputStyle={{color:"red"}}/> <BoldTextHelper text="water"/>.</Text>
                <Text style={styles.text}>3. <BoldTextHelper text="The"/> <UnderlineTextHelper text="tired" inputStyle={{color:"red"}}/> <BoldTextHelper text="horse"/> could run no farther.</Text>
                <Text style={styles.text}>4. <BoldTextHelper text="The"/> <UnderlineTextHelper text="train" inputStyle={{color:"red"}}/> <BoldTextHelper text="solider"/> was carried to the camp.</Text>
              </View>


              <View>
                <Text style={styles.sideHeading}>II. Predicative Use :</Text>

                <Text style={styles.text}>1. I had to keep <UnderlineTextHelper text="waiting" inputStyle={{color:"red"}}/>.</Text>
                <Text style={styles.text}>2. He felt completely <UnderlineTextHelper text="exhausted" inputStyle={{color:"red"}}/>.</Text>
                <Text style={styles.text}>3. He came <UnderlineTextHelper text="running" inputStyle={{color:"red"}}/>.</Text>
                <Text style={styles.text}>4. He seems much <UnderlineTextHelper text="worried" inputStyle={{color:"red"}}/>.</Text>
              </View>


              
              <View>
                <Text style={styles.sideHeading}>III. Absolute Use (with a noun or pronoun going before)</Text>

                <Text style={styles.text}>1. The day <UnderlineTextHelper text="being hot," inputStyle={{color:"red"}}/> we did not go out.</Text>
                <Text style={styles.text}>2. Time <UnderlineTextHelper text="permitting" inputStyle={{color:"red"}}/>, I will surely come.</Text>
                <Text style={styles.text}>3. God <UnderlineTextHelper text="willing" inputStyle={{color:"red"}}/>, we shall win the match.</Text>
                <Text style={styles.text}>4. The sun <UnderlineTextHelper text="having set," inputStyle={{color:"red"}}/> nothing could be seen.</Text>

                <Text style={styles.text}><BoldTextHelper text="Note—"/> Under the Absolute use, the part containing the Participle is quite independent of the main part.</Text>
            
              </View>



              <View>

                  <Text style={styles.sideHeading}>How to use present participles?</Text>
<Text style={styles.text}>
There are a lot of ways of using present participles. You can see some examples of present participle. Here are many present participle examples.
</Text>

              <Text style={styles.sideHeading}>Rule 1 - When two actions happen simultaneously</Text>
              
                <Text style={styles.text}>
                The present participle is used when one action is being done and another action is taking place by the same person.
                </Text>
              
              <Text style={styles.sideHeading}>For Example</Text>

                <Text style={styles.text}>( 1 ) Rahul fell asleep <UnderlineTextHelper text="listening" inputStyle={{color:"red"}}/> to music.</Text>
                <Text style={styles.text}>( 2 ) He went into the rain <UnderlineTextHelper text="running" inputStyle={{color:"red"}}/>.</Text>
              
              <Text style={styles.text}>
              Where <BoldTextHelper text="listening" inputStyle={{color:"red"}}/> and <UnderlineTextHelper text="running" inputStyle={{color:"red"}}/> are present participle examples.
              </Text>

              <Text style={[styles.text,{backgroundColor:"blue",color:"white",paddingHorizontal:4}]}>
              Moreover, it’s also used when one action is done very quickly after another one.
              </Text>

              <Text style={styles.sideHeading}>For Example</Text>

                <Text style={styles.text}>
              ( 1 ) <UnderlineTextHelper text="Throwing" inputStyle={{color:"red"}}/> the bag, he went to the cinema.
                </Text>

                <Text style={styles.text}> 
                ( 2 ) <UnderlineTextHelper text="Getting" inputStyle={{color:"red"}}/> off the clothes, he took a bath.
                </Text>

                <Text style={styles.text}>
                ( 3 ) <UnderlineTextHelper text="Seeing" inputStyle={{color:"red"}}/> his mother, he touched her feet.

                </Text>

                <Text style={styles.text}>
                Where <UnderlineTextHelper text="throwing, getting" inputStyle={{color:"red"}}/> and <UnderlineTextHelper text="seeing" inputStyle={{color:"red"}}/> are <UnderlineTextHelper text="present participle" inputStyle={{color:"red"}}/> examples.
                </Text>

                <Text style={styles.text}>
                In these sentences ( 6, 7, 8, 9 & 10 ), both the actions are occurring at the same time or one action after another.
                </Text>
              </View>

              <View>
                <Text style={styles.sideHeading}>Rule 2 - As adjectives</Text>
                <Text style={styles.sideHeading}>For Example</Text>

                <Text style={styles.text}>
                ( 1 ) Kavita wore <BoldTextHelper text="a"/> <UnderlineTextHelper text="fascinating" inputStyle={{color:"red"}}/> <BoldTextHelper text="dress"/> at the function.
                </Text>

                <Text style={styles.text}>
                ( 2 ) He has <BoldTextHelper text="an"/> <UnderlineTextHelper text="amazing" inputStyle={{color:"red"}}/> <BoldTextHelper text="bike"/>.
                </Text>

                <Text style={styles.text}>
                ( 3 ) I with my family watched <BoldTextHelper text="an"/> <UnderlineTextHelper text="interesting" inputStyle={{color:"red"}}/> <BoldTextHelper text="movie"/>.
                </Text>

                <Text style={styles.text}>
                ( 4 ) <BoldTextHelper text="That"/> <UnderlineTextHelper text="flying" inputStyle={{color:"red"}}/> <BoldTextHelper text="bird"/> is on the verge of extinction.                </Text>

                <Text style={styles.text}>
                ( 5 ) Many workers are inside <BoldTextHelper text="the"/> <UnderlineTextHelper text="burning" inputStyle={{color:"red"}}/> factory.                </Text>
                <Text style={styles.text}>
                Where <BoldTextHelper text="fascinating, amazing, interesting, flying"/> and <BoldTextHelper text="burning"/> are present participle examples as well as <BoldTextHelper text="adjectives"/>.
                </Text>
              </View>


              <View>
              <Text style={styles.sideHeading}>Rule 3 - To explain a reason</Text>
                <Text style={styles.text}>
                We also use present participles to explain a reason.
                </Text>

                <Text style={styles.sideHeading}>For Example</Text>
                

                <Text style={styles.text}>
                ( 1 ) <UnderlineTextHelper text="Knowing" inputStyle={{color:"red"}}/> that his father is now medically fit, he distributed the sweets.
                </Text>

                <Text style={styles.text}>
                ( 2 ) <UnderlineTextHelper text="Seeing" inputStyle={{color:"red"}}/> the ice cream, my nephew determined to eat it.                </Text>

                <Text style={styles.text}> 
                ( 3 ) <UnderlineTextHelper text="Being" inputStyle={{color:"red"}}/> dirty, he didn’t enter the temple.                </Text>

                <Text style={styles.text}>
                ( 4 ) <UnderlineTextHelper text="Thinking" inputStyle={{color:"red"}}/> that the policeman is not outside, he came out of the house.      </Text>

                <Text style={styles.text}>
                ( 5 ) <UnderlineTextHelper text="Asking" inputStyle={{color:"red"}}/> a question, he cleared all his doubts.              </Text>
                <Text style={styles.text}>
                Where <UnderlineTextHelper inputStyle={{color:HighLightColor}} text="knowing, seeing, being, thinking"/> and asking are <UnderlineTextHelper text="present participle" inputStyle={{color:HighLightColor}}/> examples.
                </Text>
              </View>

              <View>
                <Text style={styles.sideHeading}>Rule 4—Past Participle and Passive Voice </Text>

                <Text style={styles.text}>Most Past Participles are used in <BoldTextHelper text="Passive Voice." inputStyle={{color:HighLightColor}}/> Therefore they are used <UnderlineTextHelper text="after the Noun." inputStyle={{color:HighLightColor}}/> As—</Text>
                
                <Text style={styles.text}>
                1. Remember the <BoldTextHelper text="lessons"/>  <Text style={{textDecorationLine:"underline", color:"red",fontFamily:PoppinsRegular}}>taught</Text> by him.             
                 </Text>
                <Text style={styles.text}>
                2. I live in the <BoldTextHelper text="house"/> <Text style={{textDecorationLine:"underline", color:"red",fontFamily:PoppinsRegular}}>built</Text> by you.              
                 </Text>
                
                <Text style={styles.text}>
                3. Where is the <BoldTextHelper text="book"/> <Text style={{textDecorationLine:"underline", color:"red",fontFamily:PoppinsRegular}}>written</Text> by you ?                
                 </Text>
                
                <Text style={styles.text}>
                4. I shall never forget the <BoldTextHelper text="favour"/> <Text style={{textDecorationLine:"underline", color:"red",fontFamily:PoppinsRegular}}>shown</Text> to me.            
                  </Text>
                

                <View>
              <Text>
              <BoldTextHelper text = "Note—"/>
                 <Text style={styles.text}>
                 But there are some Past Participles which can be used <BoldTextHelper text="both as Verbs and Adjectives." inputStyle={{color:HighLightColor}}/> 
They are—<BoldTextHelper text="Torn, written, born, broken, fallen, given, spoken, stolen."
  inputStyle={{color:HighLightColor}}
/> As—
                </Text>
              </Text>

                <Text style={styles.text}>
                1. Here is <BoldTextHelper text="the"/> <UnderlineTextHelper text="broken" inputStyle={{color:"red"}}/> <BoldTextHelper text="window"/>.
                </Text>

                <Text style={styles.text}>
                2. Where is <BoldTextHelper text="the"/> <UnderlineTextHelper text="window" inputStyle={{color:"red"}}/> <BoldTextHelper text="broken" inputStyle={{color:"red"}}/> by the thief? (verb)
                </Text>

                <Text style={styles.text}>
                3. I want <BoldTextHelper text="a"/> <UnderlineTextHelper text="written" inputStyle={{color:"red"}}/> <BoldTextHelper text="statement" inputStyle={{color:"red"}}/>.
                </Text>

                <Text style={styles.text}> 
                4. This is <BoldTextHelper text="the letter"/> <UnderlineTextHelper text="written" inputStyle={{color:"red"}}/> by me.(verb)
                </Text>
                </View>
                
            </View>
              
              <View>
                <Text style={styles.sideHeading}>
                Rule 5—Present Participle and Active Voice 
                </Text>

                <Text style={styles.text}>
                Present Participles are mostly used in Active Voice before the Noun. As—
                </Text>

                <Text style={styles.text}>1. This is <BoldTextHelper text="our"/> <UnderlineTextHelper text="reading" inputStyle={{color:"red"}}/> room.</Text>
                <Text style={styles.text}>2. There is <BoldTextHelper text=" no"/> <UnderlineTextHelper text="drinking"  inputStyle={{color:"red"}}/> water.</Text>
                <Text style={styles.text}>3. Hawk is <BoldTextHelper text="a"/> <UnderlineTextHelper text="hunting" inputStyle={{color:"red"}}/> bird.</Text>
                <Text style={styles.text}>4. Don’t get down <BoldTextHelper text="a"/> <UnderlineTextHelper text="running" inputStyle={{color:"red"}}/> bus.</Text>
              </View>



              <View>
                <Text style={styles.sideHeading}>
                Rule 6—Participles used as Prepositions 
                </Text>

                <Text style={styles.text}>
                Some Participles are used as Prepositions and they depend on the main part of the sentence. As—                </Text>

                <Text style={styles.text}>1. <BoldTextHelper text="Referring to your letter,"/> I have to say that........</Text>
                <Text style={styles.text}>2. <BoldTextHelper text = "Regarding my qualifications,"/> I would submit that.....</Text>
              </View>


              <View>
                <Text style={styles.sideHeading}>
                Rule 7—Participles of Time              
                  </Text>

                <Text style={styles.text}>
                Some Participles suggest time. The sense of time becomes more clear when the Participle phrase is converted into a clause. As—
                </Text>
                <Text style={styles.text}>1. <BoldTextHelper text="Going to school, "/> I dropped my pen somewhere. (i.e. while I was going to school.).</Text>
                <Text style={styles.text}>2. <BoldTextHelper text = "Having finished   my work, "/> I returned from my office. (i.e. After I had finished my work.).</Text>
              </View>


              <View>
                <Text style={styles.sideHeading}>
                Rule 8—Participles of Reason / Cause         
                  </Text>

               
                <Text style={styles.text}>1. <BoldTextHelper text="Being tired, "/> I could not go any farther. (i.e. Because I was tired.)</Text>
                <Text style={styles.text}>2. <BoldTextHelper text = "Having been satisfied, "/> I did not take any further action. (i.e. Because I had been satisfied.)</Text>
              </View>


              <View>
                <Text style={styles.sideHeading}>
                Rule 9—Participles of Condition.             
                  </Text>

                
                <Text style={styles.text}>1. <BoldTextHelper text="Turning to the left, "/> you will see the Railway station. (i.e. If you turn to the left.)</Text>
                <Text style={styles.text}>2. <BoldTextHelper text = "Having been satisfied,"/> I did not take any further action. (i.e. Because I had been satisfied.)</Text>
              </View>


              <View>
                <Text style={styles.sideHeading}>
                Rule 10—Participles of Concession / Contrast              
                  </Text>

               
                <Text style={styles.text}>1. <BoldTextHelper text="Believing what you say, "/> I will still look into the matter myself. (i.e. Even though I believe what you say.)</Text>
                <Text style={styles.text}>2. <BoldTextHelper text = "Living from hand to mouth,"/> he yet maintains his self-respect. (i.e. Though he lives from hand to mouth.)</Text>
              
                <Text style={styles.text}>
                Examples of present participle sentences
                </Text>
              <ExampleHelper text="( 1 ) Rohan’s grandfather was sitting in his bed reading a newspaper."
                target="sitting"
              />
              <ExampleHelper 
              target="belonging"
              text="( 2 ) His younger brother took over all the studios belonging to Ranjit Singh."/>
              <ExampleHelper
              target="wearing"
               text="( 3 ) A beautiful girl wearing a white dress announced the results."/>
              <ExampleHelper
              target="Regretting"
               text="( 4 ) Regretting his mistake, the director said sorry."/>
              <ExampleHelper
              target="Being"
               text="( 5 ) Being blind, he fell down."/>
              <ExampleHelper 
                target="eating"
              text="( 6 ) He went to school eating pies and cakes."/>
              <ExampleHelper  
              target="carrying"
               text="( 7 ) I saw a van carrying newspapers."/>
              <ExampleHelper
              target="Seeing"
               text="( 8 ) Seeing the clouds, the cricketers lay on the ground."/>
              <ExampleHelper
              target="running"
               text="( 9 ) Abhishek went running towards his pet."/>
              <ExampleHelper
              target="booming"
               text="( 10 ) Love is the biggest booming beat."/>
              <ExampleHelper 
              target="existing"
              text="( 11 ) All the existing policies will be considered."/>
              <ExampleHelper 
              target="moving"
              text="( 12 ) Sometimes, I felt that the ground was moving."/>
              <ExampleHelper
                target="operating"
               text="( 13 ) The operating system is completely useless."/>
              <ExampleHelper
              target="burning"
               text="( 14 ) I saw a burning house."/>
              <ExampleHelper 
              target="abusing"
              text="( 15 ) When I entered the house, I heard someone abusing me."/>
              <ExampleHelper 
              target="walking"
              text="( 16 ) An old man was walking along the road."/>
              <ExampleHelper 
              target="flying"
              text="( 17 ) I saw some birds flying over the roof."/>
              <ExampleHelper
                target="Buying"
               text="( 18 ) Buying that house, I made a blunder."/>
              <ExampleHelper 
              target="stealing"
              text="( 19 ) I caught him red-handed stealing my books."/>
              <ExampleHelper
              target="Drinking"
               text="( 20 ) Drinking alcohol, he was dancing."/>
              <ExampleHelper 
              target="Diagnosing"
              text="( 21 ) Diagnosing the illness, I sent him to the related doctor."/>
              <ExampleHelper 
              target="calling"
              text="( 22 ) When I turned back, I heard someone calling for help."/>
              <ExampleHelper 
              target="Arriving"
              text="( 23 ) Arriving soon, I felt that there was no party."/>
              <ExampleHelper 
              target="talking"
              text="( 24 ) I heard the people talking about Narendra Modi."/>
              <ExampleHelper
              target="jogging"
               text="( 25 ) Kapil bought new jogging shoes."/>
              <ExampleHelper 
              target="Standing"
              text="( 26 ) Standing in the sunlight, I fixed the TV signal."/>
              <ExampleHelper
              target="Painting"
               text="( 27 ) Painting the picture, he was talking to me."/>
              <ExampleHelper
              target="glowing"
               text="( 28 ) Please bring that glowing marble."/>
              <ExampleHelper 
              target="confusing"
              text="( 29 ) The principal always creates a confusing situation."/>
              <ExampleHelper 
              target="inspiring"
              text="( 30 ) A sixth-grade student gave an inspiring speech."/>
             
                <View>
                </View>
              </View>
          </View>

    </View>

     </ScrollView>
    </View>
  )
}
const ExampleHelper = ({text,target})=>{

  const words = text.split(' ');
  
  return (
      <Text>
          {words.map((word, index) => {
              const shouldHighlight = target && target.includes(word.replace(/[.,]/g, ''));
              return (
                  <Text key={index} style={{ fontFamily: shouldHighlight ? PoppinsRegular : 'normal',fontSize:16 ,color:shouldHighlight?"red":"black",lineHeight:29,marginVertical:6}}>
                      {word}{index !== words.length - 1 && ' '}
                  </Text>
              );
          })}
      </Text>
  );
}

export default Participle

const styles = StyleSheet.create({
  rootContainer:{
    paddingHorizontal:8
  },
  mainHeading:{
    textAlign:"center",
    fontSize:20,
    marginVertical:10
  },
  text:{
    fontSize:16,
    marginVertical:10,
    textAlign:"justify",
    lineHeight:28
  },
  sideHeading:{
    fontSize:16,
    textDecorationLine:"underline",
    fontWeight:"bold",
    marginVertical:15,
    lineHeight:28,
    backgroundColor:SideHeadingColor
  }
})