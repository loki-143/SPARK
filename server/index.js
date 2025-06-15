const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = "mongodb+srv://chillalokeshvasudevareddy22it:DBaN7BmaqO3Gx17u@test.xos5qsp.mongodb.net/?retryWrites=true&w=majority&appName=Test";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

let db;

async function connectDB() {
  await client.connect();
  db = client.db('spark');
  console.log('Connected to MongoDB');
}

// Auth: Sign Up
app.post('/api/signup', async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) return res.status(400).json({ error: 'Missing fields' });
  const users = db.collection('users');
  const existing = await users.findOne({ $or: [{ email }, { username }] });
  if (existing) return res.status(409).json({ error: 'User already exists' });
  const hash = await bcrypt.hash(password, 10);
  const result = await users.insertOne({ email, username, password: hash });
  res.json({ id: result.insertedId, email, username });
});

// Auth: Sign In
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  const user = await db.collection('users').findOne({ email });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ id: user._id, email: user.email, username: user.username });
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
