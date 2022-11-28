export class UserDetails {

  public id: number;
  public email: string;
  public password: string;
  public role: string;
  public isAuthenticated: boolean;

  constructor(id?: number, email?: string, password?: string, role?: string, isAuthenticated?: boolean) {
    this.id = id || 0;
    this.email = email || "";
    this.password = password || "";
    this.role = role || "";
    this.isAuthenticated = isAuthenticated || false;
  }
}
