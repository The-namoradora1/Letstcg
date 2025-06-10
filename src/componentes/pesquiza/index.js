import { Text, TextInput, View} from "react-native-web";
import styles from "./style.js";

export default function Pesquisa(){

  return (<View style={styles.viewSearch}>
    <TextInput 
      style={styles.inputSearch} 
      placeholder="Digite o produto desejado"
      placeholderTextColor="#999"
    />
  </View>)


}