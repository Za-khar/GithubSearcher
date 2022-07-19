import { TUserBase } from './../../models/User'

export type TSearchUsersResponse = {
  total_count: number
  incomplete_results: boolean
  items: Array<TUserBase>
}

export type TSearchUsersRequest = {
  limit?: number
  page: number
  name: string
}

export type TGetRepoRequest = {
  reposUrl: string
}

export type TGetUserRequest = {
  userUrl: string
}

export type TSearchRepoRequest = {
  searchText: string
}

export enum SearchUsersMode {
  REFRESH = 'refresh',
  LOAD_MORE = 'loadMore',
}
