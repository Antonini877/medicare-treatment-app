import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import MenuComponent from '../components/menu/MenuComponent'


export default function SuccessCard({navigation}) {

  return (
    <View>

      <MenuComponent></MenuComponent>
      
      <View style={styles.card}>
        <Text style={styles.text}>Data successfully added 😊</Text>
      </View>
        
    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4CAF50', 
    padding: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    marginTop:100
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})