import { TUser } from './../../models/User'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  SearchUsersMode,
  TGetRepoRequest,
  TGetUserRequest,
  TSearchUsersRequest,
  TSearchUsersResponse,
} from './types'
import { axiosInstance } from '../../utils'
import { Alert } from 'react-native'

export const searchUsers = createAsyncThunk(
  'user/search',
  async ({ page, name, limit = 10 }: TSearchUsersRequest, thunkAPI) => {
    try {
      const response = await axiosInstance.get<TSearchUsersResponse>(
        `search/users?q=${name}&page=${page}&per_page=${limit}&sort=joined`,
      )

      return {
        type: page === 1 ? SearchUsersMode.REFRESH : SearchUsersMode.LOAD_MORE,
        users: response.data.items,
      }
    } catch (e) {
      e?.response?.status === 403 &&
        Alert.alert('Too many requests. Please wait a few moment!')
      return thunkAPI.rejectWithValue('Search users error')
    }
  },
)

export const getRepos = createAsyncThunk(
  'user/repo',
  async ({ reposUrl }: TGetRepoRequest, thunkAPI) => {
    try {
      const response = await axios.get<TSearchUsersResponse>(reposUrl)

      return response.data
    } catch (e) {
      e?.response?.status === 403 &&
        Alert.alert('Too many requests. Please wait a few moment!')
      return thunkAPI.rejectWithValue('Get repos error')
    }
  },
)

export const getUser = createAsyncThunk(
  'user/fullInfo',
  async ({ userUrl }: TGetUserRequest, thunkAPI) => {
    try {
      const response = await axios.get<TUser>(userUrl)

      return response.data
    } catch (e) {
      e?.response?.status === 403 &&
        Alert.alert('Too many requests. Please wait a few moment!')
      return thunkAPI.rejectWithValue('Get user error')
    }
  },
)
