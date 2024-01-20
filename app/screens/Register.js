import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import MenuComponent from '../components/menu/MenuComponent'
import { addOccurrence } from '../services/OccurrencesService'
import SecureStoreService from '../services/SecureStoreService'


export default function Register({navigation}){
  const [numberInput, setNumberInput] = useState(null)
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
    setNumberInput(text)
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
      'pain': parseInt(numberInput, 10),
      'description':textInput,
      'created': formattedDate
    }
    const response = await addOccurrence(apiKey, occurrenceData)

    if(!response)
      navigation.navigate('FailCard')
    else
      navigation.navigate('SuccessCard')

  }

  return (
    <View>
        <MenuComponent></MenuComponent>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Select Pain Ratio</Text>
          </View>
          <View style={styles.pickerWrapper}>
        <Picker
        style={styles.inputPicker}
        selectedValue={numberInput}
        onValueChange={handleNumberChange}

      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      </View>
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
      inputPicker: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
      },
      button:{
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
        flex:1
      },
      text: {
        fontSize: 16,
        color: 'black',
        alignContent:'center'
      },
      textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      pickerWrapper:{
          borderColor:'grey',
          borderWidth: 1,
          marginTop:10,
          marginBottom:10
        
      }
  },
)

