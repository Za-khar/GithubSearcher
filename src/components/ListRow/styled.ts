import { COLORS } from './../../styles/colors'
import styled from 'styled-components/native'
import { FLEX } from '../../styles'

export const ListRowWrapper = styled.TouchableOpacity`
  height: 100px;
  background-color: ${COLORS.white};
  margin-bottom: 2px;
  padding: 10px 12px;
  ${FLEX({ align: 'center', justify: 'space-between', direction: 'row' })}
`

export const MainWrapper = styled.View`
  flex: 3;
  ${FLEX({
    align: 'center',
    justify: 'flex-start',
    direction: 'row',
  })};
`

export const InfoWrapper = styled.View`
  flex: 1;
  ${FLEX({ align: 'flex-start', justify: 'center', direction: 'column' })}
`

export const InfoRow = styled.View`
  ${FLEX({ align: 'flex-start', justify: 'center', direction: 'row' })}
`
