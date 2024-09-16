import { LoginFormModel } from "@/lib/models/auth.model"
import { getAuthApiClient } from "@/utils/api-client"

const loginUserApi = async (payload: LoginFormModel): Promise<{ id: string, email: string, access_token: string }> => {
  const result = await getAuthApiClient().post("auth/login", payload)
  return result.data
}

export { loginUserApi }