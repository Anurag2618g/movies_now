import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors);
const Port = 3000;

(async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
        
        app.listen(process.env.PORT || Port, () => {
            console.log(`Server running at port: ${Port}`);
        });
    } catch(err) {
        console.error(JSON.stringify({
            message: 'Error connecting to DB',
            error: err.message
        }));
    }
})();