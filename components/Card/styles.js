import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E9EDEF',
        margin: 10,
        borderRadius: 10,
        flex:1,
    },
    inner_container: {
        margin: 10,
        flex:1,
        justifyContent: 'space-between'
    },
    image: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: Dimensions.get('window').height / 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    price: {
        color: 'gray',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    stock: {
        color: 'red',
        fontWeight: 'bold'
    }
})

export default styles;