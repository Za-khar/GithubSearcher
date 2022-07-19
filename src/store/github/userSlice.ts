import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser, TRepo, TUserBase } from '../../models'
import { getRepos, getUser, searchUsers } from './actionCreator'
import { SearchUsersMode, TSearchRepoRequest } from './types'

type UserState = {
  users: Array<TUserBase>
  repos: Array<TRepo>
  currentUser: null | TUser
  searchedRepos: Array<TRepo>
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  repos: [],
  currentUser: null,
  searchedRepos: [],
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    clearUsers: state => {
      state.users = []
    },
    clearRepo: state => {
      state.repos = []
      state.searchedRepos = []
    },
    clearUser: state => {
      state.currentUser = null
    },
    searchRepos: (state, { payload }: PayloadAction<TSearchRepoRequest>) => {
      if (!payload.searchText.length) {
        state.searchedRepos = state.repos
      } else {
        const re = new RegExp('^' + payload.searchText, 'i')

        state.searchedRepos = state.repos.filter(el => el.name.search(re) != -1)
      }
    },
  },
  extraReducers: {
    [searchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<{ type: SearchUsersMode; users: TUserBase[] }>,
    ) => {
      state.isLoading = false
      state.error = ''
      state.users =
        action.payload.type === SearchUsersMode.REFRESH
          ? action.payload.users
          : [...state.users, ...action.payload.users]
    },
    [searchUsers.pending.type]: state => {
      state.isLoading = true
    },
    [searchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [getRepos.fulfilled.type]: (state, action: PayloadAction<Array<TRepo>>) => {
      state.isLoading = false
      state.error = ''
      state.repos = action.payload
      state.searchedRepos = action.payload
    },
    [getRepos.pending.type]: state => {
      state.isLoading = true
    },
    [getRepos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [getUser.fulfilled.type]: (state, action: PayloadAction<TUser>) => {
      state.isLoading = false
      state.error = ''
      state.currentUser = action.payload
    },
    [getUser.pending.type]: state => {
      state.isLoading = true
    },
    [getUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { clearUsers, clearRepo, searchRepos, clearUser } =
  userSlice.actions
export default userSlice.reducer
