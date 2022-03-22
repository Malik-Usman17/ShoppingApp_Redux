import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const ProductComponent = ({name, price, image, onPress, id}) => {

  // const cartItems = useSelector((state) => state.cart.itemList);
  // console.log('Cart Items:',cartItems)

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))
  }

  return (
    <View style={styles.container}>
      
      <Image source={image} resizeMode='contain' style={styles.image}/>

      <Text style={styles.title}>{name}</Text>

      <Text style={styles.price}>{`$ ${price}`}</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={addToCart}
      >
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    //backgroundColor: 'gray',
    margin: 20,
    padding: 12,
    alignItems: 'center',
    marginTop: 40
  },
  image:{
    height: 120,
    width: 180
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  buttonText:{
    fontSize: 18,
    color: 'white'
  },
  button:{
    marginTop: 10,
    backgroundColor: 'black',
    padding: 8
  },
  price:{
    fontWeight: 'bold',
    color: 'blue'
  }
});


export default ProductComponent;