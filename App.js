import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground} from 'react-native';

export default function App() {

  const dados = [
    {
      id: '1',
      titulo: 'Cariacica',
      descricao: 'Clima: Ensolarado',
      imagem: require('./assets/sol.png'),
    },
    {
      id: '2',
      titulo: 'Vila Velha',
      descricao: 'Clima: Chuvoso',
      imagem: require('./assets/chuva sem fundo.png'),
    },
    {
      id: '3',
      titulo: 'Vitória',
      descricao: 'Clima: Chuvoso',
      imagem: require('./assets/chuva sem fundo.png'),
    },
    {
      id: '4',
      titulo: 'Viana',
      descricao: 'Clima: Ensolarado',
      imagem: require('./assets/sol.png'),
    }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Image
        source={item.imagem}
        style={styles.imagem}
      />

      <View style={styles.textoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>

    <ImageBackground
    source={require('./assets/background.png')}
    style={{ flex: 1 }}
    resizeMode="cover"
  >

    <View style={{ flex: 1, padding: 10 }}>

      <View style={styles.tituloPrincipal}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          App Previsão do Tempo
        </Text>
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <StatusBar style="auto" />

    </View>

  </ImageBackground>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 0,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  imagem: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: 'transparent',
  },

  textoContainer: {
    flex: 1,
  },

  tituloPrincipal: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 50,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },

  descricao: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});