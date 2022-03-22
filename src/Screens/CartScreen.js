import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../Components/CartItem';
import { cartActions } from '../store/cartSlice';

const CartScreen = () => {
  
  let totalPrice = 0
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.itemList);
  
  cartItems.forEach(val => {
    totalPrice = totalPrice + val.totalPrice
  });

  return (
    <View style={styles.container}>

      {
        cartItems.map((val, index) => (
          <View key={index} style={{marginTop: 8}}>
          <CartItem 
            product={val.name}
            price={val.price}
            totalPrice={val.totalPrice}
            quantity={val.quantity}
            onPressAdd={() => {
              dispatch(cartActions.addToCart({
                name: val.name,
                id: val.id,
                price: val.price
              }))
            }}
            onPressMinus={() => {
              dispatch(cartActions.removeFromCart(val.id))
            }}
          />
          </View>
        ))
      }

      <Text style={{marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>{`Total Price: $${totalPrice}`}</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    padding: 12
  },
  
});

export default CartScreen;