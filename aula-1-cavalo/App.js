import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Image } from 'expo-image';

const NovoComponente = () => {
  return (
    <View>
      <Image
        height={400}
        width={400}
        source={
          require('./assets/4bf8e738-9721-4278-8f30-576db84445fb.gif')
        }
      />
      <Text
        style={{
          fontSize: 18,
          color: '#ffffff',
          alignSelf: 'center'
        }}
      >CAVALO</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>CAVALO</Text>
        <StatusBar style="auto" />
      </View>
      <NovoComponente />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232729ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    color: '#ffffff'
  },
});
