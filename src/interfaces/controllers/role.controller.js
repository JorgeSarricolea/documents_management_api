import RoleValidator from "../validators/role.validator.js";
import RolePresenter from "../presenters/role.presenter.js";

class RoleController {
  constructor(roleService) {
    this.roleService = roleService;
  }

  async getAllRoles(req, res) {
    try {
      const roles = await this.roleService.getAllRoles();
      res.status(200).json(RolePresenter.formatList(roles));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getRoleById(req, res) {
    try {
      const { id } = req.params;
      const role = await this.roleService.getRoleById(id);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json(RolePresenter.format(role));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createRole(req, res) {
    try {
      const data = req.body;
      const errors = RoleValidator.validateCreate(data);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const newRole = await this.roleService.createRole(data);
      res.status(201).json(RolePresenter.format(newRole));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateRole(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const errors = RoleValidator.validateUpdate(data);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const updatedRole = await this.roleService.updateRole(id, data);
      res.status(200).json(RolePresenter.format(updatedRole));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteRole(req, res) {
    try {
      const { id } = req.params;
      await this.roleService.deleteRole(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default RoleController;
