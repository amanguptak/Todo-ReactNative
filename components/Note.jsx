import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
const Note = ({ item, deleteNote, updatedNotes }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.createdAt}>created:{item.createdAt}</Text>
      {item?.updatedTime && (
        <Text style={styles.createdAt}>updated:{item.updatedTime}</Text>
      )}

    <View style={styles.actionsWrapper}>
          <TouchableOpacity
        style={styles.deletePress}
        onPress={() => {
          deleteNote(item.id);
        }}
      >
        <MaterialIcons  name="delete" size={16} color="red" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.editNote}
        onPress={() => {
          updatedNotes(item.id);
        }}
      >
        <Feather name="edit" size={16} color="blue" />
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
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
 actionsWrapper:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  createdAt: {
    fontSize: 12,
    color: "#999",
  },
  deletePress: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fce0d5",
  },
  editNote: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fce0d5",
  },
 }
);
