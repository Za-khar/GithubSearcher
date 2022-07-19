import { NavigationContainer } from '@react-navigation/native'
import React, { FC } from 'react'
import { RootRouter } from './RootRouter'

export const Application: FC = () => {
  return (
    <NavigationContainer>
      <RootRouter />
    </NavigationContainer>
  )
}
