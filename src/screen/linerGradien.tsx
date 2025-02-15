import { Text, SafeAreaView,View, StyleSheet,TextInput, TouchableOpacity, Dimensions } from 'react-native'
//import { TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const{height,width}=Dimensions.get("window")

const Liner = () => {
    return (
        <LinearGradient colors={["#fff", "#555"]}
            style={Styles.liner}>
                <View style={Styles.box}>
                <LinearGradient colors={["#888","#000"]} style={Styles.lear}>
          <TextInput style={Styles.input}/>
            <TouchableOpacity style={Styles.button}>

            </TouchableOpacity>
                </LinearGradient>
                </View>

        </LinearGradient>
    )
}

const Styles = StyleSheet.create({
    liner: {
        flex: 1,
        justifyContent:"center"
    },
    lear:{
        height:"20%",
        width:40,
    },
    input:{
        height:45,
        width:width-10,
        backgroundColor:"white"
    },
    button:{
        backgroundColor:"blue",
        height:45,
        width:width-90
    },
    box:{
        //alignItems:"center",
        justifyContent:"center",
    }
})

export default Liner