import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const {height , width} = Dimensions.get("window")

const Secound = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.box}>
                <Text style={Styles.text} >How you wanna{'\n'}    be greeted?</Text>
                <View style={Styles.outcontainer}>
                    <View>
                        <Text style={{marginBottom:20}}>Select if your want{'\n'} to provide serivice</Text>
                        <TouchableOpacity style={Styles.space}>
                            <Text style={Styles.btn1}>User</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "300", }}>  warm welcome</Text>
                    </View>
                    <View>
                        <Text style={{marginBottom:20}}>select if Your want{'\n'} to provide service</Text>
                        <TouchableOpacity style={Styles.space}>
                            <Text style={Styles.btn1}> Makeup{'\n'}   Artist</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "300", }}>Welcome to Our{'\n'}          team </Text>
                    </View>
                    
                </View>
                <Text style={Styles.down} >Thank you for choosing us.We have inneciative to make a</Text>
                <Text style={Styles.down}>good envirenment for the society with respect of money and</Text>
                <Text style={Styles.down}>good quality.</Text>
                <TouchableOpacity style={Styles.sumbit}>
                    <Text style={{fontSize:18,fontWeight:"300",color:"white"}}>Next</Text>


                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
// export {First}
export default Secound


const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "white",
        flex: 1,


    },
    box: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",

    },
    outcontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"70%",
        marginBottom:"15%"

    },
    text: {
        color: "red",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom : 90,

    },
    space: {
        height: 120,
        width: 120,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        borderColor: "red",

    },
    btn1: {
        fontSize: 25,
        color: "red",

    },
    down:{
        color:"#555",
        
        width : width-20,
        textAlign:"center",
       
    },
    sumbit:{
        height : 45,
        width: width-30,
        backgroundColor:"red",
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,

    }

})
