import React from 'react'
import  { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function MenuModal({navigation, closeModal}){



  return (
   <SafeAreaView style={styles.container} >
     
     
     <TouchableOpacity  onPress={() =>closeModal()}>  
    <Text style={styles.icon}>☰</Text>
    </TouchableOpacity>
    
    
    <View style={styles.drawerHeader} >
      <Text style={styles.drawerHeaderText} >Medicare</Text>
    </View>
    
    
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => {
        navigation.navigate('Register')
      }}
    >
      <Text style={styles.drawerItemText}>Register</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => {
        navigation.navigate('History')

      }}
    >
      <Text style={styles.drawerItemText}>History</Text>
    </TouchableOpacity>


    <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => {
        navigation.navigate('Analysis')
      }}
    >
      <Text style={styles.drawerItemText}>Analysis</Text>
    </TouchableOpacity>
   
   
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 20,
  },
  drawerItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerItemText: {
    fontSize: 16,
  },
  icon: {
    fontSize: 40,
    marginLeft: 10
  },
})

