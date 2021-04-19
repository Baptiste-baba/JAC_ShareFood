import React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, ImageBackground, TextInput} from 'react-native'
import FoodData from "../Helpers/FoodData";
import Meals from "./Meals";

class MyAds extends React.Component {

    displayDetailForFood = (id) => {
        this.props.navigation.navigate("FoodDetail", {idFood: id})
    };

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.second_container}>
                    <View style={styles.container_1}>
                        <View style={styles.container_textAds}>
                            <Text style={styles.adsText}>Mes annonces</Text>
                        </View>
                        <View style={styles.container_menu_button}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Page_Main")}>
                                <ImageBackground style={styles.button_image} source={require("../assets/menu_button.png")}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.container_2}>
                        <FlatList
                            data={FoodData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <Meals meal={item} displayDetailForFood={this.displayDetailForFood} />}
                        />
                    </View>
                </View>
            </View>
        );
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
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 20
    },
    container_1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_textAds: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    adsText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
    },
    container_menu_button: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_image: {
        width: 180,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_2: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default MyAds
