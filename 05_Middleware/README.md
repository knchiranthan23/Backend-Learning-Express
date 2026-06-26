# Middleware in Express.js

## 📖 About

This folder demonstrates the implementation of **Middleware** in Express.js. Middleware functions execute during the request-response cycle and provide a way to process requests, perform operations, and control the flow of execution before sending a response to the client.

---

## 🚀 Concepts Covered

- Creating custom middleware
- Understanding the request-response cycle
- Using the `next()` function
- Executing middleware before route handlers
- Logging requests using middleware
- Controlling request flow

---

## 🛠️ Technologies Used

- Node.js
- Express.js

---

## 📂 Folder Structure

```
05_Middleware
│
├── server.js
├── package.json
└── README.md
```

---

## 📌 Middleware

Middleware functions are executed between the client's request and the server's response. They have access to the request (`req`) and response (`res`) objects and can perform tasks such as logging, authentication, request validation, and modifying requests before passing control to the next middleware or route handler using the `next()` function.

---

## 🎯 Learning Outcome

Through this concept, I learned how middleware functions work in Express.js, how to create custom middleware, use the `next()` function to control the request flow, and process client requests before they reach the route handlers.