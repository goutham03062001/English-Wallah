import { StyleSheet, Text, View,Dimensions ,Image} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import BoldText from "../../utils/BoldText";
import UnderlineTextHelper from '../../utils/BoldText';
import { ScrollView } from 'react-native-gesture-handler';
const CommonNounStartingScreen = () => {
  return (
    <ScrollView>

    <View style={{paddingHorizontal:6,marginVertical:8}}>
      <Text style={{fontSize:16,lineHeight:26}}>The general name of a <BoldText text="person"/>,<BoldText text="animal"/>,<BoldText text="place"/> or <BoldText text="thing,"/> etc. is known as Common Noun </Text>

      <View style={{marginVertical:19,paddingHorizontal:8}}>
        <Text style={{fontSize:16,lineHeight:25}}>1. I am a <UnderlineTextHelper text="teacher"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>2. It is a <UnderlineTextHelper text="dog"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>3. This is a  <UnderlineTextHelper text="city"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>4. That's a  <UnderlineTextHelper text="laptop"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>5. Bring some <UnderlineTextHelper text="water"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>6. I joined a  <UnderlineTextHelper text="university"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>7. I'm going <UnderlineTextHelper text="home"/></Text>
        <Text style={{fontSize:16,lineHeight:25}}>8. Srimukhi has <UnderlineTextHelper text="courage"/></Text>
      </View>

      <View style={{marginVertical:10}}>
        <Text style={{fontSize:17,marginBottom:20}}>Types of Common Nouns: (Based on form)</Text>
        <Text style={{fontSize:16,marginBottom:20}}>Based on form, common nouns are classified into two categories:</Text>

      <Text style={{lineHeight:27,fontSize:16}}>  <BoldText text="1. Countable Nouns" fontSize={18} styling = {{padding:8,marginVertical:10}}/></Text>
      <Text style={{lineHeight:27,fontSize:16}}>  <BoldText text="2. Uncountable Nouns" fontSize={18} styling = {{padding:8,marginVertical:10}}/></Text>
     
      </View>

      <View style={{marginVertical:30}}>
        <Text style={{fontSize:17,marginBottom:20,color:"#610C9F",fontWeight:"500"}}>**Countable Nouns**</Text>
        <Text style={{fontSize:16}}>Countable nouns have singular and plural forms</Text>

        <Text style={{fontSize:16,marginVertical:20,color:"blue",fontSize:17}}>Examples</Text>
        <Text style={{fontSize:16,color:"green"}}>man - men</Text>
        <Text style={{fontSize:16,color:"green"}}>foot – feet</Text>
        <Text style={{fontSize:16,color:"green"}}>woman – women</Text>
        <Text style={{fontSize:16,color:"green"}}>mouse – mice</Text>
        <Text style={{fontSize:16,color:"green"}}>girl – girls</Text>
        <Text style={{fontSize:16,color:"green"}}>tooth – teeth</Text>
      </View>

      <View>
      <Text style={{fontSize:17,marginBottom:20,color:"#610C9F",fontWeight:"500"}}>**Uncountable Nouns**</Text>
        <Text style={{fontSize:16}}>Uncountable nouns have no plural forms</Text>

        <Text style={{fontSize:16,marginVertical:20,color:"blue",fontSize:17}}>Examples</Text>
        <Text style={{fontSize:16,color:"green"}}>rice</Text>
        <Text style={{fontSize:16,color:"green"}}>sand</Text>
        <Text style={{fontSize:16,color:"green"}}>oil</Text>
        <Text style={{fontSize:16,color:"green"}}>water</Text>
        <Text style={{fontSize:16,color:"green"}}>milk</Text>
        
      </View>
      <View style={{marginVertical:20}}>
      <Text style={{fontSize:17,marginBottom:20,color:"#610C9F",fontWeight:"500"}}>**Types of Common Nouns: (Based on meaning)**</Text>
      <Text style={{fontSize:16,marginBottom:20}}>Based on the meaning, common nouns are classified into four categories</Text>

      <View style={{marginVertical:20}}>
        {/* Concrete noun */}
        <Text style={{fontSize:16}}>A concrete noun is a name of the thing that can be  
          <Text>
            <BoldText text=" touched, seen, heard, tasted or smelled."/>
          </Text>
        </Text>
        <Text style={{marginTop:20,fontSize:16,color:"green"}}>1.There is a <BoldText text="table"/>.</Text>
        <Text style={{marginTop:20,fontSize:16,color:"green"}}>2.The sun is very <BoldText text="hot"/> today.</Text>
        <Text style={{marginTop:20,fontSize:16,color:"green"}}>3.Blow the <BoldText text="horn"/> please.</Text>
        <Text style={{marginTop:20,fontSize:16,color:"green"}}>4.Have a <BoldText text="coffee"/>.</Text>
        <Text style={{marginTop:20,fontSize:16,color:"green"}}>5.I like <BoldText text="laddu"/>.</Text>
      </View>

      <View>
        {/* Abstract Noun */}
        <Text style={{fontSize:17,marginBottom:20,color:"#610C9F",fontWeight:"500"}}>**Abstract Noun**</Text>

        <Text style={{fontSize:16,marginVertical:15}}>An abstract noun is a name of the thing that can not be touched, seen, heard, smelled or tasted.</Text>

        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>1. <BoldText text="Death"/> is inevitable.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>2. <BoldText text="Love"/> is blind.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>3. I have great <BoldText text="faith"/> in you.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>4. They laughed at my <BoldText text="idea"/>.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>5. <BoldText text="Luck"/> is the lost door to be opened by itself.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>6. He struggled to find <BoldText text="happiness"/> in his life.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>7. He was blessed with vivid <BoldText text="imagination"/>.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>8. Are you suffering from <BoldText text="pain?"/></Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>9. We don’t have much <BoldText text="sympathy"/> for them.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>10. <BoldText text="Strength"/> is life, <BoldText text="weakness"/> is <BoldText text="death"/>.</Text>
        
     
      </View>

      <View>
        {/* material noun */}
        <Text style={{fontSize:17,marginVertical:30,color:"#610C9F",fontWeight:"500"}}>**Material  Noun**</Text>

        <Text style={{fontSize:16,marginVertical:15}}>A material Noun is the name of a material or substance out which things are made.</Text>

        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>1. I have a cricket <BoldText text="bat"/>. (made of wood from the tree)</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>2. My brother has a <BoldText text="mobile phone"/> (made of plastic and metal)</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>3. Your shirt has a <BoldText text="button"/> short.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>4. The pen is out of <BoldText text="ink"/>.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>5. This bottle is made of <BoldText text="glass"/>.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>6. This sweater is made of <BoldText text="wool"/>.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>7. A huge amount of <BoldText text="meat"/> is required for the wedding.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>8. That nose pin is made of <BoldText text="gold"/>.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>9. She spilled the <BoldText text="milk"/> by mistake. </Text>
        
      </View>

      <View>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:30,color:"#610C9F",fontWeight:"500"}}>**Collective  Noun**</Text>

        <Text style={{fontSize:16,marginVertical:15}}>A collective noun is the name of the collection of things or persons.</Text>

        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>1. He ate a full <BoldText text="bunch"/> of grapes.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>2. A huge <BoldText text="crowd"/> attended the concert</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>3. A <BoldText text="flock"/> of sheep is approaching.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>4. A <BoldText text="herd"/> of elephants crossed the road.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>5. We’re taking the <BoldText text="whole"/> brood to the movie tonight.</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>6. There was an angry <BoldText text="mob"/> outside the court</Text>
        <Text style={{fontSize:16,marginVertical:5,color:"green"}}>7. A <BoldText text="pack"/> of journalists was waiting outside.</Text>
 
        
      </View>
      </View>
      </View>
      </View>


{/* 
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Concrete Noun</Text>

        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Abstract Noun</Text>

        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Material Noun</Text>

        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:16,textAlign:"center"}}>Collective Noun</Text>

        </Card.Content>
      </Card> */}
    </ScrollView>
  )
}

export default CommonNounStartingScreen

const styles = StyleSheet.create({
    cardStyle:{
        marginVertical:10,
        width:"95%",
        marginHorizontal:(Dimensions.get("screen").width)/50,
        borderRadius:10,
        elevation:5
    },
    contentStyle:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})