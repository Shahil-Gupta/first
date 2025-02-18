import{Dimensions, Modal, SafeAreaView, StyleSheet, Text,TouchableOpacity,View} from "react-native"

const{height,width}=Dimensions.get("window")

const Fave=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.upperBox}>
                <Text style={styles.upperTextUp}>Success</Text>
                <Text style={styles.upperTextDown}>Service Deleted Successfully</Text>
            </View>
            <Text style={styles.textMid}>Current no one have upload there Branding images</Text>
      <TouchableOpacity style={styles.touchup}>
        <Text style={styles.textService}>Add your service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchright}>
        <Text style={styles.textup}>Facial & Clean up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchdown}>
        <Text style={styles.textdown}>Makeup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchleft}>
        <Text style={styles.textright}>Bridal Makeup</Text>
      </TouchableOpacity>
      {/* <Modal visible={modalVisible} transparent animationType="fade"> */}
      <View style={styles.outView}>
        <Text style={styles.text1}>Bridal Makeup</Text>
        <Text style={styles.text2}>Dewy MAkeup</Text>
        <Text style={styles.text3}>sahi hai</Text>
        <Text style={styles.text4}>Prime</Text>
        <TouchableOpacity style={styles.down}>
            <Text style={styles.text5}>View service image</Text>
        </TouchableOpacity>
      </View>
      {/* </Modal> */}
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    upperBox:{
    width:width,
    height:50,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",

    },
    upperTextUp:{
        color:"white",
        fontSize:17,
        fontWeight:"bold",

    },
    upperTextDown:{
        fontSize:14,
        marginEnd:10,
        marginBottom:5,
    },
    textMid:{
        color:"green",
        marginTop:20,
        textAlign:"center",
    },
    touchup:{
        height:45,
        width:width-20,
        backgroundColor:"#bd1ea5",
        alignItems:'center',
        justifyContent:"center",
        marginHorizontal:10,
        borderRadius:10,
        marginTop:15,
    },
    textService:{
        fontWeight:"bold",
        fontSize:18,
        color:"white",
    },
    touchright:{
        marginTop:50,
        height:45,
        padding:9,
        width:width-20,
        backgroundColor:"#bd1ea5",
        justifyContent:"center",
        marginHorizontal:10,
        borderRadius:10,
    },
    textup:{
        fontWeight:"bold",
        fontSize:18,
        color:"white",  
    },
    touchdown:{
        marginTop:15,
        height:45,
        padding:9,
        width:width-20,
        backgroundColor:"#bd1ea5",
        justifyContent:"center",
        marginHorizontal:10,
        borderRadius:10,
    },
    textdown:{
        fontWeight:"bold",
        fontSize:18,
        color:"white",
    },
    touchleft:{
        marginTop:15,
        height:45,
        padding:9,
        width:width-20,
        backgroundColor:"#bd1ea5",
        justifyContent:"center",
        marginHorizontal:10,
        borderRadius:10,
    },
    textright:{
        fontWeight:"bold",
        fontSize:18,
        color:"white",
    },
    outView:{
        margin:50,
        backgroundColor:"#dadada",
        height:200,
        width:width-35,
        borderRadius:10,
        marginHorizontal:17.5,
    },
    text1:{
        fontSize:19,
        fontWeight:"bold",
        color:"#bd1ea5",
        marginTop:8,
        paddingRight:10,
    },
    text2:{
        fontSize:16,
        fontWeight:"bold",
        marginTop:8,
    },
    text3:{
        fontSize:14,
        fontWeight:"800",
        marginTop:8,
    },
    text4:{
        fontSize:17,
        fontWeight:"bold",
        marginTop:8,
        color:"#bd1ea5",
    },
    down:{
        backgroundColor:"#bd1ea5",
        height:35,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        width:width-120,
        marginHorizontal:25,
        marginTop:30,
        alignSelf:"center",
       // marginTop:"auto",
    },
    text5:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
    }


})

export default Fave