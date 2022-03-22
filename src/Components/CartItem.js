import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartItem = ({ product, price, totalPrice, quantity, onPressAdd, onPressMinus }) => {

  return (
    <View style={styles.cartContainer}>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/AppleLaptop.png')}
          resizeMode='contain'
          style={styles.image}
        />
      </View>

      <View style={styles.itemDetailContainer}>
        <Text style={styles.text}>{product}</Text>
        <Text style={styles.text}>{`Price: $${price}`}</Text>
        <Text style={styles.text}>{`Total Price: $${totalPrice}`}</Text>
      </View>

    <View style={{flex: 1, marginLeft: 10, alignItems: 'center'}}> 
      
      <Text style={{ ...styles.text}}>
        Quantity:
      </Text>

      <View style={styles.quantityAddContainer}>
        <AntDesign name='plussquare' size={25} color='green' onPress={onPressAdd}/>
        <Text style={{color: 'black'}}>{quantity}</Text>
        <AntDesign name='minussquare' size={25} color='red' onPress={onPressMinus}/>
      </View>  
    </View>

    </View>
  )
}



const styles = StyleSheet.create({
  // cartContainer: {
  //   backgroundColor: '#4ba0da'
  //   //backgroundColor: 'blue',
  // },
  cartContainer: {
    backgroundColor: '#4ba0da',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10
  },
  image: {
    height: 50,
    width: 50,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemDetailContainer: {
    marginLeft: 5
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  quantityAddContainer:{
    flexDirection: 'row',
    marginTop: 5, 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'space-around'
  }
});



export default CartItem;