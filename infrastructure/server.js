import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to your Clean Architecture API' });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log('🚀 Server deployed on http://localhost:' + PORT);
});
