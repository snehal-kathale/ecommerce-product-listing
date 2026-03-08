# Product Listing & Detail Page (Amazon-style)

**E-commerce Product Listing Application** built with **React.js** that consumes the public API from **DummyJSON**.

The application allows users to browse products, filter by category, brand, and price, view product details, and navigate through paginated results.

API Used:  
https://dummyjson.com/docs/products

---

# Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/snehal-kathale/ecommerce-product-listing.git
cd ecommerce-product-listing
```

### 2. Change branch to main

### `git checkout main`

### 3. Install dependencies

You need to have Node.js installed on your system, which also includes the npm (Node Package Manager) command-line tool. You can verify your installations by running **node -v** and **npm -v** in your terminal or command prompt.

### `npm install`

### 4. Run the application

### `npm start`

The application will start on:

### `http://localhost:3000`

---

# Tech Stack

- React.js
- React Router
- JavaScript
- CSS
- Fetch API

---

# Features Implemented

- Product Listing Page
- Product Detail Page
- Category Filtering (Single Select)
- Brand Filtering (Multi Select)
- Price Range Filter (Min & Max)
- Pagination
- API Integration
- Reusable Components
- Routing using React Router

---

# Assumptions Made

1. **Category filter is single-select** because the API provides category-based endpoints.
2. **Brand filter is multi-select**, handled on the frontend after fetching products.
3. **Brand availability depends on the selected category**:
   - If **no category is selected**, the message **"Please select a category first!"** is displayed.
   - If a **category is selected but no brands are available**, the message **"No brands found for this category"** is shown.
   - If brands exist for the selected category, they are displayed as **checkbox options for multi-selection**.
4. Price filtering is applied on the **client side** since the API does not provide price filter endpoints.

---

# Architectural Decisions

### 1. Component-Based Architecture

The application is divided into reusable components such as:

- Buttons and Inputs
- ProductCard
- ProductList
- Filters
- Pagination

This improves **maintainability and reusability**.

---

### 2. API Layer Separation

All API-related logic is placed inside:

```
src/apiServices/productApi.js
```

This helps separate **business logic from UI components** and keeps the codebase clean.

---

### 3. Routing

React Router is used to manage routes:

```
/            → Product Listing Page
/product/:id → Product Details Page
```

---

### 4. State & Data Management

React Hooks were used to manage component state and handle API data fetching.

- `useState`
- `useEffect`

---

# Improvements If Given More Time

1. **Global Error Handling**  
   Implement a global error handling mechanism so that API errors, network failures, or unexpected responses can be handled consistently across the application.

2. **Better State Management**  
   Introduce **React Query or Redux Toolkit** to manage API data and caching more efficiently.  
   This would help improve performance and make the application easier to scale as the number of features and API calls increases.

3. **Testing**  
   Add unit and component tests using **Jest** and **React Testing Library** to ensure reliability and maintainability of the application.

4. **Performance Optimizations**  
   Improve performance by using techniques such as **React.memo**, lazy loading of components, and optimized rendering.

---
