import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const Five = () => {
  const [selectedGender, setSelectedGender] = useState<"Male" | "Female" | null>(null);

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.text1}>Gender</Text>
      <TouchableOpacity onPress={() => setSelectedGender("Male")}>
        <View
          style={[
            Styles.box,
            selectedGender === "Male" && {
              borderColor: "green",
              backgroundColor: "lightgreen",
            },
          ]}
        >
          <Text
            style={[
              Styles.text2,
              selectedGender === "Male" && { color: "green" },
            ]}
          >
            Male
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedGender("Female")}>
        <View
          style={[
            Styles.box,
            selectedGender === "Female" && {
              borderColor: "pink",
              backgroundColor: "lightpink",
            },
          ]}
        >
          <Text
            style={[
              Styles.text2,
              selectedGender === "Female" && { color: "pink" },
            ]}
          >
            Female
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    padding: 30,
    margin:45,
    marginBottom:50,
  },
  text1: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  box: {
    width: width - 20, // Width dynamically set as screen width minus 10
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "blue", // Default border color
    marginVertical: 10,
    backgroundColor: "white", // Default background color
  },
  text2: {
    color: "blue", // Default text color
    fontSize: 20,
  },
});

export default Five;
