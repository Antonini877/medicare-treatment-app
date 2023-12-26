import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import HistoryRecord from '../components/occurrences_history/HistoryRecord'

import MenuComponent from '../components/menu/MenuComponent'


export default function History({navigation}){
  

  return (
    <View style={{flex :1}}>
        <MenuComponent></MenuComponent>

        <HistoryRecord
          navigation={navigation}
        ></HistoryRecord>
    </View>
  )
}



