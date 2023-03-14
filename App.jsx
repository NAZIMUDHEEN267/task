import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import MainNavigator from './src/navigation';

function SplashCard() {
  return <View />;
}

const App = () => {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setShow(!show), 3000)
    
  //   return () => {}
  // }
  //   , []);

  return show ? <SplashCard /> : <MainNavigator />;
};

export default App;
