import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
import UnderlineTextHelper from '../utils/UnderlineText'
const Participle = () => {
  return (
    <View style={styles.rootContainer}>
     <ScrollView>
      <Text style={styles.mainHeading}>Present Participle</Text>
   
      <View>
        <Text style={[styles.text,{fontWeight:"bold"}]}>What are the three uses of present participle?</Text>
        <Text style={styles.text}>( a ) When two actions happen simultaneously.</Text>
        <Text style={styles.text}>( b ) As adjectives.</Text>
        <Text style={styles.text}>( c ) We also use present participles to explain a reason.</Text>
      </View>

      
      <View>
        <Text style={[styles.text,{fontWeight:"bold"}]}>What are the three uses of present participle?</Text>
        <Text style={styles.text}>( a ) When two actions happen simultaneously.</Text>
        <Text style={styles.text}>( b ) As adjectives.</Text>
        <Text style={styles.text}>( c ) We also use present participles to explain a reason.</Text>
      </View>

      <View>
        <Text style={[styles.text,{fontWeight:"bold"}]}>What is the difference between a gerund and a present participle?</Text>
        <Text style={styles.text}>A gerund is a noun whereas a present participle acts like a verb or an adjective.</Text>
        
      </View>


      <View>
        <Text style={[styles.text,{fontWeight:"bold"}]}>What is present participle?</Text>
        <Text style={styles.text}>A present participle is nothing, but it’s the form of the verb ending with ing.</Text>
        
      </View>

      <View>
        <Text style={[styles.text,{fontWeight:"bold"}]}>For example</Text>
    
        <Text style={styles.text}>( 1 ) Crying loudly, he went home.</Text>
        <Text style={styles.text}>( 2 ) I have been working since last night.</Text>
        <Text style={styles.text}>( 3 ) Abhishek is beating him.</Text>
        <Text style={styles.text}>( 4 ) I saw Shivani scolding her daughter.</Text>
        <Text style={styles.text}>( 5 ) Many workers are trapped inside the burning factory.</Text>
        <Text style={styles.text}>
        Where <BoldTextHelper text="crying, working, beating, scolding and burning are present participle"/> examples.
        </Text>
      </View>

    <View>
      <Text style={styles.sideHeading}>Kinds of Participle</Text>
      <Text style={styles.text}>Participles are of three kinds—</Text>
  
      <Text style={styles.sideHeading}>1. Present Participle (Verb + ‘ing’)</Text>
      <Text style={styles.text}>
      Eg: running, dancing, singing, crying, etc.
      </Text>
    
      <Text style={styles.sideHeading}>2. Past Participle (third form of the verb usually ending in—ed, –d, –t, –en, –n)</Text>
      <Text style={styles.text}>
      Eg: tired, learned, burnt, broken, hurt, etc.      </Text>

      <Text style={styles.sideHeading}>3. Perfect Participle (having + Past Participle)</Text>
      <Text style={styles.text}>
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

                <Text style={styles.text}>1. He jumped off a running train.</Text>
                <Text style={styles.text}>2. The river has flowing water.</Text>
                <Text style={styles.text}>3. The tired horse could run no farther.</Text>
                <Text style={styles.text}>4. The wounded soldier was carried to the camp.</Text>
              </View>


              <View>
                <Text style={styles.sideHeading}>II. Predicative Use :</Text>

                <Text style={styles.text}>1. I had to keep waiting.</Text>
                <Text style={styles.text}>2. He felt completely exhausted.</Text>
                <Text style={styles.text}>3. He came running.</Text>
                <Text style={styles.text}>4. He seems much worried.</Text>
              </View>


              
              <View>
                <Text style={styles.sideHeading}>III. Absolute Use (with a noun or pronoun going before)</Text>

                <Text style={styles.text}>1. The day being hot, we did not go out.</Text>
                <Text style={styles.text}>2. Time permitting, I will surely come.</Text>
                <Text style={styles.text}>3. God willing, we shall win the match.</Text>
                <Text style={styles.text}>4. The sun having set, nothing could be seen.</Text>

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

                <Text style={styles.text}>( 1 ) Rahul fell asleep listening to music.</Text>
                <Text style={styles.text}>( 2 ) He went into the rain running.</Text>
              
              <Text style={styles.text}>
              Where listening and running are present participle examples.
              </Text>

              <Text style={[styles.text,{backgroundColor:"blue",color:"white",paddingHorizontal:4}]}>
              Moreover, it’s also used when one action is done very quickly after another one.
              </Text>

              <Text style={styles.sideHeading}>For Example</Text>

                <Text style={styles.text}>
              ( 1 ) Throwing the bag, he went to the cinema.
                </Text>

                <Text style={styles.text}>
                ( 2 ) Getting off the clothes, he took a bath.
                </Text>

                <Text style={styles.text}>
                ( 3 ) Seeing his mother, he touched her feet.

                </Text>

                <Text style={styles.text}>
                Where throwing, getting and seeing are present participle examples.
                </Text>

                <Text style={styles.text}>
                In these sentences ( 6, 7, 8, 9 & 10 ), both the actions are occurring at the same time or one action after another.
                </Text>
              </View>

              <View>
                <Text style={styles.sideHeading}>Rule 2 - As adjectives</Text>
                <Text style={styles.sideHeading}>For Example</Text>

                <Text style={styles.text}>
                ( 1 ) Kavita wore a fascinating dress at the function.
                </Text>

                <Text style={styles.text}>
                ( 2 ) He has an amazing bike.
                </Text>

                <Text style={styles.text}>
                ( 3 ) I with my family watched an interesting movie.
                </Text>

                <Text style={styles.text}>
                ( 4 ) That flying bird is on the verge of extinction.                </Text>

                <Text style={styles.text}>
                ( 5 ) Many workers are inside the burning factory.                </Text>
                <Text style={styles.text}>
                Where fascinating, amazing, interesting, flying and burning are present participle examples as well as adjectives.
                </Text>
              </View>


              <View>
              <Text style={styles.text}>Rule 3 - To explain a reason</Text>
                <Text style={styles.text}>
                We also use present participles to explain a reason.
                </Text>

                <Text style={styles.sideHeading}>For Example</Text>
                

                <Text style={styles.text}>
                ( 1 ) Knowing that his father is now medically fit, he distributed the sweets.
                </Text>

                <Text style={styles.text}>
                ( 2 ) Seeing the ice cream, my nephew determined to eat it.                </Text>

                <Text style={styles.text}>
                ( 3 ) Being dirty, he didn’t enter the temple.                </Text>

                <Text style={styles.text}>
                ( 4 ) Thinking that the policeman is not outside, he came out of the house.      </Text>

                <Text style={styles.text}>
                ( 5 ) Asking a question, he cleared all his doubts.              </Text>
                <Text style={styles.text}>
                Where knowing, seeing, being, thinking and asking are present participle examples.
                </Text>
              </View>

              <View>
                <Text style={styles.sideHeading}>Rule 4—Past Participle and Passive Voice </Text>

                <Text style={styles.text}>Most Past Participles are used in Passive Voice. Therefore they are used after the Noun. As—</Text>
                
                <Text style={styles.text}>
                1. Remember the <BoldTextHelper text="lessons"/>  <Text style={{textDecorationLine:"underline"}}>taught</Text> by him.             
                 </Text>
                <Text style={styles.text}>
                2. I live in the <BoldTextHelper text="house"/> <Text style={{textDecorationLine:"underline"}}>built</Text> by you.              
                 </Text>
                
                <Text style={styles.text}>
                3. Where is the <BoldTextHelper text="book"/> <Text style={{textDecorationLine:"underline"}}>written</Text> by you ?                
                 </Text>
                
                <Text style={styles.text}>
                4. I shall never forget the <BoldTextHelper text="favour"/> <Text style={{textDecorationLine:"underline"}}>shown</Text> to me.            
                  </Text>
                

                <Text style={styles.text}>
                <BoldTextHelper text = "Note—"/>
                <Text style={styles.text}>
                But there are some Past Participles which can be used both as Verbs and Adjectives. 
They are—Torn, written, born, broken, fallen, given, spoken, stolen. As—
                </Text>

                <Text style={styles.text}>
                1. Here is the broken window.
                </Text>

                <Text style={styles.text}>
                2. Where is the window broken by the thief? (verb)
                </Text>

                <Text style={styles.text}>
                3. I want a written statement.
                </Text>

                <Text style={styles.text}>
                4. This is the letter written by me.(verb)
                </Text>
                </Text>
                
            </View>
              
              <View>
                <Text style={styles.sideHeading}>
                Rule 5—Present Participle and Active Voice 
                </Text>

                <Text style={styles.text}>
                Present Participles are mostly used in Active Voice before the Noun. As—
                </Text>

                <Text style={styles.text}>1. This is <BoldTextHelper text="our"/> <Text style={{textDecorationLine:"underline"}}>reading</Text> room.</Text>
                <Text style={styles.text}>2. There is <BoldTextHelper text=" no"/> <Text style={{textDecorationLine:"underline"}}>
                drinking
                </Text> water.</Text>
                <Text style={styles.text}>3. Hawk is <BoldTextHelper text="a"/> <Text style={{textDecorationLine:"underline"}}>hunting</Text> bird.</Text>
                <Text style={styles.text}>4. Don’t get down <BoldTextHelper text="a"/> <Text style={{textDecorationLine:"underline"}}>running</Text> bus.</Text>
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
              <ExampleHelper text="( 1 ) Rohan’s grandfather was sitting in his bed reading a newspaper."/>
              <ExampleHelper text="( 2 ) His younger brother took over all the studios belonging to Ranjit Singh."/>
              <ExampleHelper text="( 3 ) A beautiful girl wearing a white dress announced the results."/>
              <ExampleHelper text="( 4 ) Regretting his mistake, the director said sorry."/>
              <ExampleHelper text="( 5 ) Being blind, he fell down."/>
              <ExampleHelper text="( 6 ) He went to school eating pies and cakes."/>
              <ExampleHelper text="( 7 ) I saw a van carrying newspapers."/>
              <ExampleHelper text="( 8 ) Seeing the clouds, the cricketers lay on the ground."/>
              <ExampleHelper text="( 9 ) Abhishek went running towards his pet."/>
              <ExampleHelper text="( 10 ) Love is the biggest booming beat."/>
              <ExampleHelper text="( 11 ) All the existing policies will be considered."/>
              <ExampleHelper text="( 12 ) Sometimes, I felt that the ground was moving."/>
              <ExampleHelper text="( 13 ) The operating system is completely useless."/>
              <ExampleHelper text="( 14 ) I saw a burning house."/>
              <ExampleHelper text="( 15 ) When I entered the house, I heard someone abusing me."/>
              <ExampleHelper text="( 16 ) An old man was walking along the road."/>
              <ExampleHelper text="( 17 ) I saw some birds flying over the roof."/>
              <ExampleHelper text="( 18 ) Buying that house, I made a blunder."/>
              <ExampleHelper text="( 19 ) I caught him red-handed stealing my books."/>
              <ExampleHelper text="( 20 ) Drinking alcohol, he was dancing."/>
              <ExampleHelper text="( 21 ) Diagnosing the illness, I sent him to the related doctor."/>
              <ExampleHelper text="( 22 ) When I turned back, I heard someone calling for help."/>
              <ExampleHelper text="( 23 ) Arriving soon, I felt that there was no party."/>
              <ExampleHelper text="( 24 ) I heard the people talking about Narendra Modi."/>
              <ExampleHelper text="( 25 ) Kapil bought new jogging shoes."/>
              <ExampleHelper text="( 26 ) Standing in the sunlight, I fixed the TV signal."/>
              <ExampleHelper text="( 27 ) Painting the picture, he was talking to me."/>
              <ExampleHelper text="( 28 ) Please bring that glowing marble."/>
              <ExampleHelper text="( 29 ) The principal always creates a confusing situation."/>
              <ExampleHelper text="( 30 ) A sixth-grade student gave an inspiring speech."/>
             
                <View>
                </View>
              </View>
          </View>

    </View>

     </ScrollView>
    </View>
  )
}
const ExampleHelper = ({text})=>{
  return(<>
                  <Text style={styles.text}>
{text}
                  </Text>

  </>)
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
    lineHeight:28
  }
})