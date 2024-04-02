import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { estilo } from "./styles"
import Card from "../../components/Card"
import Cabecalho from "../../components/Cabecalho"

export default function Home(){

    const lista = ['teste','bruno','andre',
    'maria','joao','amanda','gabriele',
    'vinicius','gabriel','vanessa','luana']


    return(
        <View style={estilo.tela}>
            <Cabecalho />
            <FlatList 
            style={estilo.lista}
                data={lista}
                keyExtractor={item => item}
                renderItem={({item}) =>(
                    <Card key={item} name={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}