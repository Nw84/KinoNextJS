import { MongoClient } from "mongodb";

export async function getUser(username) {

    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/userDB?retryWrites=true&w=majority");

    const db = client.db();

    const userCollection = db.collection("userDB");

    const users = await userCollection.find({ name: username.toString() }).toArray();

    client.close();

    return users; 
    
}