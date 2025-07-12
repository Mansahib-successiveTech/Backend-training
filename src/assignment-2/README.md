# Express.js, REST APIs, and Postman Setup Guide

## 📦 Why Use Frameworks?

Frameworks simplify backend development by providing a structured, reusable foundation for applications. They help by:

- 🧹 Abstracting complex logic (routing, middleware, etc.)
- 🏗️ Enforcing coding standards
- ⚡ Accelerating development
- 🔒 Providing built-in security mechanisms
- 🤝 Supporting scalability and maintainability

## 🚀 Express.js Overview

**Express.js** is a minimal, fast, and flexible Node.js web application framework. It simplifies the creation of web servers and APIs.

### 🔧 Installation

Install the latest stable version of Express:

- Open your terminal
- Run: `npm install express`

## 🍪 Setting up cookie-parser

### 📥 Install and Configure:

- Run: `npm install cookie-parser`
- Import and use `cookie-parser` in your Express app
- Use `app.use(cookieParser())` to initialize
- Set and read cookies using `res.cookie` and `req.cookies`

## 🌍 REST APIs

**REST (Representational State Transfer)** is a design pattern for building web services.

### 🧩 Components

- Endpoints – URLs to access data (e.g., `/api/users`)
- Methods – HTTP verbs: GET, POST, PUT, DELETE
- Request Body – Data sent from client
- Response – Data returned by server (often in JSON)
- Headers – Metadata like Content-Type or Authorization
- Status Codes – HTTP status like 200, 404, 500

## 🧰 Backend Framework Comparison

| Framework   | Language   | Strengths                           |
| ----------- | ---------- | ----------------------------------- |
| Express.js  | JavaScript | Lightweight, easy to use            |
| NestJS      | TypeScript | Modular, scalable, enterprise-grade |
| Fastify     | JavaScript | High performance, schema-based      |
| Django      | Python     | Full-featured, ORM, admin dashboard |
| Flask       | Python     | Minimalist, great for microservices |
| Spring Boot | Java       | Powerful, enterprise, REST support  |

## 🧪 Postman Setup

Install and set up the latest stable version of Postman:

### 🧾 Instructions

1. Open a terminal
2. Add the Postman repository:
   ```bash
   sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
   ```
3. Import the Postman GPG key:
   ```bash
   sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
   ```
4. Update your package list:
   ```bash
   sudo apt-get update
   ```
5. Install Postman:
   ```bash
   sudo apt-get install postman
   ```

---
