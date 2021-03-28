import React from 'react'
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity, ImageBackground} from 'react-native'

class PageInscription extends React.Component {
    render () {
        const inscription_button = () => this.props.navigation.navigate("Page_Main")
        return(
            <View style={styles.main_container}>
                <View style={styles.container_1}>
                    <Text style={styles.inscription_text}>Inscription</Text>
                </View>
                <View style={styles.container_2}>
                    <Image style={styles.image}
                           source={require("../assets/logo_inscription.png")}
                    />
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.email_text}>Adresse Mail:</Text>
                    <TextInput style={styles.email_textinput}
                               keyboardType= 'email-address'
                               placeholder='prénom.nom@eleve.isep.fr'
                    />
                </View>
                <View style={styles.container_4}>
                    <Text style={styles.pseudo_text}>Pseudonyme:</Text>
                    <TextInput style={styles.pseudo_textinput}
                    />
                </View>
                <View style={styles.container_5}>
                    <Text style={styles.password_text}>Mot de passe:</Text>
                    <TextInput style={styles.password_textinput}
                               placeholder='8 charactères minimum'
                    />
                </View>
                <View style={styles.container_6}>
                    <Text style={styles.confirmation_text}>Confirmation:</Text>
                    <TextInput style={styles.confirmation_textinput}
                    />
                </View>
                <View style={styles.container_7}>
                    <TouchableOpacity onPress={() => inscription_button()}>
                        <ImageBackground style={styles.button_image} source={require("../assets/bouton.png")}>
                            <Text style={styles.text_image}>Inscription</Text>
                        </ImageBackground>
                    </TouchableOpacity>
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
    container_1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inscription_text: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 40,
    },
    container_2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 90
    },
    image: {
        width: 280,
        height: 280
    },
    container_3: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    email_text: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 20,
        marginRight: 30
    },
    email_textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '60%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_4: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pseudo_text: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 20,
        marginRight: 30
    },
    pseudo_textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '60%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_5: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    password_text: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 20,
        marginRight: 30
    },
    password_textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '60%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_6: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmation_text: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 20,
        marginRight: 30
    },
    confirmation_textinput: {
        backgroundColor: 'white',
        height: 40,
        width: '60%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20
    },
    container_7: {
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

export default PageInscription
