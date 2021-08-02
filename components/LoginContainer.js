import React, { useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView} from 'react-native';
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
    <ScrollView>
       <View style={styles.container}>
      <Background/>

      {/* TITRE */}
      <View style={{
            justifyContent: 'center', 
            alignItems: 'center', 
            height: 370, 
            marginBottom: -140,
            backgroundColor: 'red'
          }}>

        <Text style={{
            fontWeight: 'bold', 
            fontSize: 50,
            color: '#fff',
          }}>
            My Tieks
        </Text>
      </View>

    {/* FLECHE RETOUR DU HAUT */}
    <PanGestureHandler {...onbackArrowGestureHandler}>
      <Animated.View style={{
            position: 'absolute', 
            top:40, 
            left:40, 
            opacity: arrowOpacityAnimation}}>
        <FontAwesome name='arrow-left' size={20} color="#ffffff"/>
      </Animated.View>
    </PanGestureHandler>
     
    {/* IMAGE */}
      <Animated.View 
        style={{
          width: '100%', 
          alignItems: 'center', 
          paddingHorizontal: 25,
          transform: [{scale: scaleAnimation}, {translateY: 40}]
          }}>
        
        <Image 
          source={require("../assets/bermuda.png")} 
          style={{width: 200, height: 130}}/>
      </Animated.View>

        <View style={{width, alignItems:'center'}}>
          <InputContainer arrowOpacityAnimation={arrowOpacityAnimation}/>
          <ButtonContainer arrowOpacityAnimation={arrowOpacityAnimation}/>
          <LogoContainer arrowOpacityAnimation={arrowOpacityAnimation}/>
        </View>


      {/* TEXTE DU BAS */}
      <Animated.View style={{
                     flexDirection: 'row', 
                     alignItems: 'flex-end', 
                     opacity: accountOpacity, 
                     height: 50, 
                     }}>

          <Text style={{fontSize: 12}}>Pas encore de compte?  </Text>

        <PanGestureHandler {...onSignUpGestureHandler}>
          <Animated.Text 
                      style={{
                      fontSize: 14, 
                      color: '#fff', 
                      fontWeight: 'bold'
                      }}>
                      S'enregistrer
          </Animated.Text>
          </PanGestureHandler>

      </Animated.View>
    </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#319E9C',
    alignItems: 'center',
  },
 
});

export default LoginContainer;