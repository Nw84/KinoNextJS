import { MongoClient } from "mongodb";

export async function getAllMoviePosters() {


    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/moviePosters?retryWrites=true&w=majority");

    const db = client.db();

    const postersCollection = db.collection("moviePosters");

    const posters = await postersCollection.find().toArray();

    client.close();

    return posters;

}