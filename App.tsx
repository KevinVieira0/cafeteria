import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do Código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez </Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={20} color="#2f2d2c"></Ionicons>
        </View>

      </View>
      {/*Header*/}

      {/*Conteudo*/}
      <View style={styles.content}>

        <View style={styles.saudacao}>
          <Text style={styles.conteudoTitle}>Bom dia!</Text>
          <Text style={styles.conteudoSubtitle}>Que tal um café hoje?</Text>
        </View>

        <View>
          <Image source={require("./assets/coffee.jpg")}></Image>
          <Text>Cappucino Especial</Text>
          <Text>Cremoso e delicioso</Text>
          <Text>R$ 12,90</Text>
        </View>

      </View>
      {/*Conteudo*/}
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A98467',

  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#441a1a",
    marginTop: 4
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },

  saudacao: {
    marginBottom: 24,
    marginTop: 10,
  },

  content: {
    paddingHorizontal: 24
  },

  conteudoTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  conteudoSubtitle: {
    fontSize: 16,
    color: "#441a1a",
    marginTop: 8
  }
})

