import { MongoClient } from "mongodb";

async function handler(req, res) {
  console.log(req.method, "this is the method");

  if (req.method === "POST") {
    const { email, name, message } = JSON.parse(req.body);

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "LOL U Tried It!!!!!",
      });
      return;
    }

    // Store it in a database

    const newMsg = {
      email: email,
      name: name,
      message: message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@blog.nz6tbk7.mongodb.net/my-site?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "couldnt connect boy!!" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMsg);
      newMsg.id = result.insertedId;
    } catch (error) {
      client.close();

      res.status(500).json({ message: "storing message failed" });

      return;
    }

    client.close();

    res.status(201).json({ message: "We gotchuuu!", message: newMsg });
  }
}

export default handler;
