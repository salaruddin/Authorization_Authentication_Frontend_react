import { IAuthUser, RolesEnum } from "../types/auth.types";
import axisInstance from "../utils/axiosInstance";

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axisInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axisInstance.defaults.headers.common.Authorization;
  }
};

export const getSession = () => {
  return localStorage.getItem("accessToken");
};

export const allAccessRoles = [
  RolesEnum.OWNER,
  RolesEnum.ADMIN,
  RolesEnum.MANAGER,
  RolesEnum.USER,
];
export const managerAccessRoles = [
  RolesEnum.OWNER,
  RolesEnum.ADMIN,
  RolesEnum.MANAGER,
];
export const adminAccessRoles = [RolesEnum.OWNER, RolesEnum.ADMIN];
export const ownerAccessRoles = [RolesEnum.OWNER];

//specify which roles can be updated by logged-in User
export const allowedRolesForUpdateArray = (
  loggedUser?: IAuthUser
): string[] => {
  return loggedUser?.roles.includes(RolesEnum.OWNER)
    ? [RolesEnum.ADMIN, RolesEnum.MANAGER, RolesEnum.USER]
    : [RolesEnum.MANAGER, RolesEnum.USER];
};

//to control that owner cannot change owner role, and admin cannot change admin role
export const isAuthorizedForUpdateRole = (
  loggedInUserRole: string,
  selectedUserRole: string
) => {
  let result = true;

  if (
    loggedInUserRole == RolesEnum.OWNER &&
    selectedUserRole == RolesEnum.OWNER
  )
    result = false;
  else if (
    loggedInUserRole == RolesEnum.ADMIN &&
    selectedUserRole == RolesEnum.ADMIN
  )
    result = false;
  return result;
};
