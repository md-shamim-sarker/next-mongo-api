import connectMongo from "@/database/connection/connection";

export default function handler(req, res) {
  connectMongo();
  res.json({message: 'Check Server Console!'});
}
