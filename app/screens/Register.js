import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import MenuComponent from '../components/menu/MenuComponent'
import { addOccurrence } from '../services/OccurrencesService'
import SecureStoreService from '../services/SecureStoreService'


export default function Register({navigation}){
  const [numberInput, setNumberInput] = useState('')
  const [textInput, setTextInput] = useState('')
  const [apiKey, setApiKey] = useState('')


  useEffect(() => {
    const checkLogged = async () => {
      const apiKey = await SecureStoreService.get('medicare-api-key')

      if(!apiKey)
        navigation.navigate("Login")

      setApiKey(apiKey)

  }

  checkLogged()
    

  }, [])

  const handleNumberChange = (text) => {

    const number = parseInt(text, 10)
    if (!isNaN(number) && number >= 1 && number <= 10) {
      setNumberInput(text)
    }
  }

  const handleTextChange = (text) => {
    setTextInput(text)
  }

  const handleSubmit = async () => {

    const actualDate = new Date(
      new Date()
      .toLocaleString(
        "br-BR", 
        {
          timeZone: "America/Sao_Paulo"
        }
        )
      )
      
  const occurrenceData = {
      'pain':numberInput,
      'description':textInput,
      'created': actualDate
    }

    await addOccurrence(apiKey, occurrenceData)

    navigation.navigate('Home')
  }

  return (
    <View>
        <MenuComponent></MenuComponent>
        <View style={styles.container}>

        <TextInput
            style={styles.input}
            placeholder="Pain ratio (1-10)"
            keyboardType="numeric"
            value={numberInput}
            onChangeText={handleNumberChange}
        />
        <TextInput
            style={styles.input}
            placeholder="Description"
            value={textInput}
            onChangeText={handleTextChange}
        />
          
        
        <Button title="Submit" onPress={handleSubmit} style={styles.button}/>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop:'50%'
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
      },
      button:{
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
        flex:1
      }
  },
)

