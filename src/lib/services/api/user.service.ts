import {
  ProfileListSchema,
  ProfileSchema,
  UserListSchema,
} from '@/lib/models/user.model'
import { getAuthApiClient } from '@/utils/api-client'
import { parseFactory } from '@/utils/parse-factory'

const ProfileDataParser = parseFactory(ProfileSchema, 'ProfileDataParser')
const ProfileListDataParser = parseFactory(
  ProfileListSchema,
  'ProfileListDataParser',
)
const UserListDataParser = parseFactory(UserListSchema, 'UserListDataParser')

const getProfileApi = async () => {
  const result = await getAuthApiClient().get('auth/profile')
  return ProfileDataParser(result.data)
}

const getTechniciansApi = async () => {
  const result = await getAuthApiClient().get('user/technician')
  return UserListDataParser(result.data)
}

const getUserListApi = async () => {
  const result = await getAuthApiClient().get('user')
  return ProfileListDataParser(result.data)
}

export { getProfileApi, getTechniciansApi, getUserListApi }
