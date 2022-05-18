const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const urlEncodedParser = bodyParser.urlencoded({extended:false});
const port = 4500;

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'freelancingscape'
  });

const hash = async (password, saltRounds = 10) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    } catch (error){
        throw error;
    }
}
  
connection.connect();

app.get('/', (req, res) => {
    let query = "select * from userprofile";
    connection.query(query, (error, result, fields) => {
        if(error) {
            res.send("oops!!! something went wrong...");
        };

        res.send(result);
    });
});

app.post('/login', urlEncodedParser,(req, res) => {
    let query = "select login_id, password from logininfo where email = ?";
    connection.query(query, [req.body.email], (error, result) => {
        bcrypt.compare(req.body.password, result[0].password, (err, data) => {
            if(data) {
                res.send(true);
            } else {
                res.send(err);
                console.log(err);
            }
        });
    });
});


app.post('/register', urlEncodedParser, (req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        let query = "insert into logininfo(email, password, user_type_id,status_id) values(?,?,?,?)";
        connection.query(query, [req.body.email, hashedPassword, req.body.userType, req.body.status], (err, result)=>{
            if (err)  throw err;

            res.send(result);
        });
    });

});

app.route('/users/:userId')
    .get((req, res) => {
        res.send(req.params);
    });

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})