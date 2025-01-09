import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

open({
    filename:'/home/Taslehoof/SQLite',
    driver: sqlite3.Database
}).then((db) => {
    const result =  connection.query('SELECT 1 + 1 AS Result')
    console.log(result)

})

//function connectDB(){
//
//    const connection =  sqlite.createConnection({
//        host:'localhost',
//        database:'SQLite3/Personas'
//    })
//
//    const result =  connection.query('SELECT 1 + 1 AS Result')
//    console.log(result)
//
//}
//
//module.exports = connectDB
