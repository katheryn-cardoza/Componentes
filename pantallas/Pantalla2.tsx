import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import imagendance from '../';
import stylsp2 from '../styles/stylsp2';

const Pantalla2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <Image source={imagendance} style={styles.image} />
      <Text style={styles.name}>Katheryn Cardoza</Text>
      <Text style={styles.date}>12 de Octubre del 2003</Text>
      <Text style={styles.description}>
        Me gusta la danza folklorica, pasar tiempo con mis amigos, además me gusta programar en Django y Python.
      </Text>
      <Text style={styles.description}>
        Ademas estoy certificada en PhpMyAdmin, Alura en JavaScripts y estoy sacando mi certificacion en Python.
      </Text>
      <Button
        title="Regresar al Menú"
        onPress={() => navigation.navigate('Bienvenida')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});