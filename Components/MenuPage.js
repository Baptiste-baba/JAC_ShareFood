import React from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity, ImageBackground, TextInput} from 'react-native'


const MenuPage =() => {
    return(
        <View style={styles.main_container}>
            <View style={styles.second_container}>
                <View style={styles.container_1}>
                    <TouchableOpacity onPress={() => navigation.navigate("Page_Main")}>
                        <ImageBackground style={styles.button_image} source={require("../assets/bouton.png")}/>
                    </TouchableOpacity>
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
        justifyContent: 'center',
    },
    button_image: {
        width: 180,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default MenuPage
