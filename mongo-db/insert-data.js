const { MongoClient } = require('mongodb');
//connection url
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

//database Name 
const dbName = 'bookstore';

async function main() {
    //use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('books');

    const insertResult = await collection.insertMany([
        {
            firstName: 'Mehedi Hassan ',
            lastName: 'Shovo',
            address: 'Dhaka',
            email: 'mehedi.cse181@gmail.com',
            phone: '01812345678'
        },
        {
            firstName: 'MD. Abdur ',
            lastName: 'Rahim',
            address: 'Chittagong',
            email: 'rahim.cse185@gmail.com',
            phone: '01521785569'
        },
        {
            firstName: 'MD. Jaman ',
            lastName: 'Mia',
            address: 'Khulna',
            email: 'janan@gmail.com',
            phone: '01771558869'
        }
    ]);

}

main()
   .then(console.log)
   .catch(console.error)
   .finally(() => client.close());