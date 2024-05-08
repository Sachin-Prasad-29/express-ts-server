import { app } from './app';

const PORT = 3000;

app.listen(PORT, () => {
    console.log('User -> ', process.env.USER);
    console.log(`Running at -> http://localhost:${PORT}`);
});
