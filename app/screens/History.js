import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import HistoryRecord from '../components/HistoryRecord'

import MenuComponent from '../components/MenuComponent'


export default function History(){
  

  return (
    <View>
        <MenuComponent></MenuComponent>

        <HistoryRecord></HistoryRecord>
    </View>
  )
}


