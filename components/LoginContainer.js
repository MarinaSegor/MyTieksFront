import React, { useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Background from './Background';

import InputContainer from './InputContainer';
import ButtonContainer from './ButtonContainer';
import LogoContainer from './LogoContainer';

import {FontAwesome} from '@expo/vector-icons';
import Animated, { cond, eq, interpolateNode, set, useCode } from 'react-native-reanimated';
import {onGestureEvent, withTimingTransition} from 'react-native-redash/lib/module/v1';
import { PanGestureHandler, State } from 'react-native-gesture-handler';


const {width} = Dimensions.get('window');


 function LoginContainer() {

    ////// animation page login ////////
    const scale = useRef(new Animated.Value(0));
    const scaleAnimation = withTimingTransition(scale.current, {duration:500});

    const arrowOpacity = useRef(new Animated.Value(0));
    const arrowOpacityAnimation = withTimingTransition(arrowOpacity.current, {duration:500});

    const signUpGestureHandler = useRef(new Animated.Value(0));
    const onSignUpGestureHandler = onGestureEvent({
      state: signUpGestureHandler.current,
    })

    const backArrowGestureHandler = useRef(new Animated.Value(0));
    const onbackArrowGestureHandler = onGestureEvent({
      state: backArrowGestureHandler.current,
    })

    const accountOpacity = interpolateNode(arrowOpacityAnimation, {
      inputRange: [0, 1],
      outputRange: [1, 0]
    })

    useCode(() => set(scale.current, 1.5));
    useCode(() => cond(
      eq(signUpGestureHandler.current, State.END), 
      [set(arrowOpacity.current, 1),
      set(scale.current, 1)]
        )
      );

    useCode(() => cond(
      eq(backArrowGestureHandler.current, State.END), 
      [set(arrowOpacity.current, 0),
      set(scale.current, 1.5)]
        )
      );

      /////// Fin animation page login/////////

  return (
    <View style={styles.container}>
      <Background/>

      <View style={{
            justifyContent: 'center', 
            alignItems: 'center', 
            height: 350, 
            marginBottom: -120
          }}>

        <Text style={{
            fontWeight: 'bold', 
            fontSize: 50
          }}>
            BONJOUR
        </Text>
      </View>


    <PanGestureHandler {...onbackArrowGestureHandler}>
      <Animated.View style={{
            position: 'absolute', 
            top:40, 
            left:40, 
            opacity: arrowOpacityAnimation}}>
        <FontAwesome name='arrow-left' size={20} color="#ffffff"/>
      </Animated.View>
    </PanGestureHandler>
     
    
      <Animated.View 
        style={{
          width: '100%', 
          alignItems: 'center', 
          // height: 250,
          paddingHorizontal: 25,
          transform: [{scale: scaleAnimation}, {translateY: 40}]
          }}>
        
        <Image 
          source={require("../assets/signin.png")} 
          style={{width: 200, height: 100}}/>
      </Animated.View>

        <View style={{width, alignItems:'center'}}>
          <InputContainer arrowOpacityAnimation={arrowOpacityAnimation}/>
          <ButtonContainer arrowOpacityAnimation={arrowOpacityAnimation}/>
          <LogoContainer arrowOpacityAnimation={arrowOpacityAnimation}/>
        </View>

      <Animated.View style={{
                     flexDirection: 'row', 
                     alignItems: 'flex-end', 
                     opacity: accountOpacity, 
                     height: 90, 
                     }}>

          <Text style={{fontSize: 12}}>Pas encore de compte?  </Text>

        <PanGestureHandler {...onSignUpGestureHandler}>
          <Animated.Text 
                      style={{
                      fontSize: 14, 
                      color: '#6070FF', 
                      fontWeight: 'bold'
                      }}>
                      S'enregistrer
          </Animated.Text>
          </PanGestureHandler>

      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
 
});

export default LoginContainer;