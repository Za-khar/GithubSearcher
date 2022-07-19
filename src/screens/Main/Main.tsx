import React, { FC, useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Divider, Input, Text } from '../../components'
import { ListRow } from '../../components/ListRow/ListRow'
import {
  useTypeDispatch,
  useTypeNavigation,
  useTypeSelector,
} from '../../hooks/redux'
import { TUserBase } from '../../models'
import { searchUsers } from '../../store/github/actionCreator'
import { clearUsers } from '../../store/github/userSlice'
import { InputContainer } from './styled'
import _ from 'lodash'
import { RootStackScreens } from '../../navigation/types'

export const Main: FC = () => {
  const navigation = useTypeNavigation()
  const dispatch = useTypeDispatch()
  const [page, setPage] = useState<number>(1)
  const { users, isLoading } = useTypeSelector(state => state.users)
  const [searchValue, setSearchValue] = useState<string>('')

  const [refresh, setRefresh] = useState<boolean>(false)

  const onSearch = useCallback(
    _.debounce(() => {
      setPage(1)
      setRefresh(!refresh)
    }, 500),
    [refresh],
  )

  const onValueChange = (value: string) => {
    setSearchValue(value)
    onSearch()
  }

  const onRefresh = () => {
    dispatch(clearUsers())
    setPage(1)
    setRefresh(!refresh)
  }

  useEffect(() => {
    searchValue
      ? dispatch(searchUsers({ page, name: searchValue }))
      : dispatch(clearUsers())
  }, [page, refresh])

  const onPressItem = (data: TUserBase) => {
    navigation.navigate(RootStackScreens.UserInfo, { user: data })
  }

  const clear = () => {
    setSearchValue('')
    onSearch()
  }

  return (
    <>
      <InputContainer style={styles.inputWrapper}>
        <Input
          value={searchValue}
          onChangeText={onValueChange}
          placeholder={'Search users'}
          onClear={clear}
        />
      </InputContainer>
      <Divider height={1} />
      <FlatList
        onEndReached={() => {
          setPage(page + 1)
        }}
        onEndReachedThreshold={0.2}
        onRefresh={onRefresh}
        refreshing={isLoading}
        data={users}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <ListRow
            photo={item.avatar_url}
            title={item.login}
            info={[]}
            onPress={() => onPressItem(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text color="grey" style={styles.emptyListText}>
            {searchValue
              ? 'No results found'
              : 'Enter information about the user to start the search'}
          </Text>
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    elevation: 1,
  },
  emptyListText: {
    marginTop: 20,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
  },
})
