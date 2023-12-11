import React from 'react'
import  { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MenuModal from './MenuModal'

export default function MenuComponent(){
  const [showModal, setShowModal] = useState(false)


  const navigation = useNavigation()



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={styles.icon}>☰</Text>
      </TouchableOpacity>

      <Modal
        visible={showModal}
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >

        <MenuModal></MenuModal>


      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  icon: {
    fontSize: 24,
  },
})

