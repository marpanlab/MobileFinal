import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProfileCard = () => {
  const user = {
    avatar: "https://s2.glbimg.com/V1zbRr64YnoYuOwNEH_7eCRI4L0=/0x0:3840x2582/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/A/9/6rBV7WQwKi132j11DlOQ/101410451-sc-sao-paulo-sp-03-12-2022-ccxp-2022-na-foto-keanu-reeves-no-palco-thunder.jpg",
    coverPhoto: "https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2521.jpg",
    name: "Ericson"
  };
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Curtir" onPress={() => {}} />
        <Button title="Seguir" onPress={() => {}} />
        <Button title="Apoiar" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -75,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: 'white',
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '60%',
    justifyContent: 'space-between',
  },
});


export default ProfileCard;