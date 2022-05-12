import { MongoClient } from "mongodb";

export async function getReviews(id) {
    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");
    const db = client.db();
    const reviewsCollection = db.collection("Reviews");
    const reviews = await reviewsCollection.find({ movieId: id }).sort({ date: -1 }).toArray();

    client.close();

    return reviews;
}

export async function postReview(data) {
    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");
    const db = client.db();
    const reviewsCollection = db.collection("Reviews");
    const results = await reviewsCollection.insertOne(data)

    client.close();

    return results;
}