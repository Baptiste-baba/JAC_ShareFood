import React from 'react'
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity, ImageBackground} from 'react-native'

class Add_Meal extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.second_container}>
                    <View style={styles.container_1}>
                        <View style={styles.button_container}>
                            <TouchableOpacity onPress={() => alert("Button pressed")}>
                                <ImageBackground
                                    style={styles.button_image} source={require("../assets/back_button.png")}>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.text_container}>
                            <Text style={styles.text_add_meal}>Ajouter un repas</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'rgb(0, 74, 173)'
    },
    second_container: {
        flex: 1,
        backgroundColor: 'rgb(51, 204, 255)',
        margin: '10%',
        borderRadius: 20

    },
    container_1: {
        flexDirection: 'row',
        flex: 1
    },
    button_container: {
        flex: 1,
    },
    button_image: {
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_container: {
        flex: 2,
    },
    text_add_meal: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
    }
})
export default Add_Meal
