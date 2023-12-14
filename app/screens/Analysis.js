import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import MenuComponent from '../components/MenuComponent'
import LineChartComponent from '../components/LineChartComponent'


export default function History(){

  return (
    <View>
    <MenuComponent></MenuComponent>
    <LineChartComponent data={[3,2,5,1,4,3]}></LineChartComponent>
    </View>

  )
}



