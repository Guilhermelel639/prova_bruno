
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#B7B5E4',
        padding: 0,
        marginBottom: 25,
    },
    componentes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        height: 100,
        width: '110%',
    },
    campo_pesquisa:{
        flex: 1,
        padding: 15,
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#CFCCD6',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    botao_pesquisa:{
        width: 56,
        height: 56,
        backgroundColor: '#847979',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icone_lupa:{
        width: 30,
        height: 30,
    }
})

export default styles