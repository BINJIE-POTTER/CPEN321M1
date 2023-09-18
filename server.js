const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/server-ip', (req, res) => {
    res.send('20.119.0.42'); 
});

app.get('/server-time', (req, res) => {
    res.send(new Date().toString());
});

app.get('/backend-name', (req, res) => {
    res.send('Binjie Potter Ye');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
