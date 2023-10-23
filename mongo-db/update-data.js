const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);
const dbName = 'bookstore';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('books');
    const updateResult = await collection.updateOne({address: 'Dhaka'}, {$set: {address: 'Narsingdi'}});
    console.log('Updated documents =>', updateResult);
    return 'done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());