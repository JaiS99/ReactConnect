const { MongoClient } = require('mongodb');

// Replace "<password>" with your actual MongoDB password
const uri = 'mongodb+srv://armaan:armaan@cluster0.dikvcy4.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // You can use the 'client' object to interact with the database
    const database = client.db('blogs'); // Replace 'your_database_name' with the name of your database

    // Example: Perform some operations on the database
    const collection = database.collection('blogs'); // Replace 'your_collection_name' with the name of your collection

    // Example: Insert a document


    // Example: Find documents
    const documents = await collection.find(query).toArray();
    console.log('Found documents:', documents);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    // Close the connection when finished
    await client.close();
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();

module.exports = { connectToMongoDB };
