export default defineEventHandler(async (event) => {
  // const [rows, fields] = await event.context.db.execute('select * from test1');
  // return {rows, fields}
  return event.context
})
