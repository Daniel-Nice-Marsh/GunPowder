import React, {useState} from 'react';
import { Text, View, TextInput, Image, Button } from 'react-native';

import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/firebase-storage");

function PhotosScreen(props) {
    const [caption, setCaption] = useState("");

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
        const response = await fetch(uri);
        const blob = await response.blob();
        

        const task = firebase
        .Storage()
        .ref()
        .child(childPath)
        .put(blob);

        {/* console log number of bytes transfered by snapshot */}
        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                console.log(snapshot);
            })
        }

        const taskError = snapshot => {
            console.log(snapshot);
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }
    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: props.route.params.image }}/>
            <TextInput 
                placeholder="Write a caption..."
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Save" onPress={() => uploadImage()}/>
        </View>
    );
}

export default PhotosScreen;