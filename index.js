const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleeware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gkftdz7.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Collection
    const taskCollection = client.db("todoList").collection("task");
    // GET
    app.get("/task", async (req, res) => {
      const result = await taskCollection.find().toArray();
      res.send(result);
    });
    // GET a specific _id for task
    app.get("/task/:id", async (req, res) => {
      const id = req.params.id;
      const qurry = { _id: new ObjectId(id) };
      const result = await taskCollection.findOne(qurry);
      res.send(result);
    });

    // POST
    app.post("/task", async (req, res) => {
      const newTask = req.body;
      console.log(newTask);
      const result = await taskCollection.insertOne(newTask);
      res.send(result);
    });

    // PUT
    app.put("/task/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const result = await taskCollection.updateOne(
        filter,
        {
          $set: req.body,
        },
        options
      );
      res.send(result);
    });

    // Delete
    app.delete("/task/:id", async (req, res) => {
      const id = req.params.id;
      const qurry = { _id: new ObjectId(id) };
      const result = await taskCollection.deleteOne(qurry);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Todo list Server is running");
});
app.listen(port, () => {
  console.log(`Todo list Server is runing on:${port}`);
});
