function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

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
      email,
      name,
      message,
    };

    console.log(newMsg);

    res.status(201).json({ message: "We gotchuuu!", message: newMsg });
  }
}

export default handler;
