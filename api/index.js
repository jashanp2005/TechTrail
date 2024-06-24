import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";
import commentRoutes from './routes/comment.route.js'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log('Database is connected')).catch((e) => console.log(e));

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () =>{
    console.log('Server is running on port 3000!')
})

// install dotenv if you want to use environment variables as well in this project

app.use('/api/user', userRoutes) // will work on /api/user/test
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// add a middleware and a function to handle errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// To do -
// check the verifyUser.js, there's something wrong in it
