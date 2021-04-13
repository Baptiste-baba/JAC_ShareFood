import React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, ImageBackground, TextInput} from 'react-native'
import FoodData from '../Helpers/FoodData'
import Meals from "./Meals"
import Add_Meal from "./Add_Meal";

class Page_Main extends React.Component {

    displayDetailForFood = (id) => {
        this.props.navigation.navigate("FoodDetail", {idFood: id})
    };

    render() {
        return(
            <View style={styles.main_container}>
                <View style={styles.container_1}>
                    <View style={styles.container_search_textinput}>
                        <TextInput style={styles.search_textinput}
                        />
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
                        data={FoodData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Meals meal={item} displayDetailForFood={this.displayDetailForFood} />}
                    />
                </View>
                <View style={styles.container_4}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Add_Meal')}>
                        <ImageBackground style={styles.button_image}
                                         source={require("../assets/bouton_ajouter.png")}
                        />
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
    container_search_textinput: {
        flex: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginLeft: 30
    },
    image: {
        width: 80,
        height: 80,
        marginLeft: 15
    },
    search_textinput: {
        backgroundColor: 'rgb(51, 204, 255)',
        height: 60,
        width: '95%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 30
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
        marginLeft: '5%',
    },
    container_4: {
        flex: 1.5,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})

export default Page_Main
