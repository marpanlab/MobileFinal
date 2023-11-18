import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import firebase from './firebase';

export default SignUpView = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      if (userCredentials.user) {
        console.log('Usuário cadastrado com:', userCredentials.user.email);
        firebase.auth().signOut().then(() => {
          Alert.alert(
            'Cadastro Realizado',
            'Seu cadastro foi realizado com sucesso!',
            [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
          );
        });
      }
    })
    .catch(error => {
      Alert.alert('Erro no Cadastro', 'Verifique os dados inseridos');
    });
};

  return (
    <View style={styles.container}>
    <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(email) => setEmail(email)} 
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>
    <TouchableOpacity
        style={[styles.buttonContainer, styles.signupButton]}
        onPress={handleSignUp}>
        <Text style={styles.signUpText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebf0f7',
  },
    logo: {
    width: 250,
    height: 40,
    marginBottom: 40,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#FF4DFF',
  },
  signUpText: {
    color: 'white',
  },
})
