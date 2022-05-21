const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoute = require('./routes/Auth');

const app = express();
const urlEncodedParser = bodyParser.urlencoded({extended:false});
const port = 4500;

app.use(urlEncodedParser);
app.use('/auth', authRoute);
app.use(express.json());
app.use(cors());

app.use((err, req, res) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})