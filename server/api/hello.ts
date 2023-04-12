export default defineEventHandler(async (event) => {
  const data = await event.context.db.execute('insert into test1 values (123456);');
  const two = await event.context.db.execute('insert into test1 values (1);');
  // const asd = await event.context.db.execute('SELECT * FROM test1 WHERE id="123456" GROUP BY id;');
  const [rows] = await event.context.db.execute('select * from test1');
  console.log(rows)
  // const {id} = rows
  return {rows}
  // return event.context
})
