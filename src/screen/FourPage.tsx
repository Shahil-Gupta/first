import {Text,View,Image,SafeAreaView,Dimensions, StyleSheet} from 'react-native'


const {width ,height } =Dimensions.get("window")
const Four =()=>{
    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.text}>Tutorial</Text>
            <View style={Styles.outterBox}>
                <Text style={Styles.text1}>Schedule and time</Text>
                <Image style={Styles.img }
                source={{uri:"data:image/png;base64,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"}} />
            <Text style={Styles.text2}>wait for conformation </Text>
            <Text style={Styles.text3}>you will found otp in service Deatils page<Text style={Styles.text31}>{'\n'}send the Oto to Artist so that they mark their work complete</Text></Text>
           <Text style={Styles.text4}>Always keep in touch with you Artist to get Smooth service</Text>
            </View>
        </SafeAreaView>
    )
}

const Styles=StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:"white",

    },
    outterBox:{
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontWeight:"bold",
        fontSize:20,
        color:"red",
        paddingLeft: 60,
    },
    text1:{
        fontWeight:"bold",
        color:"red",
        fontSize:27,
        marginTop: 60,
        marginBottom:60,
    },
    img:{
        backgroundColor:"black",
        height:250,
        width:250,
        borderRadius:125,
        resizeMode: "contain",
    },
    text2:{
        color:"red",
        fontWeight:"bold",
        fontSize:25,
        marginTop:60,
        marginBottom:20,

    },
    text3:{
       // width:width-30,
        textAlign:"center",
        fontWeight: "regular" ,
        marginTop:20,
        fontSize:12,
        marginBottom:45,

    },
    text31:{
        width: width -20,
        fontSize:12,
    },
    text4:{
        fontWeight:"500",
        fontSize:13,
    }
})

export default Four