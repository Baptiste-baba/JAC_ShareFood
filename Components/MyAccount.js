import React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, ImageBackground, TextInput, Image} from 'react-native'

class MyAccount extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.second_container}>
                    <View style={styles.container_1}>
                        <View style={styles.container_textAds}>
                            <Text style={styles.adsText}>Mon compte</Text>
                        </View>
                        <View style={styles.container_menu_button}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Page_Main")}>
                                <ImageBackground style={styles.button_image} source={require("../assets/menu_button.png")}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.container_2}>
                        <Text style={styles.MailText}>Adresse Mail: </Text>
                    </View>
                    <View style={styles.container_3}>
                        <Text style={styles.PseudoText}>Pseudonyme: </Text>
                    </View>
                    <View style={styles.container_4}>
                        <Text style={styles.PasswordText}>Mot de passe: </Text>
                    </View>
                    <View style={styles.container_5}/>
                    <View style={styles.container_6}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
                            <ImageBackground style={styles.button_image2} source={require("../assets/DeleteAccountButton.png")}>
                                <Text style={styles.DeleteAccountText}>Supprimer mon compte</Text>
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
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: '10%'
    },
    MailText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Arial',
    },
    container_3: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: '10%'
    },
    PseudoText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Arial',
    },
    container_4: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: '10%'
    },
    PasswordText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Arial',
    },
    container_5: {
        flex: 6,
    },
    container_6: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    button_image2: {
        height: 40,
        width: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },
    DeleteAccountText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Arial',
        marginLeft: '13%'
    }
})

export default MyAccount
