import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import styles from './styles';

function Card(props) {
    
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Image resizeMode="contain" style={styles.image} source={{ uri: props.news.imgURL }} />
                <Text style={styles.title}>{props.news.title}</Text>
                <Text style={styles.price}>{props.news.price}</Text>
                {props.news.inStock == false ? <Text style = {styles.stock}>STOKTA YOK</Text>: <Text></Text> }
            </View>
        </View>
    )
}


export default Card;