# Node + Express + MongoDB CRUD Backend

A beginner-friendly REST API with a Product model and Create, Read, Update and Delete operations.

## 1. Requirements

Install Node.js (LTS), Git and Postman. You will also need a MongoDB Atlas account and a GitHub account.

Check Node and npm:

```bash
node -v
npm -v
```

## 2. Install dependencies

Open this folder in VS Code terminal:

```bash
npm install
```

## 3. Configure MongoDB Atlas

1. Create a free MongoDB Atlas account and create a cluster.
2. Create a database user with a username and password. Keep these credentials private.
3. In Network Access, allow your current IP address.
4. Open Connect > Drivers and copy the Node.js connection string.
5. Copy `.env.example` to a new file named `.env`.
6. Replace the placeholder in `MONGODB_URI` with your Atlas connection string. Replace `<password>` with the database user's password and add a database name in the path.

Do not upload `.env` to GitHub. `.gitignore` excludes it.

## 4. Run the server

```bash
npm run dev
```

Expected terminal messages:

```text
MongoDB connected successfully
Server is running at http://localhost:5000
```

Open `http://localhost:5000` in a browser. You should see a JSON message.

## 5. Test using Postman

Base URL: `http://localhost:5000/api/products`

For POST and PUT requests, choose Body > raw > JSON.

### Create a product

- Method: `POST`
- URL: `http://localhost:5000/api/products`
- Body:

```json
{
  "name": "Notebook",
  "description": "A ruled notebook",
  "price": 80,
  "quantity": 15
}
```

Copy the `_id` returned in the response.

### Read all products

- Method: `GET`
- URL: `http://localhost:5000/api/products`

### Read one product

- Method: `GET`
- URL: `http://localhost:5000/api/products/PASTE_PRODUCT_ID_HERE`

### Update a product

- Method: `PUT`
- URL: `http://localhost:5000/api/products/PASTE_PRODUCT_ID_HERE`
- Body:

```json
{
  "price": 95,
  "quantity": 20
}
```

### Delete a product

- Method: `DELETE`
- URL: `http://localhost:5000/api/products/PASTE_PRODUCT_ID_HERE`

## 6. Push the project to GitHub

Create a **public, empty** repository on GitHub. Do not add a README there if this folder already has one.

Run these commands in the project folder, replacing the URL with your own repository URL:

```bash
git init
git add .
git commit -m "Build Node Express MongoDB CRUD API"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Check the repository on GitHub. Confirm that source files and README are visible and `.env` is NOT present.

## Project structure

```text
node-mongodb-crud-backend/
├── config/
│   └── db.js
├── controllers/
│   └── product.controller.js
├── models/
│   └── product.model.js
├── routes/
│   └── product.routes.js
├── .env.example
├── .gitignore
├── app.js
├── index.js
├── package.json
└── README.md
```

## API summary

| Operation | Method | Endpoint |
|---|---|---|
| Create product | POST | `/api/products` |
| Read all products | GET | `/api/products` |
| Read one product | GET | `/api/products/:id` |
| Update product | PUT | `/api/products/:id` |
| Delete product | DELETE | `/api/products/:id` |

## Before your evaluation

- Start the server and show the successful MongoDB connection in the terminal.
- Demonstrate each of the five API requests in Postman.
- Explain the flow: Postman request → Express route → controller → Mongoose model → MongoDB → JSON response.
- Be ready to explain what each folder does.
