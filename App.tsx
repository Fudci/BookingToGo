import React from 'react'
import StackNavigator from '@navigators/Stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@helpers/Navigate'
import { Provider } from 'react-redux'
import { store } from 'src/Store/store'

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer ref={navigationRef} >
        <StackNavigator />
      </NavigationContainer>
    </Provider>


  )
}

export default App