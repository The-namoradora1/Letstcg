import {View} from "react-native";
import styles from '../../../style.js';
import  Cabecalho from '../../componentes/cabecalho/index.js'
import Pesquisa from '../../componentes/pesquiza/index.js';
import Cartaz from '../../componentes/emcarta/index.js';
import Listaplana from '../../componentes/lista/index.js';
import DATA from "../../../produtos.js";
import { FlatList } from "react-native";
import Carrossel from "../../componentes/carrossel/estilo.js";




export default function Home() {
    return (<View style={styles.container}>
      
       
       <Cabecalho></Cabecalho>

<Pesquisa></Pesquisa>

 <Cartaz></Cartaz>
<Carrossel></Carrossel>



<FlatList
    data={DATA}
    numColumns={2}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
        <Listaplana 
            titulo={item.nome} 
            estoque={item.estoque}  
            imagem={item.image} 
            descricao={item.descricao} 
            localEnvio={item.localEnvio}
            categoria={item.categoria} 
            preco={item.preco}  
        />
    )}
/>

    </View>)


}

