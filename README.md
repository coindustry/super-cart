Shopping Cart Application
This Shopping Cart Application is a React-based web application that allows users to add products to a cart, view a summary of the cart, and simulate a checkout process. It integrates with a Strapi API to fetch products and manage inventory, ensuring a dynamic and responsive user experience.

Features
Product Listing: Displays a list of products fetched from a Strapi API with images, names, costs, and stock information.
Dynamic Cart: Users can add products to their cart. The cart updates in real-time, showing the added items, quantities, and the total cost.
Checkout Summary: A dedicated checkout section provides a summary of the cart items and the total amount to be paid.
Restock Functionality: Includes a feature to restock products by fetching updated inventory data from the Strapi API.
Responsive Design: Adapts to various screen sizes for an optimal viewing experience across devices.
Technology Stack
React: For building the user interface.
Strapi: As the backend API for managing and fetching products.
Bootstrap/Custom CSS: For styling the application.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js and npm (Node Package Manager)
A running instance of Strapi API with products configured

Installation

Clone the repository

git clone https://github.com/coindustry/super-cart.git
cd shopping-cart-application

Install the dependencies

npm install

Set up the environment variables
Create a .env file in the root directory and add the following:

REACT_APP_API_URL=http://localhost:1337/api/products

Replace the URL with your Strapi API endpoint.

Run the application

npm start

This will start the application on http://localhost:3000.

Usage
Browse through the list of available products.
Click on "Add to Cart" to add a product to your cart.
View your cart and remove items if necessary.
Click "Checkout" to simulate the checkout process.
Use the "Restock Products" button to fetch and update the inventory.
Contributing
Contributions are welcome! Please feel free to submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

