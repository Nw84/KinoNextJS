import { MongoClient} from "mongodb";

export async function getUser(username) {

    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");

    const db = client.db();

    const userCollection = db.collection("Users");

    const users = await userCollection.find({ name: username.toString() }).toArray();

    client.close();

    return users; 
    
}

export async function regUser(data) {

    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");

    const db = client.db();

    const userCollection = db.collection("Users");

    const result = await userCollection.insertOne(data);

    client.close();

    return "user insterted"
}