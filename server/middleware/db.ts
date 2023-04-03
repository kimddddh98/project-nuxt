import mysql from 'mysql2/promise'
export default defineEventHandler(async (event) => {
  event.context.db = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '3496',
    database: 'test'
  })
});