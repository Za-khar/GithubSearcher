import { FLEX } from './../../styles/css'
import { COLORS } from './../../styles/colors'
import styled from 'styled-components/native'

export const UserInfoContainer = styled.View`
  background-color: ${COLORS.white};
  padding: 16px;
`
export const UserInfoRow = styled.View`
  ${FLEX({ direction: 'row', justify: 'flex-start', align: 'center' })}
`

export const UserDataContainer = styled.View``
