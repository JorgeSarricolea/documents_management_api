class User {
  constructor(
    user_id,
    first_name,
    last_name,
    email,
    password,
    matricula,
    semester,
    is_tutor,
    role_id
  ) {
    this.user_id = user_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email.toLowerCase();
    this.password = password;
    this.matricula = matricula || null;
    this.semester = semester;
    this.is_tutor = is_tutor || false;
    this.role_id = role_id;
  }
}

export default User;
