import { StyleSheet } from "react-native";

export default StyleSheet.create({
  taskContainer: {
    flex: 1
  },
  task: {
    backgroundColor: "#73c91cc0",
    padding: 15,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 11,
  },
  taskText: {
    color: "#fcfffd",
    fontSize: 20,
  
  },
  taskCompleted: {
    backgroundColor: '#42745a5a',
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#583d3d',
    fontSize: 20,
  },
  todo_container: {
    backgroundColor: "#676FA3",
    borderRadius: 10,
    margin: 10
  },
  text_input: {
    height: 50,
    padding: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    color: "#333333",
  },
  button: {
    padding: 15,
    margin: 15,
    backgroundColor: "#78cf2c",
    borderRadius: 50,

  },
  button_text: {
    color: "#fefffe",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  }
})
