# Getting Started with Express.js

## Introduction

Welcome to the guide on getting started with Express.js! Express.js is a popular Node.js web application framework that provides a robust set of features for building web applications and APIs.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm is installed with Node.js by default.

## Setting Up a New Express.js Project

To create a new Express.js project, follow these steps:

1. Open your terminal or command prompt.
2. Create a new directory for your project: `mkdir my-express-project`
3. Navigate into the newly created directory: `cd my-express-project`
4. Initialize a new Node.js project: `npm init -y`
5. Install Express.js as a dependency: `npm install express`
6. Create a new file for your Express.js application, e.g., `app.js`.

## Writing Your First Express.js Application

Now that you have set up your project, you can start writing your first Express.js application. Open the `app.js` file and add the following code:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Author: Dam Nguyen
