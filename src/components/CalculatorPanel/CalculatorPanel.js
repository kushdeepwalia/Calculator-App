import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CalculatorPanel = ({ theme, num, setNum, setRes }) => {
   const colors = {
      one: "",
      sec: ""
   }

   switch (theme) {
      default:
      case "white": colors.one = "black"; colors.sec = "#f9f9f9"; break;
      case "black": colors.one = "#2a2c38"; colors.sec = "#e6e6e6"; break;
   }
   const [openCount, setOpenCount] = useState(0);
   const [closeCount, setCloseCount] = useState(0);
   const buttonPressed = (text) => {
      if (text === "AC" || text === "Reload") {
         setNum("");
         setRes(0);
         setOpenCount(0);
         setCloseCount(0);
         console.log("All Clear");
      }
      else if (text === "=") {
         let brack = '';
         let count = 0;
         if ((num[num.length - 1] === "+" || num[num.length - 1] === "-" || num[num.length - 1] === "/" || num[num.length - 1] === "*" || num[num.length - 1] === "%")) {
            console.log(num[num.length - 1])
         }
         else {
            if (openCount !== closeCount) {
               count = openCount - closeCount;
               console.log(count);
               for (let i = 0; i < count; i++) {
                  brack += ")"
                  setCloseCount(closeCount + 1);
               }
               console.log(brack);
               setNum(num + brack);
               setRes(parseFloat(eval(num + brack)).toFixed(5));
               console.log(num + brack, "=", parseFloat(eval(num + brack)).toFixed(5));
            }
            else {
               setRes(parseFloat(eval(num)).toFixed(5));
               console.log(num, "=", parseFloat(eval(num)).toFixed(5));
            }
         }
      }
      else if (num === "" && (text === "+" || text === "-" || text === "/" || text === "X" || text === "%")) {
         setNum("0" + text);
         console.log("0" + text);
      }
      else if (text === "X") {
         setNum(num + "*");
         console.log(num + "*");
      }
      else if (text === "(") {
         setNum(num + text);
         setOpenCount(openCount + 1);
      }
      else if (text === ")") {
         setNum(num + text);
         setCloseCount(closeCount + 1);
      }
      else {
         setNum(num + text);
      }
   }

   const values = [["AC", "(", ")", "/"], ["7", "8", "9", "X"], ["4", "5", "6", "-"], ["1", "2", "3", "+"], [".", "0", "%", "="]]

   const rows = values.map((val) => {
      return <View style={{ ...styles.commonStyle }} key={val[0]}>
         {
            val.map((e) => {
               let color = theme === "white" ? "black" : "white"
               if (e === "AC" || e === "(" || e === ")")
                  color = "#00a784"
               else if (e === "+" || e === "-" || e === "/" || e === "X" || e === "=")
                  color = "#ed2c2c"
               return (
                  <TouchableOpacity onPress={() => { buttonPressed(e) }} key={e}>
                     <View style={{ ...styles.buttonStyle, backgroundColor: theme === "white" ? "#e5e5e5" : "#22252e" }}>
                        <Text style={{ ...styles.textStyle, color: color }}>{e}</Text>
                     </View>
                  </TouchableOpacity>
               )
            })
         }
      </View>
   })

   return (
      <View style={{ ...styles.containerStyle, backgroundColor: theme === "white" ? colors.sec : colors.one }}>
         {rows}
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
