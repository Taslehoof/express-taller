//import sqlite3 from 'sqlite3'
//import { open } from 'sqlite'
//
//open({
//    filename:'/home/Taslehoof/SQLite',
//    driver: sqlite3.Database
//}).then((db) => {
//    const result =  connection.query('SELECT 1 + 1 AS Result')
//    console.log(result)
//
//})


//import mysql from 'mysql2/promise';
const mysql = require('mysql2/promise');

async function connectDB(){

    try{
        const connection = await mysql.createConnection({
            host:'localhost',
            user: 'sconti',
            password: 'contiSA/*/9685',
            database:'sconti'
        })
        console.log('Conexion a MySQL establecida.')
        return connection;
    } catch (error) {
        console.log('Error al conectar a MySQL')
    }

    const result = connection.query('SELECT 1 + 1 AS Result')
    console.log(result)

}

//export default connectDB;
module.exports = connectDB
