# Tripleten web_project_around_express

Este proyecto consiste en una API REST desarrollada con Node.js y Express para gestionar usuarios y tarjetas. Permite crear, consultar, actualizar y eliminar información mediante diferentes endpoints.

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- JSON

## Instalación

1. Clona este repositorio:

```bash
git clone < https://github.com/Pau-Hndez/web_project_around_express.git >
```

2. Entra a la carpeta del proyecto:

```bash
cd web_project_around_express
```

3. Instala las dependencias:

```bash
npm install
```

## Ejecutar el proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

El servidor se ejecutará en:

```
http://localhost:3000
```

## Endpoints principales

### Usuarios

| Método | Endpoint         | Descripción                     |
| ------ | ---------------- | ------------------------------- |
| GET    | /users           | Devuelve todos los usuarios     |
| GET    | /users/:userId   | Devuelve un usuario por ID      |
| POST   | /users           | Crea un nuevo usuario           |
| PATCH  | /users/me        | Actualiza el perfil del usuario |
| PATCH  | /users/me/avatar | Actualiza el avatar             |

### Tarjetas

| Método | Endpoint             | Descripción                   |
| ------ | -------------------- | ----------------------------- |
| GET    | /cards               | Devuelve todas las tarjetas   |
| POST   | /cards               | Crea una nueva tarjeta        |
| DELETE | /cards/:cardId       | Elimina una tarjeta           |
| PUT    | /cards/:cardId/likes | Agrega un like a una tarjeta  |
| DELETE | /cards/:cardId/likes | Elimina un like a una tarjeta |

## Autor

Paula Hernandez
