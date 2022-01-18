import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CalculatorPanel = ({ theme }) => {
   const colors = {
      one: "",
      sec: ""
   }

   switch (theme) {
      default:
      case "white": colors.one = "black"; colors.sec = "#f9f9f9"; break;
      case "black": colors.one = "#2a2c38"; colors.sec = "#e6e6e6"; break;
   }

   return (
      <View style={{ ...styles.containerStyle, backgroundColor: theme === "white" ? colors.sec : colors.one }}>
         <View style={{ ...styles.commonStyle }}>
            <TouchableOpacity onPress={() => {
               console.log("All clear");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: "#00a784" }}>AC</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("+/-");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <MaterialCommunityIcons name="plus-minus-variant" size={24} color="#00a784" style={{ ...styles.textStyle }} />
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("%");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: "#00a784" }}>%</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("/");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: "#ed2c2c" }}>/</Text>
               </View>
            </TouchableOpacity>
         </View>
         <View style={{ ...styles.commonStyle }}>
            <TouchableOpacity onPress={() => {
               console.log("7");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>7</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("8");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>8</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("9");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>9</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("X");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: "#ed2c2c" }}>X</Text>
               </View>
            </TouchableOpacity>
         </View>
         <View style={{ ...styles.commonStyle }}>
            <TouchableOpacity onPress={() => {
               console.log("4");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>4</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("5");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>5</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("6");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>6</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("-");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: "#ed2c2c" }}>-</Text>
               </View>
            </TouchableOpacity>
         </View>
         <View style={{ ...styles.commonStyle }}>
            <TouchableOpacity onPress={() => {
               console.log("1");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>1</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("2");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>2</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("3");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>3</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("+");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: "#ed2c2c" }}>+</Text>
               </View>
            </TouchableOpacity>
         </View>
         <View style={{ ...styles.commonStyle }}>
            <TouchableOpacity onPress={() => {
               console.log("reload");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <MaterialCommunityIcons name="reload" size={24} color="black" style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }} />
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("0");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>0</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log(".");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: theme === "white" ? "black" : "white" }}>.</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               console.log("=");
            }}>
               <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                  <Text style={{ ...styles.textStyle, color: "#ed2c2c" }}>=</Text>
               </View>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default CalculatorPanel

const styles = StyleSheet.create({
   commonStyle: {
      width: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "row",
      marginVertical: 10,
   },
   containerStyle: {
      justifyContent: "space-between",
      paddingVertical: 10,
   },
   buttonStyle: {
      width: 70,
      height: 70,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
   },
   textStyle: {
      fontSize: 35
   }
})
