import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'

const OmissionOfTheArticle = () => {
  return (
    <View style={styles.rootContainer}>
    <ScrollView>
        <View>
            <Text style={styles.sideHeading}>I. Before Proper Nouns:</Text>
            <Text style={styles.text}>Ex: Raju, Rani, Metpally, Hyderabad, India, etc</Text>

            <Text style={styles.text}>1. X Raju is coming.</Text>
            <Text style={styles.text}>2. X Ramu likes her a lot.</Text>
            <Text style={styles.text}>3. X Metpally is a town.</Text>
            <Text style={styles.text}>4. X Tagore was a truly great poet.</Text>
            <Text style={styles.text}>5. X Delhi is the capital of India.</Text>
            <Text style={styles.text}>6. X Everest is the highest peak in the world.</Text>

        </View>

        <View>
            <Text style={styles.sideHeading}>II. Before Plural Nouns:</Text>

            <Text style={styles.text}>1. X Birds fly in the sky.</Text>
            <Text style={styles.text}>2. X Cows give milk.</Text>
            <Text style={styles.text}>3. I love X books.</Text>
            <Text style={styles.text}>4. X Children like chocolates.</Text>
            <Text style={styles.text}>5. X Computers are used in many offices.</Text>
            <Text style={styles.text}>6. X Books are essential to students.</Text>
           
            <Text style={styles.text}>
            NOTE: “THE” is also used when the reference is to all of the things mentioned, but only within a particular country or area. The country or area need not be stated; it may be implied in the context.
            </Text>
                <Text style={styles.text}>
                1. The recent frosts have damaged the cherries.
                </Text>
        </View>

        <View>
        <Text style={styles.sideHeading}>III. Before Abstract Nouns:</Text>
        <Text style={styles.text}>
        Beauty, Pleasure, Grammar, Courage, Honesty, Poetry, Bravery, Wisdom, Childhood, Virtue , Commonsense , Perseverance, Patience, etc
        </Text>

        <Text style={styles.text}>1. X Love is blind.</Text>
        <Text style={styles.text}>2. X Wisdom comes with age.</Text>
        <Text style={styles.text}>3. This is real X beauty.</Text>
        <Text style={styles.text}>4. X wisdom is the gift of heaven.</Text>
        <Text style={styles.text}>5. X Honesty is the best policy.</Text>
        <Text style={styles.text}>6. X Virtue is its own reward.</Text>
        <Text style={styles.text}>7. X commonsense is a great virtue.</Text>
        <Text style={styles.text}>8. X patience and X perseverance can conquer all obstacles. </Text>
       
        <Text style={styles.text}>* But an Article may be used, if these qualities are attributed to people.</Text>
        <Text style={styles.text}>1. The wisdom of Shakespeare is great. </Text>
        <Text style={styles.text}>2. I cannot forget the kindness with which he treated me.  </Text>
        <Text style={styles.text}>3. The knowledge of history. </Text>
        <Text style={styles.text}>4. The beauty of Padmaja.</Text>
        <Text style={styles.text}>5. The honesty of political leaders.</Text>
      
        </View>

        <View>
        <Text style={styles.sideHeading}>IV. Material Nouns:  </Text>
        <Text style={styles.text}>
        Glass, Sheet, Cloth, Copper, Silver, Gold, Iron, Lead, Wood, Concrete , Marble, Stone, Wine, Milk, Meat, Rice, Coffee, Flour, Sand, Butter, Bread, Cheese, Grass, etc        </Text>

        <Text style={styles.text}>1. x Iron and x steel are controlled commodities.</Text>
        <Text style={styles.text}>2. x Gold is costly.</Text>
        <Text style={styles.text}>3. x silver is white.</Text>
        <Text style={styles.text}>4. x lead is very heavy.</Text>
        <Text style={styles.text}>5. x cotton grows in our country.</Text>
        <Text style={styles.text}>6. x water is life.</Text>
        <Text style={styles.text}>7. x sugar is bad for your teeth.</Text>
        <Text style={styles.text}>8. x bread is made from x  flour.</Text>
        <Text style={styles.text}>9. This pillar is made of reinforced x concrete.</Text>
        <Text style={styles.text}>10. Michelangelo carved his “David” in white x marble.</Text>
        
        <Text style={styles.text}>NOTE: An Article is required when they are particularized.</Text>
        <Text style={styles.text}>1. The steel produced at Visakha Steel plant.</Text>
        <Text style={styles.text}>2. The gold in the bank.</Text>
        <Text style={styles.text}>3. The paper used for printing this book.</Text>
        <Text style={styles.text}>4. Would you pass me the sugar? (=the sugar on the table)</Text>
        <Text style={styles.text}>5. * (He got the gold medal in 2008 Olympics.)</Text>

        <Text style={styles.text}>NOTE:</Text>

        <Text style={styles.text}>
        All the nouns mentioned under Rule No. 2, 3, and 4 above are called Uncountable Nouns. Normally, as has been explained above, no Article is used before them. But if these nouns are used as Countable Nouns, Article “The” is used before them. If these nouns are followed by some prepositional phrase (with of or in). They become Countable Nouns. In such cases Article “THE” is used before them.
        </Text>

        <Text style={styles.text}>1. Kalidas is the Shakespeare of India.</Text>
        <Text style={styles.text}>2. The beauty of Kashmir is remarkable.</Text>
        <Text style={styles.text}>3. The gold of Kollar field is not of high quality.</Text>
        <Text style={styles.text}>4. The milk in the cup has turned sour.</Text>
        <Text style={styles.text}>5. The wisdom of Solomon was known far and wide. </Text>
        </View>

        <View>
       

        <Text style={styles.sideHeading}>V. Names of buildings:</Text>
        <Text style={styles.text}>No Article is used with the names of the buildings if they are meant for primary purpose. </Text>

        <Text style={styles.text}>For example, schools / colleges for education, temple for prayer, and market for purchase or sale. When used in this sense, they take no Article. </Text>
        <Text style={styles.text}>Ex: School, College, University, Office , Home , Hospital, Nursing , Church, Market </Text>

        
        <Text style={styles.text}>1. I am going to X college. (for study)</Text>
        <Text style={styles.text}>2. I am going to X church. (for prayer/worship)</Text>
        <Text style={styles.text}>3. I have learnt English at X school. </Text>
        <Text style={styles.text}>4. He stays in X bed till nine every morning. </Text>
        <Text style={styles.text}>5. My uncle is in still in X hospital. </Text>

        <Text style={styles.text}>NOTE: But when they mean only building or place for visit or sight – seeing or any other purpose, they take appropriate Article.</Text>
      

        <Text style={styles.text}>1. The school is very near to my house. </Text>
        <Text style={styles.text}>2. I met him at the church.</Text>
        <Text style={styles.text}>3. The bed is broken. </Text>
        <Text style={styles.text}>4. The college is very beautifully constructed.</Text>
        <Text style={styles.text}>5. I went to the hospital to see my friend.</Text>
        <Text style={styles.text}>6. The market is closed. </Text>

        </View>

        <View>
        <Text style={styles.sideHeading}>VI. No Article is used before Relations Such as father, mother, brother, sister, aunt, uncle, etc,. man, woman cook and nurse are also to be included in this list. </Text>
        
        <Text style={styles.text}>1. X Mother gave birth to me. </Text>
        <Text style={styles.text}>2. X Father is coming today. </Text>
        <Text style={styles.text}>3. X Children make every home a happy family. </Text>
        <Text style={styles.text}>4. X Aunt wants you to see her.</Text>
        <Text style={styles.text}>5. X Cook is in the kitchen.</Text>
        <Text style={styles.text}>6. X Nurse is very kind. </Text>
        <Text style={styles.text}>7. X Man is a social animal.</Text>
        <Text style={styles.text}>8. X Woman is clever than X man.</Text>

        <Text style={styles.text}>BUT: The man who is in front of the gate is my uncle.</Text>
        <Text style={styles.text}>The girl who has long hair is my wife.</Text>
        </View>

        <View>
        <Text style={styles.sideHeading}>VII. Names of meals: (Breakfast, lunch, dinner, supper, etc) </Text>
        
        <Text style={styles.text}>1. He invited me to X dinner.</Text>
        <Text style={styles.text}>2. I usually have X lunch at twelve. </Text>
        <Text style={styles.text}>3. I am late for X dinner.</Text>
        <Text style={styles.text}>4. I shall return for X supper.</Text>
        <Text style={styles.text}>5. I take X breakfast quite early.</Text>
        <Text style={styles.text}>6. What time do you have X lunch? </Text>
        <Text style={styles.text}>7. X Dinner is ready?</Text>
        <Text style={styles.text}>NOTE: We use “a” when there is an adjective before breakfast, lunch, dinner, etc. we use “The” when we specify.</Text>

        <Text style={styles.text}>1. I had a late lunch today.</Text>
        <Text style={styles.text}>2. The dinner we had at the Tourist Hotel was very nice.</Text>
        <Text style={styles.text}>3. The dinner will be held at Grand Hotel.</Text>
        <Text style={styles.text}>4. We enjoyed the breakfast she gave us.</Text>
        </View>


        <View>
        <Text style={styles.sideHeading}>VIII. Before the names of diseases:  (But, Before aches A / AN comes.)</Text>
        
        <Text style={styles.text}>1. He is suffering from X fever.</Text>
        <Text style={styles.text}>2. X AIDS is an incurable disease. </Text>
        <Text style={styles.text}>3. X Cholera has broken out.</Text>
        <Text style={styles.text}>BUT:  The plague.</Text>
        <Text style={styles.text}>NOTE</Text>
        <Text style={styles.text}>1. A. Raju is suffering from a head ache.</Text>
        <Text style={styles.text}>2. Sita is suffering from a stomach ache / tooth ache.</Text>
        <Text style={styles.text}>3. She has an ear ache. </Text>

        </View>

        <View>
        <Text style={styles.sideHeading}>IX. Names of games/sports:</Text>
        
        <Text style={styles.text}>Ex: Cricket, football, tennis, chess, etc.</Text>
        <Text style={styles.text}>1. My brother plays X chess in leisure. </Text>
        <Text style={styles.text}>2. X cricket is a popular game in the world.</Text>
        <Text style={styles.text}>3. They fond of X football.</Text>


        </View>


        <View>
        <Text style={styles.sideHeading}>X. Names of senses, days, months, seasons:</Text>
        
        <Text style={styles.text}>1. X March is the third month of the year.</Text>
        <Text style={styles.text}>2. X Monday comes after Sunday. </Text>
        <Text style={styles.text}>3. We go to Kashmir in X summer.</Text>
        <Text style={styles.text}>5. I don’t travel in X winter.</Text>

        </View>

        <View>
        <Text style={styles.sideHeading}>XI. No Article is used before Collective Nouns:</Text>
        
        <Text style={styles.text}>1. X Society will not permit it.</Text>
        <Text style={styles.text}>2. X Parliament is in sessions.</Text>
        <Text style={styles.text}>3. X Jury has given its verdict.</Text>
        <Text style={styles.text}>4. X Army is on the move.</Text>

        </View>

        <View>
        <Text style={styles.sideHeading}>XII. Nature and society:</Text>
        
        <Text style={styles.text}>1. X Nature is the best physician.</Text>
        <Text style={styles.text}>2. X society is a combination of all sections of people.</Text>
        <Text style={styles.text}>3. Wordsworth is a worshiper of X Nature.</Text>
        <Text style={styles.text}>4. X Society is created for the welfare of man.</Text>

        </View>


        <View>
        <Text style={styles.sideHeading}>XIII. Before languages:</Text>
        
        <Text style={styles.text}>Ex: Telugu, Hindi, English, Tamil</Text>
        <Text style={styles.text}>1. I know X English.</Text>
        <Text style={styles.text}>2. He knows X French.</Text>
        <Text style={styles.text}>3. They speak X Punjabi at home.</Text>
        <Text style={styles.text}>NOTE. 1: A. He is good at the English language.</Text>
        <Text style={styles.text}>NOTE. 2: But put “THE” before Nouns which name the inhabitants of a country collectively or as a community, but not before their languages.</Text>
        <Text style={styles.text}>1. The French live in France and the Portuguese in Portugal.</Text>
        <Text style={styles.text}>2. The British. (British People)</Text>
        <Text style={styles.text}>3. The Germans.</Text>

        </View>

        
        <View>
        <Text style={styles.sideHeading}>XIV. Names of colors:</Text>
        
        <Text style={styles.text}>Ex: White, yellow, green, black, red, blue, etc.</Text>
        <Text style={styles.text}>1. X White stands for purity.</Text>
        <Text style={styles.text}>2. X Green is associated with prosperity.</Text>
        
        </View>


        <View>
        <Text style={styles.sideHeading}>XV. Before the names of Festivals:</Text>
        
        <Text style={styles.text}>Ex: Diwali, Ramzan, Christmas, etc</Text>
        <Text style={styles.text}>1. He is coming on X Dasara.</Text>
        <Text style={styles.text}>2. She is going on X Christmas.</Text>
        
        </View>


        <View>
        <Text style={styles.sideHeading}>XVI. Distributive Adjectives + Noun require no Article:</Text>
        
        <Text style={styles.text}>1. Each boy got a prize. (not, a/the each boy)</Text>
        <Text style={styles.text}>2. I love every student. (not, a/the every student)</Text>
        
        </View>


        
        <View>
        <Text style={styles.sideHeading}>XVII. Possessive Adjectives + Noun also require no Article:</Text>
        
        <Text style={styles.text}>1. This is X my house.</Text>
        <Text style={styles.text}>2. He is X your friend.</Text>
        <Text style={styles.text}>3. These are X our cows.</Text>
        
        </View>


         
        <View>
        <Text style={styles.sideHeading}>XVIII. Proper Noun + Apostrophe’s + Noun take no Article:</Text>
        
        <Text style={styles.text}>1. This is Ramu’s house.</Text>
        <Text style={styles.text}>2. That was Mohan’s mistake.</Text>
        <Text style={styles.text}>NOTE: But if a Common Noun has Apostrophe’s takes an appropriate Article.</Text>
        <Text style={styles.text}>1. This is an old man’s house. (not, old man’s house)</Text>
        <Text style={styles.text}>2. This is a beggar’s cottage.</Text>
        
        </View>


        <View>
        <Text style={styles.sideHeading}>XIX. No/Not Any + Noun need no Article:</Text>
        
        <Text style={styles.text}>1. There is no boy in the class. (not, a no boy)</Text>
        <Text style={styles.text}>2. She has not any chance.</Text>
        <Text style={styles.text}>3. There is not any egg.</Text>
        
        </View>


        <View>
        <Text style={styles.sideHeading}>XX. The noun used after kind of / sort of also takes no Article:</Text>
        
        <Text style={styles.text}>1. What kind of X chair do you want to buy?</Text>
        <Text style={styles.text}>2. I cannot deal with this sort of X man.</Text>
        <Text style={styles.text}>NOTE: But if kind of / sort of refers to some special quality or talent, it would take an appropriate Article.</Text>
        <Text style={styles.text}>1. What kind of a musician is he?</Text>
        <Text style={styles.text}>2. What sort of a problem would you discuss? </Text>
        
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
        fontSize:16,
        textDecorationLine:"underline",
        fontWeight:"bold",
        marginVertical:15,
        lineHeight:28
      },
      rootContainer:{
        paddingHorizontal:5
      }
})