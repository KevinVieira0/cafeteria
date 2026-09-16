import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

type CooffeCardProps = {
    name: string;
    description: string;
    price: string;
};

export default function CoffeCard({ name, description, price }: CooffeCardProps) {
    return (
        <View style={styles.cardProduct}>
            <Text style={styles.nameProduct}>{name}</Text>
            <Text style={styles.descriptionProduct}>{description}</Text>
            <Text style={styles.priceProduct}>{price}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
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
})