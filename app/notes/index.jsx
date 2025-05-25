import { useEffect, useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Note from "../../components/Note";
import NoteModal from "../../components/NoteModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTES_KEY = "NOTES_STORAGE_KEY";

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const data = await AsyncStorage.getItem(NOTES_KEY);
        if (data) {
          setNotes(JSON.parse(data));
        }
      } catch (err) {
        console.error("Failed to load notes:", err);
      }
    };

    loadNotes();
  }, []);
  useEffect(() => {
    const savedNotes = async () => {
      try {
        await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
      } catch (err) {
        console.log(err);
      }
    };
    savedNotes();
  }, [notes]);

  const addNote = () => {
    if (!newNote.title.trim() && !newNote.content.trim()) return;

    if (editNote) {
      const updatedNotes = notes.map((findNote) =>
        findNote.id === editNote
          ? {
              ...findNote,
              title: newNote.title,
              content: newNote.content,
              updatedTime: new Date().toLocaleString(),
            }
          : findNote
      );

      setNotes(updatedNotes);
      setEditNote(null);
      setNewNote({ title: "", content: "" });
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: `${Date.now()}-${Math.random()}`,
          title: newNote.title,
          content: newNote.content,
          createdAt: new Date().toLocaleString(),
        },
      ]);

      setNewNote({ title: "", content: "" });
    }

    setModalVisible(false);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const updatedNotes = (id) => {
    const foundNote = notes.find((note) => note.id === id);
    if (!foundNote) return;
    setNewNote({ title: foundNote.title, content: foundNote.content });
    setEditNote(id);
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Note
            item={item}
            deleteNote={deleteNote}
            updatedNotes={updatedNotes}
          />
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.mainTitle}> + </Text>
      </TouchableOpacity>
      <NoteModal
        setNewNote={setNewNote}
        newNote={newNote}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addNote={addNote}
      />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  mainTitle: {
    fontSize: 20,
    color: "#333",
  },

  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#fce0d5",
    padding: 15,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
