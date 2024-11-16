"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { ProfileModel } from "@/lib/models/user.model";
import { getProfileApi } from "@/lib/services/api/user.service";

const defaultProfileValues = {
  id: "",
  first_name: "",
  last_name: "",
  email: "",
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
  }
};

type ProfileContextType = {
  loading: boolean;
  data: ProfileModel;
};

const ProfileContext = createContext<ProfileContextType>({
  loading: false,
  data: defaultProfileValues
});

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileModel>(defaultProfileValues);
  const [loading, setLoading] = useState<boolean>(false);

  const getUserProfile = async () => {
    try {
      setLoading(true);
      const profile = await getProfileApi();
      setProfile(profile);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return <ProfileContext.Provider value={{ loading, data: profile }}>{children}</ProfileContext.Provider>;
};

export default ProfileProvider;
export const useProfileContext = () => useContext(ProfileContext);
