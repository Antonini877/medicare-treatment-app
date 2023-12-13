import { StatusBar } from 'expo-status-bar'
import Login from "./screens/Login"
import Home from "./screens/Home"
import Register from './screens/Register'
import History from './screens/History'


import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Register" component={Register} />

        </Stack.Navigator>
      </NavigationContainer>
    )
}


