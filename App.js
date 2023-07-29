import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Positions from './components/Positions';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
<View style={{flexDirection: 'row'}}>
<Text style={styles.header}>Hi 👋 I'm Caleb</Text>
<Image source={require('./assets/icon.jpeg')} style={styles.image}/>
</View>
      <StatusBar style="auto" />
      <Positions />
      <Projects />
      <Skills />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    marginLeft: 25,
    fontWeight: 'bold',
    fontSize: 30
  },
  image:{
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginLeft: 90
  }
});