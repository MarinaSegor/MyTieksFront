import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import {Feather} from '@expo/vector-icons';
import Animated, { interpolateNode } from 'react-native-reanimated';



function InputContainer({arrowOpacityAnimation}) {

    const confirmPasswordY = interpolateNode(arrowOpacityAnimation, {
        inputRange: [0, 1],
        outputRange: [-60 , 0]
    })

    const pseudoY = interpolateNode(arrowOpacityAnimation, {
        inputRange: [0, 1],
        outputRange: [60 , 0]
    })


    return (
        // translateY: -10 fait monter l'input email, 10 fait descendre
        <View style={[styles.container, {transform: [{translateY: 0 }]}]}>
           

                <Animated.View 
                    style={{
                        backgroundColor: '#FFFFFF', 
                        height: 50, 
                        flexDirection: 'row', 
                        alignItems:'center',
                        borderRadius: 40,
                        paddingHorizontal: 20,
                        elevation: 8,
                        opacity: 1,
                        transform: [{translateY: pseudoY}],
                        zIndex: -1
                        }}>
                    
                            <Feather name="mail" color="black" size={25}/>
                            <TextInput 
                                placeholder="Pseudo" 
                                style={{marginLeft: 8, 
                                fontWeight: 'bold'}}/>
                </Animated.View >

                <View 
                    style={{
                        backgroundColor: '#FFFFFF', 
                        height: 50, 
                        flexDirection: 'row', 
                        alignItems:'center',
                        borderRadius: 40,
                        paddingHorizontal: 20,
                        elevation: 8,
                        }}>
                    
                            <Feather name="mail" color="black" size={25}/>
                            <TextInput 
                                placeholder="Email"
                                style={{marginLeft: 5, 
                                fontWeight: 'bold'}}/>
                </View>
            
                <View 
                    style={{
                        backgroundColor: '#FFFFFF', 
                        height: 50, 
                        flexDirection: 'row', 
                        alignItems:'center',
                        justifyContent: 'space-between',
                        borderRadius: 40,
                        paddingHorizontal: 20,
                        elevation: 8,
                        }}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Feather name="lock" color="black" size={25}/>
                            <TextInput 
                                placeholder="mot de passe"
                                style={{marginLeft: 6, 
                                fontWeight: 'bold',
                                flexWrap: 'nowrap',
                                }}/>
                    
                        </View>
                
                            <Feather name="eye" color="black" size={20}/>

                </View> 


                <Animated.View 
                    style={{
                        backgroundColor: '#FFFFFF', 
                        height: 50, 
                        flexDirection: 'row', 
                        alignItems:'center',
                        justifyContent: 'space-between',
                        borderRadius: 40,
                        paddingHorizontal: 20,
                        elevation: 8,
                        opacity: 1,
                        transform: [{translateY: confirmPasswordY}],
                        zIndex: -1
                        }}>
                    
                    <View style={{flexDirection: 'row'}}>
                            <Feather name="lock" color="black" size={25}/>
                            <TextInput 
                                placeholder="Confirmer mot de passe" 
                                style={{marginLeft: 5, 
                                fontWeight: 'bold'}}/>
                    </View>

                            <Feather name="eye" color="black" size={20}/>
                </Animated.View >


        

         

 

             

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        width: '75%',
        height: 240,
        justifyContent: 'space-between',
    }
});

export default InputContainer;