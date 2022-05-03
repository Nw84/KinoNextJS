import { MongoClient } from "mongodb";

export async function getAllUsers() {

    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/userDB?retryWrites=true&w=majority");

    const db = client.db();

    const userCollection = db.collection("userDB");

    const users = await userCollection.find().toArray();

    client.close();

    return users; 
    
    //{
    //    users: users.map((user) => ({
    //        name: user.name,
    //        password: user.password
    //    })),
    //}
}