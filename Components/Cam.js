import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

const Cam =() => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()

    }
    return(
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}  ref={(r) => {camera = r}}>
                <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:20}}>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                        }}>
                        <Ionicons
                            name="images-outline"
                            style={{ color: "#fff", fontSize: 40}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                        }}
                        onPress={__takePicture}
                    >
                        <FontAwesome
                            name="camera"
                            style={{ color: "#fff", fontSize: 40}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                        }}
                        onPress={()=> {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        } }
                    >
                        <MaterialCommunityIcons
                            name="camera-switch"
                            style={{ color: "#fff", fontSize: 40}}
                        />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});


export default Cam
