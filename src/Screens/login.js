import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import { CommonActions } from '@react-navigation/native';

const Login = ({navigation}) => {

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      
      <View style={styles.innerContainer}>
        
        <Text style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>LOGIN</Text>

        <TextInput
          placeholder='Email Id' 
          style={styles.textField}
        />

        <TextInput
          placeholder='Password' 
          style={styles.textField}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            dispatch(authActions.login())
            navigation.dispatch(CommonActions.reset({index:0, routes:[{name: 'Product'}]}))
          }}
        >
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOGIN</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  innerContainer:{
    backgroundColor: 'green',
    padding: 10,
    width: '100%'
  },
  textField:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20
  },
  button:{
    backgroundColor: 'blue', 
    alignItems: 'center', 
    paddingVertical: 10, 
    marginTop: 30, 
    borderRadius: 20, 
    width: '90%', 
    alignSelf: 'center'
  }
});


export default Login;