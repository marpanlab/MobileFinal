import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeView = () => {
  const data = [
    {
      id: '1',
      thumbnail:
        'https://upload.wikimedia.org/wikipedia/pt/7/7c/Logotipo_da_Mix_FM.png',
      title: 'Mix FM',
      channel: '106.3',
      views: '1.2M seguidores',
      screen: 'Player',
    },
    {
      id: '2',
      thumbnail:
        'https://www.dailymotion.com/thumbnail/video/x82yivf',
      title: 'Alpha FM',
      channel: '101.7',
      views: '2.3M seguidores',
      screen: 'Alpha',
    },
    {
      id: '3',
      thumbnail:
        'https://assets.clubefm.com.br/uploads/site/logo/2/106-sertaneja-4fff3e1f118ab621432fa4d74136e042e86b6eedbabf561ded0dfd61123d980e.png',
      title: 'Sertanejo FM',
      channel: '106.7',
      views: '3.4M seguidores',
      screen: 'Sertanejo',
    },
  ];
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.video}
        onPress={() => navigation.navigate(item.screen)}
      >
        <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.channel}>{item.channel}</Text>
          <View style={styles.viewCount}>
            <Text style={styles.views}>{item.views}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
    <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
      <Text style={styles.headerText}>Minha Lista de Rádios</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};


const styles = {
  container: {
    backgroundColor: '#ebf0f7',
    flex:1,
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
  video: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 50
  },
  thumbnail: {
    width: '35%',
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  details: {
    padding: 10,
    width: '65%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  channel: {
    color: '#999',
    fontSize: 14,
    marginTop: 5,
  },
  viewCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  views: {
    color: '#999',
    fontSize: 14,
  },
  duration: {
    color: '#999',
    fontSize: 14,
    marginLeft: 10,
  },
}

export default HomeView