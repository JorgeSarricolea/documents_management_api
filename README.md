# documents_api_server

## Project Structure

```
└── 📁src
    └── 📁adapters
        └── 📁database
            └── 📁orm
                └── prisma.js
    └── 📁application
        └── 📁services
            └── RoleService.js
    └── 📁domain
        └── 📁entities
            └── Role.js
        └── 📁repositories
            └── RoleRepository.js
    └── 📁infrastructure
        └── 📁config
        └── 📁routes
            └── RoleRoutes.js
        └── server.js
    └── 📁interfaces
        └── 📁controllers
            └── RoleController.js
        └── 📁middlewares
            └── errorHandler.js
        └── 📁presenters
            └── RolePresenter.js
        └── 📁validators
            └── RoleValidator.js
    └── 📁shared
        └── 📁constants
        └── 📁exceptions
        ├── utils
```

This is a basic setup for a backend project using Clean Architecture.
