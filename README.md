# documents_api_server

## Project Structure

```

project-root/
├── adapters/
│   ├── api/
│   ├── database/
│       └── orm/
├── application/
│   ├── dtos/
│   ├── services/
│   └── use-cases/
├── domain/
│   ├── entities/
│   ├── repositories/
│   ├── errors/
│   └── value-objects/
├── infrastructure/
│   ├── database/
│   │   ├── daos/
│   │   ├── models/
│   │   └── repositories/
│   ├── config/
│   ├── routes/
│   ├── logger/
│   └── server.js
├── interfaces/
│   ├── controllers/
│   ├── middlewares/
│   ├── presenters/
│   └── validators/
└── shared/
    ├── utils/
    ├── constants/
    └── exceptions/

```

This is a basic setup for a backend project using Clean Architecture.
