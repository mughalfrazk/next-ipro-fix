import { RegisterFormWithSpecialityModel } from "@/lib/models/auth.model";
import { ProfileListSchema, ProfileSchema, UserByRoleType, UserListSchema } from "@/lib/models/user.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ProfileDataParser = parseFactory(ProfileSchema, "ProfileDataParser");
const ProfileListDataParser = parseFactory(ProfileListSchema, "ProfileListDataParser");
const UserListDataParser = parseFactory(UserListSchema, "UserListDataParser");

const getProfileApi = async () => {
  const result = await getAuthApiClient().get("auth/profile");
  return ProfileDataParser(result.data);
};

const getTechniciansApi = async () => {
  const result = await getAuthApiClient().get("user/technician");
  return UserListDataParser(result.data);
};

const getUserListApi = async () => {
  const result = await getAuthApiClient().get("user");
  return ProfileListDataParser(result.data);
};

const getUserListByRoleApi = async () => {
  const result = await getAuthApiClient().get("user");
  const users = ProfileListDataParser(result.data)

  let remappedUser: UserByRoleType = []

  for (let i = 0; i < users.length; i++) {
    let newEntry = true
    if (users[i].role.name !== "super_admin") {
      remappedUser.map(item => {
        if (item.name === users[i].role.name) {
          newEntry = false
          item.user.push({
            id: users[i].id,
            first_name: users[i].first_name,
            last_name: users[i].last_name,
          })
        }
  
        return item
      })
  
      if (newEntry) {
        remappedUser.push({
          id: users[i].role.id,
          name: users[i].role.name,
          user: [{
            id: users[i].id,
            first_name: users[i].first_name,
            last_name: users[i].last_name
          }]
        })
      }
    }

  }

  return remappedUser
}

const getUserDetailApi = async (id: string) => {
  const result = await getAuthApiClient().get(`user/${id}`);
  return ProfileDataParser(result.data);
};

const createUserApi = async (payload: Partial<RegisterFormWithSpecialityModel>) => {
  const result = await getAuthApiClient().post("auth/create-user", payload);
  return result;
};

export { getProfileApi, getTechniciansApi, getUserListByRoleApi, getUserListApi, getUserDetailApi, createUserApi };
