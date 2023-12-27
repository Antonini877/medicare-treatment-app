import Login from "./screens/Login"
import SuccessCard from "./screens/SuccessCard"
import FailCard from "./screens/FailCard"
import Register from './screens/Register'
import History from './screens/History'
import Analysis from './screens/Analysis'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Analysis" component={Analysis} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SuccessCard" component={SuccessCard} />
          <Stack.Screen name="FailCard" component={FailCard} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}


