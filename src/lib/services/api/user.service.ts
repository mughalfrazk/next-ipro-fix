import { RegisterFormWithSpecialityModel } from "@/lib/models/auth.model";
import { ProblemTypeModel } from "@/lib/models/problem-type.model";
import {
  ProfileSchema,
  ProfileListSchema,
  UserByRoleType,
  UserListSchema,
  UpdateUserTechPayloadModel
} from "@/lib/models/user.model";
import { RoleTypes } from "@/types/roles.types";
import { getAuthApiClient } from "@/utils/api-client";
import { getRoleNiceName } from "@/utils/functions";
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

const getUserListByRoleApi = async (problem_type: ProblemTypeModel) => {
  const result = await getAuthApiClient().get("user");
  const users = ProfileListDataParser(result.data);

  const remappedUser: UserByRoleType = [];

  const filteredRoles = [RoleTypes.SUPER_ADMIN, RoleTypes.ADMIN, RoleTypes.ACCOUNTANT]

  for (let i = 0; i < users.length; i++) {
    let newEntry = true;
    if (filteredRoles.includes(users[i].role.name)) { continue; }
    if (users[i].role.name === RoleTypes.TECHNICIAN && users[i]?.speciality?.id !== problem_type.id) {
      continue;
    }

    remappedUser.map((item) => {
      if (item.name === users[i].role.name) {
        newEntry = false;
        item.user.push({
          id: users[i].id,
          first_name: users[i].first_name,
          last_name: users[i].last_name
        });
      }

      return item;
    });

    if (newEntry) {
      remappedUser.push({
        id: users[i].role.id,
        name: getRoleNiceName(users[i]).toUpperCase(),
        user: [
          {
            id: users[i].id,
            first_name: users[i].first_name,
            last_name: users[i].last_name
          }
        ]
      });
    }

  }

  return remappedUser;
};

const getUserDetailApi = async (id: string) => {
  const result = await getAuthApiClient().get(`user/${id}`);
  return ProfileDataParser(result.data);
};

const createUserApi = async (payload: Partial<RegisterFormWithSpecialityModel>) => {
  const result = await getAuthApiClient().post("auth/create-user", payload);
  return result;
};

const updateUserApi = async (id: string, payload: UpdateUserTechPayloadModel) => {
  const result = await getAuthApiClient().patch(`user/${id}`, payload);
  return result;
};

export {
  getProfileApi,
  getTechniciansApi,
  getUserListByRoleApi,
  getUserListApi,
  getUserDetailApi,
  createUserApi,
  updateUserApi
};
