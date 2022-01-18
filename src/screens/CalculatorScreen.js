import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import Calculationregion from '../components/CalculationRegion/calculationregion'
import CalculatorPanel from '../components/CalculatorPanel/CalculatorPanel'
import Toggler from '../components/Toggler/Toggler'

const CalculatorScreen = () => {
   const [color, setColor] = useState("black");
   const [result, setResult] = useState(0);

   const backColor = color === "white" ? "#f9f9f9" : "#2a2c38";
   const screenColor = color === "white" ? "#ffffff" : "#22252e";
   const fontColor = color === "white" ? "black" : "white";

   const numbers = {
      num1: 0,
      num2: 0,
      operate: ""
   }

   function calculation(ch) {
      switch (ch) {
         default: setResult(0); break;
      }
   }

   return (
      <SafeAreaProvider>
         <SafeAreaView style={styles.containerStyle(screenColor)}>
            <View style={styles.toggleCenter(backColor)}>
               <Toggler theme={color} setTheme={setColor} />
            </View>
            <View style={styles.panelregionStyle}>
               <View style={styles.regionStyle}>
                  <Calculationregion color={fontColor} numbers result />
               </View>
               <View style={styles.panelStyle}>
                  <CalculatorPanel theme={color} numbers setResult />
               </View>
            </View>
         </SafeAreaView>
      </SafeAreaProvider>
   )
}

export default CalculatorScreen

const styles = StyleSheet.create({
   containerStyle: backColor => ({
      backgroundColor: backColor,
      flex: 1
   }),
   toggleCenter: backColor => ({
      alignSelf: "center",
      marginTop: 5,
      borderRadius: 25,
      backgroundColor: backColor,
      width: 110,
   }),
   regionStyle: {
      width: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-end"
   },
   panelStyle: {
      width: "100%"
   },
   panelregionStyle: {
      position: "absolute",
      bottom: 0
   }
})
