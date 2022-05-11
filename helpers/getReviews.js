import { MongoClient } from "mongodb";

export async function getReviews(id) {
    const client = await MongoClient.connect("mongodb+srv://kinoDB:tvqptJpqHLprzcF3@cluster0.km5pm.mongodb.net/reviewDB?retryWrites=true&w=majority");
    const db = client.db();
    const reviewsCollection = db.collection("reviews");
    const reviews = await reviewsCollection.find({ movieId: id }).sort({ date: -1 }).toArray();

    client.close();

    return reviews;
}

export async function postReview(data) {
    const client = await MongoClient.connect("mongodb+srv://kinoDB:tvqptJpqHLprzcF3@cluster0.km5pm.mongodb.net/reviewDB?retryWrites=true&w=majority");
    const db = client.db();
    const reviewsCollection = db.collection("reviews");
    const results = await reviewsCollection.insertOne(data)

    client.close();

    return results;
}