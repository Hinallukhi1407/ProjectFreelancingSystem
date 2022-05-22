const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const urlEncodedParser = bodyParser.urlencoded({extended:false});
const connection = require('../_helpers/db');
const { loginValidation } = require('../_helpers/validation');
const jwt = require('jsonwebtoken');

router.post('/login', loginValidation, (req, res, next) => {
    let query = "select login_id, password from logininfo where email = ?";
    connection.query(query, [req.body.email], (error, result) => {
        if (error) {
            return res.status(400).send({
                msg : err
            });
        }
        if(!result.length) {
            return res.status(401).send({
                msg : "Email or password is incorrect :("
            });
        }
        let userProfile;
        connection.query(`select * from userprofile where login_id = ?`, result[0].login_id, (pErr, pData) => {
                    if(pData) userProfile = pData;
        })
        bcrypt.compare(req.body.password, result[0].password, (err, data) => {
            if (err) {
                return res.status(401).send({
                    msg: "Email or password incorrect!!"
                });
            }
            if(data) {
                req.session.loginId = result[0].login_id;
                const token = jwt.sign({id: result[0].login_id}, process.env.secret, {expiresIn: '1d'});
                connection.query(`UPDATE logininfo SET last_login = NOW() WHERE login_id = '${result[0].login_id}'`);
                return res.status(200).send({
                    msg: 'Logged in!',
                    token,
                    user: userProfile
                  });
            }
            return res.status(401).send({
                msg: 'Username or password is incorrect!'
              });
        });
    });
});


router.post('/register', urlEncodedParser, (req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        let query = "insert into logininfo(email, password, user_type_id,status_id) values(?,?,?,?)";
        connection.query(query, [req.body.email, hashedPassword, req.body.userType, req.body.status], (err, result)=>{
            if (err)  throw err;

            res.status(201).send(result);
        });
    });

});



module.exports = router;