import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Admire from '../assets/Bruno.jpg';
import stylsp2 from '../styles/stylsp3';
import Evaluaciones from '../components/evaluacion/Evaluaciones';

const Pantalla3 = ({ navigation }) => {
  const calificacion = 5;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persona Famosa</Text>
      <Image source={Admire} style={styles.image} />
      <Evaluaciones />
      <Text style={styles.calificacion}>Calificación: {calificacion} estrellas</Text>
      <Text style={styles.name}>Bruno Mars</Text>
      <Text style={styles.date}>8 de octubre de 1985</Text>
      <Text style={styles.description}>
        Él es mi cantante favorito. Me gusta su música y coreografías.
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
  calificacion: {
    fontSize: 16,
    marginBottom: 10,
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

export default Pantalla3;
