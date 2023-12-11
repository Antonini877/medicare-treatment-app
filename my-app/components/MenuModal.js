import React from 'react'
import  { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function MenuModal(){



  return (
    
    
        <Tabs>
          <Tabs.Screen
            // Name of the route to hide.
            name="index"
            options={{
              // This tab will no longer show up in the tab bar.
              href: null,
            }}
          />
        </Tabs>
      )
  }

 
const styles = StyleSheet.create({ 
  container:{ 
    flex:1
  }
})

