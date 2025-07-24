export default async function handler(req, res) {
  const fetch = (await import('node-fetch')).default;
  const response = await fetch("https://api.rajaongkir.com/starter/city", {
    method: "GET",
    headers: { key: process.env.RAJAONGKIR_KEY }
  });
  const data = await response.json();
  res.status(200).json(data);
}