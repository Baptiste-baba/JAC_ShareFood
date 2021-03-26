import React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, ImageBackground} from 'react-native'
import Food from '../Helpers/FoodData'
import Repas from "./Repas"

class Page_Main extends React.Component {
    render() {
        return(
            <View style={styles.main_container}>
                <View style={styles.container_1}>
                    <View style={styles.container_bouton_recherche}>
                        <TouchableOpacity onPress={() => alert("Button pressed")}>
                            <ImageBackground
                                style={styles.button_image} source={require("C:\\Users\\babad\\Documents\\Junior ISEP\\ShareFood\\assets\\bouton_recherche.png")}>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container_bouton_menu}>
                        <TouchableOpacity onPress={() => alert("Button pressed")}>
                            <ImageBackground
                                style={styles.button_image} source={require("C:\\Users\\babad\\Documents\\Junior ISEP\\ShareFood\\assets\\bouton_menu.png")}>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container_2}>
                    <Text style={styles.text_repas_proposees}>Repas Proposés</Text>
                </View>
                <View style={styles.container_3}>
                    <FlatList
                        data={Food}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Repas plats={item}/>}
                    />
                </View>
                <View style={styles.container_4}>
                    <TouchableOpacity onPress={() => alert("Button pressed")}>
                        <ImageBackground
                            style={styles.button_image} source={require("C:\\Users\\babad\\Documents\\Junior ISEP\\ShareFood\\assets\\bouton_ajouter.png")}>
                        </ImageBackground>
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
    container_bouton_recherche: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginRight: 50
    },
    container_bouton_menu: {
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
    text_repas_proposees: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Arial'
    },
    container_3: {
        flex: 3,
    },
    container_4: {
        flex: 1.5,
        alignItems: 'flex-end',
        justifyContent: 'center',
    }

})

export default Page_Main
