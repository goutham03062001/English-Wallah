import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { PoppinsRegular } from '../../../../utils/FontHelper'
const PaynowTemplate = () => {
  return (
    <View style={styles.rootContainer}>
        <View>
            <Text>Pay Now </Text>

            <Text style={{marginTop:40,textAlign:'center',fontFamily:PoppinsRegular,fontSize:16}}>Pay now and unlock the all features</Text>
            <Button mode='elevated'
            icon={require("../../../../assets/rupee.png")}
            style={{borderRadius:2,marginTop:50}}
            buttonColor='gold'>Pay now 1000</Button>
        </View>
    </View>
  )
}

export default PaynowTemplate

const styles = StyleSheet.create({
    rootContainer:{
        padding:0,
        marginTop:50
    }
})