import { useNavigation } from '@react-navigation/native'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootScreenNavigationProp } from '../navigation/types'
import { AppDispatch, RootState } from '../store/store'

export const useTypeDispatch = () => useDispatch<AppDispatch>()
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypeNavigation = () => useNavigation<RootScreenNavigationProp>()
