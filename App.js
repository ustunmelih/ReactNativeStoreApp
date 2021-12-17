import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TextInput } from 'react-native'
import Card from './components/Card';
import patikaJson from './components/Json/patika.json';

export default function App() {

  const renderNews = ({ item }) => <Card news={item} />;
  const numColumns = 2;
  const [data,setData] = useState([])
  const [text, onChangeText] = useState("");

  

  useEffect(() => {
    setData(patikaJson);
  },[])

  useEffect(() => {
    if (text != "") {
      setData(
        data.filter((item) => {
          if (item.title.includes(text)) {
            return item;
          }
        })
      )
    } else {
      setData(patikaJson);
    }
  },[text])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>PATIKASTORE</Text>
      <FlatList
        ListHeaderComponent={
          <TextInput
            style={styles.input}
            placeholder="Ara..."
            onChangeText={onChangeText}
            value={text}
          />
        }
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderNews}
        numColumns={numColumns}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTxt: {
    color: '#780072',
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#E9EDEF',
    borderColor: '#E9EDEF',
    borderRadius: 10,
  },
})
