// import react components.
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';          
import { NavigationContainer } from '@react-navigation/native';                                                                  
import { Dimensions, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, View, Button } from 'react-native'; 
import styled from 'styled-components';


// import screens.
import WelcomeScreen from './screens/WelcomeScreen';
import DiaryScreen from './screens/DiaryScreen';
import DiaryReviewScreen from './screens/DiaryReviewScreen';
import PhotosScreen from './screens/PhotosScreen';
import CameraScreen from './screens/CameraScreen';

// main.
const App = () => {
  return (
    <NavigationContainer>
      <WelcomeScreen />
    </NavigationContainer>
  );
};

export default App;

