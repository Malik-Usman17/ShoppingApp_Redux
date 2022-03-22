import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      
    <View style={styles.container}/>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    backgroundColor: 'green',
    position: 'absolute',
    top: '50%',
    right: '50%',
    left: '50%',
    bottom: '50%', 
    height: 20, 
    width: 20
  }
});



export default Test;