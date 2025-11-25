// Criar uma variável para obter a largura da tela
import { useState } from 'react'; // aramazena um valor de uma variável e consegue alterar em tempo real ex: true = renderiza com o modo acessível se for false = renderiza no modo normal.
import { StyleSheet, Text, View, Button, useWindowDimensions } from 'react-native'; // useWindowDimensions = pega o tamanho da tela 

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <ResponsiveApp />
    </SafeAreaProvider>
  );
}

function ResponsiveApp() {
  return <SafeAreaView><Text>Teste</Text>
  </SafeAreaView>
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}