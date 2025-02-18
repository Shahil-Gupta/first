import {StyleSheet, Text, View} from 'react-native'
import Fave from './src/screen/FaveOne'
import { Kunal } from './src/screen/Feadback'


const App=()=>{
  return(
    <View style={styles.container}>
      <Fave />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#dadada",
  }
 })

export default App