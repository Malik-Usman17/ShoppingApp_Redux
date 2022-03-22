import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {useEffect} from "react";
import Login from "./src/Screens/login";
import Product from "./src/Screens/Product";
import CartScreen from "./src/Screens/CartScreen";
import SplashScreen from "./src/Screens/SplashScreen";
import Test from "./src/Screens/Test";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./src/store/ui_Slice";

const {Screen, Navigator} = createNativeStackNavigator();


const Navigation = () => {

  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  
  const dispatch = useDispatch();

  useEffect(() => {

    const sendRequest = async () => {

      dispatch(uiActions.showNotifications({
        open: true,
        message: "Sending Request",
        type: 'warning'
      }))

      const res = await fetch('https://redux-http-b0650-default-rtdb.firebaseio.com/cartItems.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      }
      );

      const data = await res.json();

      dispatch(uiActions.showNotifications({
        open: true,
        message: "Send Request To Database Successfully",
        type: 'success'
      }));

    }

    sendRequest().catch(err => {
      dispatch(uiActions.showNotifications({
        open: true,
        message: "Sending Request Failed",
        type: 'error'
      }))
    });

  }, [cart])

  return(
    <Navigator 
      initialRouteName="SplashScreen" 
      //screenOptions={{headerShown: false}}
    >
      
      <Screen name={"Login"} component={Login}/>
      <Screen name={'Product'} component={Product} />
      <Screen name={'CartScreen'} component={CartScreen} options={{title: 'Shopping Cart'}}/>
      <Screen name={'SplashScreen'} component={SplashScreen} options={{headerShown: false}}/>
      <Screen name={'Test'} component={Test} />
    </Navigator>
  )
}


export default Navigation;