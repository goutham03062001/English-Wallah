import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const PersonalPronoun = () => {
  return (
    <View style={{padding:10}}>
      <Text></Text>
      <BoldTextHelper text="I, we, you, he, she, it, they" fontSize={16}/>
    </View>
  )
}

export default PersonalPronoun

const styles = StyleSheet.create({})