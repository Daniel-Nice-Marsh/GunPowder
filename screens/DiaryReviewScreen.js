import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import TaskReview from '../components/TaskReview';

function DiaryReviewScreen(props) {
    // use state for inputing tasks.
    const [task, setTask] = useState();
    // use state for setting tasks.
    const [taskItems, setTaskItems] = useState([]);
    // set task review title
    const [taskReviewTitle, setTaskReviewTitle] = useState();
    // use state for setting title date.
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
            {/* scrollable view. */}
            <ScrollView>
                <View style={styles.taskWrapper}>
                {/* allow user to change the main title of the page. */}
                <TextInput style={styles.title} placeholder={'This Weeks Date'} value={date} onChangeText={date => setDate(date)}/>
                    {/* allow user to change the task title in the review page. */}
                    <TextInput style={styles.reviewTitle} placeholder={'Task Title'} value={taskReviewTitle} onChangeText={taskReviewTitle => setTaskReviewTitle(taskReviewTitle)}/>
                        {/* This is where the tasks will go */}
                            <View style={styles.items}>
                            {
                            taskItems.map((item, index) => {
                            return (
                           <TouchableOpacity onPress={() => completeTask(index)}>
                                <TaskReview text={item} />
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
                
                <TextInput style={styles.input} placeholder={'write a task review'} value={task} onChangeText={text => setTask(text)}/>

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
    // main page title.
    title: {
        top: -20,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    // review title section.
    reviewTitle: {
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

export default DiaryReviewScreen;