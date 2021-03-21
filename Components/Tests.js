import React from 'react'
import {StyleSheet, View, TextInput, Button, Text, Image, TouchableOpacity, ImageBackground} from 'react-native'
import PageInscription from "./PageInscription";
import Navigation from "../Navigation/Navigation";


class Tests extends React.Component {
    render() {
        const bite = () => this.props.navigation.navigate("PageInscription")
        return(
            <TouchableOpacity onPress={() => bite()}>
                <Text style={styles.text_image}>inscription</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create ({
    button_image: {
        width: 180,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_image: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Tests
