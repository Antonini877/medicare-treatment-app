import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import MenuComponent from '../components/MenuComponent'

export default function Register(){
  const [numberInput, setNumberInput] = useState('')
  const [textInput, setTextInput] = useState('')

  const handleNumberChange = (text) => {
    // Ensure the input is between 1 and 10
    const number = parseInt(text, 10)
    if (!isNaN(number) && number >= 1 && number <= 10) {
      setNumberInput(text)
    }
  }

  const handleTextChange = (text) => {
    setTextInput(text)
  }

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Number Input:', numberInput)
    console.log('Text Input:', textInput)
    // You can add your logic here, like sending data to a server
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

