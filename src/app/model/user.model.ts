export class User {
  user_id: number;
  user_last_name: string;
  user_first_name: string;
  user_phone_number: string;
  user_email: string;
  user_password: string;
  user_confirmPassword: string;
  constructor(
    id,
    last_name,
    first_name,
    phone_number,
    email,
    password,
    confirmPassword
  ) {
    this.user_id = id;
    this.user_last_name = last_name;
    this.user_first_name = first_name;
    this.user_phone_number = phone_number;
    this.user_email = email;
    this.user_password = password;
    this.user_confirmPassword=confirmPassword;
  }
}