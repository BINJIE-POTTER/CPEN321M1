const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});

app.get('/server-ip', (req, res) => {
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    res.json({ ip: networkInterfaces });
 });
 
 app.get('/server-time', (req, res) => {
    res.json({ time: new Date().toLocaleString() });
 });
 
 app.get('/my-name', (req, res) => {
    res.json({ name: "Your First and Last Name" });
 });
 
 
