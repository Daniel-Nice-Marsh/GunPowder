import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Task from '../components/Task';

function DiaryScreen(props) {
    const [task, setTask] = useState(); // create state.
    const [taskItems, setTaskItems] = useState([]);
    const [date, setDate] = useState();

    // handle added tasks.
    const handleAddTask = () => {
        Keyboard.dismiss();                 // dismiss keyboard after adding a task.
        setTaskItems([...taskItems, task])  // add all task items to an array.
        setTask(null);                      // clear task bar after a task has been added.
    }

    // remove a task when the user clicks on task.
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.container}>
            {/* create box at the bottom of the screen containing days of the week */}
            <Text style={styles.days}>  M        T        W        Th        F        S        S</Text>
            {/* scrollable view. */}
            <ScrollView>
                <View style={styles.taskWrapper}>
                    {/* allow user to change the title to change the week date. */}
                    <TextInput style={styles.sectionTitle} placeholder={'This Weeks Date'} value={date} onChangeText={date => setDate(date)}/>
                        {/* This is where the tasks will go */}
                        <View style={styles.items}>
                        {
                            taskItems.map((item, index) => {
                            return (
                               <TouchableOpacity onPress={() => completeTask(index)}>
                                    <Task text={item} />
                               </TouchableOpacity>
                           )
                        })
                    }
                </View>
            </View>
            </ScrollView>
        
            {/* let user write a task into app. */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}>
                    
                <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)}/>

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    taskWrapper: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    // Title section.
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    // task list.
    items: {
        marginTop: 30,
    },
    // input task bar wrapper.
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 40,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    // input task bar.
    input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    
    },
    // add button.
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
    days: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 40,
        paddingTop: 20,
    },
});
export default DiaryScreen;