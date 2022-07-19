import styled from 'styled-components/native'
import { TFontTransform, TFontWeight } from '../../styles/types'
import { FONT } from '../../styles'
import { TStyledDividerProps } from './tyles'

export const Text = styled.Text<{
  size?: number
  color?: string
  weight?: TFontWeight
  transform?: TFontTransform
  maxWidth?: string
}>(
  props => `
  ${FONT({ ...props })}
  maxWidth: ${props?.maxWidth ?? '100%'}
  `,
)

export const Divider = styled.View<TStyledDividerProps>(
  ({ width, height, background }) => `
  width: ${width || 0}px;
  height: ${height || 0}px;
  background-color: ${background || 'transparent'};
`,
)
