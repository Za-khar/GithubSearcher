import { ScaledSize } from 'react-native'

export type TCSSConstructor<T> = (props: T) => string

export type TFlexDirectionVariants =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'

export type TFlexAlignVariants =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

export type TFlexJustifyVariants =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end'

export type TFlexWrapVariants = 'wrap' | 'nowrap'

export type TFlexConstructorArgs = {
  wrap?: TFlexWrapVariants
  align?: TFlexAlignVariants
  justify?: TFlexJustifyVariants
  direction?: TFlexDirectionVariants
}

export type TFontWeight = '300' | '400' | '500' | '700'

export type TFontTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase'

export type TFontConstructorArgs = {
  size?: number
  color?: string
  weight?: TFontWeight
  transform?: TFontTransform
}

export type TDimenstions = {
  screen: ScaledSize
  window: ScaledSize
}
