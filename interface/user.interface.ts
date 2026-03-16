export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}
export interface IUser {
  id: string;
  fullName: string;
  email: string;
  roleId: string;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}
