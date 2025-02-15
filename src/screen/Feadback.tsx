import {StyleSheet, Text,SafeAreaView,TouchableOpacity,Dimensions,View,TextInput} from 'react-native'
import * as Animatable from 'react-native-animatable';


const {height , width } = Dimensions.get('window')
const Komal =() =>{
    return (
        <Animatable.View duration={2000} animation="tada"><Text>Zoom me up, Scotty</Text></Animatable.View>

    )
}
 const Kunal =() =>{
    return (
        <Text>hello Kunal</Text>
    )
}
const Feadback= ()=>{
    return (
        <SafeAreaView style={Styles.container}>
            <TextInput placeholder='enter your feadback' style={{height : 45 ,width:width-10,borderRadius:10,borderWidth :2,color:"black",fontWeight:"bold",fontSize:15,}} multiline={true}
            />
            <TouchableOpacity style={Styles.touch}>
                <Text>Sumbit</Text>
            

            </TouchableOpacity>
        <Text></Text>
        </SafeAreaView>
    )
}

// export default Feadback

export {Kunal,Komal,Feadback} 



 const Styles = StyleSheet.create({
container :{
        color : "#fff",
         backgroundColor:"#dadada",
        flex : 1,
        alignItems : "center",
        justifyContent :"center"
   },
   touch:{
    height : 45,
    width : width - 10,
    backgroundColor : "blue",
    color : "white",
    fontWeight : "bold",
    alignItems : "center",
    justifyContent : "center",
    
   }

})