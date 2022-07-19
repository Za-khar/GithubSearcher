import { FLEX } from './../../styles/css'
import { COLORS } from './../../styles/colors'
import FastImage from 'react-native-fast-image'
import styled from 'styled-components/native'

export const AvatarImage = styled(FastImage)<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${COLORS.white};
  border-radius: 3px;
`

export const AvatarWrapper = styled.View<{
  width: number
  height: number
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${FLEX({ align: 'center', justify: 'center' })}
  border-radius: 3px;
`

export const AvatarLoading = styled.ActivityIndicator`
  position: absolute;
`
