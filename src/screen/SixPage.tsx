import { Text, SafeAreaView, View, Image, Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

const Six = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.box1}>
                <Text style={Styles.text1}>Book your appointment </Text>
            </View>
            <Image style={{ height: 200, width: 200, borderRadius: 100, }}
                source={{ uri: "https://cdn.pixabay.com/photo/2020/03/10/17/02/pdf-4919559_1280.png" }} />
            <View style={Styles.box2}>
                <Text style={Styles.text2}>meet up your favourite makeup</Text>
                <Text style={Styles.intertext}>Artist</Text>
            </View>
            <View style={Styles.text3}>
                <Text style={{ textAlign: "center" }}>Choose Services wisely according to your reqiremnt</Text>
                <Text style={{ textAlign: "center" }}>Choose a date of service and wait for conformatin</Text>
            </View>
            <Text style={Styles.text4}>Service At Home</Text>

        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    box1: {
        marginTop: "25%",
        marginBottom: "15%",
    },
    text1: {
        color: "red",
        fontSize: 22,
        fontWeight: "bold",
    },
    box2: {
        alignItems: "center",
        marginTop: "20%",
        justifyContent: "center",
    },
    text2: {
        color: "red",
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
    },
    intertext: {
        color: "red",
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
    },
    text3: {
        margin: "8%",
        marginBottom: 50,
    },
    text4: {
        color: "red",
        fontWeight: "400",
        fontSize: 18,
    }
})

export default Six