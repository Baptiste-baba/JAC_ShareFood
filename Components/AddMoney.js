import React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, ImageBackground, TextInput, Image} from 'react-native'

class AddMoney extends React.Component {

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
                        <View style={styles.container_money}>
                            <Text style={styles.moneyText}>€</Text>
                        </View>
                        <View style={styles.container_moneyIcon}>
                            <Image style={styles.image_money} source={require("../assets/money_icon.png")}/>
                        </View>
                    </View>
                    <View style={styles.container_3}>
                        <Text style={styles.text_bankDetails}>Coordonnées bancaire:</Text>
                    </View>
                    <View style={styles.container_4}>
                        <View style={styles.container_TextName}>
                            <Text style={styles.text_name}>Nom:</Text>
                        </View>
                        <View style={styles.container_TextinputName}>
                            <TextInput style={styles.name_Textinput}/>
                        </View>
                    </View>
                    <View style={styles.container_5}>
                        <View style={styles.container_TextCardnumber}>
                            <Text style={styles.text_Cardnumber}>Numéro de carte:</Text>
                        </View>
                        <View style={styles.container_TextinputCardnumber}>
                            <TextInput style={styles.Cardnumber_Textinput}/>
                        </View>
                    </View>
                    <View style={styles.container_6}>
                        <View style={styles.container_TextDate}>
                            <Text style={styles.text_Date}>Date d'expiration:</Text>
                        </View>
                        <View style={styles.container_TextinputDate}>
                            <TextInput style={styles.Date_Textinput}/>
                        </View>
                    </View>
                    <View style={styles.container_7}>
                        <View style={styles.container_TextCVV}>
                            <Text style={styles.text_CVV}>CVV:</Text>
                        </View>
                        <View style={styles.container_TextinputCVV}>
                            <TextInput style={styles.CVV_Textinput}/>
                        </View>
                    </View>
                    <View style={styles.container_8}>

                    </View>
                    <View style={styles.container_9}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
                            <ImageBackground style={styles.button_image3} source={require("../assets/add_meal_button.png")}>
                                <Text style={styles.text_image}>Ajouter</Text>
                            </ImageBackground>
                        </TouchableOpacity>
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
        flex: 3,
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
    },
    text_bankDetails: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Arial',
    },
    container_3: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_4: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_TextName: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_name: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
    },
    container_TextinputName: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name_Textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_5: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_TextCardnumber: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_Cardnumber: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
    },
    container_TextinputCardnumber: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Cardnumber_Textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_6: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_TextDate: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_Date: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
    },
    container_TextinputDate: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Date_Textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_7: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_TextCVV: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_CVV: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
    },
    container_TextinputCVV: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CVV_Textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_8: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_9: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
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

export default AddMoney
