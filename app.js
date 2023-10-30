const express = require("express");
const usersauth = require("./mongo"); // Updated collection name
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  // Your code for handling the root route
});

app.post("/", async (req, res) => {
  // Handle login logic
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const data = {
    name,
    email,
    password,
  };

  try {
    const check = await usersauth.findOne({ email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await usersauth.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
