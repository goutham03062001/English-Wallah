import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
import {HighLightColor, SideHeadingColor} from "../utils/Colors"
import { PoppinsRegular } from '../../../../utils/FontHelper';

const OmissionOfTheArticle = () => {
  return (
    <View style={styles.rootContainer}>
    <ScrollView>
        <View>
            <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor,fontFamily:PoppinsRegular}]}>I. Before Proper Nouns:</Text>
            <Text style={styles.text}>Ex: Raju, Rani, Metpally, Hyderabad, India, etc</Text>

            <Text style={styles.text}>1. <BoldTextHelper text="X Raju"/> is coming.</Text>
            <Text style={styles.text}>2. <BoldTextHelper text="X Ramu"/> likes her a lot.</Text>
            <Text style={styles.text}>3. <BoldTextHelper text="X Metpally"/> is a town.</Text>
            <Text style={styles.text}>4. <BoldTextHelper text="X Tagore"/> was a truly great poet.</Text>
            <Text style={styles.text}>5. <BoldTextHelper text="X Delhi"/> is the capital of India.</Text>
            <Text style={styles.text}>6. <BoldTextHelper text="X Everest"/> is the highest peak in the world.</Text>

        </View>

        <View>
            <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor,fontFamily:PoppinsRegular}]}>II. Before Plural Nouns:</Text>

            <Text style={styles.text}>1. <BoldTextHelper text="X Birds"/> fly in the sky.</Text>
            <Text style={styles.text}>2. <BoldTextHelper text="X Cows"/> give milk.</Text>
            <Text style={styles.text}>3. I love <BoldTextHelper text="X books"/>.</Text>
            <Text style={styles.text}>4. <BoldTextHelper text="X Children"/> like chocolates.</Text>
            <Text style={styles.text}>5. <BoldTextHelper text="X Computers"/> are used in many offices.</Text>
            <Text style={styles.text}>6. <BoldTextHelper text="X Books"/> are essential to students.</Text>
           
            <Text style={styles.text}>
            NOTE: “THE” is also used when the reference is to all of the things mentioned, but only within a particular country or area. The country or area need not be stated; it may be implied in the context.
            </Text>
                <Text style={styles.text}>
                1. The recent frosts have damaged the cherries.
                </Text>
        </View>

        <View>
        <Text style={[styles.sideHeading,{backgroundColor:SideHeadingColor,fontFamily:PoppinsRegular}]}>III. Before Abstract Nouns:</Text>
        <Text style={styles.text}>
        Beauty, Pleasure, Grammar, Courage, Honesty, Poetry, Bravery, Wisdom, Childhood, Virtue , Commonsense , Perseverance, Patience, etc
        </Text>

        <Text style={styles.text}>1. <BoldTextHelper text="X Love"/> is blind.</Text>
        <Text style={styles.text}>2. <BoldTextHelper text="X Wisdom"/> comes with age.</Text>
        <Text style={styles.text}>3. This is real <BoldTextHelper text="X beauty"/>.</Text>
        <Text style={styles.text}>4. <BoldTextHelper text="X wisdom"/> is the gift of heaven.</Text>
        <Text style={styles.text}>5. <BoldTextHelper text="X Honestly"/> is the best policy.</Text>
        <Text style={styles.text}>6. <BoldTextHelper text="X Virtue"/> is its own reward.</Text>
        <Text style={styles.text}>7. <BoldTextHelper text="X commonsense"/> is a great virtue.</Text>
        <Text style={styles.text}>8. <BoldTextHelper text="X patience"/> and <BoldTextHelper text="X perseverance"/> can conquer all obstacles. </Text>
       
        <Text style={styles.text}>* But an Article may be used, <BoldTextHelper text="if these qualities are attributed to people." inputStyle={{color:HighLightColor}}/></Text>
        <Text style={styles.text}>1. <BoldTextHelper text="The wisdom"/> of Shakespeare is great. </Text>
        <Text style={styles.text}>2. I cannot forget <BoldTextHelper text="the kindness"/> with which he treated me.  </Text>
        <Text style={styles.text}>3. <BoldTextHelper text="The knowledge"/> of history. </Text>
        <Text style={styles.text}>4. <BoldTextHelper text="The beauty"/> of Padmaja.</Text>
        <Text style={styles.text}>5. <BoldTextHelper text="The honesty"/> of political leaders.</Text>
      
        </View>

        <View>
        <Text style={styles.sideHeading}>IV. Material Nouns:  </Text>
        <Text style={[styles.text,{color:HighLightColor,fontFamily:PoppinsRegular}]}>
        Glass, Sheet, Cloth, Copper, Silver, Gold, Iron, Lead, Wood, Concrete , Marble, Stone, Wine, Milk, Meat, Rice, Coffee, Flour, Sand, Butter, Bread, Cheese, Grass, etc        </Text>

        <Text style={styles.text}>1. <BoldTextHelper text="x Iron"/> and <BoldTextHelper text="x steel"/> are controlled commodities.</Text>
        <Text style={styles.text}>2. <BoldTextHelper text="x Gold"/> is costly.</Text>
        <Text style={styles.text}>3. <BoldTextHelper text="x silver"/> is white.</Text>
        <Text style={styles.text}>4. <BoldTextHelper text="x lead"/> is very heavy.</Text>
        <Text style={styles.text}>5. <BoldTextHelper text="x cotton"/> grows in our country.</Text>
        <Text style={styles.text}>6. <BoldTextHelper text="x water"/> is life.</Text>
        <Text style={styles.text}>7. <BoldTextHelper text="x sugar"/> is bad for your teeth.</Text>
        <Text style={styles.text}>8. <BoldTextHelper text="x bread"/> is made from <BoldTextHelper text="x flour"/>.</Text>
        <Text style={styles.text}>9. This pillar is made of reinforced <BoldTextHelper text="x concrete"/>.</Text>
        <Text style={styles.text}>10. Michelangelo carved his “David” in white <BoldTextHelper text="x marble"/>.</Text>
        
        <Text style={styles.text}>NOTE: An Article is required when they are particularized.</Text>
        <Text style={styles.text}>1. <BoldTextHelper text="The steel"/> produced at Visakha Steel plant.</Text>
        <Text style={styles.text}>2. <BoldTextHelper text="The gold"/> in the bank.</Text>
        <Text style={styles.text}>3. <BoldTextHelper text="The paper"/> used for printing this book.</Text>
        <Text style={styles.text}>4. Would you pass me <BoldTextHelper text="the sugar"/> (=the sugar on the table)</Text>
        <Text style={styles.text}>5. * (He got <BoldTextHelper text="the gold"/> medal in 2008 Olympics.)</Text>

        <Text style={styles.text}>NOTE:</Text>

        <Text style={styles.text}>
        All the nouns mentioned under Rule No. 2, 3, and 4 above are called Uncountable Nouns. Normally, as has been explained above, no Article is used before them. But if these nouns are used as Countable Nouns, Article “The” is used before them. If these nouns are followed by some prepositional phrase (with of or in). They become Countable Nouns. In such cases Article “THE” is used before them.
        </Text>

        <Text style={styles.text}>1. Kalidas is <UnderlineTextHelper inputStyle={{color:"red"}} text="the"/> <BoldTextHelper text="Shakespeare"/> <UnderlineTextHelper inputStyle={{color:"red"}} text="of"/> India.</Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> <BoldTextHelper text="beauty"/> <UnderlineTextHelper inputStyle={{color:"red"}} text="of"/> <BoldTextHelper text="kashmir"/> is remarkable.</Text>
        <Text style={styles.text}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> <BoldTextHelper text="gold"/> <UnderlineTextHelper inputStyle={{color:"red"}} text="of"/> <BoldTextHelper text="Kollar field"/> is not of high quality.</Text>
        <Text style={styles.text}>4. <BoldTextHelper text="The"/> <UnderlineTextHelper inputStyle={{color:"red"}} text="milk"/> <UnderlineTextHelper inputStyle={{color:"red"}} text="in"/> <BoldTextHelper text="the cup"/> has turned sour.</Text>
        <Text style={styles.text}>5. <BoldTextHelper text="The"/> <UnderlineTextHelper inputStyle={{color:"red"}} text="wisdom"/> <UnderlineTextHelper inputStyle={{color:"red"}} text="of"/> <BoldTextHelper text="Solomon"/> was known far and wide. </Text>
        </View>

        <View>
       

        <Text style={styles.sideHeading}>V. Names of buildings:</Text>
        <Text style={styles.text}>No Article is used with the names of the buildings if they are meant for primary purpose. </Text>

        <Text style={styles.text}>For example, schools / colleges for education, temple for prayer, and market for purchase or sale. When used in this sense, they take no Article. </Text>
        <Text style={styles.text}>Ex: School, College, University, Office , Home , Hospital, Nursing , Church, Market </Text>

        
        <Text style={styles.text}>1. I am going to <BoldTextHelper text="X college"/>. (for study)</Text>
        <Text style={styles.text}>2. I am going to <BoldTextHelper text="X church."/> (for prayer/worship)</Text>
        <Text style={styles.text}>3. I have learnt English at <BoldTextHelper text="X school."/> </Text>
        <Text style={styles.text}>4. He stays in <BoldTextHelper text="X bed"/> till nine every morning. </Text>
        <Text style={styles.text}>5. My uncle is in still in <BoldTextHelper text="X hospital."/> </Text>

        <Text style={styles.text}>NOTE: But when they mean only building or place for visit or sight – seeing or any other purpose, they take appropriate Article.</Text>
      

        <Text style={styles.text}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> school is very near to my house. </Text>
        <Text style={styles.text}>2. I met him at <UnderlineTextHelper inputStyle={{color:"red"}} text="the"/> church.</Text>
        <Text style={styles.text}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> bed is broken. </Text>
        <Text style={styles.text}>4. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> college is very beautifully constructed.</Text>
        <Text style={styles.text}>5. I went to <UnderlineTextHelper inputStyle={{color:"red"}} text="the"/> hospital to see my friend.</Text>
        <Text style={styles.text}>6. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> market is closed. </Text>

        </View>

        <View>
        <Text style={styles.sideHeading}>VI. No Article is used before Relations Such as <BoldTextHelper text="father, mother, brother, sister, aunt, uncle, etc,. man, woman cook and nurse" inputStyle={{color:HighLightColor}}/> are also to be included in this list. </Text>
        
        <Text style={styles.text}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Mother gave birth to me. </Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Father is coming today. </Text>
        <Text style={styles.text}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Children make every home a happy family. </Text>
        <Text style={styles.text}>4. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Aunt wants you to see her.</Text>
        <Text style={styles.text}>5. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Cook is in the kitchen.</Text>
        <Text style={styles.text}>6. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Nurse is very kind. </Text>
        <Text style={styles.text}>7. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Man is a social animal.</Text>
        <Text style={styles.text}>8. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Woman is clever than X man.</Text>

        <Text style={styles.text}>BUT: The man who is in front of the gate is my uncle.</Text>
        <Text style={styles.text}>The girl who has long hair is my wife.</Text>
        </View>

        <View>
        <Text style={styles.sideHeading}>VII. Names of meals: (Breakfast, lunch, dinner, supper, etc) </Text>
        
        <Text style={styles.text}>1. He invited me to <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> dinner.</Text>
        <Text style={styles.text}>2. I usually have <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> lunch at twelve. </Text>
        <Text style={styles.text}>3. I am late for <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> dinner.</Text>
        <Text style={styles.text}>4. I shall return for <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> supper.</Text>
        <Text style={styles.text}>5. I take <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> breakfast quite early.</Text>
        <Text style={styles.text}>6. What time do you have <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> lunch? </Text>
        <Text style={styles.text}>7. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Dinner is ready?</Text>
        <Text style={styles.text}>NOTE: We use “a” when there is an adjective before breakfast, lunch, dinner, etc. we use “The” when we specify.</Text>

        <Text style={styles.text}>1. I had <UnderlineTextHelper inputStyle={{color:"red"}} text="a"/> late lunch today.</Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> dinner we had at the Tourist Hotel was very nice.</Text>
        <Text style={styles.text}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> dinner will be held at Grand Hotel.</Text>
        <Text style={styles.text}>4. We enjoyed <UnderlineTextHelper inputStyle={{color:"red"}} text="the"/> breakfast she gave us.</Text>
        </View>


        <View>
        <Text style={styles.sideHeading}>VIII. Before the names of diseases:  (But, Before aches A / AN comes.)</Text>
        
        <Text style={styles.text}>1. He is suffering from <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> fever.</Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> AIDS is an incurable disease. </Text>
        <Text style={styles.text}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Cholera has broken out.</Text>
        <Text style={styles.text}>BUT:  The plague.</Text>
        <Text style={styles.text}>NOTE</Text>
        <Text style={styles.text}>1. A. Raju is suffering from <UnderlineTextHelper inputStyle={{color:"red"}} text="a"/> head ache.</Text>
        <Text style={styles.text}>2. Sita is suffering from <UnderlineTextHelper inputStyle={{color:"red"}} text="a"/> stomach ache / tooth ache.</Text>
        <Text style={styles.text}>3. She has <UnderlineTextHelper inputStyle={{color:"red"}} text="an"/> ear ache. </Text>

        </View>

        <View>
        <Text style={styles.sideHeading}>IX. Names of games/sports:</Text>
        
        <Text style={styles.text}>Ex: Cricket, football, tennis, chess, etc.</Text>
        <Text style={styles.text}>1. My brother plays <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> chess in leisure. </Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> cricket is a popular game in the world.</Text>
        <Text style={styles.text}>3. They fond of <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> football.</Text>


        </View>


        <View>
        <Text style={styles.sideHeading}>X. Names of senses, days, months, seasons:</Text>
        
        <Text style={styles.text}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> March is the third month of the year.</Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Monday comes after Sunday. </Text>
        <Text style={styles.text}>3. We go to Kashmir in <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> summer.</Text>
        <Text style={styles.text}>5. I don’t travel in <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> winter.</Text>

        </View>

        <View>
        <Text style={styles.sideHeading}>XI. No Article is used before Collective Nouns:</Text>
        
        <Text style={styles.text}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Society will not permit it.</Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Parliament is in sessions.</Text>
        <Text style={styles.text}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Jury has given its verdict.</Text>
        <Text style={styles.text}>4. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Army is on the move.</Text>

        </View>

        <View>
        <Text style={styles.sideHeading}>XII. Nature and society:</Text>
        
        <Text style={styles.text}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Nature is the best physician.</Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> society is a combination of all sections of people.</Text>
        <Text style={styles.text}>3. Wordsworth is a worshiper of <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Nature.</Text>
        <Text style={styles.text}>4. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Society is created for the welfare of man.</Text>

        </View>


        <View>
        <Text style={styles.sideHeading}>XIII. Before languages:</Text>
        
        <Text style={styles.text}>Ex: Telugu, Hindi, English, Tamil</Text>
        <Text style={styles.text}>1. I know <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> English.</Text>
        <Text style={styles.text}>2. He knows <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> French.</Text>
        <Text style={styles.text}>3. They speak <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Punjabi at home.</Text>
        <Text style={styles.text}>NOTE. 1: A. He is good at <UnderlineTextHelper inputStyle={{color:"red"}} text="the"/> English language.</Text>
        <Text style={styles.text}>NOTE. 2: But put <UnderlineTextHelper inputStyle={{color:"red"}} text="THE"/> before Nouns which name the inhabitants of a country collectively or as a community, but not before their languages.</Text>
        <Text style={styles.text}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> French live in France and the Portuguese in Portugal.</Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> British. (British People)</Text>
        <Text style={styles.text}>3. <UnderlineTextHelper inputStyle={{color:"red"}} text="The"/> Germans.</Text>

        </View>

        
        <View>
        <Text style={styles.sideHeading}>XIV. Names of colors:</Text>
        
        <Text style={styles.text}>Ex: White, yellow, green, black, red, blue, etc.</Text>
        <Text style={styles.text}>1. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> White stands for purity.</Text>
        <Text style={styles.text}>2. <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Green is associated with prosperity.</Text>
        
        </View>


        <View>
        <Text style={styles.sideHeading}>XV. Before the names of Festivals:</Text>
        
        <Text style={styles.text}>Ex: Diwali, Ramzan, Christmas, etc</Text>
        <Text style={styles.text}>1. He is coming on <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Dasara.</Text>
        <Text style={styles.text}>2. She is going on <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> Christmas.</Text>
        
        </View>


        <View>
        <Text style={styles.sideHeading}>XVI. Distributive Adjectives + Noun require no Article:</Text>
        
        <Text style={styles.text}>1. Each boy got a prize. (not, a/the each boy)</Text>
        <Text style={styles.text}>2. I love every student. (not, a/the every student)</Text>
        
        </View>


        
        <View>
        <Text style={styles.sideHeading}>XVII. Possessive Adjectives + Noun also require no Article:</Text>
        
        <Text style={styles.text}>1. This is <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> my house.</Text>
        <Text style={styles.text}>2. He is <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> your friend.</Text>
        <Text style={styles.text}>3. These are <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> our cows.</Text>
        
        </View>


         
        <View>
        <Text style={styles.sideHeading}>XVIII. Proper Noun + Apostrophe’s + Noun take no Article:</Text>
        
        <Text style={styles.text}>1. This is <BoldTextHelper text="Ramu’s house."/></Text>
        <Text style={styles.text}>2. That was <BoldTextHelper text="Mohan’s mistake."/></Text>
        <Text style={styles.text}>NOTE: But if a Common Noun has Apostrophe’s takes an appropriate Article.</Text>
        <Text style={styles.text}>1. This is an <UnderlineTextHelper inputStyle={{color:"red"}} text="old man’s"/> house. (not, old man’s house)</Text>
        <Text style={styles.text}>2. This is a <UnderlineTextHelper inputStyle={{color:"red"}} text="beggar’s"/> cottage.</Text>
        
        </View>


        <View>
        <Text style={styles.sideHeading}>XIX. No/Not Any + Noun need no Article:</Text>
        
        <Text style={styles.text}>1. There is no <UnderlineTextHelper inputStyle={{color:"red"}} text="boy"/> in the class. (not, a no boy)</Text>
        <Text style={styles.text}>2. She has not any <UnderlineTextHelper inputStyle={{color:"red"}} text="chance"/>.</Text>
        <Text style={styles.text}>3. There is not any <UnderlineTextHelper inputStyle={{color:"red"}} text="egg"/>.</Text>
        
        </View>


        <View>
        <Text style={styles.sideHeading}>XX. The noun used after kind of / sort of also takes no Article:</Text>
        
        <Text style={styles.text}>1. What kind of <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> chair do you want to buy?</Text>
        <Text style={styles.text}>2. I cannot deal with this sort of <UnderlineTextHelper inputStyle={{color:"red"}} text="X"/> man.</Text>
        <Text style={styles.text}>NOTE: But if kind of / sort of refers to some special quality or talent, it would take an appropriate Article.</Text>
        <Text style={styles.text}>1. What kind of <UnderlineTextHelper inputStyle={{color:"red"}} text="a"/> musician is he?</Text>
        <Text style={styles.text}>2. What sort of <UnderlineTextHelper inputStyle={{color:"red"}} text="a"/> problem would you discuss? </Text>
        
        </View>
    </ScrollView>
    </View>
  )
}

export default OmissionOfTheArticle

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        marginVertical:5,
        textAlign:"justify",
        lineHeight:28
      },
      sideHeading:{
        fontSize:17,
        marginVertical:15,
        lineHeight:28,
        paddingLeft:5
      },
      rootContainer:{
        paddingHorizontal:5
      }
})