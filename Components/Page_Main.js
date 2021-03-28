import React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, ImageBackground, ScrollView} from 'react-native'
import Food from '../Helpers/FoodData'
import Meals from "./Meals"


class Page_Main extends React.Component {
    render() {
        return(
            <View style={styles.main_container}>
                <View style={styles.container_1}>
                    <View style={styles.container_search_button}>
                        <TouchableOpacity onPress={() => alert("Button pressed")}>
                            <ImageBackground
                                style={styles.button_image} source={require("../assets/bouton_recherche.png")}>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container_menu_button}>
                        <TouchableOpacity onPress={() => alert("Button pressed")}>
                            <ImageBackground
                                style={styles.button_image} source={require("../assets/bouton_menu.png")}>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container_2}>
                    <Text style={styles.text_meal_offered}>Repas Proposés</Text>
                </View>
                <View style={styles.container_3}>
                    <FlatList
                        style={styles.test}
                        data={Food}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Meals meal={item}/>}
                    />
                </View>
                <View style={styles.container_4}>
                    <TouchableOpacity onPress={() => alert("Button pressed")}>
                        <ImageBackground
                            style={styles.button_image} source={require("../assets/bouton_ajouter.png")}>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    main_container: {
        flex: 1,
        backgroundColor: 'rgb(0, 74, 173)'
    },
    container_1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_search_button: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginRight: 50
    },
    container_menu_button: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginLeft: 50
    },
    button_image: {
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_meal_offered: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Arial'
    },
    container_3: {
        flex: 3,
    },
    container_4: {
        flex: 1.5,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    test: {
        height: '100%'
    }

})

export default Page_Main
