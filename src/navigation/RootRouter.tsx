import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Main, UserInfo } from '../screens'
import { RootStackScreens, TRootStack } from './types'

const Stack = createNativeStackNavigator<TRootStack>()

export const RootRouter = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name={RootStackScreens.Main}
        component={Main}
        options={{ title: 'Github Searcher' }}
      />
      <Stack.Screen
        name={RootStackScreens.UserInfo}
        component={UserInfo}
        options={{ title: 'Github Searcher' }}
      />
    </Stack.Navigator>
  )
}
