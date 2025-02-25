"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { ProfileWithNotificationsModel } from "@/lib/models/user.model";
import { getProfileApi } from "@/lib/services/api/user.service";
import { getFormattedError } from "@/utils/format-error";
import { logoutAction } from "@/lib/actions/auth.action";
import { showErrorNotification } from "@/utils/functions";
import { Box, LoadingOverlay } from "@mantine/core";
import { useZIndex } from "@/hooks/use-z-index";

const defaultProfileValues = {
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  target: null,
  progress: null,
  is_active: false,
  is_verified: false,
  created_at: "",
  updated_at: "",
  deleted_at: null,
  role: {
    id: "",
    name: "",
    created_at: "",
    updated_at: "",
    deleted_at: null
  },
  company: {
    id: "",
    name: "",
    logo: null,
    created_at: "",
    updated_at: "",
    deleted_at: null
  },
  user_notifications: []
};

type ProfileContextType = {
  loading: boolean;
  data: ProfileWithNotificationsModel;
  updateProfile: () => void;
};

const ProfileContext = createContext<ProfileContextType>({
  loading: false,
  data: defaultProfileValues,
  updateProfile: () => {}
});

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const z = useZIndex();
  const [profile, setProfile] = useState<ProfileWithNotificationsModel>(defaultProfileValues);
  const [loading, setLoading] = useState<boolean>(true);

  const getUserProfile = async () => {
    setLoading(true);
    try {
      const profile = await getProfileApi();
      setProfile(profile);
    } catch (error) {
      if (getFormattedError(error)?.errors?.formErrors?.[0]?.split(":")[0] === "401") {
        showErrorNotification("Session is ended, please login again.");
        logoutAction();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!profile.id) getUserProfile();
  }, [profile]);

  return (
    <ProfileContext.Provider value={{ loading, data: profile, updateProfile: getUserProfile }}>
      <Box pos="relative">
        <LoadingOverlay
          visible={loading}
          overlayProps={{ radius: "lg", blur: 10 }}
          loaderProps={{ type: "dots", size: "xl" }}
          zIndex={z.tooltip}
        />
        {children}
      </Box>
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
export const useProfileContext = () => useContext(ProfileContext);
