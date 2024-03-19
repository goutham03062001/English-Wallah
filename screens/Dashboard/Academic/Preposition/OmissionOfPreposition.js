import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import BoldTextHelper from '../utils/BoldText';
const HelperComponent = ({inputText,target})=>{

  const words = inputText.split(' ');
  
  return (
      <Text>
          {words.map((word, index) => {
              const shouldHighlight = target && target.includes(word.replace(/[.,]/g, ''));
              return (
                  <Text key={index} style={{ fontWeight: shouldHighlight ? 'bold' : 'normal',fontSize:16 ,color:shouldHighlight?"green":"black",lineHeight:26}}>
                      {word}{index !== words.length - 1 && ' '}
                  </Text>
              );
          })}
      </Text>
  );
}


const OmissionOfPreposition = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:8,marginTop:15}}>
    <Text style={{fontSize:16}}>
    In some situations the Preposition is <BoldTextHelper text="not used"/>. There either it is <BoldTextHelper text="not required,"/> or it is <BoldTextHelper text="omitted."/>
    </Text>
    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(I) No Preposition is required before the object of a Transitive verb. As—"
          target="Transitive verb."

        />
        <HelperComponent 
        target="I,meet you, (‘meet with you’)"
        inputText="1. I shall meet you again. (‘meet with you’ is wrong.)"/>
        <HelperComponent 
        target="caught, thief,(‘caught to the thief’)"
        inputText="2. They caught the thief. (‘caught to the thief’ is wrong.)"/>
        <HelperComponent 
        target="I,read, book,(‘read of a book’ is wrong.)"
        inputText="3. I read a book. (‘read of a book’ wrong.)"/>
        <HelperComponent
        target="have,done,work,(‘have done of our work’ )"
         inputText="4. We have done our work. (‘have done of our work’ is wrong.)"/>
      
    </View>

    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          target="Place,Time,(for, from, in, on)"
          inputText="(II) Before expressions of Place and Time no Preposition (for, from, in, on) is used. As—"
        />
        <HelperComponent 
        target="last week,‘in last week’)"
        inputText="1. I came here last week.(Not, ‘in last week’)"/>
        <HelperComponent 
        target="abroad,(Not, ‘for abroad’)"
        inputText="2. I am going abroad.(Not, ‘for abroad’)"/>
        <HelperComponent 
        target="minute,(‘wait for a minute’)"
        inputText="3. Please wait a minute. (Not, ‘wait for a minute’)"/>
        <HelperComponent 
        target="outside,( ‘waiting on outside’)"
        inputText="4. She is waiting outside.(Not, ‘waiting on outside’)"/>
      
    </View>


    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          inputText="(III) When some expressions of Time (as morning, evening, day, night, month, year, etc.)
have some qualifying words as this, that, next, every, last, all used before them, no Preposition is needed before them. As—"
target="Time,morning,evening,day,night,month,year"
        />
        <HelperComponent 
        target="this morning."
        inputText="1. He went this morning."/>
        <HelperComponent
        target="last evening"
         inputText="2. He met me last evening."/>
        <HelperComponent 
        target="next Sunday"
        inputText="3. He is coming again next Sunday."/>
      
    </View>

    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          target="Time"
          inputText="Note—But if these expressions of Time have no qualifying words before them, they take necessary Prepositions before them. As—"
        />
        <HelperComponent 
        target="this morning"
        inputText="1. He went this morning."/>
        <HelperComponent
          target="last evening"
         inputText="2. He met me last evening."/>
        <HelperComponent 
        target="next Sunday"
        inputText="3. He is coming again next Sunday."/>
      
    </View>

    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          target="yesterday, today, tomorrow"
          inputText="(IV) No Preposition is required before yesterday, today, tomorrow. As—"
        />
        <HelperComponent
          target="tomorrow,(‘on tomorrow’)"
         inputText="1. Please come tomorrow. (not ‘on tomorrow’)"/>
        <HelperComponent 
        target="today,(‘on today’)"
        inputText="2. He is returning today. (not ‘on today’)"/>
        <HelperComponent 
        target="yesterday ,(‘on yesterday’)"
        inputText="3. He came yesterday also. (not ‘on yesterday’)"/>
      
    </View>


    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
        target="Home"
        inputText="(V) No Preposition is used before Home. As—"
        />
        <HelperComponent 
        target="home,(not ‘to home’)"
        inputText="1. I am going home. (not ‘to home’)"/>
        <HelperComponent
        target="home,(not ‘to home’)"
        inputText="2. I go home every Sunday. (not ‘to home’)"/>
        <HelperComponent inputText="Note—But if there is a Possessive Adjective before Home, or if Home is used in the sense of House, we use appropriate Preposition before it."/>
      
    </View>


    <View style={{marginVertical:10}}>
       {/* I */}
       <HelperComponent
          target="two Verbs,appropriate"
          inputText="(VI) If two Verbs are to be used in a sentence, and both the verbs have to take different Prepositions, we must use appropriate Preposition for each verb separately. As—"
        />
        <HelperComponent
        target="thinking about,waiting for"
         inputText="1. I have been thinking about and waiting for you since the morning."/>
        <HelperComponent 
        target="looking for, enquiring after"
        inputText="2. He has been looking for and enquiring after you for a long time."/>
      
    </View>
    </View>
    </ScrollView>
  )
}

export default OmissionOfPreposition

const styles = StyleSheet.create({})