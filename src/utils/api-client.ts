import axios from "axios";
import { getSession } from "next-auth/react";

import config from "./ipro-fix-config";
import { auth } from "@/auth";

const defaultOptions = {
  baseURL: config.NEXT_PUBLIC_IPRO_FIX_BASE_URL
};

const getAuthApiClient = () => {
  const httpClient = axios.create(defaultOptions);
  httpClient.interceptors.request.use(
    async (request) => {
      if (typeof window === "undefined") {
        const session = await auth();
        request.headers.Authorization = `Bearer ${session?.user.access_token ?? ""}`;
      } else {
        const session = await getSession();
        request.headers.Authorization = `Bearer ${session?.user.access_token ?? ""}`;
      }

      return request;
    },
    (error) => {
      console.error(`Failed to send request [${error.message}]: ${error.config.url}`);
      return Promise.reject(error);
    }
  );

  httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
      // Let callers handle the error — actions/components format it via
      // getFormattedError and surface field/form messages, and 401 handling
      // lives in the profile context. Here we only log and re-reject.
      const context = typeof window === "undefined" ? "server" : "client";
      console.error(
        `Failed to receive response [${error?.message}] on ${context}: ${error?.config?.url}`
      );
      return Promise.reject(error);
    }
  );

  return httpClient;
};

export { getAuthApiClient };
