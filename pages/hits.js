import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native'

export default OptionList = () => {


  const data = [
    {
      id: 1,
      name: 'Péricles',
      image: 'https://noticiapreta.com.br/wp-content/uploads/2023/02/Pericles-e1675903074356.jpg',
      count: 824.723,
    },
    {
      id: 2,
      name: 'Deep Purple',
      image: 'https://conteudo.imguol.com.br/blogs/107/files/2015/08/DeepPurpleMk2_featured_photo_gallery.jpg',
      count: 524.723,
    },
    {
      id: 3,
      name: 'Calcinha Preta',
      image: 'https://akamai.sscdn.co/uploadfile/letras/fotos/3/0/0/4/3004f53f48849a584d318296a714ed8f.jpg',
      count: 324.723,
    },
  ]

    const clickEventListener = (item) => {
      Alert.alert(`O vencedor da semana foi o ${item.name}!`)
    }

  const [options, setOptions] = useState(data)

  return (
    
       <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>TOP 3 da Semana</Text>
        
      </View>
      
      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        data={options}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => clickEventListener(item)}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>Minutos ouvidos</Text>
                <Text style={styles.count}>{item.count}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ebf0f7',
  },
    logo: {
    width: 150,
    height: 20,
    margin: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
    marginLeft: 100,
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ebf0f7',
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#3399ff',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#6666ff',
  },
})