import React, { FC } from 'react'
import { ButtonWrapper, InputContainer, StyledInput } from './styled'
import { TInputProps } from './types'
import * as Icons from '../../assets/assets'

export const Input: FC<TInputProps> = ({ onClear, ...textInputProps }) => {
  const ClearIcon = Icons['Clear']
  return (
    <InputContainer>
      <StyledInput {...textInputProps} />
      {!!textInputProps?.value && (
        <ButtonWrapper onPress={() => onClear?.()}>
          <ClearIcon width={24} height={24} />
        </ButtonWrapper>
      )}
    </InputContainer>
  )
}
