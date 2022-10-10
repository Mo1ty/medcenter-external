export class Profile {

  constructor(
    public clientId: number,
    private firstName: string,
    public lastName: string,
    private email: string,
    private addressId: number
  ){}

}
