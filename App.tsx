import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from "react-native";
import Header from "./components/Header";
import CoffeCard from "./components/CoffeCard";

export default function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleOrder = () => {
    if (name.trim() === "") {
      setMessage("Por favor, informe um nome")
    } else {
      setMessage(`Olá ${name}! Seu pedido foi recebido.`)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
      <ScrollView style={styles.container}>
        <Header />
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

          <CoffeCard name="Expresso" description="Puro e Forte" price="R$7,00"/>
          <CoffeCard name="Cappuccino" description="Clássico com espuma" price="R$12,90"/>
          <CoffeCard name="Latte" description="Leite e cremoso" price="R$11,50"/>
          <CoffeCard name="Mocha" description="Toque de chcolate" price="R$13,50"/>

          </View>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual seu nome?</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={name}
              onChangeText={setName}

            >
            </TextInput>

            <TouchableOpacity style={styles.button} onPress={handleOrder}>
              <Text style={styles.buttonText}>Fazer meu pedido</Text>
            </TouchableOpacity>

            {message !== '' && (
              <Text style={styles.messageText}>{message}</Text>
            )}

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
  messageText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#ff5c00",
    textAlign: "center",
    marginTop: 20
  },
})

