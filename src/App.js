/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

import { View, StyleSheet, Text } from 'react-native';
import ToDoInput from './components/ToDoCard/ToDoInput';
import ToDoList from './components/ToDoCard/ToDoList';

function App() {
  const [count, setCount] = useState(0);
  const [taskItems, setTaskItems] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() === '') return; // Boş görev eklenmesini önle

    const newTask = {
      text: task,
      completed: false,
    };

    setTaskItems([...taskItems, newTask]);
    setTask('');
    setCount(count + 1); // Yeni görev eklenince sayacı arttır
  };

  const handleDeleteTask = index => {
    const newTaskItems = taskItems.filter((_, i) => i !== index); // Görevi listeden çıkar
    setTaskItems(newTaskItems);

    // Silinen görevin tamamlanma durumu kontrolü
    if (!taskItems[index].completed) {
      setCount(count - 1); // Silinen görev tamamlanmamışsa sayacı düşür
    }
  };
            
  const handleCompleteTask = index => {
    const newTaskItems = [...taskItems];
    newTaskItems[index].completed = !newTaskItems[index].completed;

    // Görev tamamlandığında veya tamamlanmadığında sayacı güncelle
    if (newTaskItems[index].completed) {
      setCount(count - 1); // Görev tamamlandığında sayacı azalt
    } else {
      setCount(count + 1); // Görev tekrar aktif hale geldiğinde sayacı arttır
    }

    setTaskItems(newTaskItems);
  };

  return (
    <ImageBackground 
    source={require('./Assets/Images/img2.png')} // Resmin doğru yolu
    style={styles.container}
    >
      <View style={styles.top_container}>
        <Text style={styles.title}>To Do</Text>
        <Text style={styles.title_count}>{count}</Text>
      </View>

      <ToDoList 
        taskItems={taskItems} 
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
      />
        
      <View style={styles.bottom_container}>
        <ToDoInput 
          task={task} 
          setTask={setTask}
          handleAddTask={handleAddTask}
        />
      </View>
    </ImageBackground>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 100,
  },
  title: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#50b813",
    marginRight: 100,
  },
  title_count: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#a200ff",
  },
  bottom_container: {
    justifyContent: "flex-end",
  }
});
