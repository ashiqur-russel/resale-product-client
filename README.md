## Project Name

Auto Haus - A used car Resale Website

Live Website: https://auto-kaufen.web.app/

A web application Where people can Post their used car to sell and buy from there.This website built with React, Firebase, Experess & Mongodb.

## Project Status

This project still undergoing on development.There are lot of places to improvemnet.

## For Admin Access

adminEmail: admin@autohaus.com

adminPassword: 123456

## Project Description and Key Features

      1.  From Home page people can find the Advertised product from seller.
      2.  People can search Car ny Individual category search and People are able to buy from there.
      3.  Each individual category has categorized car Eg. Volkswagen,Audi where People can see verified seller with blue tick sign
      4.  After successfull registration to the website user can also give a review to the individual service.
      5.  People can book car if he/ she like the car and it will be added on the cart.Cart will be found on dahboard route.
      6.  For booking user must have to register.And after Successfull registartion User can see Booked car and  make payment with stripe.
      7.  Payment functionality has done by stripe payment ( on test mode ).
      8.  Seller also have to be registered on website.From dashboard seller can add their car.For verification Seller must have to be sent
            verification request from dashboard.After Admin approve seller will be verified and blue tick will be appeared.
      9.  If seller is verified any buyer can see prduct is added by verified seller.
      10. For Admin role Admin can manage users and reported product.

## Tech Stack

      React, ExpressJs, NodeJs, MongoDb, Firebase,Tailwind Css

## Installation and Setup Instructions

# Resale Product App

This guide will help you set up the project locally on your machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- Git
- Node.js and npm

## Getting Started

Follow these steps to get your development environment set up:

1. Clone the repository

First, clone the project repository to your local machine using Git:


git clone <repository-url>

2. **Install dependencies**
Navigate to the project directory and install the required npm packages:

 - `cd resale-produc-client`
 - `npm install`


3. **Environment Setup**

After installing the packages, you need to set up environment variables for the app to function correctly:

- Create a `.env` file in the root directory of the project (where the `package.json` file is located).

- Add the following environment variables to the `.env` file:

  ```
  REACT_APP_API_TEST_url=
  REACT_APP_API_LOCAL_url=http://localhost:8626
  REACT_APP_apikey=
  REACT_APP_authDomain=auto-kaufen.firebaseapp.com
  REACT_APP_projectId=
  REACT_APP_storageBucket=
  REACT_APP_messagingSenderId=
  REACT_APP_appId=
  ```

- Fill in the missing values as needed. For the Firebase variables (`REACT_APP_apikey`, `REACT_APP_authDomain`, `REACT_APP_projectId`, `REACT_APP_storageBucket`, `REACT_APP_messagingSenderId`, `REACT_APP_appId`), you'll need to create a Firebase app and obtain the Firebase authentication config data from there.

4. **Firebase Configuration**

 If you haven't already, create a Firebase project to get your Firebase configuration. This involves:
  - Go to the Firebase Console.
  - Create a new project (or selecting an existing one).
  - Navigate to the project settings to find your app's Firebase configuration.

- Copy the Firebase configuration data and paste it into the corresponding environment variables in your `.env` file.

### Important Reminder

Ensure that your `.env` file is listed in the `.gitignore` file to prevent committing sensitive information to your Git repository by mistake.

### Running the App

Once the setup is complete, you can start the development server by running:

 - `npm start`

This will run the app in development mode. Open `http://localhost:3000` to view it in your browser.


