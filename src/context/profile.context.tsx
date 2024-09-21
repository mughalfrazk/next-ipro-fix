"use client";

import { ProfileModel } from "@/lib/models/user.model";
import { getProfileApi } from "@/lib/services/api/user.service";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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
    deleted_at: null,
  },
  company: {
    id: "",
    name: "",
    logo: null,
    created_at: "",
    updated_at: "",
    deleted_at: null,
  },
};

const ProfileContext = createContext<ProfileModel>(defaultProfileValues);

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileModel>(defaultProfileValues);

  const getUserProfile = async () => {
    const profile = await getProfileApi();
    setProfile(profile);
  };

  useEffect(() => {
    console.log("profile context")
    getUserProfile();
  }, []);

  useEffect(() => {
    console.log(profile)
  }, [profile])

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
export const useProfileContext = () => useContext(ProfileContext)