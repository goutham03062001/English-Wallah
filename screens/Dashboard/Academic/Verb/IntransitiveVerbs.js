import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText";
import UnderlineText from "../utils/UnderlineText";
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const IntransitiveVerbs = () => {
  return (
   <ScrollView>
     <View style={{paddingHorizontal:8,marginTop:8}}>
      <Text style={{fontSize:17,color:"red",fontFamily:PoppinsRegular}}>Intransitive Verbs</Text>
      <Text style={{fontSize:16,marginVertical:10,lineHeight:29}}>
      “A Verb is Intransitive when the action stops with the agent, and does not pass from the agent to
anything else.” <BoldTextHelper text="(Nesfield)"/>

      </Text>
      <Text style={{fontSize:16}}>I <BoldTextHelper text="sleep"/>.</Text>

      <Text style={{fontSize:16,marginVertical:8,lineHeight:29}}>
      The sense of this sentence is <BoldTextHelper text="complete"/>. Its action does not pass on to any other thing. Therefore
it needs no object. An <BoldTextHelper text="Intransitive Verb has no object."/>

      </Text>

      <View>
      <Text style={{fontSize:17,color:"red",fontFamily:PoppinsRegular}}>Transitive and Intransitive Verbs</Text>
      <Text style={{fontSize:16,marginVertical:10,lineHeight:29}}>
      Regarding <BoldTextHelper text="Transitive"/> and <BoldTextHelper text="Intransitive"/> verbs it is necessary to remember that most verbs are neither Transitive nor Intransitive in themselves.

      </Text>
      <Text style={{fontSize:16,lineHeight:29}}>
      This distinction depends upon their use. A Transitive verb can be used as an Intransitive verb, and an Intransitive verb can be used as a Transitive verb. Therefore Wren and Martin observe :
      </Text>

      <Text style={{fontSize:16,marginVertical:8,lineHeight:29}}>
      “Most Verbs can be used both as Transitive and as Intransitive Verbs. It is, therefore, better to say that a Verb is used Transitively or Intransitively rather than that it is Transitive or Intransitive.”

      </Text>
      </View>



      <View>
      <Text style={{fontSize:17,color:"red",fontFamily:PoppinsRegular}}>Transitive and Intransitive Use</Text>
      <Text style={{fontSize:16,marginVertical:10,lineHeight:29}}>
      As we have said above, most verbs can be used both as Transitive and Intransitive verbs. As—
      </Text>
      <Text style={{fontSize:18,fontWeight:"bold"}}>
Kinds of Verbs      </Text>

      <Text style={{fontSize:17,marginVertical:10,fontWeight:700,}}>
      Transitive Use 
      </Text>

      <View>
        <Text  style={{fontSize:16}}>1. He <BoldTextHelper text="speaks"/> the truth. 	</Text>
        <Text style={{fontSize:16}}>2. I <BoldTextHelper text="feel"/> a severe pain in my backbone.	</Text>
        <Text style={{fontSize:16}}>3. He can <BoldTextHelper text="drive"/> any car. 	</Text>
        <Text style={{fontSize:16}}>4. Please <BoldTextHelper text="ring"/> the bell. 	</Text>
        <Text style={{fontSize:16}}>5. He <BoldTextHelper text="stopped"/> the bus. 	</Text>
        <Text style={{fontSize:16}}>6. They <BoldTextHelper text="fought"/> the enemy back.		</Text>
        <Text style={{fontSize:16}}>7. I <BoldTextHelper text="read"/> a book. 	</Text>
        <Text style={{fontSize:16}}>8. They <BoldTextHelper text="drink"/> country liquor. 	</Text>
        <Text style={{fontSize:16}}>9. <BoldTextHelper text="Change"/> your clothes. 	</Text>
        <Text style={{fontSize:16}}>10. He <BoldTextHelper text="invited"/> you. 		</Text>
      </View>



      <Text style={{fontSize:17,marginVertical:10,fontWeight:700,}}>
      Intransitive Use 
      </Text>

      <View>
        <Text style={{fontSize:16}}>1. He speaks softly	</Text>
        <Text style={{fontSize:16}}>2. How does he <BoldTextHelper text="feel"/> now ?</Text>
        <Text style={{fontSize:16}}>3. He <BoldTextHelper text="drives"/> very cautiously.	</Text>
        <Text style={{fontSize:16}}>4. The bell <BoldTextHelper text="ring"/> .	</Text>
        <Text style={{fontSize:16}}>5. The bus <BoldTextHelper text="stopped"/>.</Text>
        <Text style={{fontSize:16}}>6. They <BoldTextHelper text="fought"/> bravely.</Text>
        <Text style={{fontSize:16}}>7. I <BoldTextHelper text="read"/> slowly.	</Text>
        <Text style={{fontSize:16}}>8. They <BoldTextHelper text="drink"/> country liquor. 	</Text>
        <Text style={{fontSize:16}}>9. They will never <BoldTextHelper text="change"/>.	</Text>
        <Text style={{fontSize:16}}>10. I was not <BoldTextHelper text="invited"/>		</Text>
      </View>
      </View>
    </View>
   </ScrollView>
  )
}

export default IntransitiveVerbs

const styles = StyleSheet.create({})