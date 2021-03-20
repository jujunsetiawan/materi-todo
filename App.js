import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavRoot from "./src/routes";

const App = () => {
  return(
    <NavigationContainer>
      <NavRoot/>
    </NavigationContainer>
  )
}

export default App