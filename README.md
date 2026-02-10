# EFOOD – Frontend Project

This repository contains the **EFOOD Frontend**, a delivery application built with **React**, **TypeScript**, **Redux Toolkit**, **RTK Query**, **Formik**, and **Styled Components**. The project simulates a complete ordering flow: browsing restaurants, viewing dishes, adding items to the cart, and completing a validated checkout.

## Technologies Used

* React
* TypeScript
* Vite
* Redux Toolkit
* RTK Query
* React Redux
* Formik
* Yup
* Styled Components
* React Router DOM

## Features

* Restaurant listing
* Detailed restaurant pages
* Product cards and description
* Add/remove items from cart
* Multi-step checkout flow
* Form validation using Formik + Yup
* Global state management with Redux Toolkit
* API integration using RTK Query
* Modal system and reusable components

## Project Structure

```
assets/
  imagens/
    (general images)
  Restaurantes/
    (restaurant images)

Components/
  home/
    homebody/
    homeheader/
  restaurant/
    restaurantBanner/
    restaurantBody/
    restaurantCard/
    restaurantHeader/

Subcomponents/
  BuyButton/
  Card/
  Cart/
  CartItem/
  CartListItem/
  ContinueButton/
  Footer/
  Modal/
  StepsCart/
    Adress/
    Finished/
    Payment/
  Tag/

Store/
  Api/
  slices/
  index.tsx
```

## Running the Project

### 1. Clone the repository

```
git clone https://github.com/Guillerme00/EFOOD-PROJECT-FRONTEND.git
```

### 2. Install dependencies

```
npm install
```

### 3. Start development server

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

## Production Build

```
npm run build
```

## Checkout Flow

The checkout process is divided into three validated steps:

1. **Address information**
2. **Payment details**
3. **Order confirmation**

Each step interacts with Redux state and uses Formik for structured validation.

## API Integration

All network requests are handled via **RTK Query**, communicating with an external API that simulates the order processing pipeline.

## Project Goals

The objective of this project is to practice and consolidate:

* Scalable front-end architecture
* Global state management with Redux Toolkit
* Async request handling with RTK Query
* TypeScript for typing and safety
* Form handling and validation
* Componentization and clean code structure

## License

This project is proprietary. All rights reserved.
