import React from "react";
import {Dimensions, TouchableOpacity,Text,TextInput,Image,ImageBackground, View, Button,SafeAreaView, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const{height,width}=Dimensions.get("window")

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={Styles.container}>
         <KeyboardAwareScrollView>
         <ImageBackground style={{ flex: 1 }}
           imageStyle={{ flex: 1 }}
           source={{ uri: "https://i.pinimg.com/236x/da/57/72/da57724c332bb06762444b5895ac364f.jpg" }} >
           <View style={Styles.main}>
             <Image style={{ resizeMode: "contain", height: 200, width: 200, alignSelf: "center", marginBottom: 10 }}
               source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pgoHuvuMGt_8ovZZra-dq4ZuQCHA3XsBRw&s" }} />
             <Text style={Styles.login}>LOGIN</Text>
             <TextInput placeholder="username" style={Styles.username}></TextInput>
             <TextInput placeholder="password" secureTextEntry={true} style={Styles.username}></TextInput>
             <TouchableOpacity style={Styles.btn}>
               <Text style={Styles.log}>LOGIN</Text>
             </TouchableOpacity>
             <TouchableOpacity style={Styles.down}>
               <Text style={Styles.forget}>forget password</Text>
               <Text style={Styles.create}>create account</Text>
               </TouchableOpacity> 
           </View>
           <View>
           <View style={Styles.buttonContainer}>
     <Button title="Click Me" onPress={() => Alert.alert("Button Pressed")} />
   </View>
   
           </View>
         </ImageBackground>
         </KeyboardAwareScrollView>
       </SafeAreaView>
   
     )
   }
   
   
   const Styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: "#dadada",
       alignItems: "center",
       justifyContent: "center",
     },
     text: {
       color: "black",
     },
     username: {
       height: 50,
       //width : 50,
       borderRadius: 10,
       color: "black",
       backgroundColor: "white",
       padding: 10,
       marginBottom: 10,
       width: width-10,
   
     },
     login: {
       fontSize: 25,
       fontWeight: "bold",
       marginBottom: 10,
     },
     forget: {
       fontSize: 18,
       color: "blue",
   
     },
     create: {
       color: "blue",
       fontSize: 18,
   
     },
     down: {
       alignItems: "center",
       justifyContent: "center"
     },
     btn: {
       height: 40,
       alignItems: "center",
       justifyContent: "center",
       marginTop: 10,
       marginBottom: 10,
       backgroundColor: "blue",
       borderRadius: 10,
       width : width - 10,
   
     },
     log: {
       color: "#fff",
       fontSize: 20,
       fontWeight : "bold",
   
     },
     main: {
       alignItems: "center",
       justifyContent: "center",
      // backgroundColor: "#555",
       padding: 10,
      // borderRadius: 10,
      width:width,
      height:height,
     },
     buttonContainer: {
       width: "90%", 
       borderRadius: 10, 
       //overflow: "hidden", // Ensures rounded corners are applied
       marginTop: 10,
       backgroundColor:"white",
     }
   })

const Login = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Login Page</Text>
      <Button title="Go to Home" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
};

export default App;
