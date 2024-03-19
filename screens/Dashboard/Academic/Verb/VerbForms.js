import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from "../utils/BoldText";
import UnderlineTextHelper from '../utils/UnderlineText';
import { PoppinsLight,PoppinsRegular } from '../../../../utils/FontHelper';
const DataComponent = ({first,second,third})=>{
  return(<>
    <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:5,alignItems:"flex-start",marginTop:15}}>
          {/* body content */}
          <View style={{width:"28%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"}}>
            <Text style={{fontSize:15,fontFamily:PoppinsLight}}>{first}</Text>
          </View>
          <View style={{width:"28%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
            <Text style={{fontSize:15,fontFamily:PoppinsLight}}>{second}</Text>
          </View>
          <View style={{width:"30%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
            <Text style={{fontSize:15,fontFamily:PoppinsLight}}>{third}</Text>
          </View>
        </View>
  </>)
}
const VerbForms = () => {
  return (
   <ScrollView>
     <View style={{paddingHorizontal:8,}}>
      <Text style={{fontSize:16,marginVertical:5,fontFamily:PoppinsRegular}}><BoldTextHelper text="Base"/> : Come</Text>
      <Text style={{fontSize:16,marginVertical:5,fontFamily:PoppinsRegular}}><BoldTextHelper text="Present Form"/> : Comes</Text>
      <Text style={{fontSize:16,marginVertical:5,fontFamily:PoppinsRegular}}><BoldTextHelper text="Past Form"/> : came</Text>
      <Text style={{fontSize:16,marginVertical:5,fontFamily:PoppinsRegular}}><BoldTextHelper text="Past Participle"/>  : come</Text>
      <Text style={{fontSize:16,marginVertical:5,fontFamily:PoppinsRegular}}><BoldTextHelper text="Present Participle"/>  : coming</Text>
   
      <View>
        <Text style={{fontSize:16,marginVertical:5,fontFamily:PoppinsRegular}}>
        Below is a list of irregular verbs.
        </Text>
      </View>


      <View style={{marginVertical:15}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          {/* headings */}
          <Text style={{fontSize:17,fontWeight:"500"}}>Base Form</Text>
          <Text style={{fontSize:17,fontWeight:"500"}}>Past Form</Text>
          <Text style={{fontSize:17,fontWeight:"500"}}>Past Participle</Text>
        </View>

      <DataComponent first="Arise" second="arose" third="arisen"/>
      <DataComponent first="Awake " second="awoke" third="awoken"/>
      <DataComponent first="Bear " second="bore" third="born"/>
      <DataComponent first="Beat " second="beat" third="beaten"/>
      <DataComponent first="Become " second="became" third="become"/>
      <DataComponent first="Begin " second="began" third="begun"/>
      <DataComponent first="Bite " second="bit" third="bitten"/>
      <DataComponent first="Blow" second="blew" third="blown"/>
      <DataComponent first="Break " second="broke" third="broken"/>
      <DataComponent first="Bring" second="brought" third="brought"/>
      <DataComponent first="Build" second="built" third="built"/>
      <DataComponent first="Burn" second="(burned)burnt" third="burnt"/>
      <DataComponent first="Buy" second="bought" third="bought"/>
      

      <DataComponent first="Catch" second="caught" third="caught"/>
      <DataComponent first="Choose" second="chose" third="chosen"/>
      <DataComponent first="Come" second="came" third="come"/>
      <DataComponent first="Creep" second="crept" third="crept"/>

      <DataComponent first="Dig" second="dug" third="dug"/>
      <DataComponent first="Do" second="did" third="done"/>
      <DataComponent first="Draw" second="drew" third="drawn"/>
      <DataComponent first="Dream" second="dreamt" third="dreamt"/>
      <DataComponent first="Drink" second="drank" third="drunk"/>
      <DataComponent first="Drive" second="drove" third="driven"/>


      <DataComponent first="Eat" second="ate" third="eaten"/>

      <DataComponent first="Fall" second="fell" third="fallen"/>
      <DataComponent first="Feed" second="fed" third="fed"/>
      <DataComponent first="Feel" second="felt" third="felt"/>
      <DataComponent first="Fight" second="fought" third="fought"/>
      <DataComponent first="Find" second="found" third="found"/>
      <DataComponent first="Flee" second="fled" third="fled"/>
      <DataComponent first="Fly" second="flew" third="flown"/>
      <DataComponent first="Forget" second="forgot" third="forgotten"/>
      <DataComponent first="Forgive" second="forgave" third="forgiven"/>

      <DataComponent first="Get" second="got" third="gotten"/>
      <DataComponent first="Get up" second="got up" third="gotten up"/>
      <DataComponent first="Give" second="gave" third="given"/>
      <DataComponent first="Give up" second="gave up" third="given up"/>
      <DataComponent first="Go" second="went" third="gone"/>
      <DataComponent first="Grow" second="grew" third="grown"/>

      <DataComponent first="Hang" second="hung" third="hung"/>
      <DataComponent first="Hear" second="heard" third="heard"/>
      <DataComponent first="Hide" second="hid" third="hidden"/>
      <DataComponent first="Hold" second="held" third="held"/>

      <DataComponent first="Keep" second="kept" third="kept"/>
      <DataComponent first="Know" second="knew" third="known"/>

      <DataComponent first="Lie" second="lay" third="lain"/>
      <DataComponent first="Light" second="lit" third="lit"/>
      <DataComponent first="Lead" second="led" third="led"/>
      <DataComponent first="Learn" second="learnt" third="learn(learned)"/>
      <DataComponent first="Leave" second="left" third="left"/>
      <DataComponent first="Lend" second="lent" third="lent"/>

      <DataComponent first="Make" second="made" third="made"/>
      <DataComponent first="Meet" second="met" third="met"/>
      <DataComponent first="Mistake" second="mistook" third="mistaken"/>
      <DataComponent first="Misunderstand" second="misunderstood" third="misunderstood"/>

      <DataComponent first="Pay" second="paid" third="paid"/>

      <DataComponent first="Read" second="read" third="read"/>
      <DataComponent first="Ride" second="rode" third="ridden"/>
      <DataComponent first="Ring" second="rang" third="rung"/>
      <DataComponent first="Rise" second="rose" third="risen"/>
      <DataComponent first="Run" second="ran" third="run"/>

      <DataComponent first="Say" second="said" third="said"/>
      <DataComponent first="See" second="saw" third="seen"/>
      <DataComponent first="Seek" second="sought" third="sought"/>
      <DataComponent first="Sell" second="sold" third="sold"/>
      <DataComponent first="Send" second="sent" third="sent"/>
      <DataComponent first="Shake" second="shook" third="shaken"/>
      <DataComponent first="Shoot" second="shot" third="shot"/>
      <DataComponent first="Sing" second="sang" third="sung"/>
      <DataComponent first="Sit" second="sat" third="sat"/>
      <DataComponent first="Sink" second="sank" third="sunk"/>
      <DataComponent first="Sleep" second="slept" third="slept"/>
      <DataComponent first="Smell" second="smelt" third="smelt"/>
      <DataComponent first="Speak" second="spoke" third="spoken"/>
      <DataComponent first="Spend" second="spent" third="spent"/>
      <DataComponent first="Spit" second="spat" third="spat"/>
      <DataComponent first="Stand" second="stood" third="stood"/>
      <DataComponent first="Steal" second="stole" third="stolen"/>
      <DataComponent first="Swear" second="swore" third="sworn"/>
      <DataComponent first="Swing" second="swung" third="swung"/>
      <DataComponent first="Swim" second="swam" third="swum"/>

      <DataComponent first="Take" second="took" third="taken"/>
      <DataComponent first="Take Place" second="took place" third="taken place"/>
      <DataComponent first="Teach" second="taught" third="taught"/>
      <DataComponent first="Tear" second="tore" third="torn"/>
      <DataComponent first="Tell" second="told" third="told"/>
      <DataComponent first="Think" second="thought" third="thought"/>
      <DataComponent first="Throw" second="threw" third="thrown"/>

      <DataComponent first="Understand" second="understood" third="understood"/>

      <DataComponent first="Wake up" second="woke up" third="woken up"/>
      <DataComponent first="Weep" second="wept" third="wept"/>
      <DataComponent first="Wear" second="wore" third="worn"/>
      <DataComponent first="Withdraw" second="withdrew" third="withdrawn"/>
      <DataComponent first="Write" second="wrote" third="written"/>
      <DataComponent first="Wring" second="wrung" third="wrung"/>


      <View style={{marginTop:50,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          {/* headings */}
          <Text style={{fontSize:17,fontWeight:"500"}}>Base Form</Text>
          <Text style={{fontSize:17,fontWeight:"500"}}>Past Form</Text>
          <Text style={{fontSize:17,fontWeight:"500"}}>Past Participle</Text>
        </View>
      <DataComponent first="Bet" second="bet" third="bet"/>
      <DataComponent first="Burst" second="burst" third="burst"/>
      <DataComponent first="Cost" second="cost" third="cost"/>
      <DataComponent first="Cut" second="cut" third="cut"/>
      <DataComponent first="Hit" second="hit" third="hit"/>
      <DataComponent first="Hurt" second="hurt" third="hurt"/>
      <DataComponent first="Let" second="let" third="let"/>
      <DataComponent first="Put" second="put" third="put"/>
      <DataComponent first="Read" second="read" third="read"/>
      <DataComponent first="Set" second="set" third="set"/>
      <DataComponent first="Shut" second="shut" third="shut"/>
      <DataComponent first="Split" second="split" third="split"/>
      <DataComponent first="Spread" second="spread" third="spread"/>

      </View>
    </View>
   </ScrollView>
  )
}

export default VerbForms

const styles = StyleSheet.create({})