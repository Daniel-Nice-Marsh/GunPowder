import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground 
        style={styles.background}
        >
            <Text style={styles.logo}>Welcome to GunPowder!</Text>
            <Text style={styles.logoText}>The digital bullet journal tracking method for when your journal isn't around. Tap the Diary button to get started.</Text>
            
            <TouchableOpacity style={styles.DiaryButton}>
                <Button color= 'gold' title="Diary" onPress={() => navigation.navigate('Diary')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.DiaryReviewButton}>
                <Button color= 'violet' title="Diary Review" onPress={() => navigation.navigate('Diary Review')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.CameraButton}>
                <Button color= 'blue' title="Camera" onPress={() => navigation.navigate('Camera')}/>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        justifyContent: 'space-between',
        alignItems: "flex-end",
        color: "#fff",
        flexDirection: 'row'
    },
    logo: {
        width: 100,
        height: 50,
        right: 120,
        top : 70,
        position: 'absolute',
        transform: [{ scale: 2 }],
    },
    logoText: {
        width: 300,
        height: 100,
        top : 130,
        right: 35,
        position: 'absolute',
        transform: [{ scale: 1 }],
    },
    DiaryButton: {},
    DiaryReviewButton: {},
    Photos: {},
    Camera: {},
})

export default WelcomeScreen;