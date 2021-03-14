import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Image, TouchableOpacity, ImageBackground} from 'react-native'

class Pageaccueil extends React.Component {
    render() {
        return(
            <View style={styles.main_container}>
                <View style={styles.container_1}>
                    <Text style={styles.title_text}>Welcome to</Text>
                    <Text style={styles.sharefood_text}>ShareFood</Text>
                </View>
                <View style={styles.container_2}>
                    <Image style={styles.image}
                           source={require("C:\\Users\\babad\\Documents\\Junior ISEP\\ShareFood\\assets\\logo.png")}
                    />
                </View>
                <View style={styles.container_3}>
                    <Text style={styles.text_identifiant}>Identifiant</Text>
                    <TextInput style={styles.textinput_identifiant} keyboardType= 'email-address'
                               placeholder='prénom.nom@eleve.isep.fr'></TextInput>
                </View>
                <View style={styles.container_4}>
                    <Text style={styles.text_motdepasse}>Mot De Passe</Text>
                    <TextInput style={styles.textinput_motdepasse}></TextInput>
                </View>
                <View style={styles.container_5}>
                    <View style={styles.container_button_connexion}>
                        <TouchableOpacity onPress={() => alert("Button pressed")}>
                            <ImageBackground style={styles.button_image} source={require("C:\\Users\\babad\\Documents\\Junior ISEP\\ShareFood\\assets\\bouton.png")}>
                                <Text style={styles.text_image}>connexion</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container_button_inscription}>
                        <TouchableOpacity onPress={() => alert("Button pressed")}>
                            <ImageBackground style={styles.button_image} source={require("C:\\Users\\babad\\Documents\\Junior ISEP\\ShareFood\\assets\\bouton.png")}>
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
    text_identifiant: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
        borderBottomWidth: 10
    },
    textinput_identifiant: {
        backgroundColor: 'white',
        height: 30,
        borderColor: 'white',
        minWidth: 350,
        maxWidth: 350
    },
    container_4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_motdepasse: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Arial',
        borderBottomWidth: 10
    },
    textinput_motdepasse: {
        backgroundColor: 'white',
        height: 30,
        borderColor: 'white',
        minWidth: 350,
        maxWidth: 350,
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
    container_button_connexion: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_button_inscription: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_image: {
        width: 200,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_image: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Pageaccueil

