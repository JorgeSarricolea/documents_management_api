class RolePresenter {
  static format(role) {
    return {
      id: String(role.role_id),
      name: role.name,
    };
  }

  static formatList(roles) {
    return roles.map(RolePresenter.format);
  }
}

export default RolePresenter;
