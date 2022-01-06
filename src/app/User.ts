export class User {
  id: number | undefined;
  email: string | undefined;
  //Both the passwords are in a single object
  password: {
    pwd: string;
    confirmPwd: string;
  } | undefined;
  gender: string | undefined;
  terms: boolean | undefined;

  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }
}
