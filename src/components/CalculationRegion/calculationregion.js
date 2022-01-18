import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Calculationregion = ({ color, result, numbers }) => {

   return (
      <View style={styles.containerStyle}>
         <Text style={{ ...styles.firstValues, color: color }}>{numbers.num1.toString() + " " + numbers.operate.toString() + " " + numbers.num2.toString()}</Text>
         {result !== null ? <Text style={{ ...styles.secondValues, color: color }}>{result}</Text> : null}
      </View>
   )
}

export default Calculationregion

const styles = StyleSheet.create({
   firstValues: {
      fontSize: 30,
      letterSpacing: 2,
      alignSelf: "flex-end",
      paddingRight: 20
   },
   secondValues: {
      letterSpacing: 2,
      fontSize: 50,
      alignSelf: "flex-end",
      paddingRight: 20,
      fontWeight: "bold"
   },
   containerStyle: {
      marginBottom: 20
   }
})
