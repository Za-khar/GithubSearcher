import React, { FC } from 'react'
import { DIMENSIONS } from '../../styles'
import { Avatar } from '../Avatar'
import { Divider, Text } from '../Styled'
import { MainWrapper, InfoWrapper, ListRowWrapper } from './styled'
import { TListRowProps } from './types'

export const ListRow: FC<TListRowProps> = ({ photo, title, info, onPress }) => {
  return (
    <ListRowWrapper
      activeOpacity={onPress ? 0.8 : 1}
      onPress={() => onPress?.()}>
      <MainWrapper>
        {!!photo && <Avatar uri={photo} />}
        <Divider width={10} />
        <Text maxWidth="60%">{title}</Text>
      </MainWrapper>
      {!!info && (
        <InfoWrapper>
          {info.map(item => (
            <Text key={item}>{item}</Text>
          ))}
        </InfoWrapper>
      )}
    </ListRowWrapper>
  )
}
