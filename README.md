# Frontend React.js Developer Assignment

## Overview

This project is a simplified web application designed to evaluate the front-end development skills using React.js, Tailwind CSS, and Firebase. It features a multi-page layout with form input validation, seamless navigation, error handling, and data visualization using a chart library.

## Objective

The goal of this assignment is to demonstrate the ability to create a web application with the following functionalities:

- Use of template libraries for UI design
- Seamless navigation using React Router
- Form input validation and error handling
- Interaction with Firebase Firestore for data storage
- Data fetching and visualization from an external API

## Pages

- **Home**: A landing page with a creative design.
- **Transaction**: A form that captures and validates the user's wallet address and amount, and stores it in Firestore.
- **Data**: A page that fetches data from an external API, filters it, and displays it in a table and pie chart.

## Technologies Used

- **React JS**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Firebase**: For the Firestore database to store transaction data.
- **Axios/Fetch API**: For making API requests.
- **D3.js/Recharts/Highcharts**: For data visualization.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/dawoodtrumboo/sharpe-ai-assignment

2. Install Modules:
    `npm install`

3. Create firebaseConfig.js:
    ```
        import { initializeApp } from "firebase/app";
        import {getFirestore} from 'firebase/firestore'
        
        const firebaseConfig = {
        apiKey: "Your Key",
        authDomain: "Your Domain",
        databaseURL: "Your Database URL",
        projectId: "Your ProjectID",
        storageBucket: "Your Storage Bucket",
        messagingSenderId: "Your SenderID",
        appId: "Your AppID"
        };

        export const app = initializeApp(firebaseConfig);
        export const db = getFirestore(app)

4. Run the App
   `npm run dev`
