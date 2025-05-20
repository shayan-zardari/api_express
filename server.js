const express = require("express");
const app = express();

app.use('/api/students', require('./api/students'));
app.get('/', (req, res) => {
    res.send('API is running');
});
app.listen(3000);