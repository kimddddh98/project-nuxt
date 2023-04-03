// const conn = {  // mysql 접속 설정
//   host: '127.0.0.1',
//   port: 3306,
//   user: 'root',
//   password: '3496',
//   database: 'test'
// };
// let connection = mysql.createConnection(conn); // DB 커넥션 생성
// let sql = "SELECT * FROM test1";


// conn.getConnection(function(err:any, connection:any) {
//   if (err) {
  
//     console.error('MySQL 연결 실패: ' + err.stack);
//     res.status(500).send('Internal server error');
//     return;
//   }
export default defineEventHandler(async (event) => {

  const [rows, fields] = await event.context.db.execute('select * from test1');
  return {
       rows,
       fields
  }
})