import { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('window');

const User = () => {
    const [colors, setcolors] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text1}>Gender</Text>
            </View>
            <TouchableOpacity onPress={() =>
                setcolors("Male")}>
                <View style={[styles.touch, colors === "Male" && { borderRadius: "pick", backgroundColor: "yello" }]}>
                    <Text style={[styles.text2, colors === "Male" && { color: "pink" }]}>Male</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
                setcolors("Female")}>
                <View style={[styles.touch, colors === ('Female') && { borderRadius: "pick", backgroundColor: "yello" }]}>
                    <Text style={[styles.text2, colors === "Female" && { color: "yello" }]}>Female</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView >
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
       
    },
    text1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
    },
    touch: {
        height: 45,
        width: width - 10,
    },
    text2: {
        fontSize: 18,
        fontWeight: "700",
    }
})


export default User