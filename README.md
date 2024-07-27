
```markdown
# Contact Manager

This project is a full-stack application for managing contacts. It allows you to create, read, update, delete, and send selected contact information via email. The frontend is built with Next.js and Tailwind CSS, and the backend uses Node.js, Express.js, and MongoDB.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Frontend Setup](#frontend-setup)
3. [Backend Setup](#backend-setup)
4. [Connecting Frontend and Backend](#connecting-frontend-and-backend)
5. [Testing with Postman](#testing-with-postman)
6. [Email Sending Configuration](#email-sending-configuration)
7. [Running the Application](#running-the-application)

## Project Structure

```plaintext
project-root/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── Form.js
│   │   │   │   └── Table.js
│   │   │   ├── global.css
│   │   │   ├── layout.js
│   │   │   └── page.js
├── backend/
│   ├── routes/
│   │   └── contacts.js
│   ├── models/
│   │   └── Contact.js
│   ├── utils/
│   │   └── api.js
│   ├── server.js
└── README.md
```

## Frontend Setup

1. **Install Dependencies**

   Navigate to the `frontend` directory and run:

   ```bash
   npm install
   ```

2. **Run the Frontend**

   Start the Next.js development server:

   ```bash
   npm run dev
   ```

3. **Open the Application**

   Visit `http://localhost:3000` to see the application in action.

4. **Frontend Overview**

   - `Form.js`: Handles adding and updating contacts.
   - `Table.js`: Displays the list of contacts and allows selecting them for deletion or email sending.

## Backend Setup

1. **Install Dependencies**

   Navigate to the `backend` directory and run:

   ```bash
   npm install
   ```

2. **Setup MongoDB**

   - Make sure you have a MongoDB instance running.
   - Create a `.env` file in the `backend` directory with the following content:

     ```plaintext
     MONGODB_URI=your_mongodb_uri
     ```

   Replace `your_mongodb_uri` with your actual MongoDB connection string.

3. **Run the Backend**

   Start the Node.js server:

   ```bash
   node server.js
   ```

4. **Backend Overview**

   - `contacts.js`: Defines the API routes for handling contact operations.
   - `Contact.js`: Mongoose model for storing contact information.

## Connecting Frontend and Backend

Ensure that your backend server is running on `http://localhost:5000`. The frontend will make API requests to this server to perform CRUD operations on the contact data.

## Testing with Postman

To test API endpoints:

1. **Open Postman**: Create a new request.
2. **Set Method and URL**: Use the appropriate HTTP method and URL (e.g., `http://localhost:5000/api/contacts`).
3. **Add Body (if needed)**: Use raw JSON format for requests like POST and PUT.
4. **Send Request**: Check responses to verify operations.

## Email Sending Configuration

To send emails from your Gmail using Nodemailer, follow these steps:

1. **Enable 2-Factor Authentication**

   Go to [Google Account Security](https://myaccount.google.com/security) and enable 2-factor authentication.

2. **Generate App Password**

   - Under "Signing in to Google," click on "App Passwords."
   - Select "Other" as the app and enter a name (e.g., `ContactManagerApp`).
   - Copy the generated app password.

3. **Update Nodemailer Configuration**

   In your email-sending route, use the app password as follows:

   ```javascript
   const transporter = nodemailer.createTransport({
     service: 'Gmail',
     auth: {
       user: 'your-email@gmail.com',
       pass: 'your-app-password',
     },
   });
   ```

   Replace `'your-email@gmail.com'` and `'your-app-password'` with your email and generated app password.

## Running the Application

1. **Start Backend**: Ensure your MongoDB instance is running and start the Node.js server.
2. **Start Frontend**: Run the Next.js development server.
3. **Access the Application**: Open `http://localhost:3000` in your browser.

Now you can manage contacts, perform CRUD operations, and send contact information via email.


