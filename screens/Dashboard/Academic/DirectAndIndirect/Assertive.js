import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Assertive = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text style={{fontSize:20,textAlign:"center"}}>Assertive Sentence:</Text>
        <Helper 
        first = "1. Raju said to Rani, “I am coming there now”." 
        second="She said, “He is playing cricket here.”"/>

<Helper 
        first = "3. Rani said to Raju, “They are serving food to me.”" 
        second="Rani told Raju that they were serving food to her"/>


<Helper 
        first = "4. He said to me, “I was writing my home work there.”" 
        second="He told me that he had been writing his home work there."/>
      
      <Helper first="5. He said, “They were drinking tea then.”" second="He said that they had been drinking tea then."/>
      <Helper first="6. Rani said to Raju, “I have come today”" second="Rani told Raju that she had come that day."/>
      <Helper first="7. I said, “He has eaten the mangoes.”" second="I said that he had eaten the mangoes."/>
      <Helper first="8. Raju said to Rani, “I had asked him .”" second="Raju told Rani that he had asked him."/>
      <Helper first="9. Raju said, “I have been waiting for good days.”" second="Raju said that he had been waiting for good days."/>
      <Helper first="10. Rani said, “she will come tomorrow with me.”" second="Rani said that she would go next day with her."/>
      <Helper first="11. Raju said to Rani, “I shall attend the function with my family.”" second="Raju told Rani that he would attend the function with his family."/>
      <Helper first="12. The Minister said, “I will be in Delhi on Sunday.”" second="The minister said that he would be in Delhi on Sunday."/>
      <Helper first="13. “I will be using the moped myself on the 20th,” she said." second="She said that she would be using the moped herself on the 20th."/>
      <Helper first="14. “I never eat sweets,” he explained." second="He explained that he never ate sweets."/>
     
      <Helper first="15. “I took the new frock home with me.” Rani said." second="Rani said that she had taken the new frock home with her."/>
      <Helper first="16. “You may go now,” I said to Rani." second="I told Rani that she might go then."/>
      <Helper first="17. “You must return the book this evening,” he said to me.	" second="He told me that I must (had to) return the book that evening."/>
      <Helper first="18. “You had better consult a good doctor,” Ramesh said to me.	" second="Ramesh told me that I had better consult a good doctor."/>
      <Helper first="19. “You ought to love your parents,” he said to Padma." second="He told Padma that she ought to (had to) love her parents."/>
      <Helper first="20. Raju said to Rani, “I used to write stories.”	" second="Raju told Rani that he used to write stories."/>
    
      
      </View>


      <View>
        <Text style={{fontSize:20,textAlign:"center"}}>Interrogative sentences: (Helping verb type)</Text>
        
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
    </ScrollView>
  );
};
const Helper = ({first,second})=>{
  return(<>
<View style={styles.view}>
  <Text style={styles.text}>{first}</Text>
  <Text style={styles.text}>{second}</Text>
</View>
  </>)
}
export default Assertive;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 10,
  },
  view:{
    marginVertical:10
  },
  text:{
    fontSize:17,
    lineHeight:28
  }
});
