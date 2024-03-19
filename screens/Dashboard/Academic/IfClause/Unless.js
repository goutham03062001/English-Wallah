import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from "../utils/UnderlineText"
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const Unless = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>

      <Text style={{fontSize:20}}>
      <BoldTextHelper text="Unless = If not"/>
       </Text>

      
      

        <View>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>* Unless you work hard, you won’t get good marks.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>* Unless I woke up early, I won’t catch the bus.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>* Unless she looks at me, I will not talk to her.</Text>
            <Text style={{fontSize:17,marginVertical:5,textAlign:"justify"}}>* She will not let you go, unless you give ten rupees.</Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default Unless

const styles = StyleSheet.create({
    rootContainer:{
        padding:10
    }
})