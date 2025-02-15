import { StyleSheet, Text, Dimensions, SafeAreaView, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get('window');

const Third = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <ImageBackground style={Styles.image}

                source={{ uri: "https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_1280.jpg" }}>
                <View style={Styles.outerBox}>
                    <Text style={Styles.text}>Login</Text>
                    <View style={Styles.box}>
                        <TextInput placeholder='Gmail/phone number' style={Styles.textin}></TextInput>
                        <TextInput placeholder='password' secureTextEntry={true} style={Styles.textin}></TextInput>
                        <TouchableOpacity style={Styles.login}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Third
const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#dadada",
        flex: 1,




    },
    image: {
        flex: 1,

    },
    textin: {
        height: 45,
        width: width - 10,
        backgroundColor: "#0F084B",
        color: "white",
        fontWeight: "400",
        fontSize: 18,
        borderRadius: 10,

        marginTop: 10,



    },
    outerBox: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
    //     flex: 1,

    
     },
    login: {
        height: 45,
        width: width - 10,
    },
    text:{
        fontWeight:"bold",
        fontSize:35,
    }
})