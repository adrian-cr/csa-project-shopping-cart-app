# Project: Shopping Cart App

This project is a fully functional `React` shopping cart application that integrates with a mock backend API, supports dynamic item management, routing, form validation, and unit testing.

## Core Features
* **Product Listing**: Displays products fetched from a mock API with "Add to Cart" functionality.
* **Shopping Cart**: Allows users to view, modify, and remove items in their cart.
* **Checkout Process**: Collects user information and displays a summary of the cart before submission.
* **Routing**: Uses React Router for navigation between product list, cart, and checkout pages.
* **State Management**: Utilizes React Context API for global cart state management.
* **Responsive Design**: Ensures a user-friendly experience across devices.
* **Unit Testing**: Includes tests for components and functionality using React Testing Library and Jest.

## Technologies Used
* `HTML5`
* `CSS3`
* `JavaScript (ES6)`
* `React`

## Core File Structure

```
├── src/
│   ├── pages/
│   │   ├── ListingsPage.jsx
│   │   ├── CartPage.jsx
│   │   └── CheckoutPage.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── api/
│   │   └── productListFetch.js
│   ├── App.jsx
│   └── index.js
├── .env
├── package.json
```

## Site Pages
This app consists of three main pages:
### 1. `ProductListPage`
* Fetches data using `fetchProducts()` from a mock API.
* Shows products with name, price, image, and "Add to Cart" button.
* Handles loading and error states.
* Responsive grid layout.

### 2. `CartPage`
* Lists all cart items with quantity controls.
* Shows per-item and total prices.
* Supports increasing, decreasing, and removing items.
* Handles empty cart state.

### 3. `CheckoutPage`
* Renders a form for name and address.
* Validates input fields.
* Shows cart summary.
* Displays a success message and clears cart after submission.
* Simulates loading delay using `setTimeout`.

### 4. `ConfirmationPage`
* Displays a confirmation message after successful checkout.
* Provides a simple link to return to the product list.

## Site Routing
The app uses `react-router-dom` for navigation. The routes are defined as follows:
  * `/` → Product list
  * `/cart` → Cart view
  * `/checkout` → Checkout form
  * `/confirmation` → Confirmation message after checkout

## State Management
The app implements global cart state using `React`'s Context API and `useReducer()`.
* Functions exposed:
  * `addToCart()`
  * `removeFromCart()`
  * `updateQuantity()`
  * `clearCart()`

## Testing
The app includes unit tests for core components and functionality using:
* `@testing-library/react`
* `@testing-library/user-event`
* `jest`
There are three test suites for the main pages:

### `Listings.test.js`
* Mocks `fetchProducts()`
* Tests loading, error, and rendering states.
* Asserts that products appear.

### `CartPage.test.js`
* Mocks `CartContext` to inject cart state.
* Asserts item rendering and quantity updates.

### `CheckoutPage.test.js`
* Mocks `CartContext` to include cart items.
* Waits for artificial delay with `waitFor()`.
* Fills and submits form.
* Asserts confirmation and cart clear.

## Getting Started
1. **Clone the repository:**
```bash
git clone https://github.com/adrian-cr/csa-project-cv-editor.git
cd csa-project-cv-editor
```
2. **Install dependencies:**
```bash
npm install
```
3. **Start the development server:**
```bash
npm start
```
This will open the app at [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run tests:**
```bash
npm test
```

Alternatively, you can view the app live at:

[adrian-cr.github.io/csa-project-shopping-cart-app/](https://adrian-cr.github.io/csa-project-shopping-cart-app/)
