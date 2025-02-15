import { Text, SafeAreaView, View, StyleSheet } from 'react-native'
import { Image } from 'react-native-animatable'



const Seven = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.box1}>
                <Text style={Styles.text1}>Find your makeup Buddy</Text>
            </View>
            <View>
                <Image style={{ height: 200, resizeMode: "repeat", width: 200, marginTop: "10%" }}
                    source={{ uri: "https://i.ytimg.com/vi/zyiHZ4vDmPE/maxresdefault.jpg" }} />
            </View>
            <View style={Styles.box2}>
                <Text style={Styles.text2}>Check their makeup gallery and</Text>
                <Text style={Styles.text2}>stories of previous work</Text>
            </View>
            <View style={Styles.box3}>
                <Text>Choose services wisely according to your requirement</Text>
                <Text>Choose a data of service and wait for conformation</Text>
            </View>
            <Text style={Styles.text3}>Get Artist in your home to provide service</Text>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
    },
    box1: {
        marginTop: "30%",
    },
    text1: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",
    },
    box2: {
        marginTop: "18%",
        alignItems: "center",
    },
    text2: {
        color: "red",
        fontSize: 20,
        fontWeight: "600",
    },
    box3: {
        alignItems: "center",
        padding: 30,
        marginBottom: 15,
    },
    text3: {
        fontWeight: "500",
        fontSize: 15,
    }
})
export default Seven