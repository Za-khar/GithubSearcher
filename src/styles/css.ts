import { RFValue } from 'react-native-responsive-fontsize'
import { COLORS } from './colors'
import { DIMENSIONS } from './dimensions'
import {
  TCSSConstructor,
  TFlexConstructorArgs,
  TFontConstructorArgs,
} from './types'

export const FLEX: TCSSConstructor<TFlexConstructorArgs> = ({
  direction = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'nowrap',
}) => {
  return `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
  `
}

export const FONT: TCSSConstructor<TFontConstructorArgs> = ({
  size = 20,
  color = COLORS.black,
  weight = '400',
  transform = 'none',
}) => {
  return `
      text-transform: ${transform};
      font-weight:${weight}
      font-family: 'Roboto';
      font-size: ${RFValue(size, DIMENSIONS.window.height)}px;
      color: ${color};
    `
}
