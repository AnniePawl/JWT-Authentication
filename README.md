# 🔐 JWT Authentication

## Project Objectives 
Developing an understanding of the differences between session based authenticaion and JSON Web Token (JWT) authenticaiton by implementing `express-jwt` in a simple project

### What does JTW Look Like?
Three strings separated by a period. Each section has a unique significance. 
1. **Header:** Typically consists of two parts:  **token type** and **hashing algorithm**
2. **Payload:** Contains **claims** about entity & other data. Three types of claims: **registered, public, and private.**
3. **Signature:** Created by taking encoded header & payload, a secret, algorithm from header and signing all that. 
```js
  aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc
```

#### Output
The output is three Base64-URL strings that can easily by passed in HTML and HTTP environments.</br>
It might look something like this:
```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzY290Y2guaW8iLCJleHAiOjEzMDA4MTkzODAsIm5hbWUiOiJDaHJpcyBTZXZpbGxlamEiLCJhZG1pbiI6dHJ1ZX0.03f329983b86f7d9a9f5fef85305880101d5e302afafa20154d094b229f75773
```
### Authentication Process 
1. Client sends a **request for authentication**
2. The **server receives credentials**
- Token is a **hash**
- Token contains a **secret key**
- Secret key can only be **unencrypted by server**
3. The **client includes token whenever requesting restricted resources**
4. The **server verifies token with each request**

### Benefits of JWT 
- No **sessions** required 
- Simply **saves token to client**
- Sent **instead of CSRF token** 
- As long as JWT valid, data on route! 
- Super **fast**, no need to look up session 
- Better **storage**, don't have to store session
- **Mobile Ready** b/c apps can save auth tokens 
- **Testing** is unnecessary, just send token 


