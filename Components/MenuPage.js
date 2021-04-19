import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native'

const MenuPage =({navigation}) => {
    return(
        <View style={styles.main_container}>
            <View style={styles.second_container}>
                <View style={styles.container_1}>
                    <TouchableOpacity onPress={() => navigation.navigate("Page_Main")}>
                        <ImageBackground style={styles.button_image} source={require("../assets/menu_button.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_2}>
                    <TouchableOpacity onPress={() => navigation.navigate("MyAds")}>
                        <Text style={styles.announceText}>Mes annonces</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_3}>
                    <TouchableOpacity onPress={() => navigation.navigate("AddMoney")}>
                        <Text style={styles.addMoneyText}>Ajouter de l'argent</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_4}>
                    <TouchableOpacity onPress={() => navigation.navigate("Page_Main")}>
                        <Text style={styles.accountText}>Mon compte</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_5}>
                    <TouchableOpacity onPress={() => navigation.navigate("Page_Main")}>
                        <Text style={styles.informationText}>Information</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_6}>
                    <View style={styles.container_money}>
                        <Text style={styles.moneyText}>€</Text>
                    </View>
                    <View style={styles.container_moneyIcon}>
                        <Image style={styles.image_money} source={require("../assets/money_icon.png")}/>
                    </View>
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
        justifyContent: 'flex-end',
    },
    button_image: {
        width: 180,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '70%'
    },
    container_2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    announceText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
    },
    container_3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addMoneyText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
    },
    container_4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    accountText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
    },
    container_5: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    informationText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
    },
    container_6: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_money: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: '30%'
    },
    moneyText: {
        color: 'black',
        fontSize: 50,
        fontFamily: 'Arial',
    },
    container_moneyIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: '10%'
    },
    image_money: {
        width: 200,
        height: 200,
    }
})

export default MenuPage
