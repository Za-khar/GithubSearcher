import React, { FC, useState } from 'react'
import { AvatarImage, AvatarLoading, AvatarWrapper } from './styled'
import { AvatarTypes, TAvatarProps } from './types'

export const Avatar: FC<TAvatarProps> = React.memo(
  ({ uri, type = AvatarTypes.SMALL }) => {
    const [isLoad, setIsLoad] = useState<boolean>(false)

    const size =
      type === AvatarTypes.SMALL
        ? { width: 80, height: 80 }
        : { width: 150, height: 150 }

    const startLoad = () => {
      setIsLoad(true)
    }

    const onLoad = () => {
      setIsLoad(false)
    }
    return (
      <>
        <AvatarWrapper {...size}>
          <AvatarImage
            source={{ uri }}
            {...size}
            resizeMode="center"
            onLoadStart={startLoad}
            onLoad={onLoad}
          />
          {isLoad && <AvatarLoading color="blue" />}
        </AvatarWrapper>
      </>
    )
  },
)
