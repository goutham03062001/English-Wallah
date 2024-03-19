import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText"
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const Unfulfilled = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>

      <Text style={{fontSize:20}}>
      <BoldTextHelper text="Type 3: Unfulfilled Conditional"/>
       </Text>

       <Text style={{fontSize:17,marginVertical:20,textAlign:"justify",lineHeight:29}}>
       It tells that something did not take place because a particular condition was not fulfilled.
       </Text>
      
      <Text>
      <UnderlineTextHelper
      inputStyle={{color:"black",fontSize:17,textAlign:"justify",marginBottom:20}}
        text="If + Subject + had + V3 —— Subject + would + have V3"
      />
      </Text>

        <View>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>1. If I had resigned for the job, I would have faced several financial problems.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>2. If I had married Rani, I would have been happier.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>3. If he had studied hard, he would have gotten first rank.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>4. If you had paid your fee, I would have issued your hall ticket.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>5. If you had given his hall ticket, I would have paid his fee.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>6. If she had come in time, we would have reached HYD in time.</Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default Unfulfilled

const styles = StyleSheet.create({
    rootContainer:{
        padding:10
    }
})