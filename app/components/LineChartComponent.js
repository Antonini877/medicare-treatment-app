import React from 'react'
import { View,  StyleSheet } from 'react-native'
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'


export default function LineChartComponent ({ data }){
  return (
    <View>
        <View style={styles.chartView}>

        <YAxis
            data={data}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={(value) => `${value}`}
        />


        <LineChart
            style={styles.lineChart}
            data={data}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}
        >
                <Grid />
        </LineChart>

            
    </View>
    
        <XAxis
            style={styles.xAxis}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'black' }}
        />

    </View>
  )
}


const styles = StyleSheet.create({
  xAxis:{ 
    marginHorizontal: -10 ,
    paddingTop: 0,
    paddingRight:40,
    paddingLeft:70
    },
  lineChart: { 
    flex: 1,
    marginLeft: 16 
    },
  chartView: { 
    height: 200,
    flexDirection: 'row',
    paddingTop: 20,
    paddingRight:40, 
    paddingLeft:40  
},
  
})
