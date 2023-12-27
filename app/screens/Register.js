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

    const timeZone = "America/Sao_Paulo"
    const actualDate = new Date()

    const year = new Intl.DateTimeFormat("en", { year: "numeric", timeZone }).format(actualDate)
    const month = new Intl.DateTimeFormat("en", { month: "2-digit", timeZone }).format(actualDate)
    const day = new Intl.DateTimeFormat("en", { day: "2-digit", timeZone }).format(actualDate)
    const hours = new Intl.DateTimeFormat("en", { hour: "2-digit", hour12: false, timeZone }).format(actualDate)
    const minutes = new Intl.DateTimeFormat("en", { minute: "2-digit", timeZone }).format(actualDate)
    const seconds = new Intl.DateTimeFormat("en", { second: "2-digit", timeZone }).format(actualDate)

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

      
  const occurrenceData = {
      'pain':numberInput,
      'description':textInput,
      'created': formattedDate
    }

    try{
      await addOccurrence(apiKey, occurrenceData)

      navigation.navigate('SuccessCard')


    }catch(e){
      navigation.navigate('FailCard')
    }

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
            placeholder="Description (optional)"
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

