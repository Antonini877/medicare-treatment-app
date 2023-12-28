import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import MenuComponent from '../components/menu/MenuComponent'
import LineChartComponent from '../components/charts/LineChartComponent'
import SecureStoreService from '../services/SecureStoreService'
import { useFocusEffect } from '@react-navigation/native'
import {getHistoryGrouped, getHistoryGroupedDayPeriod} from "../services/OccurrencesService"
import TableComponent from '../components/TableComponent'

export default function Analysis({navigation}){
  const [historyGroupedResults, setHistoryGroupedResults] = useState([])
  const [historyGroupedDayPeriodResults, setHistoryGroupedDayPeriodResults] = useState([])


  const fetchData = async () => {
    const apiKey = await SecureStoreService.get('medicare-api-key')

    if(!apiKey)
      navigation.navigate("Login")

    const [historyResponse, historyResponseDayPeriod] = await Promise.all([
      getHistoryGrouped(apiKey),
      getHistoryGroupedDayPeriod(apiKey)

    ])
    
    if(historyResponse && historyResponseDayPeriod){
      setHistoryGroupedResults(historyResponse)
      setHistoryGroupedDayPeriodResults(historyResponseDayPeriod)

    }else
      navigation.navigate('FailCard')

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
    <View style={{flex:1}}>
    <MenuComponent></MenuComponent>
    <ScrollView>

    {historyGroupedDayPeriodResults.length > 0 ? (
     

     <View>
          <TableComponent data={historyGroupedDayPeriodResults}/>
     </View>
   ) : (
      <></>
   )}

    {historyGroupedResults.length > 0 ? (
        // Display the LineChartComponent once data is available
        <View>
          <View style={styles.cardContainerChart1}>
            <LineChartComponent 
                x={historyGroupedResults.map((item)=>item.date)} 
                y={historyGroupedResults.map((item)=>item.count)}
                chartName={"Occurrences quantity per day"}
                decimalPlaces={0}
              />
          </View>

          <View style={styles.cardContainerChart2}>

            <LineChartComponent 
              x={historyGroupedResults.map((item)=>item.date)} 
              y={historyGroupedResults.map((item)=>item.avg_pain)}
              chartName={"Pain average per day"}
              decimalPlaces={1}
            />
          </View>
        </View>
      ) : (
         // Display a loading indicator while data is being fetched
         <ActivityIndicator size="large" color="#0000ff" />
      )}


 
      </ScrollView>
    
    </View>

  )
}


const styles = StyleSheet.create({
 
  cardContainerChart1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40
  }, 
  cardContainerChart2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
    marginBottom:15
  },
  
})
