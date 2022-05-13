import { MongoClient, ObjectId } from "mongodb";

export async function getAllMoviePosters(numberofposters) {
    //If there is no input the function will return all posters

    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");
    const db = client.db();
    const postersCollection = db.collection("Movies");
    let posters;
    if (numberofposters) {
        posters = await postersCollection.find().limit(numberofposters).sort({ releaseDate: 1 }).toArray();
    } else {
        posters = await postersCollection.find().toArray();
    }

    client.close();

    return posters;
}


export async function pathHelper() {
    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");
    const db = client.db();
    const postersCollection = db.collection("Movies");
    const posters = await postersCollection.find({}, { id: 1 }).toArray();

    client.close();

    return posters;
}

export async function getOnePoster(id) {
    const client = await MongoClient.connect("mongodb+srv://mhema:W3oLvtX4YP8zHqHl@cluster0.xrrbw.mongodb.net/Kino_movie_DB?retryWrites=true&w=majority");
    const db = client.db();
    const postersCollection = db.collection("Movies");
    const posters = await postersCollection.findOne({ _id: ObjectId(id) })

    client.close();

    return posters;
}


