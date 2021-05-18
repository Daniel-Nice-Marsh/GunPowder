import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TaskReview = (props) => {
    return (
        <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.circular}></View>
                        <Text style={styles.itemText}>{props.text}</Text>   
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // box
    item: {
        flex: 1,
        flexDirection: 'row', 
        backgroundColor: '#FFF',
        padding: 15,                   
        borderRadius: 10,
        marginBottom: 20,   
        height: 70,                            
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    // text
    itemText: {
        maxWidth: '80%',
        marginLeft: 15
    },
    // circle
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});


export default TaskReview;