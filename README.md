
# Personal Blog API

![GitHub repo size](https://img.shields.io/github/repo-size/MMCagdas/personal-blog-api)
![GitHub contributors](https://img.shields.io/github/contributors/MMCagdas/personal-blog-api)
![GitHub stars](https://img.shields.io/github/stars/MMCagdas/personal-blog-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/MMCagdas/personal-blog-api?style=social)

## Table of Contents

- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About The Project

Personal Blog API is a RESTful API solution that allows you to manage your personal blog content.  
You can create, update, delete, and list your blog posts.  
The project uses Node.js, **Fastify**, and Prisma ORM.

---

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn
- PostgreSQL or another supported database (via Prisma)

### Installation

```bash
# Clone the repo
git clone https://github.com/MMCagdas/personal-blog-api.git
cd personal-blog-api

# Install dependencies
npm install

# Create .env file and add your database credentials
cp .env.example .env

# Run database migrations
npx prisma migrate deploy

# Start the application
npm start
```

---

## Usage

The API works with standard REST endpoints:

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/posts`           | List all posts         |
| GET    | `/posts/:id`       | Get a single post       |
| POST   | `/posts`           | Create a new post       |
| PATCH  | `/posts/:id`       | Update an existing post |
| DELETE | `/posts/:id`       | Delete a post           |

---

## Features

- CRUD operations (Create, Read, Update, Delete)  
- Database management with Prisma ORM  
- Validation and error handling  
- Simple and clear REST API structure

---

## Technologies

- [Node.js](https://nodejs.org/)  
- [Fastify](https://www.fastify.io/)  
- [Prisma ORM](https://www.prisma.io/)  
- [PostgreSQL](https://www.postgresql.org/)  

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

To follow my work or get in touch:  
- GitHub: [https://github.com/MMCagdas](https://github.com/MMCagdas)  
