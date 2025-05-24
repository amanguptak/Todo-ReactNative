import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/256/7590/7590241.png",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Motion Notes now In Mobile.</Text>
      <Text style={styles.subTitle}>motion where ideas flows.</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/notes");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",

    color: "#333",
  },
  subTitle: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
  },
  button: {
    backgroundColor: "#fce0d5",
    padding: 10,
    cursor: "pointer",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
