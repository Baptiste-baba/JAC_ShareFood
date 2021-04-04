import React from 'react'
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity, ImageBackground} from 'react-native'
import Cam from "./Cam";

const Add_Meal =({ navigation }) => {

    return(
        <View style={styles.main_container}>
            <View style={styles.second_container}>
                <View style={styles.container_1}>
                    <View style={styles.button_container}>
                        <TouchableOpacity onPress={() => navigation.navigate("Page_Main")}>
                            <ImageBackground
                                style={styles.button_image} source={require("../assets/back_button.png")}>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.text_container}>
                        <Text style={styles.text_add_meal}>Ajouter un repas</Text>
                    </View>
                </View>
                <View style={styles.container_2}>
                    <TouchableOpacity onPress={() => navigation.navigate("Cam")}>
                        <ImageBackground style={styles.button_image2} source={require("../assets/add_photo_button.png")}>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_3}>

                </View>
                <View style={styles.container_4}>
                    <TextInput style={styles.price_textinput}
                               placeholder='Price'
                    />
                </View>
            </View>
        </View>
    )
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_add_meal: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
    },
    container_2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_image2: {
        width: 340,
        height: 210,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    price_textinput:{
        backgroundColor: 'white',
        height: 40,
        width: '30%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,

    },
})
export default Add_Meal
