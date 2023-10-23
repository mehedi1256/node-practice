const { MongoClient, MongoServerClosedError } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

const dbName = 'bookstore';

async function main() {
    await client.connect();
    const collection = client.db(dbName).collection('books');

    try {
        await collection.insertOne({ _id: 1 });
        await collection.insertOne({ _id: 1 });
    } catch(error) {
        if(error instanceof MongoServerError) {
            console.log(`Error worth logging: ${error}`);
        }
        throw error;
    }
}