// import react components.
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';  
import Task from './components/Task';

import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';

import { Dimensions, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, View, Button } from 'react-native'; 
import styled from 'styled-components';


// import screens.
import WelcomeScreen from './screens/WelcomeScreen';
import DiaryScreen from './screens/DiaryScreen';
import DiaryReviewScreen from './screens/DiaryReviewScreen';
import PhotosScreen from './screens/PhotosScreen';
import CameraScreen from './screens/CameraScreen';

// create stack navigator.
const Stack = createStackNavigator();

// main.
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen 
          name="Diary" 
          component={DiaryScreen} 
        />
        <Stack.Screen 
          name="Diary Review" 
          component={DiaryReviewScreen} 
        />
        <Stack.Screen 
          name="Photos" 
          component={PhotosScreen} 
        />
        <Stack.Screen 
          name="Camera" 
          component={CameraScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

