import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Svg, Path } from "react-native-svg";

const Registration = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <LinearGradient
        colors={["#007bff", "#87CEEB"]}
        style={styles.gradientBackground}
      >
        <Svg height="150" width="100%" style={styles.curve}>
          <Path
            d="M0,100 Q150,50 400,100 T800,100 V150 H0 Z"
            fill="white"
          />
        </Svg>
        <View style={styles.header}>
          <Text style={styles.headerTextActive}>Sign up</Text>
          <Text style={styles.headerText}>Sign in</Text>
        </View>
      </LinearGradient>

      {/* Form Section */}
      <View style={styles.form}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Full name"
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#888"
          secureTextEntry
        />

        {/* Terms and Conditions */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.termsText}>
            Agree with <Text style={styles.link}>Terms & Conditions</Text>
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>

        {/* Already a member */}
        <TouchableOpacity>
          <Text style={styles.memberText}>I'm already a member</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  gradientBackground: {
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  curve: {
    position: "absolute",
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 18,
    color: "white",
    opacity: 0.7,
  },
  headerTextActive: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  form: {
    marginTop: -30,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "white",
    fontSize: 16,
    color:"black",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#888",
    marginRight: 10,
    borderRadius: 5,
  },
  checkboxChecked: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  termsText: {
    fontSize: 14,
    color: "#888",
  },
  link: {
    color: "#007bff",
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  signUpText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  memberText: {
    fontSize: 14,
    color: "#007bff",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
  },
});

export default Registration;
