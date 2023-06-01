export default defineEventHandler(async (event) => {
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}/words`)
  const res = await data.json()
  return res
})