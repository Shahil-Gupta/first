import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text,View } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import Registration from "./src/screen/registration";
import Home from './src/screen/Home'
import Secound from './src/screen/SecoundPage'
import { Feadback } from "./src/screen/Feadback";
import FigmaA from "./src/screen/FigmaA";
import First from "./src/screen/FirstPage";
import Liner from "./src/screen/linerGradien";

const App=()=>{
  return(
     <SafeAreaView style={{flex:1,backgroundColor:"#f5f5f5"}}>
      <Liner />
    </SafeAreaView>
    
  )
}

export default App