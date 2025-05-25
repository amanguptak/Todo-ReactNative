import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTES_KEY = "NOTES_STORAGE_KEY";

export default function NoteDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [note, setNote] = useState(null);
  const navigation = useNavigation();

  
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const raw = await AsyncStorage.getItem(NOTES_KEY);
        const allNotes = raw ? JSON.parse(raw) : [];
        const match = allNotes.find((n) => n.id === id);
        setNote(match || null);
      } catch (e) {
        console.error("Failed to load note:", e);
      }
    };

    fetchNote();
  }, [id]);


  useLayoutEffect(() => {
    if (note?.title) {
      navigation.setOptions({
        title: note.title,
      });
    }
  }, [note, navigation]);

  if (!note) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.date}>{note.createdAt}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  date: { fontSize: 14, color: "#888", marginVertical: 8 },
  content: { fontSize: 16, lineHeight: 22 },
});
