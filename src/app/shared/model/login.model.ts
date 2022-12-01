import { Address } from "./address.model"

export interface LoginData {
  id: 0 | number,
  email: string,
  password: string,
  role: string
}

export class FullRegisterData {
  id: number;
  loginData: LoginData;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: Address;
}
