import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { Icon } from 'react-native-elements'
import styles from "./styles";

export default function Cabecalho(){
    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
                    source={require('../../assets/imagem.png')}
                />
            <View style={styles.componentes}>
                
                <TextInput
                    style={styles.campo_pesquisa}
                    placeholder="Procure algo..."
                />
                <TouchableOpacity style={styles.botao_pesquisa}>
                    <Icon 
                        name="search"
                        type="material"
                        color={'#ffff'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}