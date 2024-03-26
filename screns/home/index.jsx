import { TouchableOpacity, View, TextInput } from "react-native"
import { estilo } from "./style"


export default function Home(){
  
    return(
        <View style={estilo.tela}>
          
            <View style={estilo.form}>
                <TextInput
                style={estilo.input_text}/>                
                
               
            </View>
          
            </View>

            
    )
}