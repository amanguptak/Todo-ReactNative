import { useState } from "react";

import { FlatList, StyleSheet, Text, View ,TouchableOpacity } from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First Note",
      content: "This is the content of the first note.",
      createdAt: new Date().toISOString(),
    },

    {
      id: 2,
      title: "Second Note",
      content: "This is the content of the second note.",
      createdAt: new Date().toISOString(),
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
      
        renderItem={({item}) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <Text style={styles.createdAt}>{item.createdAt}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.mainTitle}> + </Text>
      </TouchableOpacity>
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
});
