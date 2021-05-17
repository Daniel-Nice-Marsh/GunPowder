import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        //source={require('../assets/background.jpg')}
        >
            <Text style={styles.logo}>Welcome to GunPowder!</Text>
            <Text style={styles.logoText}>The digital bullet journal tracking method for when your journal isn't around. Tap the Diary button to get started.</Text>
            <View style={styles.DiaryScreenButton}></View>
            <View style={styles.DiaryReviewScreenButton}></View>
            <View style={styles.CameraScreenButton}></View>
            <View style={styles.PhotosScreenButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        color: "#fff",
    },
    logo: {
        width: 80,
        height: 50,
        position: 'absolute',
        top : 70,
        transform: [{ scale: 2 }],
    },
    logoText: {
        width: 300,
        height: 100,
        position: 'absolute',
        top : 130,
        transform: [{ scale: 1 }],
    },
    DiaryScreenButton: {
        width : "40%",
        height: 150,
        top: 150,
        left: 100,
        backgroundColor: "#fc5c65",
    },
    DiaryReviewScreenButton: {
        width : "40%",
        height: 150,
        top: 0,
        left: -100,
        backgroundColor: "#4ecdc4",
    },
    CameraScreenButton: {
        width : "40%",
        height: 150,
        top: 50,
        left: -100,
        backgroundColor: "#00FF00",
    },
    PhotosScreenButton: {
        width : "40%",
        height: 150,
        top: -100,
        left: 100,
        backgroundColor: "#000000",
    },
})

export default WelcomeScreen;