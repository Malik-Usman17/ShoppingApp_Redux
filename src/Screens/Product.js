import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { productArrays } from '../productArrays';
import ProductComponent from '../Components/ProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { authActions } from '../store/authSlice';
import { CommonActions } from '@react-navigation/native';
// import { cartActions } from '../store/cartSlice';
// import { cartActions } from '../store/cartSlice';

const Product = ({navigation}) => {

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(cartActions.setShowCart());
  }

  
  const cartItems = useSelector((state) => state.cart.itemList);
  //console.log('Cart Items:',cartItems)

  const renderComponent = ({item}) => {
    return(
      <ProductComponent
        id={item.id} 
        name={item.name}
        price={item.price}
        image={require('../../assets/AppleLaptop.png')}
        //onPress={addToCart}
      />
    )
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
        <Text>{`My Cart: ${quantity}`}</Text>
      </TouchableOpacity>

      <MaterialIcons 
        name='logout' 
        size={35} 
        color='black'
        onPress={() => {
          dispatch(authActions.logOut())
          navigation.dispatch(CommonActions.reset({index:0, routes:[{name: 'Login'}]}))
        }}
      />

      <Text style={styles.heading}>
        My Products
      </Text>

      <FlatList 
        data={productArrays}
        renderItem={renderComponent}
        keyExtractor={(key, index) => index.toString()}
      />
      
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center'
  },
  heading:{
    fontSize: 22, 
    width: '80%', 
    textAlign: 'center', 
    color: 'white', 
    fontWeight: 'bold', 
    marginTop: 20, 
    backgroundColor: 'black'
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


export default Product;