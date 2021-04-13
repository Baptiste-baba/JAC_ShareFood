import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native'
import Cam from "./Cam";

const Add_Meal =({ navigation }) => {

    const [select_meal, setselect_meal] = useState( '')
    const [price, setPrice] = useState( '')
    const [adress, setAdress] = useState( '')
    console.log([select_meal, setselect_meal])
    console.log([price, setPrice])
    console.log([adress, setAdress])

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
                    <TextInput style={styles.meal_textinput}
                               placeholder='Selectionner un aliment'
                               onChangeText= {select_meal => setselect_meal(select_meal)}
                               defaultValue={select_meal}
                    />
                </View>
                <View style={styles.container_4}>
                    <TextInput style={styles.price_textinput}
                               placeholder='Price'
                               onChangeText= {price => setPrice(price)}
                               defaultValue={price}
                    />
                </View>
                <View style={styles.container_5}>
                    <TextInput style={styles.adress_textinput}
                               placeholder='Adresse'
                               onChangeText= {adress => setAdress(adress)}
                               defaultValue={adress}
                    />
                </View>
                <View style={styles.container_6}>
                    <TouchableOpacity onPress={() => navigation.navigate("")}>
                        <ImageBackground style={styles.button_image3} source={require("../assets/add_meal_button.png")}>
                            <Text style={styles.text_image}>Ajouter</Text>
                        </ImageBackground>
                    </TouchableOpacity>
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
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 20
    },
    container_1: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 28,
        fontFamily: 'Arial',
    },
    container_2: {
        flex: 2,
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
    meal_textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
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
    container_5:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    adress_textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
    },
    container_6: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_image3:{
        width: 340,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_image: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Arial',
        alignItems: 'center',
        justifyContent: 'center'
    }

})
export default Add_Meal
