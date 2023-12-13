import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'



import MenuComponent from '../components/MenuComponent'


export default function History(){
  

  return (
    <View>
        <MenuComponent></MenuComponent>

        <AreaChart
                style={{ height: 200 }}
                data={[1,2,3,4,4,4,4,4,4,]}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>
    </View>
  )
}



