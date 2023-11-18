import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Button } from 'react-native';
import firebase from './firebase';
import { useNavigation } from '@react-navigation/native';

const stories = [
  {
    id: 1,
    name: 'The Weekend',
    image: 'https://lakevillesouthnews.com/wp-content/uploads/2021/03/l-intro-1612032496.jpg',
  },
  {
    id: 2,
    name: 'Falamansa',
    image: 'https://centralbme.com.br/blog/wp-content/uploads/central-brasileira-de-shows-falamansa-650x400.jpg',
  },
  {
    id: 3,
    name: 'Metallica',
    image: 'https://akamai.sscdn.co/uploadfile/letras/fotos/c/b/e/3/cbe32534b5d42220e47b16a1a9c9c0dd.jpg',
  },
]

const StoryList = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error("Erro ao sair: ", error);
      });
  };

  return (
    <View style={styles.storyList}>
      <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
      <View style={styles.logoutButton}>
        <Button title="Sair" onPress={handleLogout} />
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 10,
          marginTop: 10,
        }}
      />
      <Text style={styles.storyListText}>Novidades</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <View style={styles.storyContainer} key={story.id}>
            <Image style={styles.storyImage} source={{ uri: story.image }} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const Home = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Justin Timberlake?',
      text: 'Nova tour anunciada! e ai, bora?',
      senderType: 'user',
      avatar: 'https://cdn-icons-png.flaticon.com/512/891/891448.png?w=360',
      image: 'https://s2.glbimg.com/IUMaII9uJCh2-XS0QLZDuy3KAeY=/0x0:584x394/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_f035dd6fd91c438fa04ab718d608bbaa/internal_photos/bs/2022/D/2/XSyfnwTAOO9ys8Ii7Gog/justin-.jpg',
    },
    {
      id: 2,
      sender: 'Mundo Bita é Gigante!',
      text: "10 anos do maior sucesso já lançado pelo Mundo Bita, escute agora!",
      senderType: 'other',
      avatar: 'https://cdn-icons-png.flaticon.com/512/891/891448.png?w=360',
      image: 'https://i.ytimg.com/vi/cjONzZPJONc/maxresdefault.jpg',
    },
    {
      id: 3,
      sender: 'O maior de todos os tempos?',
      text: "confira entrevista exclusiva com Xororó",
      senderType: 'user',
      avatar: 'https://cdn-icons-png.flaticon.com/512/891/891448.png?w=360',
      image: 'https://i.uai.com.br/DJF6zo34t35BCS1ChjTLWrG2b3A=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2021/08/31/277969/20210831150914482632i.jpg',
    },
  ])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} />
          <Text style={styles.sender}>{item.sender}</Text>
        </View>
        <View style={styles.cardBody}>
        <Text style={styles.cardText}>{item.text}</Text>
          {item.image && <Image style={styles.cardImage} source={{ uri: item.image }} />}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StoryList />
      <FlatList data={messages} renderItem={renderItem} keyExtractor={item => item.id.toString()} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0f7',
  },
  logo: {
    marginTop: 20,
    width: 150,
    height: 20,
  },
  logoutButton: {
    position: 'absolute',
    top: 10,
    right: 35,
  },
  storyList: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  storyListText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  storyName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    padding: 20,
    borderRadius: 30,
    margin: 10,
    backgroundColor:'white'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  cardText: {
    marginTop: 10,
  },
})

export default Home