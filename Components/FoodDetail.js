import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, Image} from 'react-native'
import FoodData from "../Helpers/FoodData";

class FoodDetail extends React.Component {
    render() {

        const food_name = this.props.navigation.state.params.food_name
        const adress = this.props.navigation.state.params.adress
        const price = this.props.navigation.state.params.price
        const image1 = this.props.navigation.state.params.image1

        return (
            <View style={styles.main_container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Page_Main")}>
                    <ImageBackground
                        style={styles.button_image} source={require("../assets/circle_back_button.png")}>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.second_container}>
                    <View style={styles.container_1}>
                        <Image style={styles.image}
                               source={ image1 }
                        />
                    </View>
                    <View style={styles.container_2}>
                        <Text style={styles.text_meal}>{ food_name }</Text>
                    </View>
                    <View style={styles.container_3}>
                        <View style={styles.container_image_position}>
                            <Image style={styles.image_position}
                                   source={require("../assets/position.png")}
                            />
                        </View>
                        <View style={styles.container_adress}>
                            <Text style={styles.text_adress}>{ adress }</Text>
                        </View>
                    </View>
                    <View style={styles.container_4}>
                        <View style={styles.price_container}>
                            <Text style={styles.text_price}> { price }€</Text>
                        </View>
                        <View style={styles.money_container}>
                            <Image style={styles.image_money}
                                   source={require("../assets/money_icon.png")}
                            />
                        </View>
                    </View>
                    <View style={styles.container_5}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Page_Main")}>
                            <ImageBackground
                                style={styles.button_image2} source={require("../assets/bouton.png")}>
                                <Text style={styles.text_reservation}>Je réserve</Text>
                            </ImageBackground>
                        </TouchableOpacity>
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
    button_image: {
        width: 110,
        height: 110,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    second_container: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 20
    },
    container_1: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 180,
        width: 300
    },
    container_2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_meal: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 35
    },
    container_3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_image_position: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image_position: {
        height: 90,
        width: 90
    },
    container_adress: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_adress: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 25
    },
    container_4: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    price_container: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_price: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 55
    },
    money_container: {
        flex:1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    image_money: {
        height: 150,
        width: 150
    },
    container_5: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_image2: {
        width: 280,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_reservation: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 25
    }
})

export default FoodDetail
