import { useState } from "react";

import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {
       id: `${Date.now()}-${Math.random()}`,
      title: "First Note",
      content: "This is the content of the first note.",
      createdAt: new Date().toISOString(),
    },

    {
      id: `${Date.now()}-${Math.random()}`,
      title: "Second Note",
      content: "This is the content of the second note.",
      createdAt: new Date().toISOString(),
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const addNote = () => {
    if (newNote.title.trim() && newNote.content === "") return;

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
    setModalVisible(false)
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <Text style={styles.createdAt}>{item.createdAt}</Text>
          </View>
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

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Note</Text>

            <TextInput
              style={styles.noteInputs}
              placeholder="Note Title"
              value={newNote.title}
              placeholderTextColor="#aaa"
              onChangeText={(text) => setNewNote({ ...newNote, title: text })}
            />
            <TextInput
              style={styles.noteInputs}
              placeholder="Note Content"
              multiline
              value={newNote.content}
              placeholderTextColor="#aaa"
              onChangeText={(text) => setNewNote({ ...newNote, content: text })}
            />

            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.buttonText}> Close </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                <Text style={styles.buttonText}> Save </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  noteItem: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: "#fce0d5",
    borderRadius: 10,
  },

  noteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fce0d5",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "end",

    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    padding: 5,
    color: "#fce0d5",
    borderRadius: 5,
    fontSize: 20,
  },

  closeButton: {
    borderRadius: 5,
    backgroundColor: "red",
    padding: 5,
    color: "#fff",
  },
  noteInputs: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    color: "#333",
    fontSize: 16,
  },
});
