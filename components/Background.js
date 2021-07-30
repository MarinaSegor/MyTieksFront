import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Svg, { Circle } from 'react-native-svg';

const {width, height} = Dimensions.get('window');


 function Background() {
    return (
        <View style={[StyleSheet.container,{...StyleSheet.absoluteFill}]}>
            <Svg height="100%" width="100%">
                <Circle cx="-10" cy="0" r="120" fill="#7BE2DD"/>
                <Circle cx="440" cy="850" r="120" fill="#3CBAB2"/>
            </Svg>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
    },
});

export default Background;