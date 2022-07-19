import { FLEX } from './../../styles/css'
import { COLORS } from './../../styles/colors'
import styled from 'styled-components/native'

export const StyledInput = styled.TextInput`
  padding: 6px 8px;
  border-radius: 10px;
  width: 90%;
`

export const InputContainer = styled.View`
  ${FLEX({ direction: 'row', justify: 'space-between' })}
  background-color: ${COLORS.white};
  border: 1px solid lightgray;
  border-radius: 10px;
`

export const ButtonWrapper = styled.TouchableOpacity`
  width: 10%;
  ${FLEX({})}
`
