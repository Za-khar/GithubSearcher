import { NavigationProp } from '@react-navigation/native'
import { TUserBase } from './../models/User'

export type TRootStack = {
  Main: undefined
  UserInfo: { user: TUserBase }
}
export enum RootStackScreens {
  Main = 'Main',
  UserInfo = 'UserInfo',
}

export type RootScreenNavigationProp = NavigationProp<TRootStack>
