// import react components.
import 'react-native-gesture-handler';
import React, { Component } from 'react';  

import {View, Text } from 'react-native';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers/Index';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu0GBka8hGdP4dYeMhoOn3BEcSXtvJIfw",
  authDomain: "gunpowder-3697e.firebaseapp.com",
  projectId: "gunpowder-3697e",
  storageBucket: "gunpowder-3697e.appspot.com",
  messagingSenderId: "267419470524",
  appId: "1:267419470524:web:b2dc078d5e0ae03ae6deb9",
  measurementId: "G-NBJ5Q53TE9"
};

// initialise firebase 
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';

// import screens.
import LandingScreen from './components/auth/LandingScreen';
import LoginScreen from './components/auth/LoginScreen';
import RegisterScreen from './components/auth/RegisterScreen';
import MainScreen from './components/Main';
import WelcomeScreen from './screens/WelcomeScreen';
import DiaryScreen from './screens/DiaryScreen';
import DiaryReviewScreen from './screens/DiaryReviewScreen';
import PhotosScreen from './screens/PhotosScreen';
import CameraScreen from './screens/CameraScreen';

// create stack navigator.
const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    {/* display loading screen. */}
    if(!loaded) {
      return(
        <View style={{flex:1, justifyContent: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }
    {/* if logged in, skip the login and register screen to the main application */}
    if (!loggedIn) {
      return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
              <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
      
      return (
        <Provider store={store}>
          <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Diary" component={DiaryScreen} />
                    <Stack.Screen name="Diary Review" component={DiaryReviewScreen} />
                    <Stack.Screen name="Photos" component={PhotosScreen} />
                    <Stack.Screen name="Camera" component={CameraScreen} />
                </Stack.Navigator>
            </NavigationContainer>
          <MainScreen/>
        </Provider>
    )
  }
}
export default App;

