import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Toggler = ({ theme, setTheme }) => {
   const colors = {
      one: "",
      sec: ""
   }

   switch (theme) {
      default:
      case "white": colors.one = "black"; colors.sec = "grey"; break;
      case "black": colors.one = "grey"; colors.sec = "white"; break;
   }

   return (
      <View style={styles.containerStyle}>
         <TouchableOpacity onPress={() => {
            setTheme("white");
         }}>
            <Feather name="sun" size={24} color={colors.one} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {
            setTheme("black");
         }}>
            <Ionicons name="md-moon-outline" size={24} color={colors.sec} />
         </TouchableOpacity>
      </View>
   )
}

export default Toggler

const styles = StyleSheet.create({
   containerStyle: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 15,
      paddingHorizontal: 20
   }
})
