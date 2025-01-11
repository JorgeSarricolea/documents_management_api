class UserPresenter {
  static format(user) {
    return {
      id: String(user.user_id),
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      semester: user.semester,
      is_tutor: user.is_tutor,
      role_id: String(user.role_id),
    };
  }

  static formatWithToken(user, token) {
    return {
      user: this.format(user),
      token,
    };
  }

  static formatList(users) {
    return users.map(UserPresenter.format);
  }
}

export default UserPresenter;
