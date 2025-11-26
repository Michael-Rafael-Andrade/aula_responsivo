import { SafeAreaProvider } from 'react-native-safe-area-context';
import ResponsiveApp from './componentes/ResponsiveApp';

export default function App() {

  return (
    <SafeAreaProvider>
      <ResponsiveApp />
    </SafeAreaProvider>
  );
}

