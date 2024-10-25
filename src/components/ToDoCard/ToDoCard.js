import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({ item, index, handleCompleteTask, handleDeleteTask }) => {
  return (
    <TouchableOpacity
      key={index}
      onPress={() => handleCompleteTask(index)}
      onLongPress={() => handleDeleteTask(index)}  // Uzun basınca görevi sil
      style={[
        styles.task,
        item.completed ? styles.taskCompleted : null,
      ]}>
      <Text
        style={
          item.completed ? styles.taskTextCompleted : styles.taskText
        }>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ToDoCard;
