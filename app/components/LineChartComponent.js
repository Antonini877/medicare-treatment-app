import React from 'react'
import { View,  StyleSheet, Dimensions  } from 'react-native'
import { LineChart } from 'react-native-chart-kit'


export default function LineChartComponent({Responsedata}){

  let data = {
    labels: Responsedata.map((item)=>item.date),
    datasets: [
        {
            data: Responsedata.map((item)=>item.count)
        }
    ],
    legend: ["Occurrences quantity per day"]
  }

  
  return (
    <View style={styles.cardContainer}>

          <LineChart
            data={data}
            width={Dimensions.get('window').width-30}
            height={200}
            yAxisLabel={''}
            withInnerLines={false}
            withOuterLines={false}
            chartConfig={{
              backgroundGradientFrom: 'white',
              backgroundGradientTo: 'grey',
              color: (opacity = 2) => `rgba(0, 0, 0, ${opacity})`,
              
            }}
            style= {{
              borderRadius: 20,
            }}
          />

    </View>
  )
}

const styles = StyleSheet.create({
 
  cardContainer: {
    flex: 1,
   
  alignItems: 'center',
  justifyContent: 'center',
   marginTop:40
  }
})
