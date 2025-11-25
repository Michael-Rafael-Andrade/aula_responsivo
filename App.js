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

  const { width, height } = useWindowDimensions();
  const [accessibleMode, setAccessibleMode] = useState(false);

  const isTablet = width > 700;
  const fontSize = isTablet ? 24 : 16; // Operador ternário
  const padding = isTablet ? 30 : 15; // Operador ternário

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: accessibleMode ? '#000' : '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      padding,
    },
  });

  return <SafeAreaView style={styles.container} >
    <Text style={styles.text}>Este é um exemplo de app responsivo e acessível.
      {'\n'}(Largura atual: {width.toFixed(0)}px)

    </Text>
    <View style={styles.buttonContainer}>
      <Button
        title={accessibleMode ? 'Modo Padrão' : 'Modo Acessível'}
        color={accessibleMode ? '#4cAF50' : '#007AFF'}
        onPress={() => setAccessibleMode(!accessibleMode)}
      />
    </View>
  </SafeAreaView>


}