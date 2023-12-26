import React from 'react'
import  { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import {getHistory} from "../../services/OccurrencesService"
import HistoryCard from './HistoryCard'
import SecureStoreService from '../../services/SecureStoreService'
import { useFocusEffect } from '@react-navigation/native'


export default function HistoryRecord({navigation}){
    const [historyResults, setHistoryResults] = useState([])

    const fetchData = async () => {
      const apiKey = await SecureStoreService.get('medicare-api-key')

      if(!apiKey)
        navigation.navigate("Login")

      const historyResponse = await getHistory(apiKey)
      
      if(historyResponse){
        setHistoryResults(historyResponse)
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

        <ScrollView >
          {historyResults.map((record) => (
           <HistoryCard
            pain={record.pain}
            datetime={record.datetime}
            description={record.description} 
           >
           </HistoryCard>
          ))}
        </ScrollView>
        
      )
}




