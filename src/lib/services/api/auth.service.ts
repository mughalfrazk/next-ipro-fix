import { LoginFormModel } from "@/lib/models/auth.model"
import { getAuthApiClient } from "@/utils/api-client"

const loginUserApi = async (payload: LoginFormModel): Promise<{ id: string, email: string, access_token: string }> => {
  console.log("payload: ", payload)
  const result = await getAuthApiClient().post("auth/login", payload)
  console.log("result: ", result.data)
  return result.data
}

export { loginUserApi }