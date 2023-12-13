import React from 'react'
import  { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import {getHistory} from "../services/OccurrencesService"

export default function HistoryRecord(){
    const [historyResults, setHistoryResults] = useState([])

    useEffect(() => {

        setHistoryResults(getHistory())

    }, [])


    return (
        <View>
          {historyResults.map((record) => (
            <>
                <Text>{record.pain}</Text>
                <Text>{record.description}</Text>
                <Text>{record.datetime}</Text>
            </>
          ))}
        </View>
      )
}




