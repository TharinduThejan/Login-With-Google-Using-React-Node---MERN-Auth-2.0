# Login-With-Google-Using-React-Node---MERN-Auth-2.0

A complete Google Authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) using Passport.js and Google OAuth 2.0.

## Features

- 🔐 Google OAuth 2.0 Authentication
- 👤 User Profile Management
- 🗄️ MongoDB Database Integration
- 🎨 Modern React Frontend
- 🔒 Secure Session Management
- 📱 Responsive Design

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Google Developer Account

## Google OAuth Setup

1. Go to the [Google Developers Console](https://console.developers.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create credentials (OAuth 2.0 Client IDs)
5. Add authorized redirect URIs:
   - `http://localhost:8080/auth/google/callback` (for development)
6. Copy your Client ID and Client Secret

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TharinduThejan/Login-With-Google-Using-React-Node---MERN-Auth-2.0.git
cd Login-With-Google-Using-React-Node---MERN-Auth-2.0
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
npm run install-client
```

4. Create environment configuration:
```bash
cp .env.example .env
```

5. Update the `.env` file with your actual values:
```env
GOOGLE_CLIENT_ID=your_actual_google_client_id
GOOGLE_CLIENT_SECRET=your_actual_google_client_secret
COOKIE_KEY=your_super_secret_cookie_key_here
PORT=8080
CLIENT_URL=http://localhost:3000
MONGO_URI=mongodb://localhost:27017/google-auth
```

## Running the Application

### Development Mode

1. Start MongoDB (if running locally):
```bash
mongod
```

2. Start the backend server:
```bash
npm run server
```

3. In a new terminal, start the React frontend:
```bash
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

### Production Mode

1. Build the React app:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## API Endpoints

- `GET /` - Health check endpoint
- `GET /auth/google` - Initiate Google OAuth
- `GET /auth/google/callback` - Google OAuth callback
- `GET /auth/login/success` - Check authentication status
- `GET /auth/login/failed` - Login failure endpoint
- `GET /auth/logout` - Logout user

## Project Structure

```
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # React source code
│   │   ├── App.js         # Main App component
│   │   ├── App.css        # Styles
│   │   └── index.js       # React entry point
│   └── package.json       # Frontend dependencies
├── models/                # MongoDB models
│   └── User.js           # User model
├── route/                 # Express routes
│   └── auth.js           # Authentication routes
├── .env.example          # Environment template
├── .env                  # Environment variables (create this)
├── passport.js           # Passport configuration
├── server.js             # Express server
└── package.json          # Backend dependencies
```

## Troubleshooting

### Common Issues

1. **"Client ID not found" error**
   - Make sure you've updated the `.env` file with your actual Google Client ID and Secret

2. **MongoDB connection failed**
   - Ensure MongoDB is running locally or update `MONGO_URI` in `.env` with your MongoDB Atlas connection string

3. **CORS errors**
   - Make sure the backend server is running on port 8080 and frontend on port 3000

4. **Authentication not working**
   - Verify your Google OAuth redirect URI matches exactly: `http://localhost:8080/auth/google/callback`
   - Check that your Google OAuth credentials are correct

### MongoDB Atlas Setup (Optional)

If you prefer using MongoDB Atlas instead of a local MongoDB installation:

1. Create an account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGO_URI` in your `.env` file

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
