const router  = require('express').Router();
const { app } = require('apico/server');
const mysql = require('mysql2');


// htt://localhost:3000/auth/register "POST"
router.post('/register', async( req, res )=>{

    let { firstname, lastname,  email, username, password, repeatpassword, phonenumber } = req.body;

    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'lifehackproject',
        password: 'Sewing1!'
      });
    
      let sql = `insert into users( first_name, last_name, email, username, password, phone_number ) values( ?, ?, ?, ?, ?, ?)`;
     // 2 sec 
      pool.query(sql, [  firstname, lastname,  email, username, password, phonenumber ], function(err, posts, fields) {
        if(err) throw err;
        console.log(' posts ',posts);

        res.json({ message: 'User registered successfully' });

      });
});

app.use( '/auth', router );