import { MongoClient } from "mongodb";

export async function getAllScreenings() {

    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/movieScreening?retryWrites=true&w=majority");

    const db = client.db();

    const screeningsCollection = db.collection("movieScreening");

    const screenings = await screeningsCollection.find().toArray();

    client.close();

    return screenings;

}

export async function getSpecifikScreenings(id) {
    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/movieScreening?retryWrites=true&w=majority");

    const db = client.db();

    const screeningsCollection = db.collection("movieScreening");

    const screenings = await screeningsCollection.find({ movieId: id.toString() }).toArray();

    client.close();

    return screenings;
}