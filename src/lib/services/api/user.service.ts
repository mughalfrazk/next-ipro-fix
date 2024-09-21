import { ProfileSchema } from "@/lib/models/user.model"
import { getAuthApiClient } from "@/utils/api-client"
import { parseFactory } from "@/utils/parse-factory"

const ProfileDataParser = parseFactory(ProfileSchema, "ProfileDataParser")

const getProfileApi = async () => {
  const result = await getAuthApiClient().get("auth/profile")
  return ProfileDataParser(result.data)
}

export { getProfileApi }