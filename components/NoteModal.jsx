import React from "react";

import { Modal, Text, TextInput, View , StyleSheet, TouchableOpacity } from "react-native";

const NoteModal = ({
  setNewNote,
  newNote,
  modalVisible,
  setModalVisible,
  addNote,
}) => {
  return (
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
  );
};

export default NoteModal;

const styles = StyleSheet.create({
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
