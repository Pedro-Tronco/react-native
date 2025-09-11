import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Pressable, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <SafeAreaView style={styles.container} showsVerticalScrollIndicator={true}>
      <View style={styles.container}>
        <Text style={[styles.font, styles.title, { color: 'aqua' }]}>Olá mudo!!!</Text> {/* Estilo mais a direita sobreescreve o anterior */}
        <Text style={{ fontSize: 20, color: "gray" }}>{contador}</Text>
        <Text style={{ fontSize: 20 }}></Text>
        <Button
          title="Clique aqui para somar"
          onPress={() => setContador(contador + 1)}
        />
        <Button
          title="Clique aqui para diminuir"
          onPress={() => setContador(contador - 1)}
        />
      </View>
      <ActivityIndicator size={"large"} color={"red"} />
      <View>
        <ScrollView style={{ maxHeight: 200 }}>
          <Text style={styles.font}>Somebody once told me the world is gonna roll me, I aint the sharpest tool in the shed, she was looking kinda dumb with her finger and her thumb in the shape of an L on her forehead, well, the years start coming and they dont stop coming, fed to the rules and I hit the groud running, didnt make sense not to live for fun, your brain gets smart but your head gets dumb, so much to do, so much to see, so whats wrong with taking the back streets, youll never know if you dont go, youll never shine if you dont glow, hey now, youre an all star, get your game on, go play and hey now, youre a rock star, get the show on, get paid and all that glitters is gold, only shooting stars break the mold, its a cool place, and they say it gets colder, youre bundled up now wait till you get older but the metero man beg to differ, juging by the hole in the satelite picture, the ice we stay is getting pretty thing, the world is getting warmer so you might as well swimm, my world is on fire, how about yours, thats the way I like it and I never get bored, hey now, youre and all star, get your game on, go play and hey now, your a rockstar, get the show on, get paid and all that glitters is gold, only shooting stars, somebody once told me could I spare some change for gas I need to get myself away from this place, I said yeah, what a concept, I could use a little fuel myself and we could all use a little change, well, the years start commnig and they dont stop comming, fed to the rules and I hit the ground running, didnt make sense not to live for fun, your brain gets smart but your head gets dumb, so much to do, so much to see, so whats wrong with taking the backstrets, youll never now if you dont go (go), youll never shine if you dont glow, hey now, youre an all star, get your game on, go play and hey now, youre a rock star, get the show on, get paid an all that glitters is gold, only shooting stars break the mold, and all that glitters is gold, only shooting stars break the mold </Text>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636060ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: 'white',
    fontSize: 15 //Está sendo sobreesctio por styles.fonte no texto de Olá mudo!!!
  },
  title: {
    fontSize: 50,
  }
});
