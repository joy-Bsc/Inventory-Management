# Inventory Management
## Overview
Inventory Management is a full-stack application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to view and search through a list of products stored in a MongoDB database. The application features include displaying product images, product names, and product stock levels. Users can navigate between different pages and search for specific products.
## Preview

![Screenshot (33)](https://github.com/user-attachments/assets/20279266-c825-4381-8cd6-4ea53aa1fac1)
![Screenshot (34)](https://github.com/user-attachments/assets/707794fa-9e05-41aa-ba74-f0644f4fc5dc)
![Screenshot (35)](https://github.com/user-attachments/assets/dc87ebfb-5093-4cc0-9cde-fc12859d70f7)


## Features
- Product Display: List of products with images, names, and stock levels.
- Search Functionality: Users can search for products by name or other criteria.
- Pagination: Navigate through different pages of products.
- Responsive Design: Mobile-friendly design for optimal viewing on various devices.
## Project Structure:
```
root
│
├── client                # Frontend (React.js)
│   ├── public            # Public assets
│   └── src               # React.js source code
│       ├── components    # Reusable components (e.g., ProductCard, SearchBar)
│       ├── pages         # Pages (e.g., HomePage, ProductPage)
│       ├── App.js        # Main React component
│       ├── index.js      # Entry point for React
│       └── ...
│
├── server                # Backend (Node.js, Express.js)
│   ├── config            # Configuration files (e.g., database connection)
│   ├── controllers       # Route controllers (e.g., ProductController)
│   ├── models            # Mongoose models (e.g., Product)
│   ├── routes            # API routes (e.g., productRoutes.js)
│   ├── middleware        # Middleware functions
│   ├── server.js         # Entry point for Node.js server
│   └── ...
│
├── .env                  # Environment variables
├── .gitignore            # Files and directories to ignore in Git
├── package.json          # NPM dependencies and scripts for the whole project
└── README.md             # Project documentation
```
## Installation
### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud-based)
### Steps
#### Clone the repository:
```
git clone https://github.com/yourusername/inventory-management.git
cd inventory-management
```
### Install server dependencies:
```
cd server
npm install
```
### Install client dependencies:
```
cd ../client
npm install
```
### Set up environment variables:
Create a .env file in the server directory and add the following:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```
## Running the Application
### Backend (Express.js):
```
cd server
npm run dev
```
### Frontend (React.js):
```
cd ../client
npm start
```
### Open your browser:
Visit http://localhost:3000 to view the application.
## Usage
- Sign Up: Create a new account.
- Login: Log in to access your profile and place orders.
- Profile Management: Update your profile details (e.g., address, phone).
- Place Order: Browse products and place orders (sign-in required).
## Deployment
### Deploying to netlify (Frontend)
#### Build the React app:
```
cd client
npm run build
```
### Deploying to Vercel (Backend)

## Contributing
#### 1.Fork the repository.

#### 2.Create a new branch:
```
git checkout -b feature/your-feature-name
```
#### 3.Commit your changes:
```
git commit -m 'Add some feature'
```
#### 4.Push to the branch:
```
git push origin feature/your-feature-name
```
#### 5.Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- MongoDB
- Express.js
- React.js
- Node.js





