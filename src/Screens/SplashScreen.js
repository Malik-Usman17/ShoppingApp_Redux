import { StyleSheet, View, Image } from 'react-native';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';


const SplashScreen = ({navigation}) => {

  const isLogin = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    setTimeout(() => {
      if(isLogin == false){
        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: 'Login'}]}))
      }
      else{
        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: 'Product'}]}))
      }
    }, 1000)
  }, [])

  // useEffect(() => {
  //   fetch('https://redux-http-b0650-default-rtdb.firebaseio.com/cartItems.json',
  //   {
  //     method: 'PUT',
  //     body: JSON.stringify(cart)
  //   }
  //   )
  // }, [cart])

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} resizeMode='contain' style={styles.image}/>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    backgroundColor: '#4ba0da',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    height: 250,
    width: 250
  }
});



export default SplashScreen;