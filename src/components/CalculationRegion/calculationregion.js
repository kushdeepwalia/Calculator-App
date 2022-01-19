import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Calculationregion = ({ color, res, num }) => {

   return (
      <View style={styles.containerStyle}>
         <Text style={{ ...styles.firstValues, color: color }}>{num}</Text>
         {res !== null ? <Text style={{ ...styles.secondValues, color: color }}>{res}</Text> : null}
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
