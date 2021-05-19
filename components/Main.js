import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/Index';
 
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        const {currentUser} = this.props;
        {/* current user is undefined? */}
        console.log(currentUser)
        if (currentUser==undefined) {
            return (
                <View></View>
            )   
        }
        return (
            <View></View>
        )
    }
}

const mapStateProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateProps, mapDispatchProps)(Main);