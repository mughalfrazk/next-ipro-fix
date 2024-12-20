import { CreateCommentPayloadModel } from "@/lib/models/comment.model";
import { getAuthApiClient } from "@/utils/api-client";

const createCommentApi = async (payload: CreateCommentPayloadModel) => {
  const result = await getAuthApiClient().post("comment", payload);
  return result;
};

export { createCommentApi };
