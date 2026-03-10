import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <Text style={styles.title}>🎉 Bem-vindos à aula! 🎉</Text>
    <Text style={[styles.card, {backgroundColor: '#e2f2fd'}, {fontSize: 21}, {color: '#0977d4'}, {padding: 8}]}>📝 Vamos aprender React Native</Text>
     <Text style={[styles.card, {color: '#36905E'}, {backgroundColor: '#D4F5E1'}, {fontSize:17}, {padding: 8}]}>🚀 Inline styles são fáceis de entender!</Text>
     <Text style={[styles.card, {color: '#FF8C00'}, {backgroundColor: '#FFF5E6'}, {fontSize:20}, {padding: 8}, {width:350}, {marginBottom: 15}]}>🌈🎨 Alterar cores e tamanhos é divertido!</Text>
     <Text style={[styles.card, {color: '#952097'}, {backgroundColor: '#F3E6FF'}, {fontSize:16}, {width:275}, {padding: 7}]}>✨ Desafio: tente recriar esse layout!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0977d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#FE6346',
    fontSize: 27,
    marginBottom: 15,
    fontWeight: 500
  },
  card:{
    borderRadius: 7,
    marginBottom: 25,
    fontSize: 18
  }
});