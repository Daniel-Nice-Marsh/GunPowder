import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

export default class App extends React.Component {
  render(){
    return (
      //view changed to <Container> & <text> changed to <Title>
      <Container>
        <Title>Hello, World!</Title>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: #db7093;
`;

