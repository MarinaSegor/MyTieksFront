import React from 'react'
import { View, Text, Image } from 'react-native'
import Animated, { interpolateNode } from 'react-native-reanimated'
import Svg, { Line } from 'react-native-svg'

 function LogoContainer({arrowOpacityAnimation}) {

    const opacity = interpolateNode(arrowOpacityAnimation, {
        inputRange: [0, 1],
        outputRange: [0, 1],
      })

    const translateY = interpolateNode(arrowOpacityAnimation, {
    inputRange: [0, 1],
    outputRange: [0, 360],
    })

    return (
        <Animated.View style={{
                height: 100, 
                width: '50%', 
                marginTop: 60, 
                justifyContent: 'space-evenly', 
                alignItems: 'center',
                position: 'absolute',
                transform: [{translateY}],
                opacity: opacity, 
                }}>

            <View style={{flexDirection: 'row'}}>
                <Svg height= "100%" width= "50%">
                    <Line 
                    x1="20" 
                    y1="10" 
                    x2="90" 
                    y2="10" 
                    stroke="#9e9e9e" 
                    strokeWidth={1}/>
                </Svg>

                <Text style={{color: '#C7C7C7'}}>ou</Text>

                <Svg height= "100%" width= "50%">
                    <Line 
                    x1="10" 
                    y1="10" 
                    x2="80" 
                    y2="10" 
                    stroke="#9e9e9e" 
                    strokeWidth={1}/>
                </Svg>
            </View>
            <View 
                style={{
                    width: '100%', 
                    flexDirection: 'row', 
                    justifyContent: 'space-around', 
                    alignItems: 'center'
                    }}>
                <View 
                    style={{
                        backgroundColor: '#E4FCFF', 
                        width: 35,
                        height: 35,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 8
                    }}>

                    <Image 
                    source={require("../assets/facebookpng.png")} 
                    style={{width: 30, height: 30, borderRadius: 5}} />
                </View>
            </View>
        </Animated.View>
    )
}

export default LogoContainer;