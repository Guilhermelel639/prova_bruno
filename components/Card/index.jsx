import { View, Image, Text } from "react-native";
import styles from "./styles";

export default function Card({name}){
    return (
        <View style={styles.container}>
            <View style={styles.componentes}>
                <Image style={styles.imagem}
                    source={require('../../assets/usuario.png')}
                />
                <Text style={styles.campo_texto}>{name}</Text>
            </View>
        </View>
    )
}