import React from 'react'
import { View,  StyleSheet, Dimensions  } from 'react-native'
import { LineChart } from 'react-native-chart-kit'


export default function LineChartComponent({x, y, chartName, decimalPlaces}){

  let data = {
    labels: x,
    datasets: [
        {
            data: y
        }
    ],
    legend: [chartName]
  }

  
  return (
    <View >

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
              decimalPlaces: decimalPlaces
            }}
            style= {{
              borderRadius: 20,
            }}
          />

    </View>
  )
}

