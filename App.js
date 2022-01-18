import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CalculatorScreen from "./src/screens/CalculatorScreen";

const navigator = createStackNavigator({
  Calculator: CalculatorScreen
}, {
  initialRouteName: 'Calculator',
  defaultNavigationOptions: {
    title: "Calculator",
    headerShown: false
  }
})

export default createAppContainer(navigator)
