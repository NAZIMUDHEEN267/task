import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import MainNavigator from './src/navigation';

function SplashCard() {
  // useEffect(() => () => console.log("Splash removed"))

  return (
    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
      <Text style={{fontWeight: "600", fontSize: 30}}>Splash screen</Text>
    </View>
  )
}

const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 3000)
  }
    , []);

  return show ? <SplashCard /> : <MainNavigator />;
};

export default App;
