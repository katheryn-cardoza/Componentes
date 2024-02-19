import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Pantalla1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Mi Perfil"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Persona Famosa"
          onPress={() => navigation.navigate('Admiro')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 50,
  },
});

export default Pantalla1;