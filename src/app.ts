import express from 'express';
import userRouter from './routes/users';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/users', userRouter);

export { app };
