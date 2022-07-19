import { RouteProp, useRoute } from '@react-navigation/native'
import { format, parseISO } from 'date-fns'
import React, { FC, useEffect, useState, useMemo } from 'react'
import { FlatList, Linking, StyleSheet } from 'react-native'
import { Avatar, Divider, Input, ListRow, Text } from '../../components'
import { AvatarTypes } from '../../components/Avatar/types'
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux'
import { RootStackScreens, TRootStack } from '../../navigation/types'
import { getRepos, getUser } from '../../store/github/actionCreator'
import { clearRepo, clearUser, searchRepos } from '../../store/github/userSlice'
import { UserDataContainer, UserInfoContainer, UserInfoRow } from './styled'

export const UserInfo: FC = () => {
  const {
    params: { user },
  } = useRoute<RouteProp<TRootStack, RootStackScreens.UserInfo>>()

  const dispatch = useTypeDispatch()
  const { currentUser, searchedRepos, isLoading } = useTypeSelector(
    state => state.users,
  )
  const [searchValue, setSearchValue] = useState<string>('')

  const onValueChange = (value: string) => {
    setSearchValue(value)
  }

  useEffect(() => {
    dispatch(searchRepos({ searchText: searchValue }))
  }, [searchValue])

  useEffect(() => {
    dispatch(getUser({ userUrl: user.url }))
    dispatch(getRepos({ reposUrl: user.repos_url }))
    return () => {
      dispatch(clearRepo())
      dispatch(clearUser())
    }
  }, [])

  const onPress = (data: string) => {
    try {
      Linking.openURL(data)
    } catch {}
  }

  const clear = () => {
    setSearchValue('')
  }

  const userDate = useMemo<
    Array<{ key: number; value: string | undefined | null }>
  >(() => {
    return [
      { key: 1, value: currentUser?.login },
      { key: 2, value: currentUser?.email },
      { key: 3, value: currentUser?.location },
      {
        key: 4,
        value: currentUser?.created_at
          ? format(parseISO(currentUser.created_at), 'PP')
          : null,
      },
      { key: 5, value: `${currentUser?.followers ?? 0} Followers` },
      { key: 6, value: `Following ${currentUser?.following ?? 0}` },
    ]
  }, [currentUser])

  return (
    <>
      <UserInfoContainer>
        <UserInfoRow>
          <Avatar type={AvatarTypes.LARGE} uri={user.avatar_url} />
          <Divider width={16} />
          <UserDataContainer>
            {userDate
              .filter(item => !!item?.value)
              .map(item => (
                <Text key={item.key}>{item.value}</Text>
              ))}
          </UserDataContainer>
        </UserInfoRow>

        {!!currentUser?.bio && (
          <>
            <Divider height={16} />
            <Text style={styles.bioText}>{currentUser.bio}</Text>
          </>
        )}

        <Divider height={16} />

        <Input
          value={searchValue}
          onChangeText={onValueChange}
          placeholder={'Search repos'}
          onClear={clear}
        />
      </UserInfoContainer>

      <Divider height={3} />

      <FlatList
        refreshing={isLoading}
        data={searchedRepos}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <ListRow
            title={item.name}
            info={[
              `${item.forks_count} Forks`,
              `${item.stargazers_count} Start`,
            ]}
            onPress={() => onPress(item.html_url)}
          />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  bioText: {
    textAlign: 'center',
  },
})
