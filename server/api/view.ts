export default defineEventHandler(async (event) => {
  const data = await fetch(' http://localhost:3001/view')
  const res = await data.json()
  return res

})