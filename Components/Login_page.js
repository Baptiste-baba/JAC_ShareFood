import React from 'react'
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity, ImageBackground} from 'react-native'
import PageInscription from "./PageInscription";
import Page_Main from "./Page_Main";

class Login_page extends React.Component {
    render() {
        const inscription_button = () => this.props.navigation.navigate("PageInscription")
        const login_button = () => this.props.navigation.navigate("Page_Main")
        return(
            <View style={styles.main_container}>
                <View style={styles.container_1}>
                    <Text style={styles.title_text}>Welcome to</Text>
                    <Text style={styles.sharefood_text}>ShareFood</Text>
                </View>
                <View style={styles.container_2}>
                    <Image style={styles.image}
                           source={require("../assets/logo.png")}
                    />
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.login_text}>Identifiant</Text>
                    <TextInput style={styles.login_textinput}
                               keyboardType= 'email-address'
                               placeholder='prénom.nom@eleve.isep.fr'
                    />
                </View>
                <View style={styles.container_4}>
                    <Text style={styles.password_text}>Mot De Passe</Text>
                    <TextInput style={styles.password_textinput}
                    />
                </View>
                <View style={styles.container_5}>
                    <View style={styles.container_login_button}>
                        <TouchableOpacity onPress={() => login_button()}>
                            <ImageBackground style={styles.button_image} source={require("../assets/bouton.png")}>
                                <Text style={styles.text_image}>connexion</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container_inscription_button}>
                        <TouchableOpacity onPress={() => inscription_button()}>
                            <ImageBackground style={styles.button_image} source={require("../assets/bouton.png")}>
                                <Text style={styles.text_image}>Inscription</Text>
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
    container_1:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_text: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Arial',
        borderTopWidth: 50
    },
    sharefood_text: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Arial',
        borderTopWidth: 30,
    },
    container_2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    login_text: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
        borderBottomWidth: 10
    },
    login_textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '85%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    password_text: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
        borderBottomWidth: 10
    },
    password_textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '85%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    image: {
        width: 280,
        height: 280,
        marginTop: 15
    },
    container_5: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_login_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_inscription_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_image: {
        width: 180,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_image: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Login_page
