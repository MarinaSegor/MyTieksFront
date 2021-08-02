import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Animated, { interpolateNode } from 'react-native-reanimated';


const {width, height} = Dimensions.get('window');

 function ButtonContainer({arrowOpacityAnimation}) {

    const loginOpacity = interpolateNode(arrowOpacityAnimation, {
        inputRange: [0, 1],
        outputRange: [1, 0]
    })

    const signUpOpacity = interpolateNode(arrowOpacityAnimation, {
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    return (
        <View style={styles.container}>
            
            <Animated.View style={{
                justifyContent: 'center', 
                alignItems:'center', 
                opacity: loginOpacity, 
                width:'70%',
                height: 50,
                backgroundColor: '#7BE2DD', 
                elevation: 8,
                borderRadius: 20,
                }}>

                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                    Se connecter
                </Text>
            </Animated.View>

            <Animated.View style={{
                
                justifyContent: 'center', 
                alignItems:'center', 
                opacity: signUpOpacity, 
                width:'70%',
                height: 50,
                backgroundColor: '#4E73B9', 
                elevation: 8,
                borderRadius: 20,
                position: 'absolute',
                
                }}>

                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                    S'enregistrer
                </Text>
            </Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 40,
        width,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
});

export default ButtonContainer;