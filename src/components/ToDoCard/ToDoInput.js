import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './ToDoCard.styles'

const ToDoInput = ({task, setTask, handleAddTask}) => {
    return (
        <View>
            <TextInput
            style={styles.text_input}
            placeholder='Add a new task...'
            placeholderTextColor={"C0C0C0"}
            onChangeText={setTask}
            value={task}
            />


            <TouchableOpacity onPress= {handleAddTask} style={styles.button}>
                <Text style={styles.button_text}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ToDoInput;