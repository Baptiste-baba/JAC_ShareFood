import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import FoodData from "../Helpers/FoodData";

class Meals extends React.Component {
    render() {

        const {meal, displayDetailForFood} = this.props

        return (
            <TouchableOpacity style={styles.main_container}
                              onPress={() =>displayDetailForFood(meal.id)}
            >
                <View style={styles.container}>
                    <View style={styles.container_1}>
                        <Image style={styles.image}
                               source={require("../assets/nourriture_test.png")}
                        />
                    </View>
                    <View style={styles.container_2}>
                        <Text style={styles.text_meal_name}>{meal.food_name}</Text>
                    </View>
                    <View style={styles.container_3}>
                        <View style={styles.container_image_position}>
                            <Image style={styles.image_position}
                                   source={require("../assets/position.png")}
                            />
                        </View>
                        <View style={styles.container_text}>
                            <Text style={styles.text_adress}>{meal.adress}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    main_container: {
        width: '95%',
        height: 400,
        borderRadius: 20,
        marginBottom: '40%',
        backgroundColor: 'rgb(255, 255, 255)',

    },
    container: {
        flex: 1
    },
    container_1: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 180,
        width: 300
    },
    container_2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_meal_name: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 35
    },
    container_3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    container_image_position: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image_position: {
        height: 90,
        width: 90
    },
    container_text: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_adress: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 20
    }
})

export default Meals
