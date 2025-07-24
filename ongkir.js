export default async function handler(req, res) {
  const fetch = (await import('node-fetch')).default;
  const { origin, destination, weight, courier } = req.body;

  const response = await fetch("https://api.rajaongkir.com/starter/cost", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      key: process.env.RAJAONGKIR_KEY
    },
    body: new URLSearchParams({ origin, destination, weight, courier })
  });

  const data = await response.json();
  res.status(200).json(data);
}