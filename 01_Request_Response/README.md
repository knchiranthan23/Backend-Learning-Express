# Request & Response in Express.js

## 📖 About

This folder demonstrates the implementation of **Request** and **Response** handling in Express.js, which forms the foundation of backend development. It explains how a server receives client requests and sends appropriate responses using various Express.js response methods.

---

## 🚀 Concepts Covered

- Creating an Express.js server
- Handling HTTP GET requests
- Handling HTTP POST requests
- Understanding the `req` (Request) object
- Understanding the `res` (Response) object
- Sending text responses using `res.send()`
- Sending JSON responses using `res.json()`
- Sending files using `res.sendFile()`
- Redirecting requests using `res.redirect()`
- Setting HTTP status codes using `res.status()`

---

## 🛠️ Technologies Used

- Node.js
- Express.js

---

## 📂 Folder Structure

```
01_Request_Response
│
├── server.js
├── package.json
└── README.md
```

---

## 📌 Request Object (`req`)

The **Request (`req`)** object contains information sent by the client to the server. It provides access to:

- Request URL
- HTTP Method
- Route Parameters
- Query Parameters
- Request Body
- Request Headers

---

## 📌 Response Object (`res`)

The **Response (`res`)** object is used to send data from the server back to the client.

Some commonly used response methods include:

- `res.send()`
- `res.json()`
- `res.sendFile()`
- `res.redirect()`
- `res.status()`

---

## 🎯 Learning Outcome

Through this concept, I gained a clear understanding of how Express.js handles client-server communication by processing incoming HTTP requests and generating appropriate responses. This concept serves as the foundation for building REST APIs and scalable backend applications.