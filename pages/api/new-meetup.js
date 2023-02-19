import { MongoClient } from "mongodb";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    try {
      const client = await MongoClient.connect(process.env.MONGODB_URL)
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);

      console.log(result);
      client.close();
      res.status(201).json({ message: "Meetup Inserted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default handler;
