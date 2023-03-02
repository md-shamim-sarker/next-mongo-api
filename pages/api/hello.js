import ConnectMongo from "@/database/connection/connectMongo";

export default function handler(req, res) {
  ConnectMongo();
  res.json({message: 'Snigdha, I love you.!'});
}
