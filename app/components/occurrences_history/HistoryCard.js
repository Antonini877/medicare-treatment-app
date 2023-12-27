import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HistoryCard ({ pain, datetime, description }){
  
  

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{datetime}
      </Text>
      <Text style={styles.title}>Pain: {pain}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
 
  cardContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
})
