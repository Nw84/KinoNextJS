import { MongoClient} from "mongodb";

export async function getReviews(id) {
    const client = await MongoClient.connect("mongodb+srv://kinoDB:tvqptJpqHLprzcF3@cluster0.km5pm.mongodb.net/reviewDB?retryWrites=true&w=majority");
    const db = client.db();
    const reviewsCollection = db.collection("reviews");
    const reviews = await reviewsCollection.find({ movieId: id }).toArray();

    client.close();

    return reviews;
}