import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Task = (props) => {
    return (
        <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.circular}></View>
                        <Text style={styles.itemText}>{props.text}</Text>   
                            <View style={styles.square}></View>  
                            <View style={styles.square2}></View> 
                            <View style={styles.square3}></View>
                            <View style={styles.square4}></View>
                            <View style={styles.square5}></View>
                            <View style={styles.square6}></View>   
                            <View style={styles.square7}></View> 
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
        height: 100,                            
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
    // squares
    square: {
        flex: 1,
        position: 'absolute', 
        top: 50, 
        left: 10, 
        right: 0, 
        bottom: 0, 
        maxWidth: 20,
        maxHeight: 20,
        backgroundColor: 'black',
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
    },
    square2: {
        position: 'absolute', 
        top: 50, 
        left: 50, 
        right: 0, 
        bottom: 0, 
        maxWidth: 20,
        maxHeight: 20,
        backgroundColor: 'purple',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    square3: {
        position: 'absolute', 
        top: 50, 
        left: 90, 
        right: 0, 
        bottom: 0, 
        maxWidth: 20,
        maxHeight: 20,
        backgroundColor: 'green',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    square4: {
        position: 'absolute', 
        top: 50, 
        left: 130, 
        right: 0, 
        bottom: 0, 
        maxWidth: 20,
        maxHeight: 20,
        backgroundColor: 'blue',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    square5: {
        position: 'absolute', 
        top: 50, 
        left: 170, 
        right: 0, 
        bottom: 0, 
        maxWidth: 20,
        maxHeight: 20,
        backgroundColor: 'red',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    square6: {
        position: 'absolute', 
        top: 50, 
        left: 210, 
        right: 0, 
        bottom: 0, 
        maxWidth: 20,
        maxHeight: 20,
        backgroundColor: 'gold',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    square7: {
        position: 'absolute', 
        top: 50, 
        left: 250, 
        right: 0, 
        bottom: 0, 
        maxWidth: 20,
        maxHeight: 20,
        backgroundColor: 'lime',
        justifyContent: 'center', 
        alignItems: 'center'
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


export default Task;