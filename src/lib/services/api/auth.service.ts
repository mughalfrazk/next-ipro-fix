import { LoginFormModel, LoginResponseSchema } from "@/lib/models/auth.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const LoginResponseDataParser = parseFactory(LoginResponseSchema, "LoginResponseDataParser");

const loginUserApi = async (
  payload: LoginFormModel
): Promise<{ id: string; email: string; access_token: string }> => {
  const result = await getAuthApiClient().post("auth/login", payload);
  return LoginResponseDataParser(result.data);
};

export { loginUserApi };
