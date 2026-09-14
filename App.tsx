import { Ionicons } from "@expo/vector-icons";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
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

          <View style={styles.feature}>
            <View>
              <Image source={require("./assets/coffee.jpg")} style={styles.image}></Image>
              <Text style={styles.cardTitle}>Cappucino Especial</Text>
              <Text style={styles.cardDescription}>Cremoso e delicioso</Text>
              <Text style={styles.cardPrice}>R$ 12,90</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Nosso Cardápio</Text>

          <View style={styles.menu}>

            <View style={styles.cardProduct}>
              <Text style={styles.nameProduct}>Expresso</Text>
              <Text style={styles.descriptionProduct}>Puro e forte</Text>
              <Text style={styles.priceProduct}>R$ 7,00</Text>
            </View>

            <View style={styles.cardProduct}>
              <Text style={styles.nameProduct}>Cappuccino</Text>
              <Text style={styles.descriptionProduct}>Clássico com epuma</Text>
              <Text style={styles.priceProduct}>R$ 12,90</Text>
            </View>

            <View style={styles.cardProduct}>
              <Text style={styles.nameProduct}>Latte</Text>
              <Text style={styles.descriptionProduct}>Leite cremoso</Text>
              <Text style={styles.priceProduct}>R$ 11,50</Text>
            </View>

            <View style={styles.cardProduct}>
              <Text style={styles.nameProduct}>Mocha</Text>
              <Text style={styles.descriptionProduct}>Toque de chocolate</Text>
              <Text style={styles.priceProduct}>R$ 13,50</Text>
            </View>

          </View>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual seu nome?</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"

            >
            </TextInput>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Fazer meu pedido</Text>
            </TouchableOpacity>

          </View>

        </View>
        {/*Conteudo*/}
      </ScrollView>
    </KeyboardAvoidingView>
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
  },
  feature: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 16
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c"
  },
  cardDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },
  cardPrice: {
    fontSize: 20,
    color: "#ff5c00",
    marginTop: 12,
    fontWeight: "800"
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32
  },
  cardProduct: {
    width: "48%",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 16
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2f2d2c"
  },
  descriptionProduct: {
    fontSize: 12,
    marginTop: 4,
    color: "#9b9b9b"

  },
  priceProduct: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 12,
    color: "#ff5c00"
  },
  orderSection: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },
  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },
  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16
  },
  button: {
    width: "100%",
    backgroundColor: "#ff5c00",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#ff5c00",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "700"
  },
})

