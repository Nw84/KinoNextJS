import { MongoClient } from "mongodb";

export async function getAllScreenings() {

    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");

    const db = client.db();

    const screeningsCollection = db.collection("Screenings");

    const screenings = await screeningsCollection.find({}).sort({ date: 1 }).toArray();

    client.close();

    return screenings;

}

export async function getSpecifikScreenings(name) {
    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");

    const db = client.db();

    const screeningsCollection = db.collection("Screenings");

    const screenings = await screeningsCollection.find({ title: name.toString() }).toArray();

    client.close();

    return screenings;
}

export async function getMovieList() {
    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");

    const db = client.db();

    const screeningsCollection = db.collection("Screenings");

    const screenings = await screeningsCollection.distinct("title");

    client.close();

    return screenings;
}