import React from 'react';
import { FlatList } from 'react-native';
import ToDoCard from './ToDoCard';

const ToDoList = ({ taskItems, handleCompleteTask, handleDeleteTask }) => {
  return (
    <FlatList
      data={taskItems}
      renderItem={({ item, index }) => (
        <ToDoCard
          item={item}
          index={index}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask} 
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ToDoList;
