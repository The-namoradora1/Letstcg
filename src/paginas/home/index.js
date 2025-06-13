import {View} from "react-native";
import styles from '../../../style.js';
import  Cabecalho from '../../componentes/cabecalho/index.js'
import Pesquisa from '../../componentes/pesquiza/index.js';
import Cartaz from '../../componentes/emcarta/index.js';
import Listaplana from '../../componentes/lista/index.js';
import DATA from "../../../produtos.js";
import { FlatList } from "react-native";
import Carousel from "../../componentes/carrossel/estilo.js";




export default function Home() {
    return (<View style={styles.container}>
      
       
       <Cabecalho></Cabecalho>

<Pesquisa></Pesquisa>

 <Cartaz></Cartaz>
<Carousel></Carousel>


<FlatList
            data={DATA}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              
                <Listaplana titulo ={ item.nome} nota = {item.nota} imagem = {item.image} descricao = {item.descricao} categoria = {item.categoria} duracao = {item.duracao}> </Listaplana>
            )}
        />

    </View>)


}

