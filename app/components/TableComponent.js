import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function TableComponent({data}) {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.headerCell}>Day period</Text>
        <Text style={styles.headerCell}>Count</Text>
        <Text style={styles.headerCell}>Pain Average</Text>
      </View>

      {data.map((rowData, index) => (
        <View key={index} style={styles.row}>
            <Text style={styles.cell}>{rowData.time_of_day}</Text>
            <Text style={styles.cell}>{rowData.count}</Text>
            <Text style={styles.cell}>{rowData.avg_pain.toFixed(1)}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
})

