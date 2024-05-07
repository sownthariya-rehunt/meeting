const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const mysql = require('mysql'); 

const add = express();
add.use(cors());
add.use(bodyParser.json());
add.use(express.json());
add.use(express.static('public'));

// Database Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "roombooking"
});

connection.connect(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Database Connected Successfully");
    }
});

add.get('/view/:userid',(request,response)=>{
    let sno = request.params.sno;
    let sql = 'select * from room_booking where userid=?';
    connection.query(sql,[userid],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    });
});

add.get('/getalladmin', (request, response) => {
    let sql = 'Select * from  room_booking ';
    connection.query(sql, (error, result) => {
        if (error) {
            response.send(error);

        } else {
            response.send(result);
            console.log(result);
        }
    });
});
add.get('/pending', (request, response) => {
    let sql = 'Select * from  room_booking where action=0 ';
    connection.query(sql, (error, result) => {
        if (error) {
            response.send(error);

        } else {
            response.send(result);
            console.log(result);
        }
    });
});
add.get('/reject', (request, response) => {
    let sql = 'Select * from  room_booking where action=2 ';
    connection.query(sql, (error, result) => {
        if (error) {
            response.send(error);

        } else {
            response.send(result);
            console.log(result);
        }
    });
});
add.get('/approved', (request, response) => {
    let sql = 'Select * from  room_booking where action=1 ';
    connection.query(sql, (error, result) => {
        if (error) {
            response.send(error);

        } else {
            response.send(result);
            console.log(result);
        }
    });
});



add.listen(2500, () => { console.log("Server running on 2500"); });
