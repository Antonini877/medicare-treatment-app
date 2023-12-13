import React from 'react'
import  { useEffect, useState } from 'react'
import { View } from 'react-native'
import {getHistory} from "../services/OccurrencesService"
import HistoryCard from './HistoryCard'

export default function HistoryRecord(){
    const [historyResults, setHistoryResults] = useState([])

    useEffect(() => {

        setHistoryResults(getHistory())

    }, [])


    return (
        <View>
          {historyResults.map((record) => (
           <HistoryCard
            pain={record.pain}
            date={record.date}
            description={record.description} 
           >
           </HistoryCard>
          ))}
        </View>
      )
}




