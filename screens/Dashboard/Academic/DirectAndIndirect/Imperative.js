import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import BoldTextHelper from '../utils/BoldText'

const Imperative = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={{fontSize:20,textAlign:"center"}}>Imperative Sentence:</Text>
        <Helper 
        first = "53.  “Be regular to your classes,” my teacher said to me.  " 
        second="My teacher advised me to be regular to my classes."/>

<Helper 
        first = "54.  “Please type this letter as soon as possible,” the manager said to me. " 
        second="Manager requested / asked me to type that letter as soon as possible."/>


<Helper 
        first = "55. “Be polite to others,”  I said to him." 
        second="I advised him to be polite to others."/>
      
      <Helper first="56. “Go and get me a piece of paper,” I said to him.  " second="I ordered him to go and get me a piece of paper."/>
      <Helper first="57. * I said to him, “please tell me how to use the calculator.”  " second="I requested him to teach me how to use the calculator."/>
      <Helper first="58. Ramu said to his servant, “ Bring a glass of water.”  " second="Ramu ordered his servant to bring a glass of water."/>
      <Helper first="59. The teacher said to Mohan, “Improve your hand writing if you want to pass.”   " second="The teacher advised Mohan to improve his hand writing if he wanted to pass."/>
      <Helper first="60. Ram said, “Please come with me.” " second="Ram requested (him) to go with him."/>
      
      <Helper first="61. “Apply for the bank loan,” my mother said to me.   " second="My mother proposed that I should apply for the bank loan. "/>
      <Helper first="62. * “Burn the old letters,” my brother said. " second="* My brother suggested burning the old letters."/>
      <Helper first="63. * “Can you explain the word to me?” he said to me.  " second="* He requested me to explain the word to him."/>
      <Helper first="*64.  “Can you teach me English?,” Padma said to me.   " second="Padma requested me to teach her English."/>
      <Helper first="65. He said to his friends, “Let us go on a picnic.” " second="He proposed to his friends to go on a picnic."/>
      <Text style={{fontSize:20,textAlign:"center"}}>Negative Imperative Sentences:</Text>
      
      <Helper first="66. “Don’t play with fire,” he said to me." second="He advised me not to play with fire."/>
      <Helper first="67. “Don’t be foolish,” my friend said to me.  " second="My friend advised me not to be foolish."/>
      <Helper first="68. “Don’t waste your time in reading such useless books,” my father said to me.  " second="My father ordered me not to waste my time in reading such useless books."/>
      <Helper first="69. “Don’t beat the child like that,” I said to Padma.  " second="I asked or requested Padma not to beat the child like that."/>
      <Helper first="70. “Don’t neglect your health,” Kumari said to me.  " second="Kumari advised me not to neglect my health."/>
      <Helper first="71. Ramu’s father said to him, “Don’t be impatient about the result of your examination.” " second="Ramu’s father advised him not to be impatient about the result of his examination."/>

    
      
      </View>


    </ScrollView>
  );
};
const Helper = ({first,second})=>{
  return(<>
<View style={styles.view}>
  <Text style={styles.text}>
    <BoldTextHelper text={first}/>
  </Text>
  <Text style={styles.text}>{second}</Text>
</View>
  </>)
}
export default Imperative;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 10,
  },
  view:{
    marginVertical:10
  },
  text:{
    fontSize:17,
    lineHeight:28,
    textAlign:"justify"
  }
});
