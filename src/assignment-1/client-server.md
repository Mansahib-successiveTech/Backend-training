# Client-Server Model

The **Client-Server Model** is a core principle in computer networking and application design. It divides the system into two main components: the **client**, which makes requests, and the **server**, which fulfills those requests.

---

## 🧠 Basic Concept

**Client**: A program or device that requests services or resources (e.g., web browser, mobile app).  
**Server**: A system that processes requests from clients and sends back appropriate responses (e.g., web server, database server).

---

## 🧱 Key Features

- **Two-way communication**: Clients and servers exchange information over a network (e.g., using HTTP).  
- **Request-response pattern**: Clients submit requests, and servers respond after processing them.  
- **Centralized resources**: The server manages data, logic, and security measures.

---

## 🔁 Process Flow

1. The client sends a request to the server (e.g., asking for a page on the web).  
2. The server processes the request, applying business rules or querying a database.  
3. The server returns the processed data (e.g., a webpage, JSON data).  
4. The client receives the response and presents it to the user.

---

## ✅ Advantages

- **Centralized management**: The server handles all critical operations and data.  
- **Easier updates**: Modifications are made on the server side without affecting clients.  
- **Scalable architecture**: The server can handle multiple clients without significant changes to the backend.

---

## ❌ Disadvantages

- **Single point of failure**: If the server goes down, it affects all connected clients.  
- **Scaling issues**: As the number of clients increases, the server may experience performance bottlenecks.  
- **Latency**: The communication between client and server introduces delays in processing.

---

## 🧪 Practical Examples

| Client             | Server                        |
|--------------------|-------------------------------|
| Web browser        | Web server (e.g., Apache, Nginx) |
| Mobile application | REST API (Node.js, Django)    |
| Email client       | Mail server (SMTP, IMAP)      |
| Online game        | Game server                   |