import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image
      source={require('C:/projeto_custom/projeto_custom/assets/sol.png')}
      style={{width: 80, height: 80 }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14cbc5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
