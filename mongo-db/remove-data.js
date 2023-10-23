const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

const dbName = 'bookstore';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('books');
    const deleteResult = await collection.deleteMany({address: 'Narsingdi'});
    console.log('Deleted documents =>', deleteResult);
    return 'done';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());