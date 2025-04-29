const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
app.use(express.json());

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}
connectDB();

const db = () => client.db('testdb');
const collection = () => db().collection('testcollection');

// CREATE (POST /)
app.post('/', async (req, res) => {
    const { name } = req.body;
    const result = await collection().insertOne({ name });
    res.send(result);
});

// READ (GET /)
app.get('/', async (req, res) => {
    const data = await collection().find({}).toArray();
    res.send(data);
});

// UPDATE (PUT /:id)

app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const result = await collection().updateOne(
        { _id: new ObjectId(id) },
        { $set: { name } }
    );
    res.send(result);
});

// DELETE (DELETE /:id)
app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await collection().deleteOne({ _id: new ObjectId(id) });
    res.send(result);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
