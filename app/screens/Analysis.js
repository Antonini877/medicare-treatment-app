import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import MenuComponent from '../components/menu/MenuComponent'
import LineChartComponent from '../components/LineChartComponent'
import SecureStoreService from '../services/SecureStoreService'
import { useFocusEffect } from '@react-navigation/native'
import {getHistoryGrouped} from "../services/OccurrencesService"



export default function Analysis({navigation}){
  const [historyGroupedResults, setHistoryGroupedResults] = useState([])

  const fetchData = async () => {
    const apiKey = await SecureStoreService.get('medicare-api-key')

    if(!apiKey)
      navigation.navigate("Login")

    const historyResponse = await getHistoryGrouped(apiKey)
    
    if(historyResponse){
      setHistoryGroupedResults(historyResponse)
    }else
      navigation.navigate("Login")

  }

  useEffect(() => {
    
  fetchData()
  }, [])

  useFocusEffect(
    //updates the values when screen is focused
    React.useCallback(() => {
      fetchData()
      return () => {
        // Code to run when the screen loses focus
      }
    }, [])
  )



  

  return (
    <View>
    <MenuComponent></MenuComponent>
    <LineChartComponent Responsedata={historyGroupedResults}></LineChartComponent>
    </View>

  )
}



