import {Text,View,SafeAreaView,Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
//import { Image } from 'react-native-animatable'

const{height,width}=Dimensions.get("window")

const FigmaA=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <Image style={{height:350,width:350,resizeMode:"contain",marginBottom:20}}
            source={{uri:"https://cdn.pixabay.com/photo/2023/01/29/10/09/street-7752940_640.jpg"}} />
            <View style={styles.box}>
            <Text style={styles.textout}>Let's meeting new{'\n'}people around you</Text> 
            </View>
             <TouchableOpacity style={styles.click}>
                <View style={styles.phone}>
                    <Image style={{height:20,width:20,resizeMode:"contain"}}
                    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8Y7sqJsBAlmZtSr-zc6bEncLy13W4cM7ew&s"}}/>
                <Text style={[styles.textin,{marginLeft:20,color:"white"}]} >Loing with your phone</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pick}>
                <View style={styles.google}>
                    <Image style={{height:20,width:20,resizeMode:"contain"}}
                    source={{uri:"https://img.icons8.com/?size=30&id=60984&format=png"}} />
                <Text style={[styles.textin,{ color:"black",marginLeft:20,}]}>Login with Google</Text>
                </View>
            </TouchableOpacity>
            <Text>Dont't have an account?<Text style={{color:"blue"}}>  Sign up</Text></Text>
            
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",

    },
    click:{
        height:45,
        width:width-100,
        borderRadius:20,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center",
    },
    phone:{
        flexDirection:"row",
        marginLeft:20,
    },
    box:{
        marginTop:1,
        marginBottom:20,
        alignItems:"center",
    },
    textin:{
        fontSize:17,
        fontWeight:"bold",
        color:"white",

    },
    textout:{
        fontSize:25,
        fontWeight:"bold",
    },
    pick:{
        height:45,
        margin:14,
        width:width-100,
        backgroundColor:"#dadada",
        alignItems:"center",
        borderRadius:20,
        justifyContent:"center",
    },
    google:{
        flexDirection:"row",
        alignItems:"center",
    }

})

export default FigmaA