import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { PoppinsRegular, PoppinsLight } from "../../../../utils/FontHelper";
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText";
const FiguresOfSpeechStartingScreen = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{marginLeft:10,fontFamily:PoppinsLight}}>Figures of Speech</Text>
      <ScrollView>
        <View style={styles.rootContainer}>
          <Text
            style={[styles.sideHeading, { textAlign: "center", fontSize: 18 }]}
          >
            What are Figures of Speech?
          </Text>

          <View>
            <Text style={styles.normalText}>
              It is an integral part of any language, which are used extensively
              not only in our day to day speech but also in written texts and
              oral literature. These are words or phrases used in a distinctive
              way to produce a rhetorical effect.
            </Text>

            <Text style={styles.normalText}>
              To say in very simple terms, it is a phrase whose actual meaning
              is different from its literal meaning. Figures of Speech are
              developed and expressed through a variety of different rhetorical
              techniques. All of us use different figures of speech in our daily
              conversations, both deliberately and subconsciously. Importance
            </Text>

            <Text style={styles.normalText}>
              It enhances your writing and content. For example, metaphors add
              important details that make the writing more relatable to the
              readers. Idioms help to express complex ideas in a short space. It
              makes the content presentable and more enjoyable to the writers.
              Most of the time, you may use these words as a sarcastic response
              or just to demonstrate your command of the language.
            </Text>
          </View>

          <Text style={styles.sideHeading}>Types of Figures of Speech</Text>
            <Text style={styles.normalText}>
            There is a wide range of different types of figures of speech that are used in our daily communication. 
            </Text>

            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>What are Figures of Speech?</Text>
                <Text style={styles.normalText}>
                “A figure of speech is a departure from the ordinary form of expression or the ordinary course of ideas, in order to produce a greater effect.”
                </Text>

                <Text style={styles.normalText}>
                In other words Figures of Speech make the use of words typically suggestive and artistic, and make the style strikingly effective, beautiful and ornamental. The Figures of Speech are an essential part of the poetic style of writing. For poetry they are indispensible. They import a peculiar brilliance and charm to poetry. The following are the main Figures of Speech used in English.
                </Text>

                <Text style={styles.normalText}>
                Let us take a look at some of the most popular ones that are used extensively:
                </Text>
            </View>

            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Smile</Text>
                <Text style={styles.normalText}>
                A simile is a figure of speech that compares two things that are different from each other but have similar qualities. These are generally formed through the usage of the words ‘as’ or ‘like’. Some examples of similes in a sentence include:
                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1. He is <BoldTextHelper text="as"/> brave <BoldTextHelper text="as"/>  a lion</Text>
                    <Text style={styles.normalText}>2. Her expression was <BoldTextHelper text="as"/> cold <BoldTextHelper text="as"/> ice</Text>
                    <Text style={styles.normalText}>3. Swim <BoldTextHelper text="like"/> a fish</Text>
                    <Text style={styles.normalText}>4. He eats <BoldTextHelper text="like"/> a pig.</Text>
                    <Text style={styles.normalText}>5. She’s <BoldTextHelper text="as"/> pretty <BoldTextHelper text="as"/> a picture.</Text>
                    <Text style={styles.normalText}>6. He’s strong <BoldTextHelper text="like"/> an ox.</Text>
                    <Text style={styles.normalText}>7. You are sly <BoldTextHelper text="like"/> a fox.</Text>
                    <Text style={styles.normalText}>8. I’m happy <BoldTextHelper text="as"/> a clam.</Text>
                    <Text style={styles.normalText}>9. She is <BoldTextHelper text="as"/> lovely <BoldTextHelper text="as"/> a rose.</Text>
                    <Text style={styles.normalText}>10. Rana Pratap was brave <BoldTextHelper text="like"/> a lion.</Text>
                    <Text style={styles.normalText}>11. O my love is <BoldTextHelper text="like"/> a red, red rose, </Text>
                    <Text style={styles.normalText}>That’s newly sprung in June. (Ben Jonson)</Text>
                </View>
            </View>

            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Pun</Text>
                <Text style={styles.normalText}>
                Puns are among the most frequently used figures of speech in daily conversation. They may be great conversation starters since they make you sound clever and occasionally even humorous.             
                </Text>
                <Text style={[styles.normalText,{textAlign:"center"}]}>(or)</Text>
                <Text style={styles.normalText}>
                “This consists in a play on the various meanings of a word, and is seldom used except as a joke.”
Under this Figure, humour is sought to be produced by play on different meanings of a word.
Here are a few instances of puns in speech:

                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	A sleeping bull is called a <BoldTextHelper text="bull-dozer."/></Text>
                    <Text style={styles.normalText}>2.	Baseball players eat on <BoldTextHelper text="home plates."/></Text>
                    <Text style={styles.normalText}>3.	Polar bears vote at the North <BoldTextHelper text="Poll."/></Text>
                    <Text style={styles.normalText}>4.	Fish are smart because they travel in <BoldTextHelper text="schools."/></Text>
                    <Text style={styles.normalText}>5.	One bear told another that life without them would be <BoldTextHelper text="grizzly."/></Text>
                    <Text style={styles.normalText}>6.	Denial is a river in Egypt (referring to The Nile using the word Denial).</Text>
                    <Text style={styles.normalText}>7.	Her cat is near the computer to keep an eye on the <BoldTextHelper text="mouse."/></Text>
                    <Text style={styles.normalText}>8.	No matter how much you push the envelope, it will still be <BoldTextHelper text="stationery."/></Text>
                    <Text style={styles.normalText}>9.	Jessie looked up from her breakfast and said, "A boiled egg every morning is hard to <BoldTextHelper text="beat."/></Text>
                    <Text style={styles.normalText}>10.	Everyone thinks my runny nose is funny, but it’s snot.</Text>
                    <Text style={styles.normalText}>11.	Life depends upon the <BoldTextHelper text="liver."/></Text>
                    <Text style={styles.normalText}>12.	I’ve forgotten where my wife said we were going, don’t worry, Alaska.</Text>
                    <Text style={styles.normalText}>13.	The cyclist was two tired to win the race.</Text>
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Personification</Text>
                <Text style={styles.normalText}>
                Personification attributes human nature or human qualities to abstract or inanimate objects. For example, we often use the phrases like the howling wind, dancing leaves, time flies etc. Some examples of personification in a sentence are:                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	The moon is smiling at me.</Text>
                    <Text style={styles.normalText}>2.	The sun wept today.</Text>
                    <Text style={styles.normalText}>3.	The clouds cried on me.</Text>
                    <Text style={styles.normalText}>4.	The ground looks thirsty.</Text>
                    <Text style={styles.normalText}>5.	The opportunity knocked at his door.</Text>
                    <Text style={styles.normalText}>6.	The plants in her house silently begged to be watered.</Text>
                    <Text style={styles.normalText}>7.	Lightning danced across the sky.</Text>
                    <Text style={styles.normalText}>8.	Little sorrows sit and weep. (Boccaccio)</Text>
                    <Text style={styles.normalText}>9.	The wind howled in the night.</Text>
                    <Text style={styles.normalText}>10.	The dish ran away with the spoon. (Blake)</Text>
                    <Text style={styles.normalText}>11.	Time flies when you’re having fun.</Text>
                    <Text style={styles.normalText}>12.	Angry clouds surrounded the island.</Text>
                    <Text style={styles.normalText}>13.	Earth was thirsty for water.</Text>
                    <Text style={styles.normalText}>14.	The flowers talked to them in the garden.</Text>
                    <Text style={styles.normalText}>15.	The wind howled that night.</Text>
                    <Text style={styles.normalText}>16.	The snowflakes danced at night.</Text>
                    <Text style={styles.normalText}>17.	I heard the wind whistling.</Text>
                    <Text style={styles.normalText}>18.	The water danced across my window.</Text>
                    <Text style={styles.normalText}>19.	My dog is telling me to start dinner.</Text>
                    <Text style={styles.normalText}>20.	There Honour comes a pilgrim grey.</Text>
                    <Text style={styles.normalText}>21.	Death lays his icy hand kings.</Text>
                    <Text style={styles.normalText}>21.	Death lays his icy hand kings.</Text>
                    <Text style={styles.normalText}>23.	Opportunity knocks at the door but once.</Text>
                    <Text style={styles.normalText}>24.	Nature bemoaned the death of the bride.</Text>
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Alliteration</Text>
                <Text style={styles.normalText}>
                “Alliteration consists in the repetition of the same sound or syllable at the beginning of two or more words.” This produces a kind of musical effect. 
                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	<BoldTextHelper text="S"/>he <BoldTextHelper text="s"/>ells <BoldTextHelper text="s"/>ea <BoldTextHelper text="s"/>hells on the <BoldTextHelper text="s"/>ea <BoldTextHelper text="s"/>hore</Text>
                    <Text style={styles.normalText}>2.	<BoldTextHelper text="S"/>ally <BoldTextHelper text="s"/>old <BoldTextHelper text="s"/>ome <BoldTextHelper text="s"/>eashells.</Text>
                    <Text style={styles.normalText}>3.  <BoldTextHelper text="G"/>o and <BoldTextHelper text="g"/>ather the <BoldTextHelper text="g"/>reen leaves on the <BoldTextHelper text="g"/>rass..</Text>
                    <Text style={styles.normalText}>4.	A good <BoldTextHelper text="c"/>ook <BoldTextHelper text="c"/>ould <BoldTextHelper text="c"/>ook as much <BoldTextHelper text="c"/>ookies as a good <BoldTextHelper text="c"/>ook who <BoldTextHelper text="c"/>ould <BoldTextHelper text="c"/>ook <BoldTextHelper text="c"/>ookies</Text>
                    <Text style={styles.normalText}>5.	<BoldTextHelper text="A"/>dam <BoldTextHelper text="a"/>te in <BoldTextHelper text="A"/>ugust was <BoldTextHelper text="a"/>pples <BoldTextHelper text="a"/>nd <BoldTextHelper text="a"/>lmonds</Text>
                    <Text style={styles.normalText}>6.	<BoldTextHelper text="B"/>arry <BoldTextHelper text="b"/>ought a <BoldTextHelper text="b"/>ook to <BoldTextHelper text="b"/>ring to the <BoldTextHelper text="b"/>ackyard <BoldTextHelper text="b"/>arbecue.</Text>
                    <Text style={styles.normalText}>7.	<BoldTextHelper text="N"/>ick <BoldTextHelper text="n"/>eeded <BoldTextHelper text="n"/>ew <BoldTextHelper text="n"/>otebooks.</Text>
                    <Text style={styles.normalText}>8.	<BoldTextHelper text="F"/>red <BoldTextHelper text="f"/>ried <BoldTextHelper text="f"/>rogs’ legs on <BoldTextHelper text="F"/>riday.</Text>
                    <Text style={styles.normalText}>9.	<BoldTextHelper text="K"/>indly <BoldTextHelper text="k"/>eep the <BoldTextHelper text="k"/>ettle clean for the <BoldTextHelper text="k"/>ing.</Text>
                    <Text style={styles.normalText}>10.	<BoldTextHelper text="P"/>eter <BoldTextHelper text="p"/>iper <BoldTextHelper text="p"/>icked a <BoldTextHelper text="p"/>eck of <BoldTextHelper text="p"/>ickled <BoldTextHelper text="p"/>eppers.</Text>
                    <Text style={styles.normalText}>11.	<BoldTextHelper text="R"/>uin seize thee, <BoldTextHelper text="r"/>uthless king!</Text>
                    <Text style={styles.normalText}>12.	A <BoldTextHelper text="l"/>oad of <BoldTextHelper text="l"/>earning <BoldTextHelper text="l"/>umbering in his head.</Text>
                    <Text style={styles.normalText}>13.	A <BoldTextHelper text="r"/>eeling road, a <BoldTextHelper text="r"/>olling <BoldTextHelper text="R"/>oad, that <BoldTextHelper text="R"/>ambles <BoldTextHelper text="R"/>ound the shire.</Text>
                    <Text style={styles.normalText}>14.	<BoldTextHelper text="H"/>ow <BoldTextHelper text="h"/>igh <BoldTextHelper text="h"/>is <BoldTextHelper text="H"/>onour <BoldTextHelper text="h"/>olds <BoldTextHelper text="h"/>is <BoldTextHelper text="h"/>aughty <BoldTextHelper text="h"/>ead!</Text>
                    <Text style={styles.normalText}>15.	The <BoldTextHelper text="f"/>air <BoldTextHelper text="b"/>reeze <BoldTextHelper text="b"/>lew, the white <BoldTextHelper text="f"/>oam <BoldTextHelper text="f"/>lew, </Text>
                    <Text style={styles.normalText}>16.	a.	The <BoldTextHelper text="f"/>urrow <BoldTextHelper text="f"/>ollowed <BoldTextHelper text="f"/>ree.</Text>
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Assonance</Text>
                <Text style={styles.normalText}>
                Internal vowels in nearby words that are the same or comparable in sound. Here are a few examples of assonance in speech:                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	I s<BoldTextHelper text="ee"/>m to like your little gr<BoldTextHelper text="ee"/>n tr<BoldTextHelper text="ee"/>s.</Text>
                    <Text style={styles.normalText}>2.	How n<BoldTextHelper text="o"/>w, br<BoldTextHelper text="o"/>wn c<BoldTextHelper text="o"/>w?</Text>
                    <Text style={styles.normalText}>3.	The l<BoldTextHelper text="i"/>ght of the f<BoldTextHelper text="i"/>re is a s<BoldTextHelper text="i"/>ght</Text>
                    <Text style={styles.normalText}>4.	Go sl<BoldTextHelper text="o"/>w over the r<BoldTextHelper text="o"/>ad</Text>
                    <Text style={styles.normalText}>5.	Try as I m<BoldTextHelper text="i"/>ght, the k<BoldTextHelper text="i"/>te did not f<BoldTextHelper text="l"/>y</Text>
                    <Text style={styles.normalText}>6.	<BoldTextHelper text="A"/> - "For the r<BoldTextHelper text="a"/>re and <BoldTextHelper text="r"/>adiant m<BoldTextHelper text="a"/>iden whom the angels n<BoldTextHelper text="a"/>med Lenore." - <BoldTextHelper text="The Raven,"/> Edgar Allan Poe</Text>
                    <Text style={styles.normalText}>7.	<BoldTextHelper text="E"/> - "Therefore, all s<BoldTextHelper text="ea"/>sons shall be sw<BoldTextHelper text="ee"/>t to th<BoldTextHelper text="ee"/>." - <BoldTextHelper text="Frost at Midnight,"/> Samuel Taylor Coleridge)</Text>
                    <Text style={styles.normalText}>8.	<BoldTextHelper text="I"/> - "From what I've tasted of des<BoldTextHelper text="i"/>re, I hold with those who favor f<BoldTextHelper text="ea"/>re." - <BoldTextHelper text="Fire and Ice"/> Robert Frost</Text>
                    <Text style={styles.normalText}>9.	<BoldTextHelper text="O"/> - "<BoldTextHelper text="O"/>h hear <BoldTextHelper text="o"/>ld Triton bl<BoldTextHelper text="o"/>w his wreathed h<BoldTextHelper text="o"/>rn." - <BoldTextHelper text="The World is Too Much With Us,"/> William Wordsworth</Text>
                    <Text style={styles.normalText}>10.	<BoldTextHelper text="U"/> - "<BoldTextHelper text="U"/>ncertain r<BoldTextHelper text="u"/>stling of each p<BoldTextHelper text="u"/>rple c<BoldTextHelper text="u"/>rtain ..." - "The Raven," Edgar Allen Poe</Text>
                </View>
            </View>

            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Consonance</Text>
                <Text style={styles.normalText}>
                Consonance is the repetition of the same consonant sound in a phrase or sentence.
Consonance Examples
</Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	The rain <BoldTextHelper text="p"/>itter <BoldTextHelper text="p"/>attered in the <BoldTextHelper text="p"/>uddle.</Text>
                    <Text style={styles.normalText}>2.	The <BoldTextHelper text="c"/>ook <BoldTextHelper text="c"/>ooked the <BoldTextHelper text="c"/>utest <BoldTextHelper text="c"/>upcakes.</Text>
                    <Text style={styles.normalText}>3.	<BoldTextHelper text="P"/>eter <BoldTextHelper text="p"/>iper <BoldTextHelper text="p"/>icked a <BoldTextHelper text="p"/>eck of <BoldTextHelper text="p"/>ickled <BoldTextHelper text="p"/>eppers.</Text>
                </View>
            </View>

            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Oxymoron</Text>
                <Text style={styles.normalText}>
                Oxymoron is a special form of antithesis whereby two contradictory qualities are predicted at once of the same thing.”
</Text>

<Text style={styles.normalText}>
Under this Figure, two opposite or contradictory qualities of the same thing  are stated at the same time. 	</Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	This is another <BoldTextHelper text="fine mess"/> you have got us into.</Text>
                    <Text style={styles.normalText}>2.	Suddenly the room filled with a <BoldTextHelper text="deafening"/> silence.</Text>
                    <Text style={styles.normalText}>3.	The comedian was <BoldTextHelper text="seriously funny"/>.</Text>
                    <Text style={styles.normalText}>4.	Life is <BoldTextHelper text="bittersweet"/>.</Text>
                    <Text style={styles.normalText}>5.	They knew they could feel the <BoldTextHelper text="joyful sadness"/> on his arrival.</Text>
                    <Text style={styles.normalText}>6.	You are <BoldTextHelper text="clearly confused"/> by the situation you have found yourself in.</Text>
                    <Text style={styles.normalText}>7.	His <BoldTextHelper text="honour"/> rooted in <BoldTextHelper text="dishonor"/> stood.</Text>
                    <Text style={styles.normalText}>8.	Thus <BoldTextHelper text="idly busy"/> rolls their world away.</Text>
                    <Text style={styles.normalText}>9.	<BoldTextHelper text="Sweet bitter"/> tears flowed from her eyes.</Text>
                    <Text style={styles.normalText}>10.	<BoldTextHelper text="Aching joys"/> and <BoldTextHelper text="dizzy raptures"/> filled my heart.</Text>
                    <Text style={styles.normalText}>11.	Let us not dread the <BoldTextHelper text="kind cruelty"/> of the surgeon’s knife.</Text>
                    <Text style={styles.normalText}>12.	 “darkness visible” (Milton);</Text>
                    <Text style={styles.normalText}>13.	“make haste slowly” (Suetonius)</Text>
                    <Text style={styles.normalText}>14.	“loving hate” (Romeo and Juliet)</Text>
                    <Text style={styles.normalText}>15.	Sweet sorrow.</Text>
                    <Text style={styles.normalText}>16.	Peace force.</Text>
                    <Text style={styles.normalText}>17.	Free market.</Text>
                    <Text style={styles.normalText}>18.	Jumbo ant.</Text>
                </View>
            </View>

            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Irony</Text>
                <Text style={styles.normalText}>
                “Irony is a mode of speech in which the real meaning is exactly the opposite of that which is literally conveyed.”
                </Text>

<Text style={styles.normalText}>
Under this Figure, the real meaning or sense of a statement is just the opposite of what is spoken literally in words.
</Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	Your <UnderlineTextHelper text="hands"/> are as <BoldTextHelper text="clean"/> as <BoldTextHelper text="mud"/></Text>
                    <Text style={styles.normalText}>2.	The <UnderlineTextHelper text="dinner"/> you served was <BoldTextHelper text="as hot as ice."/></Text>
                    <Text style={styles.normalText}>3.	Coming home to a big mess and saying, “it’s great to be back”</Text>
                    <Text style={styles.normalText}>4.	Telling a <BoldTextHelper text="rude customer"/> to “have a <BoldTextHelper text="nice day"/>”</Text>
                    <Text style={styles.normalText}>5.	A <BoldTextHelper text="policeman"/> was <BoldTextHelper text="robbed"/>.</Text>
                    <Text style={styles.normalText}>6.	A <BoldTextHelper text="hairstylist"/> who has her <BoldTextHelper text="hair unkempt"/>.</Text>
                    <Text style={styles.normalText}>7.	A <BoldTextHelper text="fire station"/> is on <BoldTextHelper text="fire now."/></Text>
                    <Text style={styles.normalText}>8.	Here under leave of Brutus and the rest</Text>
                    <Text style={styles.normalText}>a.	(For Brutus is an honourable man:</Text>
                    <Text style={styles.normalText}>b.	So are they all honourable men.)</Text>
                    <Text style={styles.normalText}>c.	Come I speak in Caesar’s funeral.</Text>
                    <Text style={styles.normalText}>9.	Yet Brutus says he was ambitious,</Text>
                    <Text style={styles.normalText}>a.	And Brutus is an honourable man.</Text>
                </View>
            </View>

            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Antithesis:</Text>
                <Text style={styles.normalText}>
                “In Antithesis is a striking opposition or contrast of words or sentiments is made in the same sentence. It is employed to secure emphasis.”                </Text>

<Text style={styles.normalText}>
Under the Figure, two opposite or contradictory ideas are expressed in the same sentence. This is meant to give emphasis. 
</Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	To err is human, to forgive divine.</Text>
                    <Text style={styles.normalText}>2.	Man proposes, God disposes.</Text>
                    <Text style={styles.normalText}>3.	"Love is an ideal thing, marriage a real thing." - Goethe.</Text>
                    <Text style={styles.normalText}>4.	God made the country, man made the town.</Text>
                    <Text style={styles.normalText}>5.	Many are called, but few are chose.</Text>
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Paradox:</Text>
                <Text style={styles.normalText}>
                These figures of speech, like ironies, emphasise something by discussing the exact opposite of it. A paradox, on the other hand, differs from an irony in that it does not make the contrast as evident. Let’s examine two instances of paradoxical figures of speech:
                </Text>


                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	<BoldTextHelper text="Less"/> is <BoldTextHelper text="more"/>.</Text>
                    <Text style={styles.normalText}>2.	<BoldTextHelper text="Shame"/> is <BoldTextHelper text="pride"/>.</Text>
                    <Text style={styles.normalText}>3.	<BoldTextHelper text="Save"/> money by <BoldTextHelper text="spending"/> it</Text>
                    <Text style={styles.normalText}>4.	If I <BoldTextHelper text="know one thing"/>, it’s that I <BoldTextHelper text="know nothing"/>.</Text>
                    <Text style={styles.normalText}>5.	You have to <BoldTextHelper text="spend money"/> to <BoldTextHelper text="save it"/>.</Text>
                    <Text style={styles.normalText}>6.	You have to be <BoldTextHelper text="cruel"/> to be <BoldTextHelper text="kind"/>.</Text>
                    <Text style={styles.normalText}>7.	Things get <BoldTextHelper text="worse"/> before they get <BoldTextHelper text="better"/>.</Text>
                    <Text style={styles.normalText}>8.	The <BoldTextHelper text="only rule"/> is to <BoldTextHelper text="ignore all rules"/>.</Text>
                    <Text style={styles.normalText}>9.	Youth is wasted on the young.</Text>
                    <Text style={styles.normalText}>10.	"Whatever you do in life will be insignificant, but it is very important that you do it.” (Ghandi)</Text>
                    <Text style={styles.normalText}>11.	I must be cruel, only to be kind—Hamlet by Shakespeare.</Text>
                    <Text style={styles.normalText}>12.	Nobody goes to the seaside at the weekend, because it’s too crowded.</Text>
                    <Text style={styles.normalText}>13.	 “Some of my biggest triumphs have also been failures,” (According to US actress Pearl Bailey)</Text>
                    <Text style={styles.normalText}>14.	“War is good. Slavery is freedom. “Ignorance is power,” (As said by English author George Orwell)</Text>
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Litotes</Text>
                <Text style={styles.normalText}>
                It is the opposite of hyperbole. Here an affirmative is conveyed by negation of the opposite. For example,                </Text>


                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	He is no dullard.</Text>
                    <Text style={styles.normalText}>2.	I am not a little</Text>
                    <Text style={styles.normalText}>3.	He is not a bad sort.</Text>
                    <Text style={styles.normalText}>4.	He is no dullard.</Text>
                    <Text style={styles.normalText}>5.	Sarah is no fool.</Text>
                    <Text style={styles.normalText}>6.	You are not looking bad.</Text>
                </View>
            </View>



            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Metonymy</Text>
                <Text style={styles.normalText}>
                Metonymy is a figure of speech when one term or phrase is used in place of another with which it is closely related. It is also a rhetorical technique used to describe something indirectly by making references to objects around. 
</Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	The <BoldTextHelper text="pen"/> (author) is mightier than Sword (the soldier)</Text>
                    <Text style={styles.normalText}>2.	He won the <BoldTextHelper text="laurels"/> (i.e. reward)</Text>
                    <Text style={styles.normalText}>3.	Please address the <BoldTextHelper text="chair"/> (i.e. chairman)</Text>
                    <Text style={styles.normalText}>4.	Lend me your ears (meaning pay attention).</Text>
                    <Text style={styles.normalText}>5.	The Bench decided that the man is guilty. </Text>
                    <Text style={styles.normalText}>6.	It is his story from the cradle to the grave. = from childhood to death.</Text>
                    <Text style={styles.normalText}>7.	The <BoldTextHelper text="crown"/> is not able to take political a side. (crown = the queen or royal family)</Text>
                    <Text style={styles.normalText}>8.	The <BoldTextHelper text="press"/> is going to have a field day. (press = all news organizations) </Text>
                    <Text style={styles.normalText}>9.	 “If you want I can give you a hand.” (here, ‘hand’ has replaced ‘help’).</Text>
                    <Text style={styles.normalText}>10.	Most of the successful people in Hollywood are failures as human beings.</Text>
                    <Text style={styles.normalText}>11.	I have never read Milton. = the works of Milton.</Text>
                    <Text style={styles.normalText}>12.	Have you seen the latest <BoldTextHelper text="Hollywood"/> blockbuster? (Hollywood = the whole of the film industry)</Text>
                    <Text style={styles.normalText}>13.	 “That stuffed suit with the briefcase is a poor excuse for a salesman,” the manager said angrily.</Text>
                </View>
            </View>



            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Hyperbole</Text>
                <Text style={styles.normalText}>
                A hyperbole is a figure of speech that consists of an exaggeration. It is the usage of exaggerated terms in order to emphasise or heighten the effect of something. Some examples of using hyperboles in a sentence include:
</Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	This room is an ice-box.</Text>
                    <Text style={styles.normalText}>2.	She's older than dirt.</Text>
                    <Text style={styles.normalText}>3.	I have a million things to do.</Text>
                    <Text style={styles.normalText}>4.	I am so hungry I could eat a horse. </Text>
                    <Text style={styles.normalText}>5.	Usain Bolt runs faster than the wind.</Text>
                    <Text style={styles.normalText}>6.	This suitcase weighs a ton.</Text>
                    <Text style={styles.normalText}>7.	She has got a pea-sized brain</Text>
                    <Text style={styles.normalText}>8.	My mom is going to kill me today.</Text>
                    <Text style={styles.normalText}>9.	I've told you to stop a thousand times.</Text>
                    <Text style={styles.normalText}>10.	Today is the worst day of my life.</Text>
                    <Text style={styles.normalText}>11.	His mum always cooks enough food to feed an army. </Text>
                    <Text style={styles.normalText}>12.	I have told you a million times not to touch my stuff!</Text>
                    <Text style={styles.normalText}>13.	I have a ton of things to do when I get home.</Text>
                    <Text style={styles.normalText}>14.	She’s <BoldTextHelper text="as"/> old <BoldTextHelper text="as"/> the hills.</Text>
                    <Text style={styles.normalText}>15.	His hairs are <BoldTextHelper text="as"/> white <BoldTextHelper text="as"/> snow.</Text>
                    <Text style={styles.normalText}>16.	It has been ages since I have had a proper meal.</Text>
                    <Text style={styles.normalText}>17.	Everybody knows me.</Text>
                    <Text style={styles.normalText}>18.	I’ll die if he doesn’t ask me on a date.</Text>
                    <Text style={styles.normalText}>19.	I’m <BoldTextHelper text="too"/> poor <BoldTextHelper text="to"/> pay attention.</Text>
                    <Text style={styles.normalText}>20.	What have you got in this suitcase; it weighs a ton? </Text>
                    <Text style={styles.normalText}>21.	That must have cost a billion dollars.</Text>
                    <Text style={styles.normalText}>22.	I could do this forever.</Text>
                    <Text style={styles.normalText}>23.	Everybody knows that.</Text>
                    <Text style={styles.normalText}>24.	Rivers of blood flowed on the battlefield.</Text>
                    <Text style={styles.normalText}>25.	Floods of tears flowed down her cheeks.</Text>
                    <Text style={styles.normalText}>26.	He can devour mountains of food and drink rivers of whisky.</Text>
                    <Text style={styles.normalText}>27.	All the perfumes of Arabia cannot sweeten this little hand.</Text>
                </View>
            </View>



            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Anaphora</Text>
                <Text style={styles.normalText}>
                It is a repetition of a word or phrase at the start of several sentences of clauses. Some of the examples of anaphora are as follows:</Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	"<BoldTextHelper text="I"/> came, <BoldTextHelper text="I"/> saw, <BoldTextHelper text="I"/> conquered." - Julius Caesar</Text>
                    <Text style={styles.normalText}>2.	“<BoldTextHelper text="Be"/> bold. <BoldTextHelper text="Be"/> brief. <BoldTextHelper text="Be"/> gone.”</Text>
                    <Text style={styles.normalText}>3.	“<BoldTextHelper text="Get busy"/> living or <BoldTextHelper text="get busy"/> dying.”</Text>
                    <Text style={styles.normalText}>4.	<BoldTextHelper text="I"/> came, <BoldTextHelper text="I"/> saw, <BoldTextHelper text="I"/> conquered. </Text>
                    <Text style={styles.normalText}>5.	<BoldTextHelper text="We shall"/> not stop. <BoldTextHelper text="We shall"/> go on and on. <BoldTextHelper text="We shall"/> move forward.</Text>
                    <Text style={styles.normalText}>6.	"<BoldTextHelper text="Mad"/> world! <BoldTextHelper text="Mad"/> kings! <BoldTextHelper text="Mad"/> composition!" - King John II, William Shakespeare</Text>
                    <Text style={styles.normalText}>7.	Unfortunately, I was in the wrong place at the wrong time on the wrong day.  </Text>
                    <Text style={styles.normalText}>8.	“So <BoldTextHelper text="let freedom"/> ring from the prodigious hilltops of New Hampshire. <BoldTextHelper text="Let freedom"/> ring from the mighty mountains of New York. <BoldTextHelper text="Let freedom"/> ring from the heightening Alleghenies of Pennsylvania…” (From Martin Luther King’s “I Have a Dream” speech).</Text>
                    <Text style={styles.normalText}>9.	“<BoldTextHelper text="In every"/> cry of every Man, <BoldTextHelper text="In every"/> infant’s cry of fear, <BoldTextHelper text="In every"/> voice, in every ban, The mind-forg’d manacles I hear” (in William Blake’s poem “London”).</Text>
                    
                </View>
            </View>



            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Apostrophe</Text>
                <Text style={styles.normalText}>
                “An Apostrophe is a direst address to the dead, to the absent or to a personified object or idea.
                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	<BoldTextHelper text="O death!"/> Where is thy sting?</Text>
                    <Text style={styles.normalText}>2.	<BoldTextHelper text="Milton!"/> Thou should’st be living at this hour.</Text>
                    <Text style={styles.normalText}>3.	<BoldTextHelper text="O solitude!"/> where are thy charms?</Text>
                    <Text style={styles.normalText}>4.	<BoldTextHelper text="Twinkle, twinkle, little star,"/> How I wonder what you are.</Text>
                    <Text style={styles.normalText}>5.	<BoldTextHelper text="Oh rose!"/> how sweet you smell and how bright you look!</Text>
                    <Text style={styles.normalText}>6.	<BoldTextHelper text="Oh trees!"/> how majestic you are as you throw down your golden leaves.</Text>
                    <Text style={styles.normalText}>7.	Welcome, <BoldTextHelper text="O life!"/></Text>
                    <Text style={styles.normalText}>8.	"<BoldTextHelper text="Oh, you stupid car"/>, you never work when I need you to," Bert sighed.</Text>
                    <Text style={styles.normalText}>9.	<BoldTextHelper text="Alarm clock"/>, please don’t fail me.</Text>
                    <Text style={styles.normalText}>10.	<BoldTextHelper text="Seven"/>, you are my lucky number!</Text>
                    <Text style={styles.normalText}>11.	<BoldTextHelper text="O William"/>, you should be living now to see all this.</Text>
                    
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Synecdoche</Text>
                <Text style={styles.normalText}>
                A figure of speech in which a part is used to represent the whole.		
                                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	Tina is learning her ABC's in preschool.</Text>
                    <Text style={styles.normalText}>2.	Give us this day our daily <BoldTextHelper text="bread"/>.</Text>
                    <Text style={styles.normalText}>3.	I have many <BoldTextHelper text="mouths"/>. (i.e. persons) to feed.</Text>
                    <Text style={styles.normalText}>4.	<BoldTextHelper text="England"/> (i.e. the team of England) have won.</Text>
                    <Text style={styles.normalText}>5.	A fleet of twenty <BoldTextHelper text="sails"/> (i.e. ships) passed by our coast.</Text>
                    <Text style={styles.normalText}>6.	The best <BoldTextHelper text="brains"/> (i.e. scholars) have assembled here.</Text>
                    <Text style={styles.normalText}>7.	“All hands (crew) at work.”</Text>
                    
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Epigram</Text>
                <Text style={styles.normalText}>
                It is a brief pointed saying. It couples words which apparently contradict each other. The language of the epigram is remarkable for its brevity. Examples are as under:
                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	The child is the father of the man. (Wordsworth)</Text>
                    <Text style={styles.normalText}>2.	Fools rush in where angels fear to tread.</Text>
                    <Text style={styles.normalText}>3.	The art lies in concealing art.</Text>
                    <Text style={styles.normalText}>4.	Silence is sometimes more eloquent than words.</Text>
                    <Text style={styles.normalText}>5.	Conspicuous by its absence.</Text>
                    <Text style={styles.normalText}>6.	All hands on deck.</Text>
                    <Text style={styles.normalText}>7.	Heads turned when she walked in.</Text>
                    <Text style={styles.normalText}>8.	All eyes was on him.</Text>
                    <Text style={styles.normalText}>9.	He took us for a spin in his new wheels. (Wheels = car)</Text>
                    <Text style={styles.normalText}>10.	There are hundreds of boots on the ground searching for the fugitives. (Boots = soldiers or police)</Text>
                    <Text style={styles.normalText}>11.	There was no comment from The White House. (The White House = The )</Text>
                    
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Euphemism</Text>
                <Text style={styles.normalText}>
                
                Euphemism is the usage of a mild word in substitution of something that is more explicit or harsh when referring to something unfavourable or unpleasant. Some examples of its usage include:
                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	I need <BoldTextHelper text="to powder my nose"/> (go to the bathroom).</Text>
                    <Text style={styles.normalText}>2.	This mall has good facilities for <BoldTextHelper text="differently-abled people"/></Text>
                    <Text style={styles.normalText}>3.	He <BoldTextHelper text="passed away"/> in his sleep. (instead of “died”)</Text>
                    <Text style={styles.normalText}>4.	The company has “<BoldTextHelper text="let him go"/>” instead of “fired him.”</Text>
                    <Text style={styles.normalText}>5.	Her step-father <BoldTextHelper text="put her in a family way."/></Text>
                    <Text style={styles.normalText}>6.	Her pregnancy was <BoldTextHelper text="terminated."/></Text>
                    <Text style={styles.normalText}>7.	<BoldTextHelper text="Friendly fire"/> (attack from allied forces)</Text>
                    <Text style={styles.normalText}>8.	He is telling us <BoldTextHelper text="a tall story"/> (a lie)</Text>
                    <Text style={styles.normalText}>9.	She was starting to feel over the hill (old).</Text>
                    <Text style={styles.normalText}>10.	Young adults are curious about <BoldTextHelper text="the birds and bees"/> (sex).</Text>
                    
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Onomatopoeia</Text>
                <Text style={styles.normalText}>
                This is a figure of speech that is used to express a sound. To be more precise, it involves the use of words that imitate the sounds associated with the action or object referred to i.e. hiss, clap etc. Some examples of onomatopoeia include:
                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	The <BoldTextHelper text="buzzing"/> bee flew over my head</Text>
                    <Text style={styles.normalText}>2.	The snakes are <BoldTextHelper text="hissing"/> and the bees are <BoldTextHelper text="buzzing"/>.</Text>
                    <Text style={styles.normalText}>3.	The <BoldTextHelper text="murmurous"/> haunt of files <BoldTextHelper text="on summer eves"/></Text>
                    <Text style={styles.normalText}>4.	The beetle <BoldTextHelper text=" wheels his droning"/> flight.</Text>
                    <Text style={styles.normalText}>5.	Cannons to the right of them,</Text>
                    <Text style={styles.normalText}>      a.	Cannon to the left of them</Text>
                    <Text style={styles.normalText}>      b.	Cannon in front of them,</Text>
                    <Text style={styles.normalText}>      c.	<BoldTextHelper text="Volleyed"/> and <BoldTextHelper text="thundered"/>.</Text>
                    <Text style={styles.normalText}>6.	The clap of thunder went <BoldTextHelper text="bang"/> and scared my poor dog.</Text>
                    <Text style={styles.normalText}>7.	The stone hit the water with a <BoldTextHelper text="splash"/>. </Text>
                    <Text style={styles.normalText}>8.	The boulder hit the ground with a <BoldTextHelper text="flump"/>.</Text>
                    <Text style={styles.normalText}>9.	Leaves <BoldTextHelper text="rustle"/> in the wind and are whipped into the air.</Text>
                    
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Metaphor</Text>
                <Text style={styles.normalText}>
                A metaphor is used for implying a comparison between two things that have something in common but are in general different from each other. Some examples of the usage of metaphors in a sentence is as follows:
                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	Her eyes are diamonds.</Text>
                    <Text style={styles.normalText}>2.	Life is a highway.</Text>
                    <Text style={styles.normalText}>3.	She is the apple of my eye.</Text>
                    <Text style={styles.normalText}>4.	He is the star of our class</Text>
                    <Text style={styles.normalText}>5.	"All the world's a stage."</Text>
                    <Text style={styles.normalText}>6.	You are the apple of my eye.</Text>
                    <Text style={styles.normalText}>7.	Ocean’s sound is music to my ear.</Text>
                    <Text style={styles.normalText}>8.	He is a night owl.</Text>
                    <Text style={styles.normalText}>9.	Time is money.</Text>
                    <Text style={styles.normalText}>10.	He is a fish out of water. </Text>
                    <Text style={styles.normalText}>11.	She is a star in the sky.</Text>
                    <Text style={styles.normalText}>12.	My grandchildren are the flowers of my garden.</Text>
                    <Text style={styles.normalText}>13.	That story is music to my ears.</Text>
                    <Text style={styles.normalText}>14.	Your words are a broken record.</Text>
                    <Text style={styles.normalText}>15.	He is a lion at home.</Text>
                    <Text style={styles.normalText}>16.	She is wild.</Text>
                    <Text style={styles.normalText}>17.	He is a goat.</Text>
                    <Text style={styles.normalText}>18.	It is raining cats and dogs.</Text>
                    <Text style={styles.normalText}>19.	A camel is the ship of the desert.</Text>
                    <Text style={styles.normalText}>20.	Gandhiji was the guiding star of the destiny of India.</Text>
                    <Text style={styles.normalText}>21.	Shivaji was the lion of the Peshwa dynasty.</Text>
                    <Text style={styles.normalText}>22.	Life is a tale told by an idiot,</Text>
                    <Text style={styles.normalText}>    a.	Full of sound and fury.	(Shakespeare)</Text>
                    <Text style={styles.normalText}>23.	Her only son is the lamp of her life.</Text>
                    
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Rhetorical Questions</Text>
                <Text style={styles.normalText}>
                This type of question doesn’t require an answer as it has been phrased in a way that assumes the reader or listener knows the answer. Public speakers and politicians use rhetorical questions for dramatic effect or to get a point across and not because they expect an answer. The answer is usually obvious, or they think it is.
                </Text>
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1.	Can pigs fly?</Text>
                    <Text style={styles.normalText}>2.	Is the Pope a Catholic?</Text>
                    <Text style={styles.normalText}>3.	Is this supposed to be some kind of joke?</Text>
                    <Text style={styles.normalText}>4.	We don’t need any more failure, do we?</Text>
                   
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Idioms</Text>
               
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>1. They have the intention to flood the market with their new mobile phones.</Text>
                    <Text style={styles.normalText}>2. If someone has a clean bill of health, they apply to many profession</Text>
                    <Text style={styles.normalText}>3. My grandmother’s old, but she’s as fit as a fiddle.</Text>
                    <Text style={styles.normalText}>4. If you a few days of rest and medication, you’ll be as fit as a fiddle.</Text>
                    <Text style={styles.normalText}>5. I’m sorry I can’t make it. I’m feeling a bit under the weather today.</Text>
                    <Text style={styles.normalText}>6. If someone looks or feels like ill or tired, they look death warmed up.</Text>
                    <Text style={styles.normalText}>7. Oh dear! You look like death warmed up, I think doctor will prescribe you a lot of medicine.</Text>
                    <Text style={styles.normalText}>8. You shouldn’t be working all night when you’re so ill, you looks like death warmed up.</Text>
                    <Text style={styles.normalText}>9. My mum’s not worried about the operation. She’s been under the knife several times.</Text>
                    <Text style={styles.normalText}>10. Stacy went under the knife last week.</Text>

                    <Text style={styles.normalText}>11. Custom is a second nature.</Text>
                    <Text style={styles.normalText}>13. Daredevil: someone who takes unnecessary risks</Text>
                    <Text style={styles.normalText}>14. Cheapskate: someone who hates to spend money</Text>
                    <Text style={styles.normalText}>15. Joined at the hip: to be exceptionally close to someone</Text>
                    <Text style={styles.normalText}>16. Elbow grease: hard physical effort</Text>
                    <Text style={styles.normalText}>17. Oddball: a weirdo or a strange person</Text>
                    <Text style={styles.normalText}>18. Down-To-Earth: sensible and realistic</Text>
                    <Text style={styles.normalText}>19. Go-Getter: a person who is active, energetic, and has the initiative to pursue the things they want.</Text>
                    <Text style={styles.normalText}>20. Break a leg: good luck</Text>
                    
                    <Text style={styles.normalText}>21. Cutting corners: Doing something poorly in order to save time or money</Text>
                    <Text style={styles.normalText}>22. Hang in there: Don’t give up</Text>
                    <Text style={styles.normalText}>23. Pull yourself together: Calm down</Text>
                    <Text style={styles.normalText}>24. So far so good: Things are going well so far</Text>
                    <Text style={styles.normalText}>25. A busybody: always wants to know about other people’s private lives</Text>
                    <Text style={styles.normalText}>26. Oddball: a weirdo or a strange person</Text>
                    <Text style={styles.normalText}>27. Down-To-Earth: sensible and realistic</Text>
                    <Text style={styles.normalText}>28. Forty winks: a short nap</Text>
                    <Text style={styles.normalText}>29. Barrel of laugh: someone who is very funny</Text>
                    <Text style={styles.normalText}>30. Old as the hills: some who is very old</Text>
                    
                    <Text style={styles.normalText}>31. Red tape; Official or bureaucratic tasks</Text>
                    <Text style={styles.normalText}>32. To be yellow; To be cowardly</Text>
                    <Text style={styles.normalText}>33. To see red; To be very angry</Text>
                    <Text style={styles.normalText}>34. Black out; Faint</Text>
                    <Text style={styles.normalText}>35. Black and blue; Describe something that is badly bruised</Text>
                    <Text style={styles.normalText}>36. Golden opportunity; The perfect chance</Text>
                    <Text style={styles.normalText}>37. Have the blues; Be sad or depressed</Text>
                    <Text style={styles.normalText}>38. Black sheep; A person who is a disgrace to a family or group</Text>
                    <Text style={styles.normalText}>39. That’s a storm in a teacup, stop fussing about it, you can do it.</Text>
                    <Text style={styles.normalText}>40. The air hostess greeted the passengers with a sunny smile.</Text>
                   
                </View>
            </View>


            <View style={{marginVertical:15}}>
                <Text style={styles.sideHeading}>Proverbs</Text>
               
                <View style={{marginVertical:10}}>
                    <Text style={styles.normalText}>52. Everybody’s business is nobody’s business.</Text>
                    <Text style={styles.normalText}>53. Everything comes to him who waits</Text>
                    <Text style={styles.normalText}>54. All are not saints that go to church.</Text>
                    <Text style={styles.normalText}>55. All asses wag their ears.</Text>
                    <Text style={styles.normalText}>56. Give a fool rope enough, and he will hang himself.</Text>
                    <Text style={styles.normalText}>57. Curiosity killed a cat.</Text>
                    <Text style={styles.normalText}>58. He is lifeless that is faultless.</Text>
                    <Text style={styles.normalText}>59. They must hunger in winter that will not work in summer</Text>
                    <Text style={styles.normalText}>60. Things past cannot be recalled.</Text>
                    <Text style={styles.normalText}>61. Think today and speak tomorrow.</Text>

                    <Text style={styles.normalText}>62. Rome was not built in a day.</Text>
                    <Text style={styles.normalText}>63. Patience is a plaster for all sores.</Text>
                    <Text style={styles.normalText}>64. He is not fit to command others that cannot command himself.</Text>
                    <Text style={styles.normalText}>65. Leaves without figs</Text>
                    <Text style={styles.normalText}>66. Let bygones be bygones.</Text>
                    <Text style={styles.normalText}>67. Many words hurt more than swords.</Text>
                    <Text style={styles.normalText}>68. Many words will not fill a bushel.</Text>
                    <Text style={styles.normalText}>69. Self done is soon done.</Text>
                    <Text style={styles.normalText}>70. The best fish smell when they are three days old.</Text>
                    
                    <Text style={styles.normalText}>71. The best fish swim near the bottom.</Text>
                    <Text style={styles.normalText}>72. The best is oftentimes the enemy of the good.</Text>
                    <Text style={styles.normalText}>73. Pleasure has a sting in its tail.</Text>
                    <Text style={styles.normalText}>74. Plenty is no plague.</Text>
                    <Text style={styles.normalText}>75. Politeness costs little (nothing), but yields much.</Text>
                    <Text style={styles.normalText}>76. Poverty is no sin.</Text>
                    <Text style={styles.normalText}>77. They are hand and glove.</Text>
                    <Text style={styles.normalText}>78. Old friends and old wine are best.</Text>
                    <Text style={styles.normalText}>79. Out of sight, out of mind.</Text>
                    <Text style={styles.normalText}>80. Out of the frying-pan into the fire.</Text>
                    
                    <Text style={styles.normalText}>81. Packed like herrings.</Text>
                    <Text style={styles.normalText}>82. Learn to say before you sing.</Text>
                    <Text style={styles.normalText}>83. Least said, soonest mended</Text>
                    <Text style={styles.normalText}>84. Measure thrice and cut once.</Text>
                    <Text style={styles.normalText}>85. Learn wisdom by the follies of others.</Text>
                    <Text style={styles.normalText}>86. Judge not of men and things at first sight.</Text>
                    <Text style={styles.normalText}>87. He jests at scars that never felt a wound.</Text>
                    <Text style={styles.normalText}>88. He knows best what good is that has endured evil.</Text>
                    <Text style={styles.normalText}>89. Curses like chickens come home to roost.</Text>
                    <Text style={styles.normalText}>90. He is not laughed at that laughs at himself first.</Text>

                    <Text style={styles.normalText}>91. He is not poor that has little, but he that desires much</Text>
                    <Text style={styles.normalText}>92. Many a true word is spoken in jest.</Text>
                    <Text style={styles.normalText}>93. Many hands make light work.</Text>
                    <Text style={styles.normalText}>94. Many men, many minds.</Text>
                    <Text style={styles.normalText}>95. Last, but not least.</Text>
                    <Text style={styles.normalText}>96. Laws catch flies, but let hornets go free.</Text>
                    <Text style={styles.normalText}>97. Learn to creep before you leap.</Text>
                    <Text style={styles.normalText}>98. Oaks may fall when reeds stand the storm.</Text>
                    <Text style={styles.normalText}>99. Of two evils choose the least.</Text>
                    <Text style={styles.normalText}>100. Old birds are not caught with chaff.</Text>
                   
                </View>
            </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default FiguresOfSpeechStartingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 10,
    marginVertical:10
  },
  sideHeading: {
    fontSize: 17,
    backgroundColor: "#FFDE7D",
    fontFamily: PoppinsRegular,
  },
  normalText: {
    fontSize: 16,
    fontFamily: PoppinsRegular,
    textAlign: "justify",
    lineHeight: 29,
    marginVertical:5
  },
});
