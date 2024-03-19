import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const Interrogative = () => {
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
          <Text style={styles.mainHeading}>Interrogative sentences: (Helping verb type)</Text>

          <View>
            <Helper first="21. Raju said to Rani, “Am I coming there now?”" second="Raju asked Rani if he was going there then."/>
            <Helper first="22. She said, “Is he playing cricket here?”" second="She asked if he was playing cricket."/>
            <Helper first="23. Rani said to Raju, “Are they serving food to me?”" second="Rani asked Raju whether they were serving food to her."/>
            <Helper first="24. He said to me, “Was I writing my home work there?”" second="He asked me if he had been writing his home work there."/>
            <Helper first="25. He said, “Were they drinking tea then?”" second="He asked whether they had been drinking tea then."/>
            <Helper first="26. Rani said to Raju, “Have I come today?”" second="Rani asked Raju if she had come that day."/>
            <Helper first="27. I said, “Has he eaten the mangoes?”" second="I asked if he had eaten the mangoes."/>
            <Helper first="28. Raju said to Rani, “Had I asked him yesterday?”" second="Raju asked Rani if he had asked him yesterday."/>
            <Helper first="29. Raju said, “Have I been waiting for good days?”" second="Raju asked if he had been waiting for good days."/>
            <Helper first="30. Rani said, “Will she come tomorrow with me?”" second="Rani asked if she would go with her the next day."/>
            <Helper first="31. Raju said to Rani, “Shall I attend the function next month with my family?”" second="Raju asked Rani if he would attend the function the following month with his family."/>
            <Helper first="32. The Minister said, “Will I be in Delhi on Sunday?”" second="The minister asked if he would be in Delhi on Sunday. 33. she said to me, “Don’t I believe you?”"/>
            <Helper first="34. Do you like me?” he said to me." second="He asked me if I liked him."/>
            <Helper first="35. She said, ‘Does he smoke?" second="She asked (me) if he smoked"/>
            <Helper first="36. Raju said to Rani, “Did you eat food with your parents?”" second="Raju asked Rani if she had eaten food with her parents."/>
          </View>

          <View>
          <Text style={styles.mainHeading}>Interrogative sentences: (W / H type)</Text>

          <Helper first="37. Raju said to Rani, “How am I coming there?”" second="Raju asked Rani how he was going there."/>
          <Helper first="38. She said, “When Is he playing cricket?”" second="She asked when he was playing cricket. "/>
          <Helper first="39. Rani said to Raju, “Why are they serving food to me?”" second="Rani asked Raju why they were serving food to her."/>
          <Helper first="40. He said to me, “Where was I writing my home work?”" second="He asked me where he had been writing his home work."/>
          <Helper first="41. He said, “How were they drinking tea then?”" second="He asked how they had been drinking tea then."/>
          <Helper first="42. Rani said to Raju, “Why have I come today?”" second="Rani asked Raju why she had come that day."/>
          <Helper first="43. I said, “Where has he eaten the mangoes?”" second="Raju asked Rani how he was going there."/>
          <Helper first="44. Raju said to Rani, “Why had I asked him yesterday?”" second="Raju asked Rani why he had asked him the previous day. "/>
          <Helper first="45. Raju said, “How have I been waiting for good days?”" second="Raju asked how he had been waiting for good days."/>
          <Helper first="46. Rani said, “ When will she come tomorrow with me?”" second="Rani asked when she would come the next day with her."/>
          <Helper first="47. Raju said to Rani, “Why shall I attend the function next month with my family?”" second="Raju asked Rani why he would attend the function the following month with his family."/>
          <Helper first="48. The Minister said, “When will I be in Delhi?”" second="The minister asked when he would be in Delhi."/>
          <Helper first="50. Rani said, “How do you act there with me?" second="Rani asked (me) how I acted there with her."/>
          <Helper first="51. Raju said, “Why does he smoke?" second="Raju asked why he smoked."/>
          <Helper first="52. Rani said to Raju, “Why did you attend the function with her?”" second="Rani asked Raju why he had attended the function with her."/>

          </View>
      </ScrollView>
    </View>
  )
}
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
export default Interrogative

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
  },
  mainHeading:{fontSize:20,textAlign:"center"}
})